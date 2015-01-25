define(['angular'], function (angular, $) {
    angular.module('myAppName', [])
      .controller('FormController', function ($scope, $http) {

          $http.get('tasks.js').
            success(function (data, status, headers, config) {
                $scope.Tasks = data;
            }).
            error(function (data, status, headers, config) {
            });

          $scope.Filter = "";
          $scope.Tasks = [];
          $scope.AddItem = function () {
              var index = this.Tasks.push({ name: this.NewNameNg, checked: false });
              this.NewNameNg = "";
              return false;
          };
          $scope.removeTask = function (TaskToRemove) {
              var index = this.Tasks.indexOf(TaskToRemove);
              this.Tasks.splice(index, 1);
          };
          $scope.SortFunction = function () {
              this.predicate = 'name';
              this.reverse == undefined ? this.reverse = false : this.reverse = !this.reverse;
              this.mustShow == 1 ? this.mustShow = 2 : this.mustShow = 1;
          };
          $scope.filterFunction = function (task) {

              if ($scope.Filter == "Finished") {
                  return task.checked;
              }
              else if ($scope.Filter == "NotFinished") {
                  return !task.checked;
              }
              return true;
          };
          $scope.SelectOnChange = function (keyWord) {
              $scope.Filter = keyWord;
              (keyWord == "All") ? $scope.HideWithFilter = false : $scope.HideWithFilter = true;
          };
          $scope.isActive = function (keyWord) {
              if (keyWord == "All") {
                  return ($scope.Filter == "All");
              }
              if (keyWord == "Finished") {
                  return ($scope.Filter == "Finished");
              }
              if (keyWord == "NotFinished") {
                  return ($scope.Filter == "NotFinished");
              }
          }

      });
    return { success: true };
});