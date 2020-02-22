$(document).ready(function(){
    // activate sidenav feature
    $('.sidenav').sidenav();
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
        var card= '<div id= "card" data-id='+res[i].id+' class="card hoverable small">'
        card += '<div data-id='+res[i].id+' class="card-image waves-effect waves-block waves-light">'
        card += '<img data-id='+res[i].id+' src="assets/images/janelogo.png"></div>'
        card += '<div data-id='+res[i].id+' class="card-content">'
        card += '<span class="card-title grey-text text-darken-4">'+res[i].name
        card += '</div>'
        card += '<div data-id='+res[i].id+ ' class="card-action "><a data-id='+res[i].id+ ' class="green-text" href="#">More Info!</a></div>'
        card += '<div class="card-reveal">'
        card += '<span class="card-title grey-text text-darken-4">Info<i class="material-icons right">close</i></span>'
        card += '<h7>Race: '+ res[i].Value_race+'</h7>'
        card += '</div></div>'
        $(card).appendTo(strains);
    }
}
$(document).on("click","div.card",function(event) {
  var test = $(event.target).attr('data-id');
 
  if(test==undefined){
    return;
  }else{
    $.get('/api/strain/'+test,function(response){
        makeHeader(response);
        $("html, body").animate({scrollTop: 0}, 800);

    });
  }
  });
  function strings(str){
 
    var newstr= str.replace(/,/g, ' ');

  return newstr;
};

  function makeHeader(res,){
    var headerID = $('#headerInfo');
    headerID.empty(); 
    var positive = strings(res.Value_effects_positive);
    var negative = strings(res.Value_effects_negative);
    var medical = strings(res.Value_effects_medical);
    var flavors = strings(res.Value_flavors);
    // create our card for the specific strain chosen
      var info = '<div class=" row ">'
      info += '<div class="col s12 m1"></div>'
      info += '<div class="col s12 m10">'
      info += '<div class = "card grey lighten-2 center-align" id="mainContent" style="padding-top:5px; padding-bottom:5px; padding-left:10px; padding-right:10px;">'
      info += '<div class="mainInfo">'
      info += '<h3>'+res.name+'</h3>'
      info += '<h6>Race: '+res.Value_race+'</ht>'
      info += '<div class = " row ">'
      info += '<div class = "col s12 m6">'
      info += '<h3>Positive Effects:</h3>'
      info += '<h6>'+positive+'</h6></p></div>'
      info += '<div class = "col s12 m6">'
      info += '<h3>Negative Effects:</h3>'
      info += '<h6>'+negative+'</h6></div></div>'
      info += '<div class = " row ">'
      info += '<div class = "col s12 m6 center-align">'
      info += '<button data-target="modal1" class="btn modal-trigger green darken-2">Medical Uses<i class = "material-icons">local_hospital</i></button>'
      info += '<div id="modal1" class="modal">'
      info += '<div class="modal-content"><h4>Medical Uses</h4><h6>Used to Treat: '+medical+'</h6></div>'
      info += '<div class="modal-footer"><a href="#!" class="modal-close waves-effect green darken-2 btn">Close</a></div></div></div>'
      info += '<div class = "col s12 m6 center-align">'
      info += '<button data-target="modal2" class="btn modal-trigger green darken-2">Strain Flavors<i class = "material-icons">local_florist</i></button>'
      info += '<div id="modal2" class="modal">'
      info += '<div class="modal-content"><h4>Stain flavors</h4><p><h6>'+flavors+'</h6></p></div>'
      info += '<div class="modal-footer"><a href="#!" class="modal-close waves-effect green darken-2 btn">Close</a></div></div></div></div></div></div>'
      info += '<div class="col s12 m1"></div></div>'
      $(info).appendTo(headerID);

      $('.modal').modal();

  
  }
});
