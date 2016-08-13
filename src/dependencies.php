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

//Mailer Initialization
$container['mailer'] = function ($container) {
    $mailer = new PHPMailer;

    $mailConfig = $container['settings']['mail'];

    $mailer->isSMTP();                                      // Set mailer to use SMTP
    $mailer->Host = $mailConfig['host'];                    // Specify main and backup SMTP servers
    $mailer->SMTPAuth = $mailConfig['smtp_auth'];           // Enable SMTP authentication
    $mailer->Username = $mailConfig['username'];            // SMTP username
    $mailer->Password = $mailConfig['password'];            // SMTP password
    $mailer->SMTPSecure = $mailConfig['smtp_secure'];       // Enable TLS encryption, `ssl` also accepted
    $mailer->Port = $mailConfig['port'];       

    return $mailer;
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

//Method Not Allowed Handler
$container['notAllowedHandler'] = function ($c) {
    return function ($request, $response, $methods) use ($c) {
        $returnData = array('success' => false, 'data' => ['msg' => 'Method Not Allowed']);
        
        $c['logger']->error('Method : ' . implode("-", $methods). '-- URI : '.$request->getUri());

        return $c['response']->withStatus(405)
                             ->withJson($returnData);
    };
};