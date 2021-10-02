//(0°C × 9/5) + 32
//°F
const form = document.forms['form'];
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const value = form.querySelector('input[type = "text"]').value;
    parseFloat(value);
    const formula = (value * 9 / 5) + 32
    const content = document.querySelector('.fahrenheit p')
    content.textContent += formula;
    const reset = document.querySelector('input[type = "reset"]');
    reset.addEventListener('click', function (e) {
        content.innerHTML = "°F =";
    })
})
