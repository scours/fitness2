# FITNESS Viewer Documentation

[toc]

Welcome to the [FITNESS Viewer](https://fitness.agroparistech.fr/fitness2/lectures/viewer/index.html) Documentation! We'll walk you through the configuration and usage of our Viewer, making it as easy as possible.

## Introduction

The FITNESS Viewer is a tool designed to display content from various FITNESS lectures based on a manifest file.  The viewer is working for FITNESS 1 lectures for now. The manifest file allows you to specify which slides from certain URLs you want to show, making it highly customizable and useful for presentations, educational content, and more.

## Manifest File

The heart of the Viewer is its manifest file. This file dictates what content the Viewer will display. Here's the basic syntax of the manifest file:

```markdown
slide "URL" [slidesToShow] // Optional comment
```

- **URL**: The web address where your slides or content is located.
- **slidesToShow**: A range or specific slide numbers you wish to display, formatted as `[start:end]`. If you want to show just one slide, you can specify `[slideNumber]`.

### Example

Here's an example of what entries in the manifest file might look like:

```markdown
slide "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part5.html" [7:12] // Lecture 1 slides 7 to 12
slide "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S1/U1.1/part1.html" [7:17]  // Lecture 2 slides 7 to 17
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
- Comments (`//`) are helpful for organization but are entirely optional.
- Use precise slide ranges to ensure that only the content you want to display is shown.

## Conclusion

The Viewer offers a customizable way to present content from various FITNESS lectures. With its simple manifest file, you can tailor your presentations to suit your needs, whether for education, work, or entertainment. Start creating your manifest file today and see how the Viewer can enhance your presentations!