let userLink = '';

const setLinkButton = document.getElementById('setLinkButton');
const redirectButton = document.getElementById('redirectButton');

setLinkButton.addEventListener('click', () => {
    userLink = prompt('Будь ласка, введіть посилання:');
    if (userLink) {
        alert(`Посилання збережено: ${userLink}`);
    } else {
        alert('Ви не ввели посилання.');
    }
});

redirectButton.addEventListener('click', () => {
    if (userLink) {
        window.location.href = userLink;
    } else {
        alert('Спочатку введіть посилання, натиснувши на кнопку "Ввести посилання".');
    }
});
