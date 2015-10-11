<?php
ini_set('display_errors', 1);
error_reporting(-1);
require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

$app->get('/', function() use ($app) {
    $app->render("lib/views/home.view.php",
        array(
            'message' => 'Hello, World!'
        ));
});

$app->run();
