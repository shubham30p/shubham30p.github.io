const container_part = document.querySelector('#container_part');

let fav = JSON.parse(localStorage.getItem('favourites')) || [];

for (let hero of fav) {
	const img = document.createElement('img');
    const div = document.createElement('div');
    img.setAttribute('src', hero.url);
    img.setAttribute('alt', hero.name);
    const span = document.createElement('span');
    span.innerText = hero.name;
    const button = document.createElement('button');
    button.innerHTML = '&#10060;';

    div.appendChild(img);
    div.appendChild(span);
    span.appendChild(button);
    div.setAttribute('id', hero.id);
    container_part.appendChild(div);

    img.addEventListener('click', () => {
        localStorage.setItem('heroID', hero.id);
        document.location.href = 'Information/index.html';
    });
	//Module to mark superhero as unfavourite
    button.addEventListener('click', function () {
        let fav = JSON.parse(localStorage.getItem('favourites'));

        container_part.removeChild(this.parentElement.parentElement);

        let currentID = this.parentElement.parentElement.getAttribute('id');

        for (let k = 0; k < fav.length; k++) {
            if (fav[k].id == currentID) {
                fav.splice(k, 1);
                k--;
            }
        }

        localStorage.setItem('favourites', JSON.stringify(fav));
    });
}