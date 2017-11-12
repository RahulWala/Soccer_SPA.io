// First Controller
myApp.controller('EngLea',['$http',function($http){
  var main = this;  
  this.datas = [];
  this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master';

  this.eplData = function(){
    $http({
      method: 'GET',
      url: main.baseUrl+'/2015-16/en.1.json'
    }).then(function successCallback(response){

          main.rounds = response.data.rounds;
          console.log(main.rounds);

    },function errorCallback(response){
      alert("Not Found");
  })//End of http
  };//End of eplData

}]); //End of controller

myApp.controller('Summary',['$http','$routeParams',function($http,$routeParams){

var main = this;
this.data = [];
this.date = $routeParams.date;
console.log(this.date);
this.t1Code = $routeParams.Code1;
console.log(this.t1Code);
this.t2Code = $routeParams.Code2;
console.log(this.t2Code);
this.t1;  //team 1 
this.t2;  //team 2
this.s1;  //score 1
this.s2;  //score 2
this.winner;

this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master';


this.story = function(){
  $http({
    method:'GET',
    url: main.baseUrl+'/2015-16/en.1.json'

  }).then(function successCallback(response){
    main.rounds = response.data.rounds;
    //console.log(main.rounds);

    // for showing individual match info
    for(var i in main.rounds){
      //console.log(i);
      for(var j in main.rounds[i].matches){

        if(main.rounds[i].matches[j].team1.code == main.t1Code && main.rounds[i].matches[j].team2.code == main.t2Code && main.rounds[i].matches[j].date == main.date){
          main.s1 = main.rounds[i].matches[j].score1;
          //console.log(main.s1);
          main.s2 = main.rounds[i].matches[j].score2;
          //console.log(main.s1);
          main.t1 = main.rounds[i].matches[j].team1.name;
          main.t2 = main.rounds[i].matches[j].team2.name;
          
          if(main.s1 < main.s2){
            main.winner = main.t2+" Won";
          }
          else if(main.s2 < main.s1){
            main.winner = main.t1+" Won";
          }
          else{
            main.winner = "Match Draw";
          }
        }
        else{
          console.log("Please Enter Correct Input");
        }
      }
    }
    },function errorCallback(response){
    console.log("Not Found");
  })
};
}]);


myApp.controller('EngLeaLatest',['$http',function($http){
  var main = this;  
  this.datas = [];
  this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master';

  this.eplData = function(){
    $http({
      method: 'GET',
      url: main.baseUrl+'/2016-17/en.1.json'
    }).then(function successCallback(response){

          main.rounds = response.data.rounds;
          console.log(main.rounds);

    },function errorCallback(response){
      alert("Not Found");
  })//End of http
  };//End of eplData

}]); //End of controller


myApp.controller('Third',['$http','$routeParams',function($http,$routeParams){
var main = this;
this.data = [];
this.date = $routeParams.date;
console.log(this.date);
this.t1Code = $routeParams.Code1;
console.log(this.t1Code);
this.t2Code = $routeParams.Code2;
console.log(this.t2Code);
this.t1;  //team 1 
this.t2;  //team 2
this.s1;  //score 1
this.s2;  //score 2
this.winner;

this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master';


this.story = function(){
  $http({
    method:'GET',
    url: main.baseUrl+'/2016-17/en.1.json'

  }).then(function successCallback(response){
    main.rounds = response.data.rounds;
    console.log(main.rounds);

    // for showing individual match info
    for(var i in main.rounds){
      //console.log(i);
      for(var j in main.rounds[i].matches){

        if(main.rounds[i].matches[j].team1.code == main.t1Code && main.rounds[i].matches[j].team2.code == main.t2Code && main.rounds[i].matches[j].date == main.date){
          main.s1 = main.rounds[i].matches[j].score1;
          //console.log(main.s1);
          main.s2 = main.rounds[i].matches[j].score2;
          //console.log(main.s1);
          main.t1 = main.rounds[i].matches[j].team1.name;
          main.t2 = main.rounds[i].matches[j].team2.name;
          
          if(main.s1 < main.s2){
            main.winner = main.t2+" Won";
          }
          else if(main.s2 < main.s1){
            main.winner = main.t1+" Won";
          }
          else{
            main.winner = "Match Draw";
          }
        }
        else{
          console.log("Please Enter Correct Input");
        }
      }
    }
  },function errorCallback(response){
    console.log("Not Found");
  })
};
}]);
