<?php
// Routes

$app->get('[/]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    $uri = $request->getUri();

    $data = ['publicPath' => $uri->getBasePath()];

    // Render index view
    return $this->view->render($response, 'index.php', $data);
});

$app->get('/api/testendpoint', function ($request, $response, $args) {
	$data = array('name' => 'Bob', 'age' => 40);
	$newResponse = $response->withJson($data, 201);
	return $response;
});
