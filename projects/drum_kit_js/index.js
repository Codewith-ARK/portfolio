let buttons = document.querySelectorAll('button');

// play via mouse click
buttons.forEach((item) => {
    item.addEventListener('click', ()=> {
        let content = item.innerHTML;
        makeSound(content);
        buttonAnimation(content);
    });
});

// play via keyboard clicks
window.addEventListener('keypress', (e)=>{
    makeSound(e.key);
    buttonAnimation(e.key);
})

function makeSound(key){
    switch (key) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
        case 'j':
            let snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
        case 'k':
            let crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case 'l':
            let kick = new Audio('sounds/kick-bass.mp3')
            kick.play();
            break;
        default:
            console.log(`'${content}' Wrong key was pressed!`)
            break;
    }
}

function buttonAnimation(key){
    var activeBt = document.querySelector(`.${key}`);
    activeBt.classList.add('pressed');
    setTimeout(function(){

        activeBt.classList.remove('pressed');

    }, 300);
}