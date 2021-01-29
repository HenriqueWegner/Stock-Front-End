function sendJSON(){ 
	
	// Creating a XHR object 
	let xhr = new XMLHttpRequest(); 
	let url = "http://127.0.0.1:5000/API/resources/items/delete"; 
        
     
    // open a connection 
	xhr.open("DELETE", url, true); 
  
    

    // Set the request header i.e. which type of content you are sending 
	xhr.setRequestHeader("Content-Type", "application/json"); 
  
    

    // Create a state change callback 
	
	xhr.onreadystatechange = function () { 
    	if (xhr.readyState === 4 && xhr.status === 200) { 
  
                  // Print received data from server 
        	result.innerHTML = this.responseText; 
  
    	} 
	}; 
  
	var formID = document.getElementById("inputDelete").value;
	


	var myObj = { ID: formID };

	var myJSON = JSON.stringify(myObj);

	console.log(myObj);
	console.log(myJSON);

	xhr.send(myJSON); 
	
}