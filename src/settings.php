<?php
return [
    'settings' => [
        'displayErrorDetails' => true, // set to false in production
        'addContentLengthHeader' => false, // Allow the web server to send the content-length header

        // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../templates/',
        ],

        // Monolog settings
        'logger' => [
            'name' => 'slim-app',
            'path' => __DIR__ . '/../logs/app.log',
        ],

        'dbmysql' => [
            'driver' => 'mysql',
            'host' => 'localhost',
            'database' => 'database',
            'username' => 'user',
            'password' => 'password',
            'charset'   => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix'    => '',
        ],

        'dbslite' => [
            'driver' => 'sqlite',
            'database' => __DIR__.'/../db/database.sqlite',
            'prefix'    => '',
        ],

        'mail' => [
            'host'=> 'smtp.gmail.com',
            'smtp_auth'=> true,
            'username'=> 'magbutayperseus@gmail.com',
            'password'=> 'Pewpew02!',
            'smtp_secure'=> 'ssl',
            'port'=> '465',
        ]
    ],
];
