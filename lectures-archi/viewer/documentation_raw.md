# FITNESS Viewer Documentation

[toc]

Welcome to the [FITNESS Viewer](https://fitness.agroparistech.fr/fitness2/lectures/viewer/index.html) Documentation! We'll walk you through the configuration and usage of our Viewer, making it as easy as possible.

## Introduction

The FITNESS Viewer is a tool designed to display content from various FITNESS lectures based on a manifest file.  The viewer is working for FITNESS 1 lectures for now. The manifest file allows you to specify which slides from certain URLs you want to show, making it highly customizable and useful for presentations, educational content, and more.



## Prerequisites 

- For now, viewer is working fine with FITNESS 1 lectures 
- Activate CORS if you want to use the viewer outside of FITNESS AgroParisTech: To make sure the FITNESS Viewer can access and display content from different URLs, you need to enable Cross-Origin Resource Sharing (CORS) on your server. This allows the viewer to fetch resources from various domains seamlessly

## Manifest File

The heart of the Viewer is its manifest file. This file dictates what content the Viewer will display. Here's the basic syntax of the manifest file:

```markdown
slide "URL" [slidesToShow]
```

- **URL**: The web address where your slides or content is located.
- **slidesToShow**: A range or specific slide numbers you wish to display, formatted as `[start:end]`. If you want to show just one slide, you can specify `[slideNumber]`.

### Example

Here's an example of what entries in the manifest file might look like:

```bat
::  Lecture 1 slides 7 to 12
slide "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part5.html" [7:12] 

:: Lecture 2 slides 7 to 17
slide "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S1/U1.1/part1.html" [7:17] 
```

copy this content in a "manifest.txt" file for example, open the [FITNESS viewer](https://fitness.agroparistech.fr/fitness2/lectures/viewer/index.html) and import the "manifest.txt" file to view the mixed lecture in the viewer.

## Viewer Functionality

The Viewer takes this manifest file and fetches the specified slides from the URLs provided. It then assembles these slides into a seamless presentation that can be viewed directly in the Viewer.

### Key Features

- **Inline Comments**: You can add comments to your manifest file using `//`. This is useful for notes or reminders about each slide entry.
- **Flexible Slide Selection**: Select ranges of slides or individual slides to tailor your presentation exactly how you need it.
- **Simplicity**: The Viewer and its manifest file are designed to be as straightforward as possible, ensuring ease of use.

## Using the Viewer

1. **Create the Manifest File**: Based on the syntax described above, create a manifest file that lists all the slides you want to include in your Viewer.
2. **Load the Manifest File**: Once your manifest file is ready, load it into the [FITNESS Viewer](https://fitness.agroparistech.fr/fitness2/lectures/viewer/index.html).
3. **Enjoy Your Custom Presentation**: The Viewer will process your manifest file and display the slides you've specified.

## Tips for Creating Your Manifest File

- Ensure that URLs start with `http` or `https` to be recognized correctly.
- Comments (`::`) are helpful for organization but are entirely optional.
- Use precise slide ranges to ensure that only the content you want to display is shown.



## Features and Usage

### Assignation

**Syntax**: `set propertyName = propertyValue`

Handles the assignment of slides and their specific attributes within the viewer. It manages variable spaces for users, sessions, and global variables, and supports setting and evaluating expressions dynamically.

**Example**:

```bat
set property1 = 5
```

### Slide

**Syntax**: `slide "URL" [slidesToShow]`

Controls the rendering and behavior of individual slides within the viewer. It manages slide transitions, content display, and user interactions.

**Example**:

```bat
slide "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.1/part1.html" [8:11]
```

### Test Slide

**Syntax**: `test "URL"`

Handles test slides specifically designed for testing purposes within the viewer. It provides functionality for adding and managing test slides.

**Example**:

```
test "https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=panoramaOfFoodPackaging&sessionId=2"
```

### Decision Making

**Syntax**: `if propertyName == 5 goto :labelNameIfConditionTrue else goto :labelNameIfConditionFalse`

Facilitates decision-making processes based on viewer interactions and predefined rules. It helps in dynamically changing the flow based on user input.

**Example**:

```bat
if property1 == 5 goto :helloBlock else goto :morningBlock
```

### Goto Instruction

**Syntax**: `goto :label`

Handles 'go to' instructions allowing users to navigate directly to specific slides or sections. It supports defining navigation rules and executing them.

**Example**:

```c#
goto :lastSlideBlock
```

### Printing Values

**Syntax**: `echo prepertyName value is: %propertyName%`

Controls variable spaces and their management within the viewer's context. It supports setting, getting, and managing variables across different scopes.

**Example**:

```bat
echo prop1 value is: %property1%
```

### Form Definition

**Syntax**:

```html
defSlide slideName { 
  <form> ... </form> 
}
```

**Example**:

```html
defSlide slideName1 { 
<div>
    <h2>Welcome to Our Lecture Series! 🎓</h2>
    <br/>
    <br/>
    <p>Before each lecture, you'll take a quick quiz 📝 to gauge your knowledge.</p>
    <p>After the lecture, another quiz will show how much you've learned.</p>
    <p>If you're ready to begin, please fill out the form on your screen to participate.</p>
            
    <p>Let's get started! 🚀</p>
    <br/>
    <br/>
    <br/>


  <form id="userForm">
    <label for="firstName">First Name:</label>
    <input type="text" id="firstName" name="firstName" required>

    <label for="lastName">Last Name:</label>
    <input type="text" id="lastName" name="lastName" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

  </form>
</div>
} 
```

## Default Manifest File Example

```bat
:: Introduction Slide with Form
defSlide introductionSlide { 
<div>
    <h2>Welcome to the Food Packaging Course! 🎓</h2>
    <br/>
    <p>Before we begin, please fill out the form below to participate in our quizzes and track your progress.</p>
    <br/>
    <form id="userForm">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required>

        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

    </form>
</div>
}


:: Test Slide
:: Syntax: test URL 
test "https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=panoramaOfFoodPackaging&sessionId=1"

:: Syntax: slide URL slidesToShow
slide "https://fitness.agroparistech.fr/fitness2/online/FHG/Panorama-of-food-packaging-2024.html" [7:55]

:: Test Slide
:: Syntax: test URL 
test "https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=panoramaOfFoodPackaging&sessionId=2"

:: End of Course
defSlide endSlide {
<p>Thank you for completing this Food Packaging Course! 🎓 We hope you enjoyed it and learned a lot. See you next time! 🚀</p>
}

```

## Conclusion

The Viewer offers a customizable way to present content from various FITNESS lectures. With its simple manifest file, you can tailor your presentations to suit your needs, whether for education, work, or entertainment. Start creating your manifest file today and see how the Viewer can enhance your presentations!