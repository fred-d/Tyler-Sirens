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
$twig->addExtension(new Twig_Extension_Debug());

$app->get('/', function ($request, $response, $args) use ($twig) {
    return $twig->render('home.html', array('request' => $request, 'page' => 'home'));
});
$app->get('/home', function($request, $response, $args) use ($twig) {
    return $twig->render('home.html', array('request' => $request, 'page' => 'home'));
});
$app->get('/app', function($request, $response, $args) use ($twig) {
    return $twig->render('app.html', array('request' => $request, 'page' => 'app'));
});
$app->get('/about', function($request, $response, $args) use ($twig) {
    return $twig->render('about.html', array('request' => $request, 'page' => 'about'));
});


$app->get('/humans.txt', function() {
    echo '<embed width="100%" height="100%" name="plugin" src=/assets/sfw/animatedLogo.sfw" '.
        'type="application/x-shockwave-flash">';
});

// Run app
$app->run();