function removeTransition(e) {
    if(e.propertyName !== 'transform')
        return;
    
    e.target.classList.remove('on-play');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.keys[data-key="${e.keyCode}"]`);

    if(!audio)
        return;

    key.classList.add('on-play');
    audio.currentTime = 0;
    audio.play();
}

function sound(e) {
    const audio = document.querySelector(`audio[data-key="${e}"]`);
    const key = document.querySelector(`.keys[data-key="${e}"]`);

    if(!audio)
        return;

    key.classList.add('on-play');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.keys'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);