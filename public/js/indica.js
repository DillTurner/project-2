$(document).ready(function(){
    $('.sidenav').sidenav();

$.get("/api/indica", function(response) {

    var RandomStrain = response[Math.floor(Math.random()*response.length)];

    
    var IndicaTitle = $('#titleIndica');
    $("<h3>"+RandomStrain.name+"</h3>").appendTo(IndicaTitle);

    var IndicaPositive = $('#positiveIndica');
    $("<h5>"+RandomStrain.Value_effects_positive+"</h5>").appendTo(IndicaPositive);

    var IndicaNegative = $('#negativeIndica');
    $("<h5>"+RandomStrain.Value_effects_negative+"</h5>").appendTo(IndicaNegative);

    var IndicaFlavors = $('#flavorsIndica');
    $("<h5>"+RandomStrain.Value_flavors+"</h5>").appendTo(IndicaFlavors);

    var IndicaMedical = $('#medicalIndica');
    $("<h5>"+rRandomStrain.Value_effects_medical+"</h5>").appendTo(IndicaMedical);

    
      console.log(response);

    });

});