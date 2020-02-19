$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();
    $('.modal').modal();


$.get("/api/all", function(response) {

for (var i = 0; i < respones.length; i++) {

    var Names = $('#allStrains');
$("<p>"+response[i].name+"</p>").appendTo(Names);

    console.log(response);
}});

});