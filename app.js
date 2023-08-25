const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1score')
};

const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2score')
};

const resetbtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameover = false

function updateScore(player, opponent) {
    if (!isGameover) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameover = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

p1.button.addEventListener('click', function(){
    updateScore(p1,p2)
});

p2.button.addEventListener('click', function(){
    updateScore(p2,p1)
});
resetbtn.addEventListener('click', reset)
function reset() {
    isGameover = false;
    for(let p of [p1,p2]){
        p.score=0;
        p.display.textContent = p1.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
        
    }
}
