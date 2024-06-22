// Add your code here
function submitData(name, email) {
    // Create the data object
    const formData = {
      name: name,
      email: email
    };
  
    // Create the configuration object for the POST request
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    // Send the POST request and handle the response
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => {
        // Parse the response as JSON
        return response.json();
      })
      .then(object => {
        // Append the new ID to the DOM
        const newId = document.createElement("p");
        newId.textContent = `New User ID: ${object.id}`;
        document.body.appendChild(newId);
      })
      .catch(error => {
        // Handle any errors
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessage);
      });
  }
  submitData("Alice", "alice@example.com");
  
