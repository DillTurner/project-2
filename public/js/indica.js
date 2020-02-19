$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();

$.get("/api/indica", function(response) {

// Card 1
    var RandomStrain = response[Math.floor(Math.random()*response.length)];

    var IndicaTitle = $('#titleIndica');
    $("<h2>"+RandomStrain.name+"</h2>").appendTo(IndicaTitle);

    var IndicaPositive = $('#positiveIndica');
    $("<h5>"+RandomStrain.Value_effects_positive+"</h5>").appendTo(IndicaPositive);

    var IndicaNegative = $('#negativeIndica');
    $("<h5>"+RandomStrain.Value_effects_negative+"</h5>").appendTo(IndicaNegative);

    var IndicaFlavors = $('#flavorsIndica');
    $("<h5>"+RandomStrain.Value_flavors+"</h5>").appendTo(IndicaFlavors);

    var IndicaMedical = $('#medicalIndica');
    $("<h5>"+RandomStrain.Value_effects_medical+"</h5>").appendTo(IndicaMedical);
    
// Card 2
    var RandomStrain2 = response[Math.floor(Math.random()*response.length)];

    var IndicaTitle2 = $('#titleIndica2');
    $("<h5>"+RandomStrain2.name+"</h5>").appendTo(IndicaTitle2);

    var IndicaPositive2 = $('#positiveIndica2');
    $("<h7>"+RandomStrain2.Value_effects_positive+"</h7>").appendTo(IndicaPositive2);

    var IndicaNegative2 = $('#negativeIndica2');
    $("<h7>"+RandomStrain2.Value_effects_negative+"</h7>").appendTo(IndicaNegative2);

    var IndicaFlavors2 = $('#flavorsIndica2');
    $("<h7>"+RandomStrain2.Value_flavors+"</h7>").appendTo(IndicaFlavors2);

    var IndicaMedical2 = $('#medicalIndica2');
    $("<h7>"+RandomStrain2.Value_effects_medical+"</h7>").appendTo(IndicaMedical2);

// Card 3
    var RandomStrain3 = response[Math.floor(Math.random()*response.length)];

    var IndicaTitle3 = $('#titleIndica3');
    $("<h5>"+RandomStrain3.name+"</h5>").appendTo(IndicaTitle3);

    var IndicaPositive3 = $('#positiveIndica3');
    $("<h7>"+RandomStrain3.Value_effects_positive+"</h7>").appendTo(IndicaPositive3);

    var IndicaNegative3 = $('#negativeIndica3');
    $("<h7>"+RandomStrain3.Value_effects_negative+"</h7>").appendTo(IndicaNegative3);

    var IndicaFlavors3 = $('#flavorsIndica3');
    $("<h7>"+RandomStrain3.Value_flavors+"</h7>").appendTo(IndicaFlavors3);

    var IndicaMedical3 = $('#medicalIndica3');
    $("<h7>"+RandomStrain3.Value_effects_medical+"</h7>").appendTo(IndicaMedical3);

// Card 4
    var RandomStrain4 = response[Math.floor(Math.random()*response.length)];

    var IndicaTitle4 = $('#titleIndica4');
    $("<h5>"+RandomStrain4.name+"</h5>").appendTo(IndicaTitle4);

    var IndicaPositive4 = $('#positiveIndica4');
    $("<h7>"+RandomStrain4.Value_effects_positive+"</h7>").appendTo(IndicaPositive4);

    var IndicaNegative4 = $('#negativeIndica4');
    $("<h7>"+RandomStrain4.Value_effects_negative+"</h7>").appendTo(IndicaNegative4);

    var IndicaFlavors4 = $('#flavorsIndica4');
    $("<h7>"+RandomStrain4.Value_flavors+"</h7>").appendTo(IndicaFlavors4);

    var IndicaMedical4 = $('#medicalIndica4');
    $("<h7>"+RandomStrain4.Value_effects_medical+"</h7>").appendTo(IndicaMedical4);

// Card 5
    var RandomStrain5 = response[Math.floor(Math.random()*response.length)];

    var IndicaTitle5 = $('#titleIndica5');
    $("<h5>"+RandomStrain5.name+"</h5>").appendTo(IndicaTitle5);

    var IndicaPositive5 = $('#positiveIndica5');
    $("<h7>"+RandomStrain5.Value_effects_positive+"</h7>").appendTo(IndicaPositive5);

    var IndicaNegative5 = $('#negativeIndica5');
    $("<h7>"+RandomStrain5.Value_effects_negative+"</h7>").appendTo(IndicaNegative5);

    var IndicaFlavors5 = $('#flavorsIndica5');
    $("<h7>"+RandomStrain5.Value_flavors+"</h7>").appendTo(IndicaFlavors5);

    var IndicaMedical5 = $('#medicalIndica5');
    $("<h7>"+RandomStrain5.Value_effects_medical+"</h7>").appendTo(IndicaMedical5);


      console.log(response);

    });

});