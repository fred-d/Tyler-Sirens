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

$makeRender = function($template, $page) use ($twig) {
    return function($request, $response, $args) use ($twig, $template, $page) {
        return $twig->render($template, ['request' => $request, 'page' => $page]);
    };
};

$app->get('/', $makeRender('home.html', 'home'));
$app->get('/home', $makeRender('home.html', 'home'));
$app->get('/app', $makeRender('app.html', 'app'));
$app->get('/dev', $makeRender('dev.html', 'dev'));
$app->get('/about', $makeRender('about.html', 'about'));

$app->get('/humans.txt', function() {
    echo '<embed width="100%" height="100%" name="plugin" src=/assets/sfw/animatedLogo.sfw" '.
        'type="application/x-shockwave-flash">';
});

// Run app
$app->run();
