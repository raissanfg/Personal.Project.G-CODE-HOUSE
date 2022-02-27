function toggleDarkMode() {
  let bodyElement = document.getElementById("main-background"); // target the body element
  let darkModeButtonElement = document.getElementById("dark-mode"); //target the dark mode button

   // if background is black, change background to white
  if (bodyElement.style.background === "black") {  // triple equals for strict typing
   (bodyElement.style.background = "#FFFFFF");

  }

 // if background is not white, change background to black

else {
  console.log ("hi");
     bodyElement.style.background = "black"; // set background to black
  }

}