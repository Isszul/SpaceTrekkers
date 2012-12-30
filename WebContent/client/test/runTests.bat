@echo off

for /r %%i in (TestRunner*.html) do node runWebDriverTests.js http://localhost:8080/MarionetteBase-Coffeescript/client/test/%%~nxi
