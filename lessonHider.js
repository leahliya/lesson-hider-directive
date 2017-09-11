// angular.module('angPractice')
// .directive('lessonHider', function() {

//   return {
//     templateUrl: './lessonHider.html',
//     restrict: 'E',
//     scope: {
//         lesson: '=',
//     //    stringBinding: '@',
//     //    functionBinding: '&'
//     },

//     //link: function(scope, element, attributes) {
//         //console.log(scope),
//         //console.log(element),
//         //console.log(attributes);

//     //}
//     controller: ('lessonCtrl', function($scope, lessonService){
//     $scope.getSchedule = function getSchedule(){
//         return $http.get('schedule.json');
//     }
//   })
//   }
// })
angular.module('angPractice')
.directive('lessonHider', function() {

  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function( $scope, lessonService ) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function( scope, element, attributes ) {

      scope.getSchedule.then(function( response ) {
        scope.schedule = response.data;

        scope.schedule.forEach(function( scheduleDay ) {
          if (scheduleDay.lesson === scope.lesson) {
            element.css('text-decoration', 'line-through');
            scope.lessonsDay=scheduleDay.wwekDay;
            return;
          }
        });
      });

    }
  }

});