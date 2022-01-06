function blueButton() {
    document.querySelector(".btn-primary").insertAdjacentHTML('afterend', "<div class = 'blue'>I'm right.</div>");
    document.querySelector(".red").remove();
}

function redButton() {
    document.querySelector(".btn-danger").insertAdjacentHTML('afterend', "<div class = 'red'>No, I'm right!</div>");
    document.querySelector(".blue").remove();
}

function hover(event) {
    alert("Hey, I told you not to hover over me!");
}


document.querySelector(".submit").form.addEventListener('submit', (event) => {
    if (document.querySelector("#password").value == "12345678")
        document.querySelector("h1").innerHTML("Hello!");

    else
        event.preventDefault();
});
