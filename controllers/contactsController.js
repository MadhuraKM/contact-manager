/*
 * contactsController implements the functionality
 * for ti get contacts list and do operation on the list
 *
 * Author: Madhura
 * Date: 01/10/2015
 */
contactManager.controller('contactsController', ['$scope', '$rootScope', '$http', '$location', 'generalService', '$filter', function($scope, $rootScope, $http, $location, generalService, $filter){

	$scope.pageSize = 15;
	$scope.search = '';

	$rootScope.$on('contactsUpdate', function(event, contacts){
		$scope.contacts = contacts;
		$location.url('/contacts');

	});

	$scope.contacts = generalService.getContacts();

	//Takes user to Add Contact screen
	$scope.addContact = function(){
		$rootScope.operation = 'Add';
		
		/*calling setSelectedContacts without contact parameter 
		sets the form empty*/
		generalService.setSelectedContacts();
		
		//redirect user to Add contact form
		$location.url('/add-contact');
	}
	
	//Takes user to Edit Contact form filled with contact details
	$scope.editContact = function(contact){
		$rootScope.operation = 'Edit';
		
		/*calling setSelectedContacts with contact parameter 
		sets the form with selected contact*/
		generalService.setSelectedContacts(contact);		
		
		//redirect user to Edit contact form
		$location.url('/edit-contact');
	}

	//Just deletes the contact
	$scope.deleteContact = function(contact){
		$scope.contacts.splice($scope.contacts.indexOf(contact), 1);
	}

}]);