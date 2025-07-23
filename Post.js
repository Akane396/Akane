
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

function toggleMenu() {
  const menu = document.getElementById("userMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.onload = function () {
  const icon = document.getElementById("userIcon");
  if (icon) {
    const user = localStorage.getItem("loggedInUser");
    if (!user) {
      window.location.href = "login.html";
    } else {
      const savedIcon = localStorage.getItem("avatar_" + user);
      if (savedIcon) {
        icon.src = savedIcon;
      }
    }
  }
};

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
      window.location.href = "index.html";
    } else {
      alert("Pogrešno korisničko ime ili šifra.");
    }
  });
}
