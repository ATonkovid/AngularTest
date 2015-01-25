define(['angular','CouchEntity'], function (angular, CouchEntity) {
    angular.module('myAppName').factory('Task', ['CouchEntity', function (CouchEntity) {
        var entity = {
            type: 'task',
            props: ['name', 'checked'],
            url: '_view/task'
        };

        return new CouchEntity(entity);
    }]);
});