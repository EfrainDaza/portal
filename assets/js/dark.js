document.addEventListener("DOMContentLoaded", () => {
    //capturamos boton de modo nocturno
    let switcher = document.querySelector(".switcher__btn");
    //capturamos los iconos del boton
    let light = document.querySelector(".switcher__icon-light");
    let dark = document.querySelector(".switcher__icon-dark");

    switcher.addEventListener("click", () => {

        let head = document.head; // seleccionamos la etiqueta donde se depositan las hojas de estilos
        
        //creamos los elementos
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./assets/css/dark.css";
        // creamos un ID para que el mismo boton cambie de ambos efectos
        link.id = "theme-dark";

        let theme_dark = document.querySelector("#theme-dark")
        if(theme_dark){
            //removemos la etiqueta con el ID que le agregamos anteriormente
            head.removeChild(theme_dark);
            //muestro icono 
            light.style.display = "block";
            //oculto icono
            dark.style.display = "none";
        }else{
            //agrego un nuevo elemnto de estilo
            head.appendChild(link);
            //oculto icono 
            light.style.display = "none";
            //muestro icono
            dark.style.display = "block";
        }
        

    })
})