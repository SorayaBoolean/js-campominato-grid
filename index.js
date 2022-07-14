//prendo gridDom
const gridDom = document.getElementById ('grid')

//creo 100 square con ciclo for:

for (let i = 1; i <= 100 ; i++) {
   

    //richiamo la funzione che mi crea grid con square    
    const currentElement = createGridSquare (i);
    //aggiungo event listner per click   
    currentElement.addEventListener ('click',
    function () {
            this.classList.toggle ('clicked');
        }
    );
        gridDom.append (currentElement); 
} 










//sezione funzioni:

//1. funzione che mi crea il grid con square
function createGridSquare (numero) {

    const currentElement = document.createElement ('div');
    currentElement.classList.add ('square');
    
    currentElement.append(numero)

    return currentElement
}

//3. funzione per non ripetere le bombe







