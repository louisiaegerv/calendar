var select = document.querySelector('select');
var title = document.querySelector('h1');
var list = document.querySelector('.list');
var year = new Date().getFullYear();

select.onchange = function() {
    createCalendar(select.value);
}

function createCalendar(selectedMonth) {
    list.innerHTML = '';
    var daysInMonth = new Date(year, selectedMonth, 0).getDate();
    for(var i = 1; i <= daysInMonth; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = i;
        listItem.innerHTML = '<a target="_blank"  href="http://louisiaegerv.github.io/resume">' + i + '</a>';
        list.appendChild(listItem);
    }
}

createCalendar(1);