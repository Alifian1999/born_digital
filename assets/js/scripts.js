(function ($) {
    "use strict";
    $(window).on('load', function() {
        setTimeout(function(){
            $('body').addClass('loaded')
        }, 1000);
    })
})(jQuery);




const input = document.getElementById('name-input')
const buttonClick = document.getElementById('confirm-member')
const resultInput = document.getElementById('result-input')
const teamReady = document.getElementById('team-ready')
const handleDelete = []

const containerName = []
const countUser = []

input.addEventListener('change',()=>{
    const value = [input.value]
    containerName.push(value)
})

buttonClick.addEventListener('click',()=>{
    console.log(containerName);
    resultInput.innerHTML += containerName+' ,'
    containerName.splice(0, containerName.length)
    countUser.push(resultInput.innerHTML)

    if(countUser.length === 3){
        teamReady.innerHTML = 'makan'
    }    
})

//im having trouble to mapping the result using vanilla javascript



