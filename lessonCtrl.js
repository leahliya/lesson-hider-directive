angular.module('angPractice').controller('directivePractice', function($scope) {
    //$scope.test = 'Leah'
    $scope.test = 'Two-way data binding!'
var lessonArr = ['Services', 'Routing', 'Directives', 
                 'Review', 'Firebase', 'No server project', 
                 'Node', 'Express', 'Mongo'];
    $scope.lessons =  lessonArr; 
    
    $scope.announceDay = function  (lesson, day) {
        if (!day) {
            alert(lesson + ' is not scheduled.')
        } else {
            alert(lesson + ' is active on ' + day + '.')
        }
    }

   $scope.checkboxModel = {
        value1 : true
      };              

});