## laravel-on-heroku

Laravel4.* bootstrap template for Heroku

## Install

Clone this repository and

```
composer install
npm install
php artisan migrate --seed
```

Enjoy it!

## Settings

To deploy your application to Heroku

```
heroku create --buildpack https://github.com/CHH/heroku-buildpack-php yourapp
heroku addons:add  heroku-postgresql
heroku pg:promote HEROKU_POSTGRESQL_RED_URL
```

Now you can deploy your application by 1 step!

```
git push heroku master
```

## Includes

* Laravel 4.1
* Twitter bootstrap 3
* Sass(Compass)
* Grunt
 * grunt-contrib-cancat
 * grunt-contrib-watch
 * grunt-contrib-compass



## License

Licensed under the [MIT license](http://opensource.org/licenses/MIT)
