angular.module('app').directive('editDirective', function () {
    return {
        restrict: 'A',
        templateUrl: './directives/edit-dir-tpl.html',
        replace: true,
        scope: {
            data: '=editDirective',
            onSave: '&'
        },
        link: function (scope, el) {
            var temp;
            scope.gotoEdit = function () {
                temp = scope.data;
                scope.isInEdit = true;
            };

            scope.rollBack = function(){
                scope.data = temp;
                scope.isInEdit = false;
            };

            scope.save= function(){
                scope.onSave();
                scope.isInEdit = false;
            }
        }
    }
});
