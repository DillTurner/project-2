

/*$(document).ready(function(){

	var lv = new LoginValidator();
    var lc = new LoginController();
    
    const visibilityToggle = document.querySelector(".visibility");
  const input = document.querySelector(".pass");
  let pwVisible = false;

  visibilityToggle.addEventListener("click", function() {
    if (pwVisible === false) {
      input.setAttribute("type", "text");
      pwVisible = true;
    } else {
      input.setAttribute("type", "password");
      pwVisible = false;
    }
  });

// main login form //

	$('#login').ajaxForm({
		beforeSubmit : function(formData, jqForm, options){
			if (lv.validateForm() == false){
				return false;
			} 	else{

				return true;
			}
		},
		success	: function(responseText, status, xhr, $form){
			if (status == 'success') window.location.href = '/index';
		},
		error : function(e){
			lv.showLoginError('Login Failure', 'Please check your username and/or password');
		}
	});});*/
	$(document).ready(function(){
		$("#submitInfo").on("click",function(event){
			alert( "Handler for .submit() called." );
			event.preventDefault();
			var login = {
			user : $("#username").val().trim(),
			pass: $("pass").val()
			}
			$.post("/auth/",login).then(function(response){
				console.log(response);
			})
		})
		//$.post("/api/auth",user,pass).then(function(){
			//console.log(res);
		//})

		
	})