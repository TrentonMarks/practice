const app = angular.module('favorites', []);

app.controller('MainController', ['$http', function($http){
    this.favorites = [];

    // gets all favorites in the database
    // this.getFavorites = ()=>{
    //     $http({
    //         method:'GET',
    //         url:'/favorites'
    //     }).then(response =>{
    //         this.favorites = response.data;
    //     }, error =>{
    //         console.log(error);
    //     });
    // };

    // creates a new favorite
    this.createFavorite = ()=>{
        $http({
            method:'POST',
            url:'/favorites',
            data: {
                source: this.source,
                url: this.url
            }
        }).then(response =>{
            console.log(response.data);
            // this.createForm = {} removes text from form once submit
            this.createForm = {};
            this.favorites.push(response.data);
        }, error =>{
            console.log(error);
        });
    };








    // loads immediately on page load
    // this.getFavorites();

}]);
