$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();
    $('.modal').modal();


$.get("/api/all", function(response) {

for (var i = 0; i < 500; i++) {

    var Names = $('#column1');
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

for (var l = 1501; l < 1971; l++) {

    var Names4 = $('#column4');
$("<p>"+response[l].name+"</p>").appendTo(Names4);

}

console.log(response);
});

});