'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('login','Auth/LoginController.show')
Route.post('login', 'Auth/LoginController.login')

Route.get('forgot','Auth/LoginController.showForgot')
Route.post('forgot', 'Auth/LoginController.forgot')

Route.get('recover/:key','Auth/LoginController.recover')
Route.post('recover/:key','Auth/LoginController.recoverLogin')