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

//Not Found Handler For Angular
$container['notFoundHandler'] = function ($c) {

    //$c['view']->render($response, 'index.html', $args);
    return function ($request, $response) use ($c) {        
        //$c['logger']->info("Not Found Handler triggered  (URI: ". $request->getUri() . ")");
    	
        $uri = $request->getUri();

        $data = ['publicPath' => $uri->getBasePath() ];

        return $c['view']->render($response, 'index.html', $data);
    };
}; 


// Service factory for the ORM
$container['db'] = function ($container) {
    $capsule = new \Illuminate\Database\Capsule\Manager;
    $capsule->addConnection($container['settings']['dbslite']);

    $capsule->setAsGlobal();
    $capsule->bootEloquent();

    return $capsule;
};

//Error Handler
$container['errorHandler'] = function ($c) {
    return function ($request, $response, $exception) use ($c) {
        $returnData = array('success' => false, 'data' => ['msg' => 'Error Encountered']);
        
        $c['logger']->error($exception->getMessage() . '(URI: '. $request->getUri() .')');

        return $c['response']->withStatus(500)
                             ->withJson($returnData);
    };
};