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

// variabili numeri generati randomicamente
 let numPc = Math.floor(Math.random() * 5)+1;
 let numUser = Math.floor(Math.random() * 5)+1;

//  comunicazione numeri in console
 console.log(('Il tuo numero è') + `${' '}` +`${numUser}`)
 console.log(('Il numero del computer è') + `${' '}` +`${numPc}`)

//  controllo chi ha vinto e lo comunico, in caso di parità lo comunico lo stesso
 if(numPc > numUser){
    console.log('Mi dispiace, hai perso')
 }

 else if (numPc == numUser){
    console.log('Parità')
 }
else {
    console.log('Complimenti! Hai vinto! Giubilo!')
}