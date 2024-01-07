document.getElementById("submit").onclick = function(){

   var namee = document.getElementById("name").value
   var email = document.getElementById("email").value
   var subject = document.getElementById("subject").value
   var message = document.getElementById("message").value
   //alert(`${namee} ${email} ${subject} ${message}`); //testez sa vad ca se stocheaza string-ul
  
    var service = 0;

    if(document.getElementById("vehicle1").checked && document.getElementById("vehicle2").checked && document.getElementById("vehicle3").checked){
        service = 10000 + 50000 + 100000
    } else if(document.getElementById("vehicle1").checked && document.getElementById("vehicle2").checked){
        service = 10000 + 50000
    }else if(document.getElementById("vehicle2").checked && document.getElementById("vehicle3").checked){
        service = 50000 + 100000
    }else if(document.getElementById("vehicle1").checked && document.getElementById("vehicle3").checked){
        service = 10000 + 100000
    }else if(document.getElementById("vehicle1").checked) {
        service = 10000
    } else if(document.getElementById("vehicle2").checked) {
        service = 50000
    } else if(document.getElementById("vehicle3").checked) {
        service = 100000
    }
    alert(`${namee} Your Total price for the selected services is ${service} and your ${email} and other infos have been saved`);

}
