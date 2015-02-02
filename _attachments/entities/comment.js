define(['angular','CouchEntity'], function (angular, CouchEntity) {
    angular.module('myAppName').factory('Comment', ['CouchEntity', function (CouchEntity) {
        var entity = {
            type: 'comment',
            props: ['message','member'],
            url: '_view/comment'
        };

        return new CouchEntity(entity);
    }]);
});