// Retrieving Details Of Superhero Using API.
fetch('https://www.superheroapi.com/api.php/5716145241778857/' + localStorage.getItem('heroID'))
    .then((response) => {
        return response.json();
    })
    .then((hero) => {

        document.title = hero.name;
		let bodyStyle = document.body.style;
        let heroName = document.querySelector('#hero-name');
        let heroTag = document.createElement('span');
		heroTag.innerText = hero.name;
        heroName.prepend(heroTag);
        bodyStyle.backgroundImage = "url(" + hero.image.url + ")";
		bodyStyle.backgroundSize = "cover";
        bodyStyle.backgroundRepeat = "no-repeat";

        // Module To Manage Favourite SuperHero
        let ele = JSON.parse(localStorage.getItem('favourites')) || [];
		const fav_hero = document.querySelector('#addFav');
        for (let k in ele) {
            if (ele[k].id == hero.id) {
                fav_hero.setAttribute('id', 'fav_hero');
            }
        }

        fav_hero.addEventListener('click', () => {

            let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
            let isFavaourite = false;
			//Module to mark superhero as unfavourite
            for (let k = 0; k < favourites.length; k++) {
                if (favourites[k].id == hero.id) {
                    isFavaourite = true;
                    favourites.splice(k, 1);
                    k--;
                }
            }
			//Module to mark superhero as favourite 
            if (isFavaourite) {
                fav_hero.setAttribute('id', 'addFav');
                localStorage.setItem('favourites', JSON.stringify(favourites));
            } else {
                let newFav = {
                    id: hero.id,
                    name: hero.name,
                    url: hero.image.url
                };

                favourites.unshift(newFav);
                localStorage.setItem('favourites', JSON.stringify(favourites));
                fav_hero.setAttribute('id', 'fav_hero');
            }
        });

        // adding superhero to recently viewed superheros
        let recent = JSON.parse(localStorage.getItem('recent')) || [];

        for (let k = 0; k < recent.length; k++) {
            if (recent[k].id == hero.id) {
                recent.splice(k, 1);
                k--;
            }
        }

        let newRecent = {
            id: hero.id,
            name: hero.name,
            url: hero.image.url
        };

        recent.unshift(newRecent);
        recent.splice(14);
        localStorage.setItem('recent', JSON.stringify(recent));


        // Update Module to fill appearance container with physical attributes of super_hero
        let table_appearance = document.createElement('table');
        for (let key in hero.appearance) {

            let table_row = document.createElement('tr');//row
            let table_heading = document.createElement('th');//name
            let table_data = document.createElement('td');//value

            table_heading.innerText = Upper_Case(key.replaceAll('-', ' '));
            let val = hero.appearance[key];
            if (typeof (val) == 'object') {
                val = val.toString().replaceAll(',', '<br>');
            }
            table_data.innerHTML = val;

            table_row.appendChild(table_heading);
            table_row.appendChild(table_data);
            table_appearance.appendChild(table_row);
        }
        appearance.appendChild(table_appearance);

        let table_biography = document.createElement('table');
        for (let key in hero.biography) {

            let table_row = document.createElement('tr');
            let table_heading = document.createElement('th');
            let table_data = document.createElement('td');

            table_heading.innerText = Upper_Case(key.replaceAll('-', ' '));
            let val = hero.biography[key];
            if (typeof (val) == 'object') {
                val = val.toString().replaceAll(',', '<br>');
            } else {
                val = val.replaceAll(',', '<br>')
            }
            table_data.innerHTML = val;

            table_row.appendChild(table_heading);
            table_row.appendChild(table_data);
            table_biography.appendChild(table_row);
        }
        biography.appendChild(table_biography);

        let table_links = document.createElement('table');
        for (let key in hero.connections) {

            let table_row = document.createElement('tr');
            let table_heading = document.createElement('th');
            let table_data = document.createElement('td');

            table_heading.innerText = Upper_Case(key.replaceAll('-', ' '));
            table_data.innerHTML = hero.connections[key].replaceAll(',', '<br>');

            table_row.appendChild(table_heading);
            table_row.appendChild(table_data);
            table_links.appendChild(table_row);
        }
        connections.appendChild(table_links);

        let table_powerstats = document.createElement('table');
        for (let key in hero.powerstats) {

            let table_row = document.createElement('tr');
            let table_heading = document.createElement('th');
            let table_data = document.createElement('td');

            table_heading.innerText = Upper_Case(key.replaceAll('-', ' '));
            table_data.innerText = hero.powerstats[key];

            table_row.appendChild(table_heading);
            table_row.appendChild(table_data);
            table_powerstats.appendChild(table_row);
        }
        powerstats.appendChild(table_powerstats);

        let table_duty = document.createElement('table');
        for (let key in hero.work) {

            let table_row = document.createElement('tr');
            let table_heading = document.createElement('th');
            let table_data = document.createElement('td');

            table_heading.innerText = Upper_Case(key.replaceAll('-', ' '));
            table_data.innerHTML = hero.work[key].replaceAll(',', '<br>');

            table_row.appendChild(table_heading);
            table_row.appendChild(table_data);
            table_duty.appendChild(table_row);
        }
        work.appendChild(table_duty);



    })


function Upper_Case(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
0