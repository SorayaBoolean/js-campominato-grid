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
//aggiungo azione al click: colorami square 
    currentElement.addEventListener ('click',
    function () {
        //per rimuovere la classe clicked al secondo click
        if (this.classList.contains ('clicked')) {
            this.classList.remove ('clicked')
            } else {
        this.classList.add ('clicked')
            };
        }
    )
} //con this.classList.toggle ('clicked') esegue remove e add









