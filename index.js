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

    //creo un elemento del Dom di tipo div con classe square-number
    const numberSquare = document.createElement ('div');
    numberSquare.classList.add ('square-number');
    numberSquare.append(numero);
    //avrò : <div class="square">1,2,3,4</div>

    return currentElement;
}

//3. funzione per non ripetere le bombe







