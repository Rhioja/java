const Proyecto =  document.querySelector("Protect")
const btnMC=document.querySelector
const ICSS =""
const IJS =
const IHTML = 
const obj =[
     {
    img:"https://w0.peakpx.com/wallpaper/983/215/HD-wallpaper-astronaut-moon-landing-earth-digital-art-space.jpg",
    title:"Primer Proyecto",
    description:" el primer proyectootoasootdsootsoofsdofosdofsod",
    iconos:[IJS,IHTML,ICSS]
}
{
    img:"https://www.eltiempo.com/uploads/2023/04/11/6436329e98f70.jpeg",
    title:"segundo Proyecto",
    description:" el primer proyectootoasootdsootsoofsdofosdofsod",
    iconos:[IHTML,ICSS]
}
]

const getcards = obj.map(obj => {
    divProyecto.innerHTML += `<article>
        <img src=${obj.img} alt"img-proyects" id="img-proyects">
            <div class="description-proyects">
                <h3>
                    ${obj.title}
                </h3>
                <p>${obj.description}</p>
            </div>
            <div calss="tools-proyects">
                <img src=${obj.iconos[0] alt="icon-js"}>
                <img src=${obj.iconos[1] alt="icon-js"}>
                <img src=${obj.iconos[2] alt="icon-js"}>
    </div>
<article/>`        
})