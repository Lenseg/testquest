'use strict';

/**
 * @ngdoc service
 * @name testquestApp.fakedata
 * @description
 * # fakedata
 * Factory in the testquestApp.
 */
angular.module('testquestApp')
  .factory('fakedata', function () {
    var flags = {
      sun : parseInt(1..toString(2),2),
      flash : parseInt(2..toString(2),2),
      heart :  parseInt(4..toString(2),2),
      flower : parseInt(8..toString(2),2)
      };

    return {
      getFlags: function(){
        return flags;
      },
      generateDataArray: function (valuesAmount) {
        var dataArray = [];
        while(valuesAmount){
          dataArray.push(this.generateSingleItem());
          valuesAmount--;
        }
        return dataArray;
      },
      generateSingleItem: function () {
        var itemTemplate = {
          name:Math.random().toString(36).slice(2, 7),
          flags:[]
        };
        var flagMask = Math.floor(Math.random()*16);
        for(var flag in flags){
          var maskResult = flags[flag] & flagMask;
          maskResult = maskResult >> maskResult.toString(2).length-1;
          if(!maskResult){
            itemTemplate.flags.push(flag);
          }
        }
        return itemTemplate;
      }
    };
  });
