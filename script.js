//your JS code here. If required.
// Function to introduce a delay using Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle form submission
async function displayMessage() {
  // Get the user input values
  const text = document.getElementById("text").value;
  const delayTime = Number(document.getElementById("delay").value);

  // Validate input
  if (!text || isNaN(delayTime) || delayTime < 0) {
    alert("Please enter valid text and a non-negative delay.");
    return;
  }

  // Introduce the specified delay
  await delay(delayTime);

  // Display the text in the output div
  document.getElementById("output").textContent = text;
}

// Add event listener to the button
document.getElementById("btn").addEventListener("click", displayMessage);
