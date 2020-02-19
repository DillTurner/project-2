$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();

$.get("/api/indica", function(response) {

    var RandomStrain = response[Math.floor(Math.random()*response.length)];
    var RandomStrain3 = response[Math.floor(Math.random()*response.length)];
    var RandomStrain4 = response[Math.floor(Math.random()*response.length)];
    var RandomStrain5 = response[Math.floor(Math.random()*response.length)];

// Card 1
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

      console.log(response);

    });

});
