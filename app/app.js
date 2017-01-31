var myApp = angular.module('angFirst',[]);

myApp.controller('phoneController',function phoneController($scope){
	$scope.phones = [
	{
		name: 'Iphone 7',
		snippet: 'The latest by apple.'
	},
	{
		name : 'Google Pixel',
		snippet: 'The first one by Google.'
	}
	];
}).controller('linkController',function linkController($scope){
	$scope.prices = [
	{
		amount: "6",
		qty: "4",
	},
	{
		amount: "8",
		qty: "7",
	}
	];

	$scope.amount = $scope.prices[0].amount * $scope.prices[0].qty;
});