document.getElementById("dark-mode-button").addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    hamburger.textContent = mobileMenu.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        hamburger.textContent = "☰";
    });
});

document.getElementById("send").addEventListener("click", () => {
    const message = document.getElementById("message").value.trim();
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (message === "") {
        alert("Please enter a message.");
        return;
    }
    if (email === "") {
        alert("Please enter your email.");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    alert("Message sent successfully!");
    document.getElementById("message").value = "";
    document.getElementById("email").value = "";
});