
// Registracija
if (document.getElementById("registerForm")) {
  document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    
    if (localStorage.getItem(username)) {
      alert("Korisničko ime već postoji!");
    } else {
      localStorage.setItem(username, password);
      alert("Registracija uspešna!");
      localStorage.setItem("loggedInUser", username);
      window.location.href = "index.html";
    }
  });
}

// Prijava
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      localStorage.setItem("loggedInUser", username);
      alert("Prijava uspešna!");
      window.location.href = "Anime.html";
    } else {
      alert("Pogrešno korisničko ime ili šifra.");
    }
  });
}

// Početna stranica – prikaz imena
if (document.getElementById("accountInfo")) {
  const user = localStorage.getItem("loggedInUser");
  if (user) {
    document.getElementById("accountInfo").innerText = "Račun: " + user;
  } else {
    window.location.href = "login.html"; // Nije prijavljen
  }
}

// Odjava
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
