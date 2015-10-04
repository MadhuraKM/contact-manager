/* Route config file 
 *
 * Author: Madhura
 * Date: 02/10/2015
 */
contactManager.config(function($routeProvider){

	$routeProvider.

		when('/contacts', {
			templateUrl: 'views/contacts.html'
		}).
		when('/add-contact', {
			templateUrl: 'views/add-edit-contacts.html'
		}).
		when('/edit-contact', {
			templateUrl: 'views/add-edit-contacts.html'
		}).

		otherwise({
			redirectTo: '/contacts'
		})

})