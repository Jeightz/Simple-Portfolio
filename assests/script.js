
let isToggle = false; 

document.getElementById("dark-mode-button").addEventListener("click", () => {
    document.body.classList.toggle('darkmode');

    if (isToggle) {
        document.getElementById("dark-mode-icon").src = "https://cdn-icons-png.flaticon.com/128/4139/4139153.png";
        isToggle = false;
    } else {
        document.getElementById("dark-mode-icon").src = "https://cdn-icons-png.flaticon.com/128/5316/5316746.png";
        isToggle = true;
        console.log("script loaded");
    }
});
