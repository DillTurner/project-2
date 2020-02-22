$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.tabs').tabs();
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
$.get("/api/all", function(response) {
        
    console.log(response);
for (var i = 0; i < 250; i++) {

    var Names = $('#a_c');
$("<p>"+response[i].name+"</p>").appendTo(Names);

}
for (var i = 251; i < 500; i++) {

    var Names = $('#c');
$("<p>"+response[i].name+"</p>").appendTo(Names);

}
for (var j = 501; j < 1000; j++) {

    var Names2 = $('#column2');
$("<p>"+response[j].name+"</p>").appendTo(Names2);

}

for (var k = 1001; k < 1500; k++) {

    var Names3 = $('#column3');
$("<p>"+response[k].name+"</p>").appendTo(Names3);

}

for (var l = 1501; l < 1970; l++) {

    var Names4 = $('#column4');
$("<p>"+response[l].name+"</p>").appendTo(Names4);

}

});

});