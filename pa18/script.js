function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
}

setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toDateString() + " " + d.toTimeString();
}, 1000);

const alaram = (sec) => {
    setTimeout(() => {
        play()
    }, sec * 1000);

let d = new Date().getTime()
    setInterval(() => {
        secondleft  = ((new Date().getTime()) - (d + sec * 1000))
        if (secondsLeft > 0) {
            demo.innerHTML = "Alarm ringing in " + Math.floor(secondsLeft / 1000) + " seconds"
          }
    });
}

let s = prompt("After how many seconds do you want an alarm?")
alaram(parseInt(s))

