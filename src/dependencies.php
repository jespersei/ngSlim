<?php
// DIC configuration

$container = $app->getContainer();

// view renderer
$container['view'] = function ($c) {
    $settings = $c->get('settings')['renderer'];
    return new Slim\Views\PhpRenderer($settings['template_path']);
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], Monolog\Logger::DEBUG));
    return $logger;
};

//Not Found Handler
$container['notFoundHandler'] = function ($c) {

    //$c['view']->render($response, 'index.html', $args);
    return function ($request, $response) use ($c) {        
        $c['logger']->info("Not Found Handler triggered  (URI: ". $request->getUri() . ")");
    	return $c['view']->render($response, 'index.html');

        //return $c['response']->withStatus(404);
    };
}; 
