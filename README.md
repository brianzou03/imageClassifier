# Description
This project is an image classifier using a trained ML model mobilenet for Tensorflow. The application works in a browser. The image file in the index.html can be changed to any dog image on the internet.

# How it works
In the browser, hover mouse over the dog image. The javascript function prediction will be triggered by mouse over the dog photo. It will make a request to the mobilenet function classify the image. The response is an array of className and probability. A table will be rendered in the browser for each of the className and probability. When the mouse left dog photo, the table will be removed.

### Author: Brian Zou
