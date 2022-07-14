//prendo gridDom
const gridDom = document.getElementById ('grid')



//creo 100 square con ciclo for


for (let i = 0; i < 100 ; i++) {
    
    const currentElement = createGridSquare ();
   
    currentElement.addEventListener ('click',
    function () {
            this.classList.toggle ('clicked');
        }
    );
        gridDom.append (currentElement); 

} 




function createGridSquare () {

    const currentElement = document.createElement ('div');
    currentElement.classList.add ('square');

return currentElement
}




