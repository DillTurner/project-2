$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();
    $('.modal').modal();


$.get("/api/sativa", function(response) {

  function strings(str){
 
    var newstr= str.replace(/,/g, ' ');

  return newstr;
};


// Card 1



var RandomStrain = response[Math.floor(Math.random()*response.length)];
var positive = strings(RandomStrain.Value_effects_positive);
var negative = strings(RandomStrain.Value_effects_negative);
var medical = strings(RandomStrain.Value_effects_medical);
var flavors = strings(RandomStrain.Value_flavors);

var SativaTitle = $('#titleSativa');
$("<h2>"+RandomStrain.name+"</h2>").appendTo(SativaTitle);

var SativaPositive = $('#positiveSativa');
$("<h5>"+positive+"</h5>").appendTo(SativaPositive);

var SativaNegative = $('#negativeSativa');
$("<h5>"+negative+"</h5>").appendTo(SativaNegative);

var SativaFlavors = $('#flavorsSativa');
$("<h5>"+flavors+"</h5>").appendTo(SativaFlavors);

var SativaMedical = $('#medicalSativa');
$("<h5>"+medical+"</h5>").appendTo(SativaMedical);

// Card 2
var RandomStrain2 = response[Math.floor(Math.random()*response.length)];
var positive2 = strings(RandomStrain2.Value_effects_positive);
var negative2 = strings(RandomStrain2.Value_effects_negative);
var medical2 = strings(RandomStrain2.Value_effects_medical);
var flavors2 = strings(RandomStrain2.Value_flavors);

var SativaTitle2 = $('#titleSativa2');
$("<h4>"+RandomStrain2.name+"</h4>").appendTo(SativaTitle2);

var SativaPositive2 = $('#positiveSativa2');
$("<h7>"+positive2+"</h7>").appendTo(SativaPositive2);

var SativaNegative2 = $('#negativeSativa2');
$("<h7>"+negative2+"</h7>").appendTo(SativaNegative2);

var SativaFlavors2 = $('#flavorsSativa2');
$("<h7>"+flavors2+"</h7>").appendTo(SativaFlavors2);

var SativaMedical2 = $('#medicalSativa2');
$("<h7>"+medical2+"</h7>").appendTo(SativaMedical2);

// Card 3
var RandomStrain3 = response[Math.floor(Math.random()*response.length)];
var positive3 = strings(RandomStrain3.Value_effects_positive);
var negative3 = strings(RandomStrain3.Value_effects_negative);
var medical3 = strings(RandomStrain3.Value_effects_medical);
var flavors3 = strings(RandomStrain3.Value_flavors);

var SativaTitle3 = $('#titleSativa3');
$("<h4>"+RandomStrain3.name+"</h4>").appendTo(SativaTitle3);

var SativaPositive3 = $('#positiveSativa3');
$("<h7>"+positive3+"</h7>").appendTo(SativaPositive3);

var SativaNegative3 = $('#negativeSativa3');
$("<h7>"+negative3+"</h7>").appendTo(SativaNegative3);

var SativaFlavors3 = $('#flavorsSativa3');
$("<h7>"+flavors3+"</h7>").appendTo(SativaFlavors3);

var SativaMedical3 = $('#medicalSativa3');
$("<h7>"+medical3+"</h7>").appendTo(SativaMedical3);

// Card 4
var RandomStrain4 = response[Math.floor(Math.random()*response.length)];
var positive4 = strings(RandomStrain4.Value_effects_positive);
var negative4 = strings(RandomStrain4.Value_effects_negative);
var medical4 = strings(RandomStrain4.Value_effects_medical);
var flavors4 = strings(RandomStrain4.Value_flavors);

var SativaTitle4 = $('#titleSativa4');
$("<h4>"+RandomStrain4.name+"</h4>").appendTo(SativaTitle4);

var SativaPositive4 = $('#positiveSativa4');
$("<h7>"+positive4+"</h7>").appendTo(SativaPositive4);

var SativaNegative4 = $('#negativeSativa4');
$("<h7>"+negative4+"</h7>").appendTo(SativaNegative4);

var SativaFlavors4 = $('#flavorsSativa4');
$("<h7>"+flavors4+"</h7>").appendTo(SativaFlavors4);

var SativaMedical4 = $('#medicalSativa4');
$("<h7>"+medical4+"</h7>").appendTo(SativaMedical4);

// Card 5
var RandomStrain5 = response[Math.floor(Math.random()*response.length)];
var positive5 = strings(RandomStrain5.Value_effects_positive);
var negative5 = strings(RandomStrain5.Value_effects_negative);
var medical5 = strings(RandomStrain5.Value_effects_medical);
var flavors5 = strings(RandomStrain5.Value_flavors);

var SativaTitle5 = $('#titleSativa5');
$("<h4>"+RandomStrain5.name+"</h4>").appendTo(SativaTitle5);

var SativaPositive5 = $('#positiveSativa');
$("<h7>"+positive5+"</h7>").appendTo(SativaPositive5);

var SativaNegative5 = $('#negativeSativa5');
$("<h7>"+negative5+"</h7>").appendTo(SativaNegative5);

var SativaFlavors5 = $('#flavorsSativa');
$("<h7>"+flavors5+"</h7>").appendTo(SativaFlavors5);

var SativaMedical5 = $('#medicalSativa5');
$("<h7>"+medical5+"</h7>").appendTo(SativaMedical5);


    console.log(response);
  });

});