<?php
ini_set('display_errors', 1);
error_reporting(-1);
require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

$app->get('/', function() {
    $message = "Hello, World!";
});

$app->run();
