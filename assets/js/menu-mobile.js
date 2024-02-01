document.addEventListener("DOMContentLoaded", (event) => {

    //seleccionar mis dos elemntos principales, el boton para activar el menu lateral
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile")
    //console.log(menu_mobile,mobile_btn) //hacemos console para verificar!

    /* FUNCION DE CERRAR Y ABRIR MENU LATERAL.- para no repetir codigo! */
    const showHiddenMenu = () => {

        let show = document.querySelector(".menu-mobile--show")

        if(show){
        mobile_menu.classList.remove("menu-mobile--show") //cuando agrego o saco una clase no se le pone el punto
        }else{
        mobile_menu.classList.add("menu-mobile--show")
        }
    };
    // abrimo y cerramos menu lateral con boton-izq.
    mobile_btn.addEventListener("click", showHiddenMenu);

    // cerramos menu lateral con el boton X
    let btn_close = document.querySelector(".menu-mobile__close"); //capturamos el elemnto que queremos modificar

    btn_close.addEventListener("click",showHiddenMenu);

    /* FUNCION PARA QUE SE CIERRE EL MENU-MOBILE CUADNO TENGAMOS UN WIDTH DE 1000PX */
    window.addEventListener("resize", () => { //resize palabra nativa de JS que evalua el ancho de la ventana window
        let window_width = parseInt(document.body.clientWidth); //parseInt para no poner los 1000 en un string, clienWidth mide el ancho de la ventana

        if(window_width >= 1000){
            mobile_menu.classList.remove("menu-mobile--show");
        }
    })

    /* DESPPLEGAR SUBMENU DE MODO RESPONSI */
    
    let menu_item = document.querySelectorAll(".menu-mobile__item") //capturamos los menus principales(All devuelve una lista varios elementos del mismo clase)

    // recorre los elemtos
    menu_item.forEach(item => { 
        
        item.addEventListener("click", (event) => {
            let submenu = item.lastElementChild; //muestra su ultimo hijo del elemento

            if(submenu.className === "menu-mobile__submenu-mobile"){ // si submenu tiene una clase "X" 
                // cambiamos el efecto de la clase, si esta block lo pasamos a none y viceversa
                if(submenu.style.display === "block"){
                    submenu.style.display = "none"
                }else{
                    submenu.style.display = "block"
                }
            }
        })

    });

})