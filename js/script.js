// array email invitati
let guest=[
    'sabrina.carpenter@boolean.it',
    'ariana.grande@boolean.it',
    'billie.eilish@boolean.it',
    'harry.style@boolean.it',
    'tyler.thecreator@boolean.it',
    'the.weekend@boolean.it',
]

// inserimento email utente
let email = prompt('inserisci la tua email');


// variabile di controllo
let checkEmail = false;

// ciclo array email
for (let i=0; !checkEmail && i<guest.length; i++){
    // verifico se è presente la email nel ciclo
    if(guest[i].toLocaleLowerCase() === email.toLocaleLowerCase()){
        checkEmail = true;
    }
}