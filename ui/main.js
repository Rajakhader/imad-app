//Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
    
    //Make a request to counter endpoint
    var request = new XMLHttpRequest();
    
    //Capture response & strore it in a variable
   request.onreadystatechange = function() {
       if (request.readyState === XMLHttpRequest.Done) {
           // Take some action
           if (request.status === 200) {
               var counter = request.responseText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
           }
       }
       // Not done yet
   };
    
    //Make the request
    request.open('GET', 'http://rajarey19.imad.hasura-app.io/counter', true);
    request.send(null);
};