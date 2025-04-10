console.log("Script loaded");

// Hamburger Menu Toggle

const burgerMenu = document.getElementById('menuIcon');
burgerMenu.addEventListener('click', () => toggleMenu());

const cancelMenu = document.getElementById('cancelIcon');
cancelIcon.addEventListener('click', () => closeMenu());

// Open menu
function toggleMenu() {
    // Hide burgermenu icon
    burgerMenu.style.display = 'none';
    // Show menu items
    const navMenu = document.getElementById('navBox');
    navMenu.style.display = 'block';
    // Convert menu to full screen
    const navMenuBox = document.querySelector('.head-layout');
    navMenuBox.style.width = '100vw';
    navMenuBox.style.height = '100vh';
    navMenuBox.style.position = 'fixed';
    navMenuBox.style.backgroundColor = '#D8BC69';
    navMenuBox.style.justifyContent = 'center';
    // Hide website logo
    const logo = document.querySelector('.head-logo');
    logo.style.display = 'none';
    // Hide scrollbar
    document.body.style.overflow = 'hidden';
    // Show close menu icon
    cancelMenu.style.display = 'block';
}

// Close menu
function closeMenu() {
    burgerMenu.style.display = "";
    const navMenu = document.getElementById('navBox');
    navMenu.style.display = "";
    const navMenuBox = document.querySelector('.head-layout');
    navMenuBox.style.width = "";
    navMenuBox.style.height = "";
    navMenuBox.style.position = "";
    navMenuBox.style.backgroundColor = "";
    navMenuBox.style.justifyContent = "";
    const logo = document.querySelector('.head-logo');
    logo.style.display = "";
    document.body.style.overflow = '';
    cancelMenu.style.display = "none";
}


// Form validation

let nameVal = false;
let mailVal = false;
let telVal = false;

// Name
const formName = document.getElementById('name');
formName.addEventListener('focusout', () => nameFilter());
function nameFilter() {
    const name = document.getElementById('nameLabel');
    // Alert of at least 3 characters in name required
    if (formName.value.length > 0 && formName.value.length < 3) {
        formName.style.border = '2px solid red';
        name.innerHTML = 'Naam <span class="formAlert">- moet minstens 3 karakters bevatten</span>';
        nameVal = false;
    }
    if (formName.value === '') {
        nameVal = false;
    }
}
// Remove alert when name is valid
formName.addEventListener('input', () => checkName())
function checkName() {
    const name = document.getElementById('nameLabel');
    if (formName.value !== '' && formName.value.length > 2) {
        formName.style.border = '';
        name.innerHTML = 'Naam';
        nameVal = true;
    }
}

// Email
const formMail = document.getElementById('mail');
formMail.addEventListener('focusout', () => mailFilter());
function mailFilter() {
    const mail = document.getElementById('mailLabel');
    const domainRegex = /(\.com|\.nl|\.org|\.net)$/i;

    if (formMail.value === '') {
        mailVal = false;
    } else if (!formMail.value.includes('@') || !domainRegex.test(formMail.value)) {
        formMail.style.border = '2px solid red';
        mail.innerHTML = 'Email adres <span class="formAlert">- vul een geldig email adres in</span>';
        mailVal = false;
    } else {
        formMail.style.border = '';
        mail.innerHTML = 'Email adres';
        mailVal = true;
    }
}
// Remove alert when mail is valid
formMail.addEventListener('input', () => checkMail());
function checkMail() {
    const mail = document.getElementById('mailLabel');
    const domainRegex = /(\.com|\.nl|\.org|\.net)$/i;
    if (formMail.value.length > 3 && formMail.value.includes('@') && domainRegex.test(formMail.value)) {
        formMail.style.border = '';
        mail.innerHTML = 'Email adres';
        mailVal = true;
    }
}

//Phonenumber
const formTel = document.getElementById('tel');
formTel.addEventListener('focusout', () => telFilter());
function telFilter() {
    const tel = document.getElementById('telLabel');
    const phoneRegex = /^(06|\+31\s6|\+316)/;

    // Check if the phone number is not empty and matches the pattern
    if (formTel.value === '') {
        telVal = false;
    } else if (formTel.value.length < 10 || formTel.value.length > 14 || !phoneRegex.test(formTel.value)) {
        formTel.style.border = '2px solid red';
        tel.innerHTML = 'Telefoonnummer <span class="formAlert">- vul een geldig telefoonnummer in</span>';
        telVal = false;
    } else {
        formTel.style.border = '';
        tel.innerHTML = 'Telefoonnummer';
        telVal = true;
    }
}
// Remove alert when phonenumber is valid
formTel.addEventListener('input', () => checkTel());
function checkTel() {
    const tel = document.getElementById('telLabel');
    const phoneRegex = /^(06|\+31\s6|\+316)/;

    if (formTel.value.length >= 10 && formTel.value.length <= 14 && phoneRegex.test(formTel.value)) {
        formTel.style.border = '';
        tel.innerHTML = 'Telefoonnummer';
        telVal = true;
    }
}

// Replace any non-numeric characters and '+' symbol
formTel.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[^0-9+ ]/g, '');
});
// Fill in +31 with space when + is entered
formTel.addEventListener('keydown', (event) => {
    // Check if the key pressed is the "+" symbol (key code for "+" is 187 on most keyboards)
    if (event.key === '+' && formTel.selectionStart === 0 && formTel.selectionEnd === 0) {
        // Prevent the default action (the "+" is inserted)
        event.preventDefault();
        
        // Add "+31 " to the input when "+" is pressed at the beginning
        formTel.value = '+31 ' + formTel.value;
    }
});

const form = document.querySelector('.form-submit-button');
form.addEventListener('click', function(event) {
    // Run validation before submitting
    nameFilter();
    mailFilter();
    telFilter();
    formFilter();

    if (!mailVal || !nameVal || !telVal) {
        event.preventDefault(); // Prevent form submission if validation fails
        console.log('submit prevented');
        console.log(nameVal);
        console.log(mailVal);
        console.log(telVal);
    }
});

// Form last check
function formFilter() {
    // Name filter
    const name = document.getElementById('nameLabel');
    if (!nameVal && formName.value === '') {
        formName.style.border = '2px solid red';
        name.innerHTML = 'Naam <span class="formAlert">- vul een naam in</span>';
        nameVal = false;
    }
    // Mail filter
    const mail = document.getElementById('mailLabel');
    if (!mailVal && formMail.value === '') {
        formMail.style.border = '2px solid red';
        mail.innerHTML = 'Email adres <span class="formAlert">- vul een geldig email adres in</span>';
        mailVal = false;
    }
    // Tel filter
    const tel = document.getElementById('telLabel');
    if (!telVal && formTel.value === '') {
        formTel.style.border = '2px solid red';
        tel.innerHTML = 'Telefoonnummer <span class="formAlert">- vul een geldig telefoonnummer in</span>';
        telVal = false;
    }

}

// Closing prompt
window.addEventListener('beforeunload', function(event) {
    if (formName.value !== '' || formMail.value !== '' || formTel.value !== '') {
        const confirmationMessage = 'Je hebt onverzonden informatie ingevuld. Weet je zeker dat je deze pagina wilt verlaten?';
        return confirmationMessage;
    }
});