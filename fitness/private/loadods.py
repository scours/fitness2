#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    Low-level functions for fitNESS 2.0 project    

        loadods(filename,sheetname)
        alias(filename)
    

Created on Sat Mar 26 14:07:16 2022

@author: olivi
"""

# Revision history
# 2022-03-27 early version
# 2022-04-28 RC, add alias with struct.pstr() (path type)
# 2022-03-29 fix path concatenation 

# Dependencies
import os
import numpy as np
from collections import OrderedDict
from fitness.private.ezodf import opendoc, config
from fitness.private.struct import struct, pstr

# %% ODS libraries
def get_doc(file_or_path):
    config.set_table_expand_strategy('all')
    doc = opendoc(file_or_path)
    config.reset_table_expand_strategy()
    return doc

def get_rows(doc, sheet_id):
    if not isinstance(sheet_id, (int, str)):
        raise ValueError("Sheet id has to be either `str` or `int`")
    if isinstance(sheet_id, str):
        sheets = [sheet.name for sheet in doc.sheets]
        if sheet_id not in sheets:
            raise KeyError("There is no sheet named {}".format(sheet_id))
        sheet_id = sheets.index(sheet_id) + 1
    sheet = doc.sheets[sheet_id - 1]
    return sheet.rows()


def get_value(cell, parsed=False):
    return cell.value, 0

def parse_data(rows, headers=True, columns=None):
    df_dict = OrderedDict()
    col_index = {}
    for i, row in enumerate(rows):
        # row is a list of cells
        if headers and i == 0 and not columns:
            repeat_until = -1
            repeat_value = None
            # columns as lists in a dictionary
            columns = []
            # parse the first row as column names
            for k, cell in enumerate(row):
                value, n_repeated = get_value(cell)
                if n_repeated > 0:
                    repeat_value = value
                    repeat_until = n_repeated + k
                if not value and k <= repeat_until:
                    value = repeat_value
                if k == repeat_until:
                    # reset to allow for more than one repeated column
                    repeat_until = -1
                if value and value not in columns:
                    columns.append(value)
                else:
                    column_name = value if value else "unnamed"
                    # add count to column name
                    idx = 1
                    while f"{column_name}.{idx}" in columns:
                        idx += 1
                    columns.append(f"{column_name}.{idx}")
        elif i == 0:
            # without headers, assign generic numbered column names
            columns = columns if columns else [f"column.{j}" for j in range(len(row))]
        if i == 0:
            df_dict = OrderedDict((column, []) for column in columns)
            # create index for the column headers
            col_index = {j: column for j, column in enumerate(columns)}
            if headers:
                continue
        for j, cell in enumerate(row):
            if j < len(col_index):
                value, _ = get_value(cell, parsed=True)
                # use header instead of column index
                df_dict[col_index[j]].append(value)
    # make sure all columns are of the same length
    max_col_length = max(len(df_dict[col]) for col in df_dict)
    for col in df_dict:
        col_length = len(df_dict[col])
        if col_length < max_col_length:
            df_dict[col] += [None] * (max_col_length - col_length)
    df = df_dict # pd.DataFrame(df_dict)
    return df

def ods_info(doc):
    """Print the number of sheets, their names, and number of rows and columns"""
    print("Spreadsheet contains {:d} sheet(s).".format(len(doc.sheets)))
    for sheet in doc.sheets:
        print("-" * 40)
        print("   Sheet name : '{}'".format(sheet.name))
        print(
            "Size of Sheet : (rows={:d}, cols={:d})".format(
                sheet.nrows(), sheet.ncols()
            )
        )

def sanitize_df(df):
    """Drop empty rows and columns from the DataFrame and returns it"""
    vtmp = np.array(list(df.values()))
    ktmp = np.array(list(df.keys()))
    keep = np.array(list(map(
        lambda y: list(map(lambda x: False if x is None else True
                      ,y)),vtmp)),dtype=bool)
        
    # Delete empty rows
    vtmp = vtmp[:,keep.any(axis=0)]
    # Delete empty columns
    vtmp = vtmp[keep.any(axis=1),:]
    ktmp = ktmp[keep.any(axis=1)]
    return struct.fromkeysvalues(ktmp,vtmp)

def loadods(file_or_path, sheet_id, headers=True, columns=None):
    """ loadods() such as MS.loadods() Matlab equivalent """
    if os.path.isfile(file_or_path):
        doc = get_doc(file_or_path)
        rows = get_rows(doc, sheet_id)
        df = parse_data(rows, headers=headers, columns=columns)
        return sanitize_df(df)
    else:
        raise FileNotFoundError(f'the file "{file_or_path}" does not exist')

def alias(file_or_path, sheet="alias", headers=True, columns=None):
    """ alias() such as fitness.alias() Matlab equivalent """
    doc = loadods(file_or_path,sheet,headers=headers, columns=columns)
    if "name" and "value" in doc:
        p = struct.fromkeysvalues(doc.name,doc.value).struct2param(protection=True,evaluation=False)
        if "type" in doc:
            t = struct.fromkeysvalues(doc.name,doc.type)
            for i in range(min(len(p),len(t))):
                if isinstance(p[i],str) and t[i]=="path":
                    p[i] = pstr(p[i])
        return p
    raise ValueError(f'unsupported alias format for "{file_or_path}"')

# %% DEBUG
# ===================================================   
# main()
# ===================================================   
# for debugging purposes (code called as a script)
# the code is called from here
# ===================================================
if __name__ == '__main__':
    # local
    if os.name=="nt":
        local = "C:/Users/olivi/OneDrive/Data/Olivier/INRA/Etudiants & visiteurs/Steward Ouadi/python/test/output/"
    else:
        local = "/home/olivi/steward/python/test/output"
    odsfile = "fileid_conferences_FoodRisk.ods"
    fullfodsfile = os.path.join(local,odsfile)
    
    # loadods
    #doc = loadods(fullfodsfile,"alias")
    #p = struct.fromkeysvalues(doc.name,doc.value).struct2param(protection=True,evaluation=False)
    p = alias(fullfodsfile)
    p.write("../../tmp/test.txt")
    q = struct.read("../../tmp/test.txt")
    #p.tostruct().write("../../tmp/test.txt")
