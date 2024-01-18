#!/bin/bash

# Directory containing the images
image_directory="img-select-objective"

# Desired dimensions
width=800
height=700

# Loop through all PNG image files in the directory
for image in "$image_directory"/*.png; do
    # Extract file name without extension
    filename=$(basename "$image" .png)

    # Rename original image
    mv "$image" "${image_directory}/old_${filename}.png"

    # Resize and save with original file name
    convert "${image_directory}/old_${filename}.png" -resize "${width}x${height}"^ -gravity center -extent "${width}x${height}" "${image_directory}/${filename}.png"

    echo "Processed: $filename"
done

echo "Resizing complete."