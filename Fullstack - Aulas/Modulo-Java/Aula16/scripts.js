const buttons = document.querySelectorAll('button')
const display = document.querySelector('#resultado')


for (const btn of buttons) {
    
        btn.addEventListener('click', () => {
            if (btn.innerText !== '=' && btn.innerText !== 'C') {
            display.value += btn.innerText
            }
            else if (btn.innerText === 'C') {
                display.value = ''
            }
            else {
                display.value = eval(display.value)
            }
        })
} 