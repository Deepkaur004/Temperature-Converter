function currentTime() {
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if (hour > 12) {
        hour -= 12;
        session = "PM";
    }

    if (hour === 0) {
        hour = 12;
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hour + " : " + minute + " : " + seconds + session;

    document.getElementById("clock").innerText = time;

    let t = setTimeout(() => {
        currentTime();
    }, 1000);
}

currentTime();

let emoji = document.querySelector("#icon");
let tempText = document.querySelector("#para");
let result = document.querySelector(".value");

let temperature = () => {
    let opt = document.querySelector("#unit");
    let display = document.querySelector(".value");
    let inpValue = document.querySelector(".takeval").value;

    if (opt.value == "Celcius") {
        console.log(inpValue, "C to F", opt.value);
        let farenHeit = inpValue * (9 / 5) + 32;
        display.innerHTML = farenHeit.toFixed(4) + "ºF";

        if (farenHeit < 40) {
            emoji.style = "color:blue";
            emoji.className = "fa-solid fa-face-grimace";
            tempText.innerHTML = "Cool at frezing point";
        }

        else if (farenHeit > 122) {
            emoji.style = "color:red";
            emoji.className = "fa-solid fa-face-dizzy";
            tempText.innerHTML = "so warm";
        }
        else {
            emoji.style = "color:rgb(253, 174, 37)"
            emoji.className = "fa-solid fa-face-grin"
            tempText.innerHTML = " ";
        }
    }
    else {
        console.log(inpValue, "F to C ", opt.value);
        let celcius = (inpValue - 32) * (5 / 9);
        display.innerHTML = celcius.toFixed(4) + "ºc";

        if (celcius < 5) {
            emoji.style = "color:blue";
            emoji.className = "fa-solid fa-face-grimace";
            tempText.innerHTML = "Cool at frezing point";
        }

        else if (celcius > 50) {
            emoji.style = "color:red";
            emoji.className = "fa-solid fa-face-dizzy";
            tempText.innerHTML = "so warm";
        }

        else {
            emoji.style = "color:rgb(253, 174, 37)"
            emoji.className = "fa-solid fa-face-grin"
            tempText.innerHTML = " ";
        }
    }
}

let cleardata = () => {
    let inpValue = document.querySelector(".takeval").value;
    inpValue.value = " "
    emoji.style = "color:rgb(253, 174, 37)"
    emoji.className = "fa-solid fa-face-grin"
    tempText.innerHTML = " ";
    result.innerHTML = " ";
}