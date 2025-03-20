// ESERCIZIO 1 

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

// if per verificare la presenza della email nella lista degli invitati e stampo messaggio
if(checkEmail){
    console.log('Sei presente nella lista invitati!')
}

else{
    console.log('Mi dispiace, non sei presente nella lista degli invitati')
}

// ESERCIZIO 2

 let numPc = Math.floor(Math.random() * 6)+1;
 let numUser = Math.floor(Math.random() * 6)+1;

 console.log(('Il tuo numero è') + `${' '}` +`${numUser}`)
 console.log(('Il numero del computer è') + `${' '}` +`${numPc}`)