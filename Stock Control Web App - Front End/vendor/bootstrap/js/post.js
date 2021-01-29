function sendJSON(){ 
	
	// Creating a XHR object 
	let xhr = new XMLHttpRequest(); 
	let url = "http://127.0.0.1:5000/API/resources/items/post"; 
        
     
    // open a connection 
	xhr.open("POST", url, true); 
  
    

    // Set the request header i.e. which type of content you are sending 
	xhr.setRequestHeader("Content-Type", "application/json"); 
  
    

    // Create a state change callback 
	
	xhr.onreadystatechange = function () { 
    	if (xhr.readyState === 4 && xhr.status === 200) { 
  
                  // Print received data from server 
        	result.innerHTML = this.responseText; 
  
    	} 
	}; 
  
	var formName = document.getElementById("inputName").value;
	var formQty = parseInt(document.getElementById("inputQty").value);
	var formThresh = parseInt(document.getElementById("inputThresh").value);
	var formType = document.getElementById("inputType").value;


	var myObj = { name: formName , quantity : formQty, threshold : formThresh, type : formType};

	var myJSON = JSON.stringify(myObj);

	console.log(myObj);
	console.log(myJSON);

	xhr.send(myJSON); 
	
}