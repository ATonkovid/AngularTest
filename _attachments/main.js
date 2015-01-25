requirejs.config({
    paths: {
        'angular': 'lib/angular',
        'jquery': 'lib/jquery-1.9.1',
        'bootstrap': 'lib/bootstrap/js/bootstrap'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'forShim': {
            exports: 'x',
            deps: ['forShimDep']
        },
        'forShimeDep': {
            exports : 'message'
        }

    }
});

define(['jquery', 'bootstrap', 'angular', 'app', 'sample'], function ($, bootstrap, angular, app, sample) {
    $(function () {
        angular.bootstrap('body', ['myAppName']);
        console.log(sample);
    });
});