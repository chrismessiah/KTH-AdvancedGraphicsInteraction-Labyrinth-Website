# sample-node-api

_Becuase why start from scratch?_

## Structure

The structure of the app is as follows

```
app/
––– controllers/
–––––– controller1/
––––––––––– method1.js
––––––––––– method2.js
–––––– controller2/
––––––––––– sub-controller1
––––––––––––––– ...
––––––––––– sub-controller2
––––––––––––––– ...
––– middlware/
–––––– index.js
––– utils/
––– router.js
server.js
...
```

## Controllers

All files/folders added into `app/controllers` are automatically added to the controller-object which is then available in `app/router.js`. To create a new controller simply add a folder, say `auth` in `app/controllers/` and then add method-files in `auth` or add a sub-folder into `auth`, say `login` and then a method file `facebook-login.js`. The controller will then be accessable in the router file as `controller.auth.facebookLogin`.

Note that both files/folders are to be written with dash-delimiter-separation and are then accessable in lower camel case in the controllers object.

## Middlewares

All middleware are to be handled in `middleware/index.js` at the current moment there is no automation of middlewares so to add a middleware you actually need to add it to the `index.js`.
