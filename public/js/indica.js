$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();

$.get("/api/indica", function(response) {

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

    var IndicaTitle = $('#titleIndica');
    $("<h2>"+RandomStrain.name+"</h2>").appendTo(IndicaTitle);

    var IndicaPositive = $('#positiveIndica');
    $("<h5>"+positive+"</h5>").appendTo(IndicaPositive);

    var IndicaNegative = $('#negativeIndica');
    $("<h5>"+negative+"</h5>").appendTo(IndicaNegative);

    var IndicaFlavors = $('#flavorsIndica');
    $("<h5>"+flavors+"</h5>").appendTo(IndicaFlavors);

    var IndicaMedical = $('#medicalIndica');
    $("<h5>"+medical+"</h5>").appendTo(IndicaMedical);
    
// Card 2
var RandomStrain2 = response[Math.floor(Math.random()*response.length)];
var positive2 = strings(RandomStrain2.Value_effects_positive);
var negative2 = strings(RandomStrain2.Value_effects_negative);
var medical2 = strings(RandomStrain2.Value_effects_medical);
var flavors2 = strings(RandomStrain2.Value_flavors);

var IndicaTitle2 = $('#titleIndica2');
$("<h4>"+RandomStrain2.name+"</h4>").appendTo(IndicaTitle2);

var IndicaPositive2 = $('#positiveIndica2');
$("<h7>"+positive2+"</h7>").appendTo(IndicaPositive2);

var IndicaNegative2 = $('#negativeIndica2');
$("<h7>"+negative2+"</h7>").appendTo(IndicaNegative2);

var IndicaFlavors2 = $('#flavorsIndica2');
$("<h7>"+flavors2+"</h7>").appendTo(IndicaFlavors2);

var IndicaMedical2 = $('#medicalIndica2');
$("<h7>"+medical2+"</h7>").appendTo(IndicaMedical2);

// Card 3
var RandomStrain3 = response[Math.floor(Math.random()*response.length)];
var positive3 = strings(RandomStrain3.Value_effects_positive);
var negative3 = strings(RandomStrain3.Value_effects_negative);
var medical3 = strings(RandomStrain3.Value_effects_medical);
var flavors3 = strings(RandomStrain3.Value_flavors);

var IndicaTitle3 = $('#titleIndica3');
$("<h4>"+RandomStrain3.name+"</h4>").appendTo(IndicaTitle3);

var IndicaPositive3 = $('#positiveIndica3');
$("<h7>"+positive3+"</h7>").appendTo(IndicaPositive3);

var IndicaNegative3 = $('#negativeIndica3');
$("<h7>"+negative3+"</h7>").appendTo(IndicaNegative3);

var IndicaFlavors3 = $('#flavorsIndica3');
$("<h7>"+flavors3+"</h7>").appendTo(IndicaFlavors3);

var IndicaMedical3 = $('#medicalIndica3');
$("<h7>"+medical3+"</h7>").appendTo(IndicaMedical3);

// Card 4
var RandomStrain4 = response[Math.floor(Math.random()*response.length)];
var positive4 = strings(RandomStrain4.Value_effects_positive);
var negative4 = strings(RandomStrain4.Value_effects_negative);
var medical4 = strings(RandomStrain4.Value_effects_medical);
var flavors4 = strings(RandomStrain4.Value_flavors);

var IndicaTitle4 = $('#titleIndica4');
$("<h4>"+RandomStrain4.name+"</h4>").appendTo(IndicaTitle4);

var IndicaPositive4 = $('#positiveIndica4');
$("<h7>"+positive4+"</h7>").appendTo(IndicaPositive4);

var IndicaNegative4 = $('#negativeIndica4');
$("<h7>"+negative4+"</h7>").appendTo(IndicaNegative4);

var IndicaFlavors4 = $('#flavorsIndica4');
$("<h7>"+flavors4+"</h7>").appendTo(IndicaFlavors4);

var IndicaMedical4 = $('#medicalIndica4');
$("<h7>"+medical4+"</h7>").appendTo(IndicaMedical4);

// Card 5
var RandomStrain5 = response[Math.floor(Math.random()*response.length)];
var positive5 = strings(RandomStrain5.Value_effects_positive);
var negative5 = strings(RandomStrain5.Value_effects_negative);
var medical5 = strings(RandomStrain5.Value_effects_medical);
var flavors5 = strings(RandomStrain5.Value_flavors);

var IndicaTitle5 = $('#titleIndica5');
$("<h4>"+RandomStrain5.name+"</h4>").appendTo(IndicaTitle5);

var IndicaPositive5 = $('#positiveIndica');
$("<h7>"+positive5+"</h7>").appendTo(IndicaPositive5);

var IndicaNegative5 = $('#negativeIndica5');
$("<h7>"+negative5+"</h7>").appendTo(IndicaNegative5);

var IndicaFlavors5 = $('#flavorsIndica');
$("<h7>"+flavors5+"</h7>").appendTo(IndicaFlavors5);

var IndicaMedical5 = $('#medicalIndica5');
$("<h7>"+medical5+"</h7>").appendTo(IndicaMedical5);

     

    });


});

