alert ("Attention à votre mot de passe")

// Sélection des éléments du DOM
const passwordInput = document.querySelector('#password');
const toggleBtn = document.querySelector('#togglePassword');
const strengthBar = document.querySelector('#strengthBar');
const strengthText = document.querySelector('#strengthText');
const bgBtn = document.querySelector('#bgBtn');

// Force du mot de passe 
passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;
    let strength = 0;

    if (value.length > 0) strength = 1;      // Faible (Rouge)
    if (value.length > 5) strength = 2;      // Moyen (Orange)
    if (value.length > 10) strength = 3;     // Fort (Vert)

    // Changement de couleur
    if (strength === 0) {
        strengthBar.style.width = "0%";
        strengthText.textContent = "";
    } else if (strength === 1) {
        strengthBar.style.width = "33%";
        strengthBar.style.backgroundColor = "red";
        strengthText.textContent = "Force : Faible";
        strengthText.style.color = "red";
    } else if (strength === 2) {
        strengthBar.style.width = "66%";
        strengthBar.style.backgroundColor = "orange";
        strengthText.textContent = "Force : Moyen";
        strengthText.style.color = "orange";
    } else {
        strengthBar.style.width = "100%";
        strengthBar.style.backgroundColor = "green";
        strengthText.textContent = "Force : Fort";
        strengthText.style.color = "green";    }
});

// Afficher/Masquer le mot de passe 
toggleBtn.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    toggleBtn.textContent = type === 'password' ? '👁️' : '🙈';
});

// Afficher/Masquer l'image d'arrière-plan
bgBtn.addEventListener('click', () => {
    if (document.body.style.backgroundImage === "") {
        document.body.style.backgroundImage = "url('image 1.webp')";
        document.body.style.backgroundSize = "cover";
    } else {
        document.body.style.backgroundImage = "";
    }
});