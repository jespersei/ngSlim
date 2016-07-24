<?php
// Routes

$app->get('[/]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    $uri = $request->getUri();

    $data = ['publicPath' => $uri->getBasePath()];

    // Render index view
    return $this->view->render($response, 'index.html', $data);
});
