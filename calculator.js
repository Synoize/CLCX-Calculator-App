const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');

const menu = document.getElementById('menu');
const backMenu = document.getElementById('back');
const menuBox = document.getElementById('menu_box');

let string = '';
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = ''
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            input.value = string
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

menu.addEventListener('click', () => {
    menuBox.style = "display:flex; margin-top: -50px; margin-left: -20px; position: absolute; width: 100%; height: 100%; border-radius: 10px; justify-content: space-between;"
})

backMenu.addEventListener('click', () => {
    menuBox.style = "display: none;"
})