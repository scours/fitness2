#!/bin/bash
# Create a ready to use or ready to share zip file to clone FITNESS platform.

# Usage: ./create-fitness-backup.sh FITNESS-folder-name
# Example: ./create-fitness-backup.sh fitness


#Contributors: AgroParisTech\Steward Ouadi - INRA\Olivier Vitrac 

if [ $# -lt 1 ]
then
  echo "Usage: $0 FITNESS-folder-name "
  exit 1
else
    date=`date +"%Y_%m_%d__%H-%M"`
    FitnessFolder=$1
    #Write output to log file (output  from logger will also be logged into this file)
    logFile=log-file-$date.log
    echo $logFile
    touch $logFile
    exec > $logFile 2>&1

    # zip folder and output everything in /var/log/syslog using logger
    zip -rT -9 "FITNESS_$date.zip" $FitnessFolder | logger -s
fi