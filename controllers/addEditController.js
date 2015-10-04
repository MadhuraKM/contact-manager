/*
 * addEditController implements the functionality
 * to add or edit the contact
 *
 * Author: Madhura
 * Date: 02/10/2015
 */
contactManager.controller('addEditController', ['$scope', '$rootScope', '$http', '$location', 'generalService', 'fileReader', function($scope, $rootScope, $http, $location, generalService, fileReader){

	//get the selected contact in contacts list and assing to selectedContact
	var selectedContact = generalService.getSelectedContacts();
	
	//If there is selectedContact assign to scope to bind details to the form
	if(selectedContact){
		$scope.name = selectedContact.name;
		$scope.phone = selectedContact.phone;
		$scope.email = selectedContact.email;
		$scope.image = selectedContact.image;
	}

	//save(add/edit) the contact details
	$scope.save = function(){

		if($scope.contactForm.$valid) {
			var contact = {
	            "name": $scope.name,
	            "phone": $scope.phone,
	            "email": $scope.email,
	            "image": $scope.image
	        };

	        $scope.contactForm.$setPristine();
	        
	        //If operation set to Add, call addContacts in service
	        //else call editContact
	        if($rootScope.operation == 'Add') {
	        	$scope.contacts = generalService.addContacts(contact);
	        }else {
	        	$scope.contacts = generalService.editContact(contact);
	        }
        }
	}

	//redirect to contacts list from Add/Edit contact form
	$scope.backToList = function(){
		$scope.contactForm.$setPristine();
		$location.url('/contacts');
	}

	//read the uploaded image
	$scope.getFile = function () {

        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.image = result;
                      });
    };

}]);