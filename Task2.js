
function validation()                          
{ 
    var name = document.forms["form"]["Name"];               
    var email = document.forms["form"]["EMail"];    
    var phone = document.forms["form"]["Telephone"];  
   
  var letters=/^[A-Za-z]+$/;
  var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phoneno=/^\d{10}$/;
 if((name.value.match(letters))&&(email.value.match(mailformat))&&(phone.value.match(phoneno)))
 {
	 alert('valid');
	 return true;
 } 
 else
 {
	 alert('invalid');
	 return false;
 }
}
