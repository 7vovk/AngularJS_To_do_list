angular.module('myApp', [])
    .controller('AppController', ['$scope', function ($scope) {
        var self = this;

        self.info = {
            id: null,
            task: '',
            status: 'IN PROGRESS'
        };
        self.id = 4;

//Already filled fields:
        self.information = [
            {
                id: 1,
                task: 'Create smth',
                status: 'IN PROGRESS'
          },
            {
                id: 2,
                task: 'Do anything',
                status: 'IN PROGRESS'
          },
            {
                id: 3,
                task: 'Something',
                status: 'IN PROGRESS'
          }
      ];

//Add button:
        self.submit = function () {
            if (self.info.id === null) {
                self.info.id = self.id++;
                self.information.push(self.info);
            } else {
                for (var i = 0; i < self.information.length; i++) {
                    if (self.information[i].id === self.info.id) {
                        self.information[i] = self.info;
                        break;
                    }
                }
            }
            self.reset();
        };

//Edit button:
        self.edit = function (id) {
            for (var i = 0; i < self.information.length; i++) {
                if (self.information[i].id === id) {
                    self.info = angular.copy(self.information[i]);
                    break;
                }
            }
        }

//Remove button:
        self.remove = function (id) {
            for (var i = 0; i < self.information.length; i++) {
                if (self.information[i].id === id) {
                    self.information.splice(i, 1);
                    if (self.info.id === id) {
                        self.reset();
                    }
                    break;
                }
            }
        }
        
//Reset form:
        self.reset = function () {
            self.info = {
                id: null,
                task: '',
                status: 'IN PROGRESS'
            };
            $scope.myForm.$setPristine(); //reset Form
        }

//Status color:
        self.getClass = function () {
            return self.isRed ? 'green' : 'red';
        }


}]);
