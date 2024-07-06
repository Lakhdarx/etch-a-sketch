const container = document.querySelector('.container');

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

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = 'black';
    });
});

