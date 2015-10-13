<?php
ini_set('display_errors', 1);
error_reporting(-1);

require_once 'vendor/autoload.php';

$app = new \Slim\App();
$app_path = realpath(__DIR__);

$loader = new Twig_Loader_Filesystem($app_path.'/lib/templates');
$twig = new Twig_Environment($loader, array(
    'cache' => $app_path.'/lib/cache',
    'debug' => true
));

$app->get('/', function () use ($twig) {
    return $twig->render('home.html', array());
});
$app->get('/home', function() use ($twig) {
    return $twig->render('home.html', array());
});
$app->get('/app', function() {
    return '//TODO';
});

$app->get('/humans.txt', function() {
    echo '<embed width="100%" height="100%" name="plugin" src=/assets/sfw/animatedLogo.sfw" '.
        'type="application/x-shockwave-flash">';
});

// Run app
$app->run();