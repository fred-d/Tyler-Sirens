<?php
error_reporting(E_ALL);
require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

$app->get('/', function() {
    echo "Hello, World!";
});