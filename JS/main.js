const submitButton = document.querySelector('form button')

const age = document.querySelector('#age')
const km = document.querySelector('#distance')
const ticketPrice = document.querySelector(`#ticketPrice`)

submitButton.addEventListener('click', function(event){
    event.preventDefault()


    let ageImput = parseInt(age.value)
    let kmIput = parseInt(km.value)

    console.log(ageImput)
    console.log(kmIput)


let grossPrice = 0;
let finalPrice = 0; 

// Raccolgo i chilometri e calcolo il prezzo del biglietto intero
if(isNaN(kmIput)){
    console.log(`Devi inserire un numero, ricarica`);
} else if(Number(kmIput)<=0){
    console.log(`Inserisci un numero più grande di 0, ricarica`);
} else{
    // kmIput = Number(kmIput);
    grossPrice = kmIput*0.21;
    finalPrice = grossPrice;
}
// Raccolgo il dato dell'età
if(isNaN(ageImput)){
    console.log (`Inserisci l'età, ricarica`); 
} else if (Number(ageImput)<=0 || Number(ageImput)>=150){
    console.log(`Inserisci un'età tra 1 e 150 anni, ricarica`);
} else {
    // ageImput = Number(ageImput);
    // Calcolo sconto in base all'età
    if (ageImput < 18){
        finalPrice = grossPrice * 0.8;
    } else if (ageImput >= 65){
        finalPrice = grossPrice * 0.6;
    }
    const finalPriceEuro = `€ ${finalPrice.toFixed(2).replace(".",",")}`;
    ticketPrice.innerHTML = `Il prezzo del tuo biglietto per fare ${kmIput} km è: ${finalPriceEuro}`



    console.log(`Il prezzo del biglietto al netto degli sconti è: ${finalPriceEuro}`);

}
}
)
