'use strict';

/**
 * @ngdoc function
 * @name testquestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testquestApp
 */
angular.module('testquestApp')
  .controller('MainCtrl', function ($scope, fakedata) {
    $scope.flags = fakedata.getFlags();
    $scope.filterValueSecondList = [];
    $scope.inputModels = {};
    for(var flag in $scope.flags){
      $scope.filterValueSecondList.push(flag);
      $scope.inputModels[flag] = true;
    }
    $scope.updateSecondListFilter = function(name){
      if($scope.filterValueSecondList.length){
        for(var i = 0; i < $scope.filterValueSecondList.length; i++){
          if($scope.filterValueSecondList[i] === name){
            $scope.filterValueSecondList.splice(i,1);
            break;
          }
          if(i === $scope.filterValueSecondList.length-1){
            $scope.filterValueSecondList.push(name);
            break;
          }
        }
      } else {
        $scope.filterValueSecondList.push(name);
      }
    };
    $scope.lists = []
    $scope.addList = function($scope){
      $scope.lists.push($scope);
    };
    $scope.showInForm = function(model) {
      for (var i = 0; i < $scope.lists.length; i++) {
        $scope.lists[i].removeSelection();
      }
      $scope.formModel = model;
    }
  });
