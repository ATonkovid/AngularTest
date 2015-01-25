define(['angular','CouchEntity'], function (angular, CouchEntity) {
    angular.module('myAppName').factory('Comment', ['CouchEntity', function (CouchEntity) {
        var entity = {
            type: 'comment',
            props: ['message'],
            url: '_view/comment'
        };

        return new CouchEntity(entity);
    }]);
});