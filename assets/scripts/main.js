const currentAnimalImage = document.getElementById("animal-image")
const left_btn = document.getElementById('left--btn');
const right_btn = document.getElementById("right--btn")
const animal_preivew_wrapper = document.getElementById("animal-preview")
const animal_name = document.getElementById('animal-name');
const animal_info = document.getElementById('animal-info');
const animal_facts = document.getElementById("animal-facts");

let previewImages = animal_preivew_wrapper.querySelectorAll('img')
let index=0;
let animals=[
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
    {animal:'Wolf',weight:'80-150lbs',height:'2-3ft',lifespan:'8-10 Years',fact:'Wolves can live up to 10 years',image_src:'assets/images/wolf.jpeg'},
]

$(document).ready(()=>{
    changeAnimal()
})

left_btn.addEventListener('click',()=>{changeAnimal('decrease')})
right_btn.addEventListener('click',()=>{changeAnimal('increase')})

async function changeAnimal(mode){
    console.log(`changeAnimal: ${mode}`)
    if(mode=='increase'){
        index++
        if(index>17){
            index=0
        }
    }else if(mode=='decrease'){
        index--
        if(index<0){
            index=0
        }
    }
    loadPreviewImages(index);
    console.log(`INDEX:${index}`)
    currentAnimalImage.src=animals[index].image_src;
    animal_name.innerText=animals[index].animal
    animal_info.innerText=`${animals[index].weight}Lbs|${animals[index].height}|${animals[index].lifespan}`
    animal_facts.innerText=animals[index].fact
    await sleep(100);
    $(currentAnimalImage).fadeTo(400,1);
}

let rindex=6;
async function loadPreviewImages(pindex){
    for(let x=0;x<previewImages.length;x++){
        previewImages[x].className=index+x+1
        if(previewImages[x].className<17||previewImages[x].className==17){
        previewImages[x].src=animals[pindex+x+1].image_src;}
        if(previewImages[x].className>17){
            console.log(`loadPreviewImages: Out of range! Resetting...`)
            console.log(`rindex:${rindex}`)
            previewImages[x].src=animals[rindex].image_src
            previewImages[x].className=rindex
            rindex--
        }
        if(rindex==0){
            rindex=6
        }
    }
    previewsListeners();
}

async function previewsListeners(){
    for(let x=1;x<previewImages.length+1;x++){
        document.getElementById(`preview-${x}`).addEventListener('click',async ()=>{
            let self = document.getElementById(`preview-${x}`);
            index = self.className
            changeAnimal();
            loadPreviewImages(index);
        })
    }
}

async function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}