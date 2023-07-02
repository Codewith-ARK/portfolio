function createCard(event){
    event.preventDefault();

    const title = document.getElementById('title').value;
    if(title == ""){
        document.getElementById("title").style.border = "2px solid red";
        return;
    }

    const text = document.getElementById('body-txt').value;
    if(text == ""){
        document.getElementById("body-txt").style.border = "2px solid red";
        return;
    }
    
    const card = document.createElement('div');
    card.classList.add('card');

    const heading = document.createElement('h1');
    heading.classList.add('card-h1');
    heading.textContent = title;

    const para = document.createElement('p');
    para.classList.add('card-p');
    para.textContent = text;

    const hr = document.createElement('hr');

    const deleteBt = document.createElement('div');
    deleteBt.classList.add('delete-bt');

    const deleteImg = document.createElement('img')
    deleteImg.src = 'delete.png'
    deleteImg.classList.add('delete-bt-icon');
    deleteBt.appendChild(deleteImg);

    card.appendChild(heading);
    card.appendChild(hr);
    card.appendChild(para);
    card.appendChild(deleteBt)

    const cardContainer = document.getElementById('card-cont');
    cardContainer.appendChild(card);

    console.log(typeof event.target); // check the type of the event.target object

    document.getElementById('title').value = ""
    document.getElementById('body-txt').value = ""
}