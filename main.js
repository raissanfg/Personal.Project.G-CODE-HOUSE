function toggleDarkMode() {
    let bodyElement = document.getElementById("main-background");
    let darkModeButtonElement = document.getElementById("dark-mode-btn");
    console.log('backgroundImage', bodyElement.style.background)
    // if the background is black, change background to tan
    if ( bodyElement.style.background  == "white") {
      console.log('hi')
        bodyElement.style.background = "linear-gradient( to top, rgb(123, 151, 123) , rgb(20, 24, 23))";
      
     
        darkModeButtonElement.innerHTML = "Light Mode!";

    }
   
    // If background is tan, change background to black 

    else {
        console.log('goodbye')
        bodyElement.style.background = "white"
        darkModeButtonElement.innerHTML = "Dark Mode!";

    }
}
