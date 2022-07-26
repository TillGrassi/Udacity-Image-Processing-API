## Udacity Image Processing API

This is an Image Processing API that can be used to resize images and serve them as placeholders in your frontend application.

to install use npm install\
to start: npm start\
for testing: npm test\
for the build: npm run build\

place your images in the public folder and
use the endpoint\
/image?img=IMAGENAME&width=WIDTH&height=HEIGHT\
to get a resized version.

the resized versions will be saved and served directly if requested again.
