// api url 
const api_url =  
      "http://127.0.0.1:5000/API/resources/items/all"; 
  
// Defining async function 
async function getapi(url) { 
    
    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    console.log(data); 
    if (response) { 
        hideloader(); 
    } 
    showTbo(data); 
} 
// Calling that async function 
getapi(api_url); 


// Function to hide the loader 
function hideloader() { 
    document.getElementById('loading').style.display = 'none'; 
}

function showTbo(data) { 
    let tab =  
        `<tr> 
          <th>ID</th> 
          <th>NAME</th> 
          <th>QUANTITY</th> 
          <th>THRESHOLD</th>
          <th>Type</th>  
         </tr>`; 
    
    // Loop to access all rows  
    for (let r of data) { 
        
      if(r.qty <= r.threshold){
        tab += `<tr>  
           <td>${r.ID} </td> 
           <td>${r.name}</td> 
           <td>${r.qty}</td>  
           <td>${r.threshold}</td>
            <td>${r.type}</td>            
        </tr>`; 

      }
    } 
    // Setting innerHTML as tab variable 
    document.getElementById("items").innerHTML = tab; 
}  