const Proyecto =  document.querySelector("#Proyect")
const btnMC=document.querySelector
const ICSS ="https://cdn-icons-png.flaticon.com/512/152/152843.png"
const IJS ="https://cdn-icons-png.flaticon.com/512/721/721671.png"
const IHTML = "https://cdn-icons-png.flaticon.com/512/82/82127.png"
const obj =[
     {
    img:"https://w0.peakpx.com/wallpaper/983/215/HD-wallpaper-astronaut-moon-landing-earth-digital-art-space.jpg",
    title:"Primer Proyecto",
    description:" el primer proyectootoasootdsootsoofsdofosdofsod",
    iconos:[IJS,IHTML,ICSS]
},
{
    img:"https://www.eltiempo.com/uploads/2023/04/11/6436329e98f70.jpeg",
    title:"segundo Proyecto",
    description:" el primer proyectootoasootdsootsoofsdofosdofsod",
    iconos:[IHTML,ICSS]
}
]

const getcards = obj.map(obj => {
    Proyecto.innerHTML += `<article class="Carta">
        
    <img src=${obj.img} alt="Img de astronauta saludando" style="width: 100px;height: 100px;">
    <h3>${obj.title}
    </h3>

<div class="Cuerpo">
    <p>${obj.description}</p>
</div>
<div class="Links">
    <a href="">
        <img src=${IHTML} alt="img de icono de html" style="width:60px ; height: 60px;;">
    </a>
    <a href="">
        <img src=${ICSS} alt="img de icono de css" style="width: 60px;height: 60px;">
    </a>
    <a href="">
        <img src=${IJS} alt="img de icono de javascript" style="width: 60px;height: 60px;">
    </a>
</div>
</div>
</article>`        
})