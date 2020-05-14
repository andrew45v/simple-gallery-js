let img = document.querySelector('#editImg');
let left_arr = document.querySelector('#left');
let right_arr = document.querySelector('#right');
let min_img = document.querySelectorAll('.minImg img');
let img_src = [];
for(let i=0; i<min_img.length; i++){
    img_src[i] = min_img[i].getAttribute('src');
}

img.src = img_src[0];

let index=0;
right_arr.addEventListener('click', function(){
    index++;
    if(index == img_src.length){
        index=0;
    }
    img.src = img_src[index];
})
left_arr.addEventListener('click', function(){
    index--;
    if(index <= 0){
        index=img_src.length-1;
    }
    img.src = img_src[index];
})

for(let i=0; i<min_img.length; i++){
        min_img[i].addEventListener('click', function(){
        img.src = img_src[i];
        index=i;
        
    })
}
right_arr.addEventListener('mouseenter', function(){
    this.style.opacity = '1'
})
right_arr.addEventListener('mouseleave', function(){
    this.style.opacity = '0.5'
})
left_arr.addEventListener('mouseenter', function(){
    this.style.opacity = '1'
})
left_arr.addEventListener('mouseleave', function(){
    this.style.opacity = '0.5'
})


for(let i=0; i<min_img.length; i++){
    min_img[i].addEventListener('mouseenter', function(){
        min_img[i].style.transform = 'scale(1.2)';
        min_img[i].style.opacity = '1';
        min_img[i].style.zIndex = '999';
        min_img[i].style.transition = '0.5s';
    })
    min_img[i].addEventListener('mouseleave', function(){
        min_img[i].style.transform = 'scale(1.0)';
        min_img[i].style.opacity = '0.5';
        min_img[i].style.zIndex = '1';
    })
}