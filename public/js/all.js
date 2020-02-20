$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();
    $('.modal').modal();

    // $("#makeMain").click(function(){
    
    //     $('#strainName').empty();
    //     $('#positiveStrain').empty();
    //     $('#negativeStrain').empty();
    //     $('#medicalStrain').empty();
    //     $('#flavorsStrain').empty();

    //     var mainTitle = $('#strainName');
    //     $("<h4>"+response.name+"</h4>").appendTo(mainTitle);
        
    //     var mainPositive = $('#positiveHybrid');
    //     $("<h7>"+response.Value_effects_positive+"</h7>").appendTo(mainPositive);
        
    //     var mainNegative = $('#negativeHybrid5');
    //     $("<h7>"+response.Value_effects_negative+"</h7>").appendTo(mainNegative);
        
    //     var mainFlavors = $('#flavorsHybrid');
    //     $("<h7>"+response.Value_flavors+"</h7>").appendTo(mainFlavors);
        
    //     var mainMedical = $('#medicalHybrid5');
    //     $("<h7>"+response.Value_effects_medical+"</h7>").appendTo(mainMedical);
    
    // });
$.get("/api/all", function(response) {

        for (var i = 0; i < 50; i++) {

            var strains = $("#column1");
        $('<a href="#" id="makeMain"><p>'+response[i].name+'</p></a>').appendTo(strains);

        }

        for (var j = 51; j < 100; j++) {

            var strains2 = $('#column2');
        $("<p>"+response[j].name+"</p>").appendTo(strains2);

        }

        for (var k = 101; k < 150; k++) {

            var strains3 = $('#column3');
        $("<p>"+response[k].name+"</p>").appendTo(strains3);

        }

        for (var l = 151; l < 200; l++) {

            var strains4 = $('#column4');
        $("<p>"+response[l].name+"</p>").appendTo(strains4);

        }

        for (var m = 201; m < 250; m++) {

            var strains5 = $('#column5');
        $("<p>"+response[m].name+"</p>").appendTo(strains5);

        }

        for (var n = 251; n < 300; n++) {

            var strains6 = $('#column6');
        $("<p>"+response[n].name+"</p>").appendTo(strains6);

        }


console.log(response);
});


////////////////////////////// PAGE 1 //////////////////////////////
$("#page1").click(function(){

    $('#column1').empty();
    $('#column2').empty();
    $('#column3').empty();
    $('#column4').empty();
    $('#column5').empty();
    $('#column6').empty();

$.get("/api/all", function(response) {

    for (var i = 0; i < 50; i++) {

        var strains = $("#column1");
    $("<p>"+response[i].name+"</p>").appendTo(strains);

    }

    for (var j = 51; j < 100; j++) {

        var strains2 = $('#column2');
    $("<p>"+response[j].name+"</p>").appendTo(strains2);

    }

    for (var k = 101; k < 150; k++) {

        var strains3 = $('#column3');
    $("<p>"+response[k].name+"</p>").appendTo(strains3);

    }

    for (var l = 151; l < 200; l++) {

        var strains4 = $('#column4');
    $("<p>"+response[l].name+"</p>").appendTo(strains4);

    }

    for (var m = 201; m < 250; m++) {

        var strains5 = $('#column5');
    $("<p>"+response[m].name+"</p>").appendTo(strains5);

    }

    for (var n = 251; n < 300; n++) {

        var strains6 = $('#column6');
    $("<p>"+response[n].name+"</p>").appendTo(strains6);

    }

});
});


////////////////////////////// PAGE 2 //////////////////////////////
$("#page2").click(function(){

    $('#column1').empty();
    $('#column2').empty();
    $('#column3').empty();
    $('#column4').empty();
    $('#column5').empty();
    $('#column6').empty();

$.get("/api/all", function(response) {

    for (var i = 301; i < 350; i++) {

        var strains = $("#column1");
    $("<p>"+response[i].name+"</p>").appendTo(strains);

    }

    for (var j = 351; j < 400; j++) {

        var strains2 = $('#column2');
    $("<p>"+response[j].name+"</p>").appendTo(strains2);

    }

    for (var k = 401; k < 450; k++) {

        var strains3 = $('#column3');
    $("<p>"+response[k].name+"</p>").appendTo(strains3);

    }

    for (var l = 451; l < 500; l++) {

        var strains4 = $('#column4');
    $("<p>"+response[l].name+"</p>").appendTo(strains4);

    }

    for (var m = 501; m < 650; m++) {

        var strains5 = $('#column5');
    $("<p>"+response[m].name+"</p>").appendTo(strains5);

    }

    for (var n = 651; n < 700; n++) {

        var strains6 = $('#column6');
    $("<p>"+response[n].name+"</p>").appendTo(strains6);

    }

});
});


////////////////////////////// PAGE 3 //////////////////////////////
$("#page3").click(function(){

    $('#column1').empty();
    $('#column2').empty();
    $('#column3').empty();
    $('#column4').empty();
    $('#column5').empty();
    $('#column6').empty();

$.get("/api/all", function(response) {

    for (var i = 701; i < 750; i++) {

        var strains = $("#column1");
    $("<p>"+response[i].name+"</p>").appendTo(strains);

    }

    for (var j = 751; j < 800; j++) {

        var strains2 = $('#column2');
    $("<p>"+response[j].name+"</p>").appendTo(strains2);

    }

    for (var k = 801; k < 850; k++) {

        var strains3 = $('#column3');
    $("<p>"+response[k].name+"</p>").appendTo(strains3);

    }

    for (var l = 851; l < 900; l++) {

        var strains4 = $('#column4');
    $("<p>"+response[l].name+"</p>").appendTo(strains4);

    }

    for (var m = 901; m < 950; m++) {

        var strains5 = $('#column5');
    $("<p>"+response[m].name+"</p>").appendTo(strains5);

    }

    for (var n = 951; n < 1000; n++) {

        var strains6 = $('#column6');
    $("<p>"+response[n].name+"</p>").appendTo(strains6);

    }

});
});


////////////////////////////// PAGE 4 //////////////////////////////
$("#page4").click(function(){

    $('#column1').empty();
    $('#column2').empty();
    $('#column3').empty();
    $('#column4').empty();
    $('#column5').empty();
    $('#column6').empty();

$.get("/api/all", function(response) {

    for (var i = 1001; i < 1050; i++) {

        var strains = $("#column1");
    $("<p>"+response[i].name+"</p>").appendTo(strains);

    }

    for (var j = 1051; j < 1100; j++) {

        var strains2 = $('#column2');
    $("<p>"+response[j].name+"</p>").appendTo(strains2);

    }

    for (var k = 1101; k < 1150; k++) {

        var strains3 = $('#column3');
    $("<p>"+response[k].name+"</p>").appendTo(strains3);

    }

    for (var l = 1151; l < 1200; l++) {

        var strains4 = $('#column4');
    $("<p>"+response[l].name+"</p>").appendTo(strains4);

    }

    for (var m = 1201; m < 1250; m++) {

        var strains5 = $('#column5');
    $("<p>"+response[m].name+"</p>").appendTo(strains5);

    }

    for (var n = 1251; n < 1300; n++) {

        var strains6 = $('#column6');
    $("<p>"+response[n].name+"</p>").appendTo(strains6);

    }

});
});


////////////////////////////// PAGE 5 //////////////////////////////
$("#page5").click(function(){

    $('#column1').empty();
    $('#column2').empty();
    $('#column3').empty();
    $('#column4').empty();
    $('#column5').empty();
    $('#column6').empty();

$.get("/api/all", function(response) {

    for (var i = 1301; i < 1350; i++) {

        var strains = $("#column1");
    $("<p>"+response[i].name+"</p>").appendTo(strains);

    }

    for (var j = 1351; j < 1400; j++) {

        var strains2 = $('#column2');
    $("<p>"+response[j].name+"</p>").appendTo(strains2);

    }

    for (var k = 1401; k < 1450; k++) {

        var strains3 = $('#column3');
    $("<p>"+response[k].name+"</p>").appendTo(strains3);

    }

    for (var l = 1451; l < 1500; l++) {

        var strains4 = $('#column4');
    $("<p>"+response[l].name+"</p>").appendTo(strains4);

    }

    for (var m = 1501; m < 1550; m++) {

        var strains5 = $('#column5');
    $("<p>"+response[m].name+"</p>").appendTo(strains5);

    }

    for (var n = 1551; n < 1600; n++) {

        var strains6 = $('#column6');
    $("<p>"+response[n].name+"</p>").appendTo(strains6);

    }

});
});


////////////////////////////// PAGE 6 //////////////////////////////
$("#page6").click(function(){

    $('#column1').empty();
    $('#column2').empty();
    $('#column3').empty();
    $('#column4').empty();
    $('#column5').empty();
    $('#column6').empty();

$.get("/api/all", function(response) {

    for (var i = 1601; i < 1665; i++) {

        var strains = $("#column1");
    $("<p>"+response[i].name+"</p>").appendTo(strains);

    }

    for (var j = 1667; j < 1732; j++) {

        var strains2 = $('#column2');
    $("<p>"+response[j].name+"</p>").appendTo(strains2);

    }

    for (var k = 1733; k < 1798; k++) {

        var strains3 = $('#column3');
    $("<p>"+response[k].name+"</p>").appendTo(strains3);

    }

    for (var l = 1799; l < 1864; l++) {

        var strains4 = $('#column4');
    $("<p>"+response[l].name+"</p>").appendTo(strains4);

    }

    for (var m = 1865; m < 1930; m++) {

        var strains5 = $('#column5');
    $("<p>"+response[m].name+"</p>").appendTo(strains5);

    }

    for (var n = 1931; n < 1970; n++) {

        var strains6 = $('#column6');
    $("<p>"+response[n].name+"</p>").appendTo(strains6);

    }

});
});


});