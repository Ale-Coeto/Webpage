let txtSubtitulo = document.getElementById("exSubtitulo");
let txtFecha = document.getElementById("exFecha");
let iconImg = document.getElementById("exImg");
let imgLogo = document.getElementById("exLogo");
let txtDescripcion = document.getElementById("exP");
let txtFecha2 = document.getElementById("exFecha2");
let txtDescripcion2 = document.getElementById("exP2");


let experiencias = [];

let roborregos = {
    boton:"exRoborregos",
    subtitulo: "Roborregos",
    fecha: "2022-Presente",
    img: "<img class='exImg' src='Images/Logos/Roborregos.png'>",
    logo: "<img class='exLogo' src='Images/Logos/RoborregosLogo.png'>",
    descripcion: "<p> Integrante del equipo de robótica Roborregos en el área de programación después de participar en su competencia Candidates.</p> <ul><li>5to lugar en la competencia en equipos Candidates 2022</li><li>Programación en C++ y Arduino del algoritmo para recorrer y optimizar el laberinto en Candidates 2022</li></ul>",
    fecha2:"",
    descripcion2: ""
}

    experiencias.push(roborregos);

let vantTec = {
    boton:"exVantTec",
    subtitulo: "VantTec",
    fecha: "2022-Presente",
    img: "<img class='exImg' src='Images/VantTec.png'>",
    logo: "<img class='exLogo' src='Images/Logos/VantTecLogo.png'>",
    descripcion: "<p>Integrante del grupo estudiantil VantTec en el área de mecánica</p> <ul><li>Actualmente trabajando en el proyecto Robo-boat para la competencia de RoboNation</li></ul>",
    fecha2:"",
    descripcion2: ""
}

    experiencias.push(vantTec);

let voltec = {
    boton: "exVoltec",
    subtitulo: "VOLTEC Robotics",
    img: "<img class='exImg' src='Images/Voltec.jpeg'>",
    logo: "<img class='exLogo' src='Images/Logos/VoltecPlain.png'>",
    fecha: "2022-Presente",
    descripcion: "<p>Mentora del equipo de FTC (FIRST TECH CHALLENGE) e impulsando la inclusión de mujeres en STEM.</p>",
    fecha2: "2019-2022",
    descripcion2:"<p>Líder de ingeniería del equipo representativo de robótica de la Prepa Tec EGL. </p> <ul><li>Programación del robot en Java</li> <li>Diseño CAD en OnShape</li><li>Mecánica y construcción de robots</li><li>Participación en eventos de promoción de STEM para niños y jóvenes</li></ul>"
    
}
    experiencias.push(voltec);

let maestra = {
    boton: "exMaestra",
    subtitulo: "Maestra de Robotica",
    fecha:  "2022",
    img: "<img class='exImg' src='Images/Maestra.png'>",
    logo: "<img class='exLogo' src='Images/Logos/VoltecLogo.png'>",
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
    logo: "<img class='exLogo' src='Images/Logos/VitalesLogo.png'>",
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
    imgLogo.innerHTML = experiencias[i].logo;
    
    
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
        btnBoton.style.borderLeft = "2px solid #2b313a"
        console.log("J");
    }
    else{
        btnBoton.style.borderLeft = "2px solid #1ad499";
    }
    btnBoton.style.background = "#2b313a";
}

