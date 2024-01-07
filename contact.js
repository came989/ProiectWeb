document.getElementById("submit").onclick = function(){

   var namee = document.getElementById("name").value
   var email = document.getElementById("email").value
   var subject = document.getElementById("subject").value
   var message = document.getElementById("message").value
   alert(`${namee} ${email} ${subject} ${message}`); //testez sa vad ca se stocheaza string-ul
    var service1 = 0;
    var service2 = 0;
    var service3 = 0;
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
    //alert(`${service}`);
   /* var product = 0 
  var vehicle1 = document.getElementById("vehicle1").value
  var vehicle2 = document.getElementById("vehicle2").value
  var vehicle3 = document.getElementById("vehicle3").value
  product = vehicle1 + vehicle2 + vehicle3
  alert(`${product}`);
  */
}