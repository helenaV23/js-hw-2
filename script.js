let yourFirstName = prompt("What is your name?").trim();
yourFirstName = yourFirstName.charAt(0).toUpperCase() + yourFirstName.slice(1); 

let yourLastName = prompt("What is your last name?").trim();
yourLastName = yourLastName.charAt(0).toUpperCase() + yourLastName.slice(1); 

let yourEmail = prompt("Please, write your email").trim().toLowerCase();
let atIndex = yourEmail.indexOf(`@`);
    
if (atIndex === -1) {
    yourEmail = `not valid email <b>${yourEmail}</b> (symbol @ not exist)`;
} else if (!atIndex) { 
    yourEmail = `not valid email <b>${yourEmail}</b> (symbol @ find in first place)`;
} else if (atIndex === yourEmail.length - 1) { 
    yourEmail = `not valid email <b>${yourEmail}</b> (symbol @ find in last place)`;
} 

let yourBirthDate = prompt("What is your birth year?").replaceAll(' ', '');
let yourAge = new Date().getFullYear() - yourBirthDate;

document.write(`
    <ul>
        <li>Full name: <b>${yourFirstName} ${yourLastName}</b></li> 
        <li>Email: ${yourEmail}</li> 
        <li>Age: <b>${yourAge}<b></li> 
    </ul>
`);
