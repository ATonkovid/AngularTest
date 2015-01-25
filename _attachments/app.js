define(['angular', 'task'], function (angular, $, task) {
    angular.module('myAppName')
      .controller('FormController', function ($scope, Task) {

          Task.get().then(function (tasks) {
              $scope.Tasks = tasks;
          });

          $scope.Filter = "";
          $scope.Tasks = [];
          $scope.toglleCheck = function (task) {
              Task.put(task);
          }
          $scope.AddItem = function () {
              var that = this;
              Task.post({ name: this.NewNameNg, checked: false }).then(function (data) {
                  var index = that.Tasks.push(data);
                  that.NewNameNg = "";
              });
              return false;
          };
          $scope.removeTask = function (TaskToRemove) {
              var that = this;
              Task.delete(TaskToRemove._id, TaskToRemove._rev).then(function () {
                  var index = that.Tasks.indexOf(TaskToRemove);
                  that.Tasks.splice(index, 1);
              });
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