<?php
ini_set('display_errors', 1);
error_reporting(-1);

require_once 'vendor/autoload.php';
require_once 'lib/RouteHandlers.php';

$app = new \Slim\App();

$app->get('/', function () {
    return RouteHandlers::HomeRoute();
});
$app->get('/home', function() {
    return RouteHandlers::HomeRoute();
});
$app->get('/app', function() {
    return RouteHandlers::AppRoute();
});

$app->get('/humans.txt', function() {
    echo '<embed width="100%" height="100%" name="plugin" src="/assets/sfw/animatedLogo.sfw" '.
        'type="application/x-shockwave-flash">';
});

// Run app
$app->run();