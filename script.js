const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');
const del = document.getElementById('del'); 

buttons.forEach(btn => {
    const value = btn.getAttribute('data-value');
    btn.addEventListener('click', () => {
        if(value) display.value += value;
    });
});

clear.addEventListener('click', () => {
    display.value = '';
});

del.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
``
equals.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
});

document.addEventListener('keydown', (e) => {
    if((e.key >= '0' && e.key <= '9') || ['+','-','*','/','.'].includes(e.key)) {
        display.value += e.key;
    } else if(e.key === 'Backspace'){
        display.value = display.value.slice(0,-1);
    } else if(e.key === 'Escape'){
        display.value = '';
    } else if(e.key === 'Enter'){
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    }
});

