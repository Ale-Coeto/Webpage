let txtSubtitulo = document.getElementById("exSubtitulo");
let txtFecha = document.getElementById("exFecha");
let iconImg = document.getElementById("exImg");
let txtDescripcion = document.getElementById("exP");
let txtFecha2 = document.getElementById("exFecha2");
let txtDescripcion2 = document.getElementById("exP2");

let experiencias = [];

let vantTec = {
    boton:"exVantTec",
    subtitulo: "VantTec",
    fecha: "2022-Presente",
    img: "<img class='exImg' src='Images/VantTec.jpeg'>",
    descripcion: "<p>Integrante del grupo estudiantil VantTec en el área de mecánica</p>",
    fecha2:"",
    descripcion2: "<p></p>"
}

    experiencias.push(vantTec);

let voltec = {
    boton: "exVoltec",
    subtitulo: "VOLTEC Robotics",
    img: "<img class='exImg' src='Images/Voltec.jpeg'>",
    fecha: "2022-Presente",
    descripcion: "<p>Mentora del equipo de FTC (FIRST TECH CHALLENGE) e impulsando la inclusión de mujeres en STEM.</p>",
    fecha2: "2019-2022",
    descripcion2:"<p>Líder de ingeniería del equipo representativo de robótica de la Prepa Tec EGL. </p> <ul><li>Programación del robot en Java</li> <li>Diseño CAD en OnShape</li><li>Mecánica y construcción de robots</li><li>Participación en eventos de promoción de STEM para niños y jóvenes</li></ul>"
    
}
    experiencias.push(voltec);

let maestra = {
    boton: "exMaestra",
    subtitulo: "Maestra Robotica",
    fecha:  "2022",
    img: "<img class='exImg' src='Images/Maestra.png'>",
    descripcion: "<p>Clases de robótica a más de 20 niños de 3er grado de primaria durante el verano.</p> <ul> <li>Programación y construcción de robots LEGO Mindstorms </li> <li>Clases sobre fundamentos de robótica (sensores, actuadores, mecanismos simples)</li></ul>",
    fecha2:"",
    descripcion2: ""
}
experiencias.push(maestra);

let vitales = {
    boton: "exVitales",
    subtitulo: "Vitales",
    fecha: "2020-2021",
    img: "<img class='exImg' src='Images/Vitales.png'>",
    descripcion: "<p>Líder de marketing de un grupo enfocado en proyectos de ayuda a la comunidad y el medio ambiente.</p> <ul><li>Campaña ecológica a través de redes sociales</li><li>Congreso centrado en la inclusión y el trabajo en equipo</li>",
    fecha2:"",
    descripcion2: ""
}
experiencias.push(vitales);



function change(i){
    txtSubtitulo.innerText = experiencias[i].subtitulo;
    txtFecha.innerText = experiencias[i].fecha;
    txtDescripcion.innerHTML = experiencias[i].descripcion;
    iconImg.innerHTML = experiencias[i].img;
    
        txtFecha2.innerText = experiencias[i].fecha2;
        txtDescripcion2.innerHTML = experiencias[i].descripcion2;
    colores(i);
}


function colores(i) {
    for (j = 0; j < experiencias.length; j++){
        if (screen.width <= 725){
            document.getElementById(experiencias[j].boton).style.borderBottom = "2px solid #1c1e24";
            }
        else{
            document.getElementById(experiencias[j].boton).style.borderLeft = "2px solid #2b313a";
        }
        document.getElementById(experiencias[j].boton).style.background = "#1c1e24";
    }

    let btnBoton = document.getElementById(experiencias[i].boton);

    if(screen.width <= 725){
        btnBoton.style.borderBottom = "2px solid #1ad499";
    }
    else{
        btnBoton.style.borderLeft = "2px solid #1ad499";
    }
    btnBoton.style.background = "#2b313a";
}

