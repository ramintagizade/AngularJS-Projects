var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when('/customers',{controller:'SimpleController',templateUrl:'Views/customers.html'})
    .when('/orders',{controller:'SimpleController',templateUrl:'Views/orders.html'})
    .otherwise({redirectTo:'/customers'});
});
app.controller('SimpleController',function($scope){
  $scope.menus = [{name:'Customers',url:'customers'},{name:'Orders',url:'orders'}];

  $scope.customers = [{name:'Ramin Taghizada',city:'Manchester',orders:'View 2 Orders'},
                      {name:'Ramin Smith',city:'London',orders:'View 1 Order'},
                      {name:'Mary Doe',city:'San Jose',orders:'View 1 Order'},
                      {name:'Elena Johnson',city:'Liverpool',orders:'View 2 Orders'}
                    ];
  $scope.orders = [{user:'Ramin Taghizada',product:[{name:'Ipod',quantity:1,unit_price:'$300'},{name:'Headphone',quantity:1,unit_price:'$99'}]},
                   {user:'Ramin Smith',product:[{name:'Iphone',quantity:1,unit_price:'$700'}]},
                   {user:'Mary Doe',product:[{name:'Samsung Galaxy',quantity:2,unit_price:'$555'}]},
                   {user:'Elena Johnson',product:[{name:'Tablet',quantity:2,unit_price:'$155'}]}
                  ];
  $scope.addCustomer = function(){
    $scope.customers.push({name:$scope.firstname+" "+$scope.lastname,city:$scope.city,orders:"View Order"});
  }
  $scope.removeCustomer = function(index){
    $scope.customers.splice(index,1);
  }
  $scope.getTotal = function(quantity,unit_price){
    unit_price = unit_price.match(/\d+$/)[0];
    var price = unit_price*quantity;
    return price;
  }
  $scope.getTotalResult = function(products){
    var sum = 0;
    for(var i=0;i<products.length;i++){
      var unit_price = products[i].unit_price.match(/\d+$/)[0];
      sum+=products[i].quantity*unit_price;
    }
    return sum;
  }
});
