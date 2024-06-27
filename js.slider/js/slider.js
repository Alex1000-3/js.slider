let point = document.querySelectorAll('.point');
let imageSlider = document.querySelectorAll('.imageSlider');
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');

point[0].classList.add('activetimage');
imageSlider[0].classList.add('activetimage');

let contnetr = 0;
// это чтобы работали шарики 
for (let i=0; i<point.length; i++) {
   point[i].addEventListener('click', () => {
      for (let k=0; k < imageSlider.length; k++) {
         point[k].classList.remove('activetimage');
         imageSlider[k].classList.remove('activetimage');
      }
      contnetr = i;
      point[contnetr].classList.add('activetimage');
      imageSlider[contnetr].classList.add('activetimage');
   })
}
// это что бы работали стрелочки 
leftBtn.addEventListener('click', () => {
   for (let k=0; k < imageSlider.length; k++) {
      point[k].classList.remove('activetimage');
      imageSlider[k].classList.remove('activetimage');
   }
   contnetr--
   if(contnetr<0){
      contnetr = imageSlider.length-1
   }
   imageSlider[contnetr].classList.add('activetimage');
   point[contnetr].classList.add('activetimage');
})

rightBtn.addEventListener('click', () => {
   for (let k=0; k < imageSlider.length; k++) {
      point[k].classList.remove('activetimage');
      imageSlider[k].classList.remove('activetimage');
   }
   contnetr++
   if(contnetr >= imageSlider.length){
      contnetr = 0
   }
   imageSlider[contnetr].classList.add('activetimage');
   point[contnetr].classList.add('activetimage');
})
// это делает чтобы через время менялось 
function slowSlider () {
   for (let k=0; k < imageSlider.length; k++) {
      point[k].classList.remove('activetimage');
      imageSlider[k].classList.remove('activetimage');
   }
   contnetr++
   if(contnetr >= imageSlider.length){
      contnetr = 0
   }
   imageSlider[contnetr].classList.add('activetimage');
   point[contnetr].classList.add('activetimage');
}

let secound = 1000*5
let TimerImage = setInterval(()=>slowSlider(), secound);

// чтобы когда наводишься то она прекрашала пролиствывать и возобновляло когда уберешь курсор 
let blockSlider = document.getElementById('blockSlider');
blockSlider.addEventListener('mouseover', () =>{
   clearInterval(TimerImage);
})
blockSlider.addEventListener('mouseleave', () =>{
   TimerImage = setInterval(()=>slowSlider(), secound);
})

