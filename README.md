MarionetteBase
==============


src folder contains
----
```
css - (style sheets)
 |- style.css
 |- bootstrap.css
 \- styles.css (combines both)

imgs - (for any images)

js - Javascript container
|
 |----> collections
 | 
 |----> libs (third party libraries)
 |
 |----> models 
 |        \---> user
 |                \-- UserModel.coffee
 |                \-- UserModelSpec.coffee (Unit/Behavioural tests)
 |                \-- UserModelSpecRunner.html (Test runner)
 |
 |----> views (Technically these are View Controllers)
 |        |---> deskop
 |        |        \-- DesktopView.coffee 
 |        \---> login
 |                \-- LoginView.coffee 
 | 
 |----> nls (Internationalization folder)
 |       |----> root (root translations)
 |       |        \---- general.coffee 
 |       |----> fr-fr ('french' translations)
 |       |        \---- general.coffee
 |       \----> general.coffee (translation register)
 |
 |- app.coffee ( sets up the Main Marionette Application, including page regions)
 |- i18n.js (third party internationalization lib. *needs to be here*)
 |- main.coffee ( javascript entry point, contains all lib paths + dependancies)
 \- router.coffee ( controls how urls map to views and showing the Views in the app regions)

templates - HTML template container
 |----> desktop
 |         \-----> desktopTemplate.html
 \----> login
          \-----> loginTemplate.html

index.html ( main index.html )
```


build.xml
-----

- cleans WebContent/client
- compiles the coffeescript to javascript with csat-0.1.6.jar
- minifies the compiled javascript with jsmin.0.2.4.jar

