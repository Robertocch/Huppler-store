/* let button = document.getElementById('icon');
let enlaces = document.getElementById('enlaces');
let contador = 0;

button.addEventListener('click', function(){
    if(contador == 0){
        enlaces.className = ('enalces dos');
        contador = 1;
    }else{
        enlaces.classList.remove('dos');
        enlaces.className = ('enlace uno');
        contador = 0;
    }
})

window.addEventListener('resize', function(){
    if(screen.width > 750){
        contador=0;
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');

    }
})

window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('.links-header');
        if(e.target == span){
            contador=0;
        }
    }
}); */