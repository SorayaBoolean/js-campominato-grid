//prendo gridDom
const gridDom = document.getElementById ('grid')



//creo 100 square con ciclo for


for (let i = 0; i < 100 ; i++) {
    //1. Primo metodo
    //  gridDom.innerHTML += '<div class=square></div>'
    //2. oppure Secondo metodo
    const currentElement = document.createElement ('div');
    currentElement.classList.add ('square');
    gridDom.append (currentElement);

    currentElement.addEventListener ('click',
    function () {
        this.classList.add ('clicked')
    }

)
}





