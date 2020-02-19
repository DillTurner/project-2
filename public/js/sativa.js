$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();
    $('.modal').modal();


$.get("/api/sativa", function(response) {


// Card 1
var RandomStrain = response[Math.floor(Math.random()*response.length)];

var SativaTitle = $('#titleSativa');
$("<h2>"+RandomStrain.name+"</h2>").appendTo(SativaTitle);

var SativaPositive = $('#positiveSativa');
$("<h5>"+RandomStrain.Value_effects_positive+"</h5>").appendTo(SativaPositive);

var SativaNegative = $('#negativeSativa');
$("<h5>"+RandomStrain.Value_effects_negative+"</h5>").appendTo(SativaNegative);

var SativaFlavors = $('#flavorsSativa');
$("<h5>"+RandomStrain.Value_flavors+"</h5>").appendTo(SativaFlavors);

var SativaMedical = $('#medicalSativa');
$("<h5>"+RandomStrain.Value_effects_medical+"</h5>").appendTo(SativaMedical);

// Card 2
var RandomStrain2 = response[Math.floor(Math.random()*response.length)];

var SativaTitle2 = $('#titleSativa2');
$("<h5>"+RandomStrain2.name+"</h5>").appendTo(SativaTitle2);

var SativaPositive2 = $('#positiveSativa2');
$("<h7>"+RandomStrain2.Value_effects_positive+"</h7>").appendTo(SativaPositive2);

var SativaNegative2 = $('#negativeSativa2');
$("<h7>"+RandomStrain2.Value_effects_negative+"</h7>").appendTo(SativaNegative2);

var SativaFlavors2 = $('#flavorsSativa2');
$("<h7>"+RandomStrain2.Value_flavors+"</h7>").appendTo(SativaFlavors2);

var SativaMedical2 = $('#medicalSativa2');
$("<h7>"+RandomStrain2.Value_effects_medical+"</h7>").appendTo(SativaMedical2);

// Card 3
var RandomStrain3 = response[Math.floor(Math.random()*response.length)];

var SativaTitle3 = $('#titleSativa3');
$("<h5>"+RandomStrain3.name+"</h5>").appendTo(SativaTitle3);

var SativaPositive3 = $('#positiveSativa3');
$("<h7>"+RandomStrain3.Value_effects_positive+"</h7>").appendTo(SativaPositive3);

var SativaNegative3 = $('#negativeSativa3');
$("<h7>"+RandomStrain3.Value_effects_negative+"</h7>").appendTo(SativaNegative3);

var SativaFlavors3 = $('#flavorsSativa3');
$("<h7>"+RandomStrain3.Value_flavors+"</h7>").appendTo(vFlavors3);

var SativaMedical3 = $('#medicalSativa3');
$("<h7>"+RandomStrain3.Value_effects_medical+"</h7>").appendTo(SativaMedical3);

// Card 4
var RandomStrain4 = response[Math.floor(Math.random()*response.length)];

var SativaTitle4 = $('#titleSativa4');
$("<h5>"+RandomStrain4.name+"</h5>").appendTo(SativaTitle4);

var SativaPositive4 = $('#positiveSativa4');
$("<h7>"+RandomStrain4.Value_effects_positive+"</h7>").appendTo(SativaPositive4);

var SativaNegative4 = $('#negativeSativa4');
$("<h7>"+RandomStrain4.Value_effects_negative+"</h7>").appendTo(SativaNegative4);

var SativaFlavors4 = $('#flavorsSativa4');
$("<h7>"+RandomStrain4.Value_flavors+"</h7>").appendTo(SativaFlavors4);

var SativaMedical4 = $('#medicalSativa4');
$("<h7>"+RandomStrain4.Value_effects_medical+"</h7>").appendTo(SativaMedical4);

// Card 5
var RandomStrain5 = response[Math.floor(Math.random()*response.length)];

var SativaTitle5 = $('#titleSativa5');
$("<h5>"+RandomStrain5.name+"</h5>").appendTo(SativaTitle5);

var SativaPositive5 = $('#positiveSativa');
$("<h7>"+RandomStrain5.Value_effects_positive+"</h7>").appendTo(SativaPositive5);

var SativaNegative5 = $('#negativeSativa5');
$("<h7>"+RandomStrain5.Value_effects_negative+"</h7>").appendTo(SativaNegative5);

var SativaFlavors5 = $('#flavorsSativa');
$("<h7>"+RandomStrain5.Value_flavors+"</h7>").appendTo(SativaFlavors5);

var SativaMedical5 = $('#medicalSativa5');
$("<h7>"+RandomStrain5.Value_effects_medical+"</h7>").appendTo(SativaMedical5);


    console.log(response);
  });

});