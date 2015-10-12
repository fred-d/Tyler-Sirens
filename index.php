<?php
ini_set('display_errors', 1);
error_reporting(-1);

require_once 'vendor/autoload.php';

$container = new \Slim\Container;

// Register component on container
$container['view'] = function ($c) {
    $view = new \Slim\Views\Twig('/lib/templates');

    $view->addExtension(new \Slim\Views\TwigExtension(
        $c['router'],
        $c['request']->getUri()
    ));

    return $view;
};

$app = new \Slim\App($container);
//$app->config('debug', true);

$app->get('/', function($request, $response, $args){
    echo 'Hello, World!';
});

// Render Twig template in route
$app->get('/home', function ($request, $response, $args) {
    return require_once("lib/templates/home.html");
});

// Run app
$app->run();