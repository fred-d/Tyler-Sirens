<?php

class RouteHandlers {
    public static function HomeRoute() {
        return require_once("lib/templates/home.html");
    }

    public static function AppRoute() {
        echo '//TODO';
    }
}