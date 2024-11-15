

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// Client Side Storage

// Example: Storing user preferences
const userPreferences = {
    theme: 'dark',
    fontSize: '16px'
};

// Retrieve and parse the user preferences
const storedPreferences = JSON.parse(localStorage.getItem('userPreferences'));

if (storedPreferences) {
    console.log(storedPreferences.theme); // Output: dark
}
// Remove the user preferences from localStorage
localStorage.removeItem('userPreferences');
// Clear all data from localStorage
localStorage.clear();
if (typeof(Storage) !== "undefined") {
    // Code for localStorage
} else {
    console.log("Sorry, your browser does not support web storage...");
}

