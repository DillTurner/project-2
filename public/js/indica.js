$(document).ready(function(){
    $('.sidenav').sidenav();

$.get("/api/indica", function(response) {
    var IndicaTitle = $('#titleIndica');
    $("<h3>"+response[0].name+"</h3>").appendTo(IndicaTitle);

    var IndicaPositive = $('#positiveIndica');
    $("<h3>"+response[0].Value_effects_positive+"</h3>").appendTo(IndicaPositive);

    var IndicaNegative = $('#negativeIndica');
    $("<h3>"+response[0].Value_effects_negative+"</h3>").appendTo(IndicaNegative);

    var IndicaFlavors = $('#flavorsIndica');
    $("<h3>"+response[0].Value_flavors+"</h3>").appendTo(IndicaFlavors);

    var IndicaMedical = $('#medicalIndica');
    $("<h3>"+response[0].Value_effects_medical+"</h3>").appendTo(IndicaMedical);





      console.log(response);

    });

});