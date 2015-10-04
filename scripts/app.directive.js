/* File select Directive
 *
 * Author: Madhura
 * Date: 02/10/2015
 */
contactManager.directive("ngFileSelect",function(){
	return {
		link: function($scope,el){		  
			el.bind("change", function(e){
				$scope.file = (e.srcElement || e.target).files[0];
				$scope.getFile();
			})	  
		}
	}
})