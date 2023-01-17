const currentAnimalImage = document.getElementById("animal-image")

let index=0;

$(document).ready(async ()=>{
    currentAnimalImage.src=animals[index].image_src
})

animals=[
    {animal:'alpaca',weight:'110',height:'2.7-3.2ft',lifespan:'18-24 Years',fact:'Alpacas have one heart',image_src:'assets/images/alpaca.jpeg'}
]

async function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}