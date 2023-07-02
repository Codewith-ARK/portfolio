window.addEventListener('change', ()=> {
    let isChecked = document.getElementById('opt3').checked;

    console.log(isChecked)
    
    if(isChecked) {
        document.getElementById('select-color').style.visibility = 'visible';
    }
    else {
        document.getElementById('select-color').style.visibility = 'hidden';
    }
})
