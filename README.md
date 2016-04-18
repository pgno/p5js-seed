# p5js-seed

This is a starter for p5js project. This includes all the p5js librairies (core, dom and sound).
Gulp is used to :
- compile sass from the app/scss folder to the app/styles
- concat any js files in the app/scripts/includes folder in a (non minified) includes.js in the scripts folder along the usual sketch.js file.
- create a local server with browser-sync to serve local the sketch (with live reload).

To start a project : 
- Clone the repo
- cd into the p5js-seed folder
- run "npm install"
- launch with "gulp serve"