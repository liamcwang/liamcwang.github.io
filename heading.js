function loadHeader() {
    fetch('/header.html', {
        method: 'GET',
        credentials: 'include'
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
}

window.onload = function () {
    loadHeader();    
};
