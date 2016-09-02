# ngSlim - Angular Website built on top of Slim Framework (Work-In-Progress)

This application uses the latest Slim 3 with the PHP-View template renderer. It also uses the Monolog logger.

This skeleton application was built for Composer. This makes setting up a new Slim Framework application quick and easy.

* PHP using Slim framework
* AngularJS for developing the frontend

![Alt text](display.png?raw=true "Slim Framework (PHP) + Angular")

Pre-requisite:

+ [Slim Framework](http://www.slimframework.com/)
+ [Angular](https://angularjs.org/)
+ [Gulp](http://gulpjs.com/)
+ [Composer](https://getcomposer.org/)
 

## <a name="building"></a> Building

Developers can easily build **ngSlim** using NPM and gulp.

First install or update your local project's **npm** tools:

```bash
# First install all the NPM tools:
npm install

# Or update
npm update
```

Then run the **gulp** tasks:

```bash
# To build minified version
gulp build


```

Then run the **webserver in php** tasks:

```bash
# To run a webserver
php -S localhost:8086 -t public public/index.php


```

## <a name="installing"></a> Installing Build (ngSlim)

```
composer install

```

