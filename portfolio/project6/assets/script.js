// Loading Module To Display Recently Viewed SuperHeros
const stored_data = document.querySelector('#body-section');

let recent_viewed = JSON.parse(localStorage.getItem('recent')) || [];

for (let hero of recent_viewed) {
	const img = document.createElement('img');
    const div = document.createElement('div');
    img.setAttribute('src', hero.url);
    const span_tag = document.createElement('span');
    span_tag.innerText = hero.name;

    div.appendChild(img);
    div.appendChild(span_tag);
    stored_data.appendChild(div);
    div.addEventListener('click', () => {
        localStorage.setItem('heroID', hero.id);
        document.location.href = 'assets/Information/index.html';
    });
}

// Search Module Using API
const hunterbar = document.querySelector('#hunter-bar');

// Adding Event Listener To Search Bar Named Hunter Bar To Get Results
hunterbar.addEventListener('input', () => getResults());

// Displaying Results As Per Search Input
async function getResults() {

    await fetch('https://www.superheroapi.com/api.php/5716145241778857/search/' + hunterbar.value)
        .then(
            (response) => {
                return response.json();
            }
        )
        .then(
            (data) => {
                const results = document.querySelector('#results');

                // Erasing Searched Results from previous search.
                while (results.children.length !== 0) {
                    results.removeChild(results.children[0]);
                }

                results.classList.remove('concealed');

                // Appending Search results to results container named stored_data.
                for (let hero of data.results) {
                    // creating segments
                    const div = document.createElement('div');
                    const atag = document.createElement('a');
                    const span = document.createElement('span');

                    span.innerText = hero.name;
                    div.appendChild(atag);
                    atag.appendChild(span);
                    atag.setAttribute('href', 'assets/Information/index.html');

                    results.appendChild(div);
                    div.innerHTML = `${div.innerHTML + ' <span id="addFav"> &#10084;</span>'}`;

                    const Like_btn = div.lastChild;
                    let segments = JSON.parse(localStorage.getItem('favourites')) || [];

                    for (let i = 0; i < segments.length; i++) {
                        if (segments[i].id == hero.id) {
                            Like_btn.setAttribute('id', 'fav');
                        }
                    }

                    // adding click event to the favourite btn
                    Like_btn.addEventListener('click', () => {


                        let fav = JSON.parse(localStorage.getItem('favourites')) || [];
                        let isFavaourites = false;

                        for (let i = 0; i < fav.length; i++) {
                            if (fav[i].id == hero.id) {
                                isFavaourites = true;
                                fav.splice(i, 1);
                                i--;
                            }
                        }

                        if (isFavaourites) {
                            Like_btn.setAttribute('id', '');
                            localStorage.setItem('favourites', JSON.stringify(favourites));
                            return;
                        } else {
                            let newFav = {
                                id: hero.id,
                                name: hero.name,
                                url: hero.img.url
                            };

                            fav.unshift(newFav);
                            localStorage.setItem('favourites', JSON.stringify(fav));
                            Like_btn.setAttribute('id', 'fav');
                        }
                    });
                    
                    div.addEventListener('click', () => {
                        localStorage.setItem('heroID', hero.id);
                    });
                }
            }
        );

}

// This module will hide the searched results when clicked outside search bar named hunter bar  
window.addEventListener('click', (e) => {
    const res = document.querySelector('#results');
    let indicator = true;

    for (let element of e.path) {
        if (element === res || element === hunterbar) {
            indicator = false;
        }
    }

    if (indicator) {
        res.classList.add('concealed');
    }
});



