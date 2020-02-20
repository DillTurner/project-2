$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.tabs').tabs();
    // back to top button------------
    $('.fixed-action-btn').floatingActionButton();
    $("#top1").click(function () {
       // $('#top1').addClass("scale-out");
        $("html, body").animate({scrollTop: 0}, 1000);

     });
     $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#top1').removeClass("scale-out");
        } else {
            $('#top1').addClass("scale-out");
        }
    });
    //-----------------------
$.get("/api/all", function(response) {
    console.log(response);
    addCard(response,0,50,1);
    addCard(response,51,100,2);
    addCard(response,101,150,3);
    addCard(response,151,200,4);
    addCard(response,201,250,5);
    addCard(response,251,300,6);
    addCard(response,301,350,7);
    addCard(response,351,400,8);
    addCard(response,401,450,9);
    addCard(response,451,500,10);
    addCard(response,501,550,11);
    addCard(response,551,600,12);
    addCard(response,601,650,13);
    addCard(response,651,700,14);
    addCard(response,701,750,15);
    addCard(response,751,800,16);
    addCard(response,801,850,17);
    addCard(response,851,900,18);
    addCard(response,901,950,19);
    addCard(response,951,1000,20);
    addCard(response,1001,1050,21);
    addCard(response,1051,1100,22);
    addCard(response,1101,1150,23);
    addCard(response,1151,1200,24);
    addCard(response,1201,1250,25);
    addCard(response,1251,1300,26);
    addCard(response,1301,1350,27);
    addCard(response,1351,1400,28);
    addCard(response,1401,1450,29);
    addCard(response,1451,1500,30);
    addCard(response,1501,1550,31);
    addCard(response,1551,1600,32);
    addCard(response,1601,1650,33);
    addCard(response,1651,1700,34);
    addCard(response,1701,1750,35);
    addCard(response,1751,1800,36);
    addCard(response,1801,1850,37);
    addCard(response,1851,1900,38);
    addCard(response,1901,1950,39);
    addCard(response,1951,1970,40);
    


});


function addCard(res,startCount,endCount,columnNum){
    for (var i = startCount; i < endCount; i++) {

        var strains = $('#column'+columnNum);
        var card= '<div class="card small">'
        card += '<div class="card-image waves-effect waves-block waves-light">'
        card += '<img class="activator" src="assets/images/janelogo.png"></div>'
        card += '<div class="card-content">'
        card += '<span class="card-title activator grey-text text-darken-4">'+res[i].name+'<i class="material-icons right">more_vert</i></span>'
        card += '<p><a href="#">This is a link</a></p></div>'
        card += '<div class="card-reveal">'
        card += '<span class="card-title grey-text text-darken-4">Info<i class="material-icons right">close</i></span>'
        card += '<h7>Race: '+ res[i].Value_race+'</h7>'
        card += '</div></div>'
        $(card).appendTo(strains);
    }
}

});
/*
////////////////////////////// PAGE 1 //////////////////////////////
$("#page1").click(function(){

    $('#column1').empty();
    $('#column2').empty();
    $('#column3').empty();
    $('#column4').empty();
    $('#column5').empty();
    $('#column6').empty();

$.get("/api/all", function(response) {
    
    addCard(response,0,50,1);
    addCard(response,51,100,2);
    addCard(response,101,150,3);
    addCard(response,151,200,4);
    addCard(response,201,250,5);
    addCard(response,251,300,6);

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
    addCard(response,301,350,1);
    addCard(response,351,400,2);
    addCard(response,401,450,3);
    addCard(response,451,500,4);
    addCard(response,501,550,5);
    addCard(response,551,600,6);


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

    for (var i = 751; i < 800; i++) {

        var strains2 = $('#column2');
    $("<p>"+response[i].name+"</p>").appendTo(strains2);

    }

    for (var i = 801; i < 850; i++) {

        var strains3 = $('#column3');
    $("<p>"+response[i].name+"</p>").appendTo(strains3);

    }

    for (var i = 851; i < 900; i++) {

        var strains4 = $('#column4');
    $("<p>"+response[i].name+"</p>").appendTo(strains4);

    }

    for (var i = 901; i < 950; i++) {

        var strains5 = $('#column5');
    $("<p>"+response[i].name+"</p>").appendTo(strains5);

    }

    for (var i = 951; i < 1000; i++) {

        var strains6 = $('#column6');
    $("<p>"+response[i].name+"</p>").appendTo(strains6);

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

    for (var i = 1051; i < 1100; i++) {

        var strains2 = $('#column2');
    $("<p>"+response[i].name+"</p>").appendTo(strains2);

    }

    for (var i = 1101; i < 1150; i++) {

        var strains3 = $('#column3');
    $("<p>"+response[i].name+"</p>").appendTo(strains3);

    }

    for (var i = 1151; i < 1200; i++) {

        var strains4 = $('#column4');
    $("<p>"+response[i].name+"</p>").appendTo(strains4);

    }

    for (var i = 1201; i < 1250; i++) {

        var strains5 = $('#column5');
    $("<p>"+response[i].name+"</p>").appendTo(strains5);

    }

    for (var i = 1251; i < 1300; i++) {

        var strains6 = $('#column6');
    $("<p>"+response[i].name+"</p>").appendTo(strains6);

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

    for (var i = 1351; i < 1400; i++) {

        var strains2 = $('#column2');
    $("<p>"+response[i].name+"</p>").appendTo(strains2);

    }

    for (var i = 1401; i < 1450; i++) {

        var strains3 = $('#column3');
    $("<p>"+response[i].name+"</p>").appendTo(strains3);

    }

    for (var i = 1451; i < 1500; i++) {

        var strains4 = $('#column4');
    $("<p>"+response[i].name+"</p>").appendTo(strains4);

    }

    for (var i = 1501; i < 1550; i++) {

        var strains5 = $('#column5');
    $("<p>"+response[i].name+"</p>").appendTo(strains5);

    }

    for (var i = 1551; i < 1600; i++) {

        var strains6 = $('#column6');
    $("<p>"+response[i].name+"</p>").appendTo(strains6);

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
    
    addCard(response,1601,1665,1);
    addCard(response,1667,1732,2);
    addCard(response,1733,1798,3);
    addCard(response,1799,1864,4);
    addCard(response,1865,1930,5);
    addCard(response,1931,1970,6);

    
});
});
*/