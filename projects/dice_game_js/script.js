
let rand1 = Math.floor(Math.random() * 6) + 1;
let rand2 = Math.floor(Math.random() * 6) + 1;

document.querySelector('#left-dice').setAttribute('src', `images/dice${rand1}.png`);
document.querySelector('#right-dice').setAttribute('src', `images/dice${rand2}.png`);

if (rand1 == rand2) {
    document.getElementById('title').textContent = 'Draw! 🏳'
}
else if (rand1 > rand2) {
    document.getElementById('title').textContent = '🚩Player 1 Wins'
    document.querySelector('.p1').classList.add('winner');
    document.querySelector('.box1').classList.add('winner-box')
}
else if (rand1 < rand2) {
    document.getElementById('title').textContent = 'Player 2 Wins 🚩'
    document.querySelector('.p2').classList.add('winner');
    document.querySelector('.box2').classList.add('winner-box')
}
