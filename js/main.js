const container = document.querySelector('.container');
const button = document.querySelector('button');

function hoverEffect() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = generateColor();
        });
    });
}


for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.setAttribute('class','cell');
        row.appendChild(cell);
    }
}
hoverEffect();

button.addEventListener('click', () => {
    dimension = Number(prompt('Enter the dimensions of the grid (Less than 100X100)'));
    if (isNaN(dimension) || dimension > 100) {
        alert('Invalid Input');
        return;
    }

    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }

    for (let i = 0; i < dimension; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        for (let j = 0; j < dimension; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('class','cell');
            row.appendChild(cell);
        }
    }

    hoverEffect();

});

function colorStrength() {
    return (Math.floor(Math.random() * 255) + 1);
}


function generateColor() {
    const red = colorStrength();
    const green = colorStrength();
    const blue = colorStrength();
    return (`rgb(${red},${green},${blue})`);
}

