// Tab functionality that displays sections based off specfic tab user clicks on 
function openTab(curTab) {
    var i, tabcontent, tablinks;

    // Get the tab section and set them to display nothing  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the primary class that highligts the tab
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("primary");
    }

    // Set the primary class and tab section data to the tablink that the user clicks on
    var clickedTab = document.getElementById(curTab);
    if (clickedTab) {
        clickedTab.style.display = "block";
        var clickedButton = event.target;
        clickedButton.classList.add("primary");
    }
}

// Sets gamingTab as main tab when page loads
window.onload = function () {
    var gamingTab = document.getElementById('gamingTab');
    gamingTab.click();
};