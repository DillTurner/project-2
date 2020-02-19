$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();
    $('.modal').modal();


$.get("/api/all", function(response) {

for (var i = 0; i < 500; i++) {

    var Names = $('#column1');
$("<p>"+response[i].name+"</p>").appendTo(Names);

}
for (var i = 501; i < 1000; i++) {

    var Names2 = $('#column2');
$("<p>"+response[i].name+"</p>").appendTo(Names2);

}

for (var i = 1001; i < 1500; i++) {

    var Names3 = $('#column3');
$("<p>"+response[i].name+"</p>").appendTo(Names3);

}

for (var i = 1501; i < 1971; i++) {

    var Names4 = $('#column4');
$("<p>"+response[i].name+"</p>").appendTo(Names4);

}

console.log(response);
});

});