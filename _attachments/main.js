requirejs.config({
    paths: {
        'angular': 'lib/angular',
		'underscore': 'lib/underscore',
        'jquery': 'lib/jquery-1.9.1',
        'bootstrap': 'lib/bootstrap/js/bootstrap',
		'CouchEntity': 'CouchOrm/CouchEntity',
		'CouchEntityFactory': 'CouchOrm/CouchEntityFactory',
		'task': 'entities/task'
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

define(['jquery', 'bootstrap', 'angular'], function ($, bootstrap, angular) {
	angular.module('myAppName', ['angularCouch']);
    $(function () {
		require(['app'], function(){
			angular.bootstrap('body', ['myAppName']);
		});
    });
});