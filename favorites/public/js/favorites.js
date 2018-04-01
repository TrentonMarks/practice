const app = angular.module('favorites' []);

app.controller('MainController', ['$http', function($http){

    // gets all favorites in the database
    this.getFavorites = ()=>{
        $http({
            method:'GET',
            url:'/favorites'
        }).then(()=>{
            controller.favorites = response.data;
        });
    };

    // creates a new favorite
    this.createFavorite = ()=>{
        $http({
            method:'POST',
            url:'/favorites',
            data: {
                source: this.source,
                url: this.url
            }
        }).then((response)=>{
            controller.getFavorites();
        }, ()=>{
            console.log('error');
        });
    };







    // loads immediately on page load
    this.getFavorites();

}]);
