const buttons = document.querySelectorAll('.size')
const body = document.querySelector('body')

buttons.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click',function(e){
        if(e.target.id === 'box1'){
            console.log(e);
            body.style.backgroundColor = "antiquewhite";
        }
        else if(e.target.id === 'box2'){
            body.style.backgroundColor = "aqua";
        }
        else if(e.target.id === 'box3'){
            body.style.backgroundColor = "aquamarine";
        }
        else if(e.target.id === 'box4'){
            body.style.backgroundColor = "beige"
        }
    })
})


