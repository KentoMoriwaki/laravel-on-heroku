<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('login', function()
{
    return View::make('auth.login');
});

Route::post('login', function()
{
    $credentials = Input::only('email', 'password');
    if (Auth::attempt($credentials)) {
        return Redirect::intended('/dashboard');
    }
    return View::make('auth.login');
});

Route::get('logout', function()
{
    Auth::logout();
    return Redirect::to('login');
});

Route::get('/', function()
{
	return View::make('hello');
});

Route::group(['before' => 'auth'], function()
{

    Route::get('dashboard', function()
    {
        return 'Welcome to dashboard!';
    });

});