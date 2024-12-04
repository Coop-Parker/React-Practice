
let button = document.body.querySelector('button')



function clickHandler(){

    button.addEventListener('click',function(){
        alert('Clicked')
    })

}

clickHandler()