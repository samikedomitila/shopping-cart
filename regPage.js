 
function myFunction() {
    document.getElementById("myForm").submit();
    alert("your are now registered")
  }

function formValidation() {
    var name = document.getElementById("inputName").value;
    var  email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    var conPassword = document.getElementById("inputConPassword").value;

    if (name==""|| email==""||password==""||conPassword=="") {
        alert("Please fill the form!");
             }
    else if ((password.length) < 8) {
      alert("Your password should have more than 8 characters!");
          } 

    else if (!(conPassword.match(password))) {
     alert("Your password dont match.Try again!");
        } 
      else {
          myFunction()
     }
                          
 }
  
