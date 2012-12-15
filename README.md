MarionetteBase
==============

Base marionette project

Structure is as follows:

```
css - (style sheets)
 |- style.css
 |- bootstrap.css
 \- styles.css (combines both)

imgs - (for any images)

js - Javascript container
 |----> collections 
 |----> libs (third party libraries)
 |----> models 
 |        \---> user
 |                \-- UserModel.js
 |----> views (Technically these are View Controllers)
 |        \---> login
 |                \-- LoginView.js 
 |- app.js ( sets up the Main Marionette Application, including page regions)
 |- main.js ( javascript entry point, contains all lib paths + dependancies)
 \- router.js ( controls how urls map to views and showing the Views in the app regions)

templates - HTML template container
 \----> login
          \-----> loginTemplate.html

index.html ( main index.html )
```
