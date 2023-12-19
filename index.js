
var number = 0;
var welcomeMsg ="";


function add(){
    number++;
    document.getElementById("number").innerHTML = number;
}

function subtract(){
    number--;
    document.getElementById("number").innerHTML = number;
}

function submitForm() {
    // Get user input from form element(s)
    const userName = document.getElementById("username").value; // Assuming an "username" input field
  
    // Optional: additional processing or validation
  
    // Redirect to next page with user input parameters
    window.location.href = `dashboardPage.html?userName=${userName}`; // Replace "userName" with your actual parameter name based on form submission method (e.g., `name` attribute)
  
    return false; // Prevent default form submission (optional)
  }
  
  