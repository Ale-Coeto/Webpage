let txtSubtitulo = document.getElementById("exSubtitulo");
let txtFecha = document.getElementById("exFecha");
let iconImg = document.getElementById("exImg");
let txtDescripcion = document.getElementById("exP");

let experiencias = [];

let voltec = {
    boton: "exVoltec",
    subtitulo: "VOLTEC Robotics",
    fecha: "2019-2022",
    img: "<img class='exImg' src='Images/Voltec.jpeg'>",
    descripcion: "<p>Líder de ingeniería del equipo representativo de robótica de la prepa Tec EGL. </p> <ul><li>Programación del robot en Java</li> <li>Diseño CAD en OnShape</li><li>Mecánica y construcción de robots</li><li>Participación en eventos de promoción de STEM para niños y jóvenes</li></ul>"
    
}
    experiencias.push(voltec);

let maestra = {
    boton: "exMaestra",
    subtitulo: "Maestra Robotica",
    fecha:  "2022",
    img: "<img class='exImg' src='Images/Maestra.png'>",
    descripcion: "<p>Clases de robótica a más de 20 niños de 3er grado de primaria durante el verano.</p> <ul> <li>Programación y construcción de robots LEGO Mindstorms </li> <li>Clases sobre fundamentos de robótica (sensores, actuadores, mecanismos simples)</li></ul>",
}
experiencias.push(maestra);

let vitales = {
    boton: "exVitales",
    subtitulo: "Vitales",
    fecha: "2020-2021",
    img: "<img class='exImg' src='Images/Vitales.png'>",
    descripcion: "<p>Líder de marketing de un grupo enfocado en proyectos de ayuda a la comunidad y el medio ambiente.</p> <ul><li>Campaña ecológica a través de redes sociales</li><li>Congreso centrado en la inclusión y el trabajo en equipo</li>"
}
experiencias.push(vitales);



function change(i){
    txtSubtitulo.innerText = experiencias[i].subtitulo;
    txtFecha.innerText = experiencias[i].fecha;
    txtDescripcion.innerHTML = experiencias[i].descripcion;
    iconImg.innerHTML = experiencias[i].img;
    colores(i);
}


function colores(i) {
    for (j = 0; j < experiencias.length; j++){
        document.getElementById(experiencias[j].boton).style.borderLeft = "2px solid #2b313a";
        document.getElementById(experiencias[j].boton).style.background = "#1c1e24";
    }

    let btnBoton = document.getElementById(experiencias[i].boton);
    btnBoton.style.borderLeft = "2px solid #1ad499";
    btnBoton.style.background = "#2b313a";
}