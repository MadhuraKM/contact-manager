/*
 * generalService implements the logic
 * that are common across controller to reuse the functionality
 * and also to maintain the state of data across the application
 *
 * Author: Madhura
 * Date: 01/10/2015
 */
contactManager.factory('generalService',['$rootScope', '$http', function($rootScope, $http){
	
	var contacts = [];
	var selectedContact = '';

	//Read all the contacts from json file
	readJson = function(){
		$http.get('contacts.json').success(function(data){
			contacts = data.contacts;
			
			//trigger the event on the contacts update listened by controller
			$rootScope.$emit('contactsUpdate', contacts);
		});
	}

	readJson();

	return{

		//Returns the Contacts data
		getContacts: function(){
			return contacts;
		},

		//Add new contact to the contacts list
		addContacts: function(contact){
			contacts.push(contact);
			
			//trigger the event on the contacts update listened by contactsController
			$rootScope.$emit('contactsUpdate', contacts);

			return contacts;
		},

		//Edit an existing contact
		editContact: function(contact){
			contacts[contacts.indexOf(selectedContact)] = contact;

			//trigger the event on the contacts update listened by contactsController
			$rootScope.$emit('contactsUpdate', contacts);

			return contacts;
		},

		//Set the selectes contact in the contacts list to fill
		//the contact details in edit contact form
		setSelectedContacts: function(contact){
			selectedContact = contact;
		},

		//Get the currently selected contact for editing
		getSelectedContacts: function(contact){
			return selectedContact;
		}

	}

}])