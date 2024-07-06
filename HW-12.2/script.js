function handleButtonClick (event) {
    if (event.target.classList.contains (`js-btn`)) {
        console.log (`Вы нажали на ${event.target.textContent}`);
        event.target.classList.add(`clicked`);
    }
    setTimeout(() => {
        event.target.classList.remove(`clicked`);
    }, 500);
}

document.querySelector(`.js-btn-container`).addEventListener (`click`, handleButtonClick)