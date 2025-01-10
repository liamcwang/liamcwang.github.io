function loadHeader() {
    let port = ""
    if(window.location.port != null)
    {
        port = `:${window.location.port}` 
    }
    const rootURL = `${window.location.protocol}//${window.location.hostname}${port}`;
    fetch(`${rootURL}/src/fragments/header.html`, {
        method: 'GET',
        credentials: 'include'
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            document.getElementById('home-link').setAttribute('href', `${rootURL}/index.html`)
            document.getElementById('gallery-page').setAttribute('href', `${rootURL}/index.html`)
            document.getElementById('about-me-page').setAttribute('href', `${rootURL}/src/pages/about-me.html`)
            document.getElementById('contact-page').setAttribute('href', `${rootURL}/src/pages/contact.html`)
        });
}

window.onload = function () {
    loadHeader();    
};
