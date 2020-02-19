$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();
    $('.modal').modal();


$.get("/api/hybrid", function(response) {


// Card 1
var RandomStrain = response[Math.floor(Math.random()*response.length)];

var HybridTitle = $('#titleHybrid');
$("<h2>"+RandomStrain.name+"</h2>").appendTo(HybridTitle);

var HybridPositive = $('#positiveHybrid');
$("<h5>"+RandomStrain.Value_effects_positive+"</h5>").appendTo(HybridPositive);

var HybridNegative = $('#negativeHybrid');
$("<h5>"+RandomStrain.Value_effects_negative+"</h5>").appendTo(HybridNegative);

var HybridFlavors = $('#flavorsHybrid');
$("<h5>"+RandomStrain.Value_flavors+"</h5>").appendTo(HybridFlavors);

var HybridMedical = $('#medicalHybrid');
$("<h5>"+RandomStrain.Value_effects_medical+"</h5>").appendTo(HybridMedical);

// Card 2
var RandomStrain2 = response[Math.floor(Math.random()*response.length)];

var HybridTitle2 = $('#titleHybrid2');
$("<h4>"+RandomStrain2.name+"</h4>").appendTo(HybridTitle2);

var HybridPositive2 = $('#positiveHybrid2');
$("<h7>"+RandomStrain2.Value_effects_positive+"</h7>").appendTo(HybridPositive2);

var HybridNegative2 = $('#negativeHybrid2');
$("<h7>"+RandomStrain2.Value_effects_negative+"</h7>").appendTo(HybridNegative2);

var HybridFlavors2 = $('#flavorsHybrid2');
$("<h7>"+RandomStrain2.Value_flavors+"</h7>").appendTo(HybridFlavors2);

var HybridMedical2 = $('#medicalHybrid2');
$("<h7>"+RandomStrain2.Value_effects_medical+"</h7>").appendTo(HybridMedical2);

// Card 3
var RandomStrain3 = response[Math.floor(Math.random()*response.length)];

var HybridTitle3 = $('#titleHybrid3');
$("<h4>"+RandomStrain3.name+"</h4>").appendTo(HybridTitle3);

var HybridPositive3 = $('#positiveHybrid3');
$("<h7>"+RandomStrain3.Value_effects_positive+"</h7>").appendTo(HybridPositive3);

var HybridNegative3 = $('#negativeHybrid3');
$("<h7>"+RandomStrain3.Value_effects_negative+"</h7>").appendTo(HybridNegative3);

var HybridFlavors3 = $('#flavorsHybrid3');
$("<h7>"+RandomStrain3.Value_flavors+"</h7>").appendTo(HybridFlavors3);

var HybridMedical3 = $('#medicalHybrid3');
$("<h7>"+RandomStrain3.Value_effects_medical+"</h7>").appendTo(HybridMedical3);

// Card 4
var RandomStrain4 = response[Math.floor(Math.random()*response.length)];

var HybridTitle4 = $('#titleHybrid4');
$("<h4>"+RandomStrain4.name+"</h4>").appendTo(HybridTitle4);

var HybridPositive4 = $('#positiveHybrid4');
$("<h7>"+RandomStrain4.Value_effects_positive+"</h7>").appendTo(HybridPositive4);

var HybridNegative4 = $('#negativeHybrid4');
$("<h7>"+RandomStrain4.Value_effects_negative+"</h7>").appendTo(HybridNegative4);

var HybridFlavors4 = $('#flavorsHybrid4');
$("<h7>"+RandomStrain4.Value_flavors+"</h7>").appendTo(HybridFlavors4);

var HybridMedical4 = $('#medicalHybrid4');
$("<h7>"+RandomStrain4.Value_effects_medical+"</h7>").appendTo(HybridMedical4);

// Card 5
var RandomStrain5 = response[Math.floor(Math.random()*response.length)];

var HybridTitle5 = $('#titleHybrid5');
$("<h4>"+RandomStrain5.name+"</h4>").appendTo(HybridTitle5);

var HybridPositive5 = $('#positiveHybrid');
$("<h7>"+RandomStrain5.Value_effects_positive+"</h7>").appendTo(HybridPositive5);

var HybridNegative5 = $('#negativeHybrid5');
$("<h7>"+RandomStrain5.Value_effects_negative+"</h7>").appendTo(HybridNegative5);

var HybridFlavors5 = $('#flavorsHybrid');
$("<h7>"+RandomStrain5.Value_flavors+"</h7>").appendTo(HybridFlavors5);

var HybridMedical5 = $('#medicalHybrid5');
$("<h7>"+RandomStrain5.Value_effects_medical+"</h7>").appendTo(HybridMedical5);


    console.log(response);
  });

});