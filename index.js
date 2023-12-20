
var number = 0;
var welcomeMsg = "";


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


function createToast(message, alertType) {
  var toastContainer = document.getElementById('toastContainer');
  var maxToasts = 2;

  // Check if the maximum number of toasts is reached
  if (toastContainer.childElementCount >= maxToasts) {
    // If reached, remove the oldest toast
    toastContainer.removeChild(toastContainer.firstChild);
  }

  // Create a new toast element
  var toastDiv = document.createElement('div');
  toastDiv.className = 'toast';
  toastDiv.setAttribute('role', 'alert');
  toastDiv.setAttribute('aria-live', 'assertive');
  toastDiv.setAttribute('aria-atomic', 'true');

  // Add Bootstrap alert class based on alertType
  toastDiv.classList.add('toast', 'm-1', 'bg-' + alertType);

  if(alertType == "warning"){
    toastDiv.innerHTML = `<div class="toast-header toastHeaderYellow"><strong class="mr-auto text-light">` + '</strong><button type="button" class="ml-2 mb-1 close" aria-label="Close">&times;</button></div><div class="toast-body">' + message + '</div>';
  }
  else{
    toastDiv.innerHTML = `<div class="toast-header toastHeader"><strong class="mr-auto text-light">` + '</strong><button type="button" class="ml-2 mb-1 close" aria-label="Close">&times;</button></div><div class="toast-body">' + message + '</div>';
  }
  // Set the width of the toast
  toastDiv.style.minWidth = '200px'; // Adjust the width as needed
  toastDiv.style.position = 'static'; // Allow stacking downward

  // Append the toast to the toastContainer
  toastContainer.appendChild(toastDiv);

  // Show the toast
  var toast = new bootstrap.Toast(toastDiv, { animation: true });
  toast.show();

  // Add an event listener to close the toast when the close button is clicked
  var closeButton = toastDiv.querySelector('.close');
  closeButton.addEventListener('click', function () {
    toast.hide();
  });
}

  


infoPisang = [];
listPisang = [];
var bayar = 0;
function beliPisang(order){
    jenisPisang = 
    [{nama:"pisang premium", harga: 5,type: "premium"},
    {nama:"pisang lebih premium", harga: 7,type: "premium+"},
    {nama:"pisang jauh lebih premium", harga: 10,type: "premium++"},
    {nama:"pisang keren", harga: 12,type: "premium+++"},
    {nama:"pisang premium dan keren", harga: 15,type: "premium++++"},
    {nama:"racun", harga: 21,type: "premium+++++"}]
    listPisang = [];
    infoPisang = [];

    for(i = 0; i < jenisPisang.length; i++){
        if(order == jenisPisang[i].nama){
            bayar += jenisPisang[i].harga;
            console.log(`harga = ${jenisPisang[i].harga}`)
            console.log(`total = ${bayar}`)
            createToast(`${jenisPisang[i].nama} succesfully added to cart.`, 'white');
            listPisang.push(`${jenisPisang[i].nama} (${jenisPisang[i].harga} jt)`);
            infoPisang.push(jenisPisang[i].nama)
            document.getElementById('total').innerHTML = `Total: Rp ${bayar} jt`;
        }
    }
    console.log(listPisang)
    var ul = document.createElement('ul');

    
    if(order == "clear"){
        listContainer = ""
    }

    listPisang.forEach(element => {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(element));
        ul.appendChild(li);
      });
      
      if(order != "clear"){
        var listContainer = document.getElementById('listContainer')
        listContainer.appendChild(ul);
      }
      else{
        document.getElementById('listContainer').innerHTML = ""
        document.getElementById('total').innerHTML = "Total: Rp 0"
      }
}

function clearCart(){
    createToast("Cleared Cart!","warning")
    listPisang.length = 0;
    bayar = 0
    beliPisang("clear")
}

function purchase(list){

}