let inputCounter = document.querySelector('#input-counter');
let startCounter = document.querySelector("#start-counter");
let timerCircle = document.querySelector("#main-progress");

let timerNum = document.querySelector("#main-progress > span");

startCounter.addEventListener('click', function (e) {
    let seconds = parseInt(inputCounter.value);

    if (isNaN(seconds)) return toggleErrorMessage({
        show: true,
        message: "Your time is invalid"
    });
    toggleErrorMessage({
        show: false
    });

    toggleStartBox({
        show: true
    });

    timerNum.textContent = seconds;
    let orginalScounds = seconds;
    let lastPersent = "progress-100";
    let interval = setInterval(() => {
        if (lastPersent) timerCircle.classList.remove(lastPersent);
        if (seconds <= 0) {
            clearInterval(interval);
            toggleStartBox({
                show: false
            });
            return;
        }
        seconds -= 1;
        timerNum.textContent = seconds;
        let percent = lastPersent = `progress-${ Math.abs(Math.floor((((orginalScounds - seconds) / orginalScounds) * 100) - 100))}`;
        timerCircle.classList.add(percent);

    }, 1000);
});

let toggleErrorMessage = ({
    show,
    message
}) => {
    let errorElement = document.querySelector("#error-message");
    if (show == true) {
        errorElement.textContent = message;
        errorElement.classList.add("active");
    } else {
        errorElement.classList.remove("active");
    }
};

let toggleStartBox = ({
    show
}) => {
    let start‌‌‌Box = document.querySelector(".start-box");
    let loading = document.querySelector(".loading");
    let success = document.querySelector(".success");
    if (show) {
        timerCircle.style.display = "block";
        start‌‌‌Box.style.display = "none";
        success.style.display = "none";
        loading.style.display = "block";
    } else {
        timerCircle.style.display = "none";
        start‌‌‌Box.style.display = "block";
        inputCounter.value = "";
        success.style.display = "block";
        loading.style.display = "none";
    }
};