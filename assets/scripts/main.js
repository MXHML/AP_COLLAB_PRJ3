const currentAnimalImage = document.getElementById("animal-image")
const left_btn = document.getElementById('left--btn');
const right_btn = document.getElementById("right--btn")

let index=0;

$(document).ready(async ()=>{
    currentAnimalImage.src=animals[index].image_src
})

left_btn.addEventListener('click', async ()=>{
    index--;
    console.log(index)
    if(index<0){
        index=0
    }
    currentAnimalImage.src=animals[index].image_src
    nameElement.innerText=animals[index].name
})

right_btn.addEventListener('click', async ()=>{
    index++;
    console.log(index)
    if(index>animals.length-1==true){
        index=animals.length-1
    }
    currentAnimalImage.src=animals[index].image_src
})



animals=[
    {animal:'Alpaca',weight:'110',height:'2.7-3.2ft',lifespan:'18-24 Years',fact:'Alpacas have one heart',image_src:'assets/images/alpaca.jpeg'},
    {animal:'Cat',weight:'10lbs',height:'9.1-9.8in',lifespan:'12-18 Years',fact:'Cats can jump up to 6x their length.',image_src:'assets/images/cat.jpeg'},
    {animal:'Cow',weight:'1000-2000lbs',height:'5-6ft',lifespan:'15-20 Years',fact:'Cows have 4 stomachs',image_src:'assets/images/cow.jpeg'},
    {animal:'Dog',weight:'50-90lbs',height:'22-26in',lifespan:'10-15 Years',fact:'Dogs have 42 teeth',image_src:'assets/images/dog.jpeg'},
    {animal:'Donkey',weight:'300-500lbs',height:'4-5ft',lifespan:'30-40 Years',fact:'Donkeys can live up to 40 years',image_src:'assets/images/donkey.jpeg'},
    {animal:'Duck',weight:'2-4lbs',height:'15-18in',lifespan:'10-15 Years',fact:'Ducks can fly at 55mph',image_src:'assets/images/duck.jpeg'},
    {animal:'Elephant',weight:'6000-12000lbs',height:'8-13ft',lifespan:'60-70 Years',fact:'Elephants have 3 eyelids',image_src:'assets/images/elephant.jpeg'},
    {animal:'Frog',weight:'0.2-0.4lbs',height:'1.2-2.4in',lifespan:'10-15 Years',fact:'Frogs can jump 20x their length',image_src:'assets/images/frog.jpeg'},
    {animal:'Goat',weight:'100-200lbs',height:'3-4ft',lifespan:'15-20 Years',fact:'Goats can climb trees',image_src:'assets/images/goat.jpeg'},
    {animal:'Horse',weight:'1000-2000lbs',height:'5-6ft',lifespan:'25-30 Years',fact:'Horses can run at 55mph',image_src:'assets/images/horse.jpeg'},
    {animal:'Lion',weight:'400-550lbs',height:'3-4ft',lifespan:'10-14 Years',fact:'Lions can run at 50mph',image_src:'assets/images/lion.jpeg'},
    {animal:'Monkey',weight:'10-30lbs',height:'2-3ft',lifespan:'20-30 Years',fact:'Monkeys can live up to 30 years',image_src:'assets/images/monkey.jpeg'},
    {animal:'Mouse',weight:'0.1-0.2lbs',height:'2-3in',lifespan:'2-3 Years',fact:'Mice can live up to 3 years',image_src:'assets/images/mouse.jpeg'},
    {animal:'Owl',weight:'2-3lbs',height:'18-24in',lifespan:'10-15 Years',fact:'Owls can live up to 15 years',image_src:'assets/images/owl.jpeg'},
    {animal:'Pig',weight:'200-300lbs',height:'2-3ft',lifespan:'10-15 Years',fact:'Pigs can live up to 15 years',image_src:'assets/images/pig.jpeg'},
    {animal:'Rooster',weight:'4-6lbs',height:'18-24in',lifespan:'10-15 Years',fact:'Roosters can live up to 15 years',image_src:'assets/images/rooster.jpeg'},
    {animal:'Sheep',weight:'100-200lbs',height:'3-4ft',lifespan:'10-15 Years',fact:'Sheep can live up to 15 years',image_src:'assets/images/sheep.jpeg'},
    {animal:'Wolf',weight:'80-150lbs',height:'2-3ft',lifespan:'8-10 Years',fact:'Wolves can live up to 10 years',image_src:'assets/images/wolf.jpeg'}
]

async function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}