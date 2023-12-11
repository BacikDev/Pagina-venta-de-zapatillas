// Tomamos el id del img principal que queremos cambiar
let imgProducto = document.getElementById("imgProducto");
// tomamos las imagenes miniaturas
let miniaturas = document.querySelectorAll(".miniaturas img");

function setMini(pos){
    if(pos=='0'){
        imgProducto.style.transform = "rotateZ(0deg)";
    }
    if(pos=='1'){
        imgProducto.style.transform = "rotateZ(35deg)";
    }
    if(pos=='2'){
        imgProducto.style.transform = "rotateZ(-55deg) scale(0.75)";
    }

    miniaturas[0].style.backgroundColor = "#fff1d9";
    miniaturas[1].style.backgroundColor = "#fff1d9";
    miniaturas[2].style.backgroundColor = "#fff1d9";
    miniaturas[pos].style.backgroundColor = "#fdc10e";
}

// Tomo todos los botones de talles
let sizes = document.querySelectorAll('.info-detalle button');

function setSize(pos){
    sizes[0].style.backgroundColor = "#fff1d9";
    sizes[1].style.backgroundColor = "#fff1d9";
    sizes[2].style.backgroundColor = "#fff1d9";
    sizes[pos].style.backgroundColor = "#fdc10e";
}

// Menu Responsive
// Variable que controlara si el menu responsive esta visible o no 
// inicia en false porque inicialmente esta oculto
let menu_responsive_visible = false;
let nav_responsive = document.getElementById("nav-responsive");
let close_responsive = document.getElementById("close-responsive");
let nav = document.getElementById("nav");

nav_responsive.onclick = function(){
    if(menu_responsive_visible==false){
        nav.className = "menu-responsive";
        menu_responsive_visible = true;
    }
}

close_responsive.onclick = function(){
    if(menu_responsive_visible==true){
        nav.className = "";
        menu_responsive_visible = false;
    }
}