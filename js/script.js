// Generate a password with User firs name, last name and favourite color plus 21

// Ask First Name, Last Name and Favourite Color
const userFirstName = prompt ('Inserisci il tuo nome');
const userLastName = prompt ('Inserisci il tuo cognome');
const userFavouriteColor = prompt ('Inserisci colore preferito');

// Generate Password
const userPassword = userFirstName + userLastName + userFavouriteColor + '21';

// Message to User
const toUserMessage = 'La tua password è: ' + userPassword

// Print
document.getElementById('generated-password').innerHTML = toUserMessage