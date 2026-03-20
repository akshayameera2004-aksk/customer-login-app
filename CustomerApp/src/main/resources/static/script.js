function signup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:8080/api/signup", {  // ✅ make sure /api/signup matches your controller
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => {
        if(response.ok) {
            return response.text();
        } else {
            return response.text().then(text => { throw new Error(text) });
        }
    })
    .then(data => {
        alert(data); // Shows "Signup Successful!"
        // ✅ Redirect automatically after signup
        window.location.href = "login.html";
    })
    .catch(error => {
        alert("Error: " + error.message);
    });
}
function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    fetch("http://localhost:8080/api/login", { // ✅ /api/login matches your controller
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if(response.ok) {
            return response.text();
        } else {
            return response.text().then(text => { throw new Error(text) });
        }
    })
    .then(data => {
        alert(data); // Shows "Login Successful!"
        // ✅ Redirect to a success page if login successful
        if(data.includes("Login Successful")) {
            window.location.href = "success.html"; // create a simple success page
        }
    })
    .catch(error => {
        alert("Error: " + error.message);
    });
}
