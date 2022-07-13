//prendo gridDom
const gridDom = document.getElementById ('grid')



//creo 100 square con ciclo for

for (let i = 0; i < 100 ; i++) {
    gridDom.innerHTML += '<div class=square></div>'
}

