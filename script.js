const container = document.getElementById('container');
const text = document.getElementById('text');
const zen = document.getElementById('zen');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

var vid = document.getElementById("au");
vid.volume = 0.0;
let hit = true;

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);


zen.addEventListener('click', function (){
    if(hit){
        hit = false ;
        vid.volume = 0.3;
        zen.innerText = "Go to zen mode";
    } else {
        hit = true;
        vid.volume = 0.0;
        zen.innerText = "Go to Paradise🌴";
    }
});