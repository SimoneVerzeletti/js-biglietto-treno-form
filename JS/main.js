let age = prompt(`Inserisci l'età del viaggiatore`);
let km = prompt(`Inserisci i km da percorrere`);

let grossPrice = 0;
let finalPrice = 0; 

// Raccolgo i chilometri e calcolo il prezzo del biglietto intero
if(isNaN(km)){
    console.log(`Devi inserire un numero, ricarica`);
} else if(Number(km)<=0){
    console.log(`Inserisci un numero più grande di 0, ricarica`);
} else{
    km = Number(km);
    grossPrice = km*0.21;
    finalPrice = grossPrice;
}
// Raccolgo il dato dell'età
if(isNaN(age)){
    console.log (`Inserisci l'età, ricarica`); 
} else if (Number(age)<=0 || Number(age)>=130){
    console.log(`Inserisci un'età tra 1 e 129 anni, ricarica`);
} else {
    age = Number(age);
    // Calcolo sconto in base all'età
    if (age < 18){
        finalPrice = grossPrice * 0.8;
    } else if (age >= 65){
        finalPrice = grossPrice * 0.6;
    }
    const finalPriceEuro = `€${finalPrice.toFixed(2).replace(".",",")}`;
    console.log(`Il prezzo del biglietto al netto degli sconti è: ${finalPriceEuro}`);

}

