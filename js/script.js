const GOOGLE_CLIENT_ID = "387067754605-fq2fsrp7tpiqa1qf4dlvhefpeu7vp5dh.apps.googleusercontent.com";

function handleGoogleResponse(response) {
    console.log("Registering with Google...");

    const data = decodeJwtResponse(response.credential);
    console.log("Verified: " + data.email);

    alert("Google Account Verified! Please Login to continue.");
    window.location.href = "login.html";
}

function handleGoogleLogin(response) {
    const responsePayload = decodeJwtResponse(response.credential);
    
    localStorage.setItem("userName", responsePayload.name);
    localStorage.setItem("isLoggedIn", "true");

    alert("Welcome back, " + responsePayload.name + "!");
    window.location.href = "index.html"; 
}

function decodeJwtResponse(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}


document.addEventListener("DOMContentLoaded", () => {
    
    const registerForm = document.querySelector('form[action="login.html"]');
    if (registerForm && window.location.pathname.includes("register.html")) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Registration Successful! Redirecting to Login...");
            window.location.href = "login.html";
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            localStorage.setItem("isLoggedIn", "true");
            alert("Login Successful! Welcome to Roelle Portfolio.");
            window.location.href = "index.html";
        });
    }

    const logoutBtn = document.querySelector('a[href="register.html"]'); 
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {

            localStorage.clear();
            console.log("User logged out.");
        });
    }
});