<?php
// Routes

//Default Route - This will point to the Angular Base
$app->get('[/]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    $uri = $request->getUri();

    $data = ['publicPath' => $uri->getBasePath()];

    // Render index view
    return $this->view->render($response, 'index.php', $data);
});


//Migration Routes
$app->group('/sys/migrate', function () {
	$this->get('/', 'Controllers\MigrationController:migrate')
		->setName('migrateTables');

	$this->get('/populate', 'Controllers\MigrationController:populate')
		->setName('populateTables');

	$this->get('/rollback[/[{tablename}]]', 'Controllers\MigrationController:rollback')
		->setName('rollbackTable');
});

//API Routes
$app->group('/api', function () use ($app) {
	$app->get('/testendpoint', function ($request, $response, $args) {
		$data = array('name' => 'Bob', 'age' => 40);
		$newResponse = $response->withJson($data, 201);
		return $response;
	});

	$app->group('/users', function () use ($app) {
		return new Controllers\UserController($app);
	});
});
