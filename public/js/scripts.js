/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
    //alert("Oh");
    navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}


/*=============== MUDAR ICON HEART LINE PARA FILL ===============*/
const icon = document.getElementById('heart-icon');

icon.addEventListener('mouseenter', () => {
    icon.classList.remove('ri-heart-line');
    icon.classList.add('ri-heart-fill');
    icon.style.visibility = 'visible'; // Torna o ícone visível
    icon.style.opacity = '1'; // Define opacidade para 100%
});

icon.addEventListener('mouseleave', () => {
    if (!icon.classList.contains('ri-heart-fill')) {
        icon.classList.remove('ri-heart-fill');
        icon.classList.add('ri-heart-line');
        icon.style.opacity = '0'; // Define opacidade para 0%
        icon.style.visibility = 'hidden'; // Torna o ícone invisível
    }
});

icon.addEventListener('click', () => {
    icon.style.visibility = 'visible'; // Garante que o ícone fique visível
    icon.style.opacity = '1'; // Garante opacidade 100%
    icon.classList.remove('ri-heart-line'); // Remove a classe line
    icon.classList.add('ri-heart-fill'); // Adiciona a classe fill
});


/*=============== VALIDAÇÃO DOS FORMULÁRIOS SIGNs ===============*/
function iniciarsessão() {
    window.location.href = "home.html";     
}

function validarFormulario() {
    const nome = document.getElementById('nome');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    // Limpa mensagens de erro e bordas antes de validar
    clearErrors();

    let valid = true;

    // Validação do nome
    if (nome.value.trim() === '') {
        showError(nome, 'Por favor, preencha seu nome.');
        valid = false;
    }

    // Validação do nome de usuário
    if (username.value.trim() === '') {
        showError(username, 'Por favor, preencha seu nome de usuário.');
        valid = false;
    }
    if (!username.value.startsWith('@')) {
        showError(username, 'O nome de usuário deve começar com "@".');
        valid = false;
    }
    if (username.value.length < 3) {
        showError(username, 'O nome de usuário deve ter pelo menos 3 caracteres.');
        valid = false;
    }
    const usernameRegex = /^[a-zA-Z0-9_]+$/; 
    if (!usernameRegex.test(username.value.slice(1))) {
        showError(username, 'O nome de usuário só pode conter letras, números e underscores, após o "@".');
        valid = false;
    }

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError(email, 'Por favor, insira um e-mail válido.');
        valid = false;
    }

    // Validação da senha
    if (senha.value.length < 6) {
        showError(senha, 'A senha deve ter pelo menos 6 caracteres.');
        valid = false;
    }

    // Se todas as validações passarem
    if (valid) {
        return iniciarsessão();
    }
    return false; // Previne o envio do formulário se houver erros
}

function showError(input, message) {
    const errorMessage = document.getElementById(input.id + 'Error');
    errorMessage.textContent = message;
    input.classList.add('error');
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
    });
    
    const inputs = document.querySelectorAll('.input_text');
    inputs.forEach(input => {
        input.classList.remove('error');
    });
}



/*=============== SWIPER ===============*/

 



var swiper = new Swiper(".swipperBestSeller", {
    effect: "cards",
    grabCursor: true,
});











