document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('myTable');
    const headers = table.querySelectorAll('th');
    let sortOrder = 1;  // 1 for ascending, -1 for descending

    headers.forEach((header, index) => {
        // Only add event listener if <th> contains an <img>
        if (header.querySelector('img')) {
            header.addEventListener('click', () => {
                sortTableByColumn(table, index, sortOrder);
                sortOrder = -sortOrder;  // Toggle the sort order
            });
        }
    });

    function sortTableByColumn(table, column, order) {
        const tbody = table.querySelector('tbody');
        const rowsArray = Array.from(tbody.querySelectorAll('tr'));

        rowsArray.sort((rowA, rowB) => {
            const cellA = rowA.children[column];
            const cellB = rowB.children[column];

            // Check if the cell contains an image
            const imgA = cellA.querySelector('img');
            const imgB = cellB.querySelector('img');

            const a = imgA ? imgA.alt : cellA.textContent.toLowerCase();
            const b = imgB ? imgB.alt : cellB.textContent.toLowerCase();

            return (a > b ? 1 : a < b ? -1 : 0) * order;
        });

        // Clear the table body and append the sorted rows
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }

        tbody.append(...rowsArray);
    }
});