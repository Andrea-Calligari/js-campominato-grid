const gridDOMElement = document.querySelector('.grid');
const selectDOMElement = document.getElementById('')
const size = 10;
const numOfCellElement = size ** 2 // potenza di 2 => 8 * 8 

for (let i = 0; i < numOfCellElement; i++) {
    const num = i + 1;

    const cellElement = document.createElement('div');
    cellElement.className = 'cell';
    cellElement.innerHTML = num

    gridDOMElement.append(cellElement)

    cellElement.addEventListener('click', function () {

        console.log('click casell numero:', num);


        if (cellElement.classList.contains('bg-dark') === true) {
            cellElement.classList.remove('bg-dark');
        } else {
            cellElement.classList.add('bg-dark');
        }

        // cellElement.classList.toggle('bg-dark'); // questo fa esattamente cio che fa l' if sopra

    });
}

