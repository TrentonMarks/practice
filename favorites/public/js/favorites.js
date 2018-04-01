const app = angular.module('favorites', []);

app.controller('MainController', ['$http', function($http){
    this.favorites = [];
    this.createForm = {};

    // gets all favorites in the database
    this.getFavorites = ()=>{
        $http({
            method:'GET',
            url:'/favorites'
        }).then(response=>{
            this.favorites = response.data;
        });
    };

    // creates a new favorite
    this.createFavorite = ()=>{
        $http({
            method:'POST',
            url:'/favorites',
            data: this.createForm
        }).then(response=>{
            console.log(response.data);
            // this.createForm = {} removes text from form once submit
            this.createForm = {};
            this.favorites.push(response.data);
        }, ()=>{
            console.log('error');
        });
    };

    // loads immediately on page load
    this.getFavorites();

}]);
