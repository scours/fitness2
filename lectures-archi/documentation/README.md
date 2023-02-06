

<head>
    <style>
    .center {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 40%;
	}
    </style>
</head>
<header>
    <a href="https://fitness.agroparistech.fr/" target="_blank">   
  		<img src="img/logo/Fitness2_logo.PNG" alt="FitNESS logo"  class="center">
    </a>
</header>



[toc]

# Download the interface 

<a href="https://github.com/scours/fitness2/tree/wip" target="_blank">Click on this GitHub repository</a>, then click on the `Code` button on the right and on "Download ZIP".

Once you have downloaded the file, unzip it and open the **lectures-archi/sidepanel.html** file. You should see an interface like this one: 

![main-page](img/main-page.PNG)



You can then select a course by clicking on "Lectures" on the left. This menu allows you to click on a particular lecture and see the details of that lecture. This menu allows you to view courses up to level 3: level 1 -> level 2 -> level 3.

When you click on a course, the details displayed are not final, i.e. the information displayed can be changed. 



# How to modify displayed lectures on the interface? 

These courses can be modified by anyone using the GitHub collaboration tool. To edit the courses you will need to: 

1. Create a <a href="https://github.com/join" target="_blank">GitHub account</a>
   1. You can see the different GitHub accounts types <a href="https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account" target="_blank">here</a>.

2. Clone the project (repository)
   1. Go to <a href="https://github.com/scours/fitness2/tree/wip" target="_blank">this page</a> and <a href="https://docs.github.com/en/get-started/quickstart/fork-a-repo" target="_blank">fork</a> the "wip" folder (or branch) of the project

3. Modify displayed lectures:
   1. Once the project is forked, you have a copy of the project. You can make the changes you want. To modify the lectures displayed, you will have to modify the manifests/root.manifest file. All the changes you want to make must be inside the "children" property. The root file is configured as follows: You have the "children" property, then, inside that property, you have the path for each lecture to be displayed. For example `Properties of food packaging materials/Thermal, mechanical and barrier properties/thermal-properties-methods-and-standards` will display the thermal properties methods and standards lectures details. Those details can be found in the "thermal-properties-methods-and-standards" file which is inside the "**Thermal, mechanical and barrier properties**" folder which is inside the "**Properties of food packaging materials**" folder. The root file allows us to define what we want to display on the left side of the interface. The root file is in <a href="https://en.wikipedia.org/wiki/JSON" target="_blank">json</a>, so the content added to this file must follow the json format. Essentially, for this file, it comes down to respecting braces, quotation marks, commas and square brackets. A visual interface to modify the root file can be created if needed. <a href="https://www.w3schools.com/js/js_json_intro.asp" target="_blank">Here</a> you can find more information on the json format.

4. Contribute with your modifications: 
   1. Once you have made your modifications, you can contribute and propose your modifications by creating a <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request" target="_blank">pull request</a>. The pull request is needed to see your modifications on the interface provided, as the interface is working with this <a href="https://github.com/scours/fitness2/blob/wip/manifests/root.manifest" target="_blank">root.manifest</a> file. Once your modifications will be accepted, your modifications will be merged with this <a href="https://github.com/scours/fitness2/blob/wip/manifests/root.manifest" target="_blank">root.manifest</a> file and the interface will be able to reflect and display your modifications.




# How to add/modify a lecture to/of the interface?

**To add a lecture**

1. Add lectures information and save them
   1. Once you are on the interface, as shown in the  ["Download the interface"](#download-the-interface) section, you will see the "Manifest editor" link at the bottom of the page. Click on that link and fill the fields. Once you are satisfied, click on the "Save modifications" button at the bottom of the page, then a file containing all your changes will be downloaded, we call that file the manifest file.
2. Upload the manifest file to GitHub
   1. If you have not created a GitHub account or cloned the project yet, you can do that by following the procedure in the ["How to modify displayed lectures on the interface?"](#how-to-modify-displayed-lectures-on-the-interface) section.
   2. Upload the manifest file in the `manifest` folder of your cloned project
      1. Go to GitHub and open your cloned project, then upload the manifest file using <a href="https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository" target="_blank">this procedure</a> 
3. Contribute with your modifications
   1. You can contribute with your changes by following the "contribute with your modifications" steps in the ["How to modify displayed lectures on the interface?"](#how-to-modify-displayed-lectures-on-the-interface) section.



**To modify a lecture**

These are almost the same steps as for adding a lecture (above). What changes is step 1 which allows you to fill in the fields: when you want to modify a lecture, you click on "Manifest editor", then on "import a manifest" and then you modify the desired fields. For the rest, the procedure is the same.





**Contributors**

Steward OUADI, AgroParisTech

Olivier VITRAC, INRAE
