const homes = document.querySelector('.homes');

const homesElement = homes.lastElementChild;

fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
    .then((response) => response.json())
    .then((result) => {

        result.forEach((item) => {

            const figure = document.createElement('figure');
            figure.className = 'homes__element';
            figure.setAttribute('id', item.id);
            homesElement.appendChild(figure);

            const img = document.createElement('img');
            img.setAttribute('src', item.imageUrl);
            img.style.width = `${296}px`;
            img.style.height = `${296}px`;
            figure.appendChild(img);

            const figcaption = document.createElement('figcaption');
            figcaption.className = 'homes__name--img';
            figure.appendChild(figcaption);

            const hotelName = document.createElement('a');
            hotelName.setAttribute('href', '#');
            hotelName.className = 'homes__link--country';
            hotelName.innerHTML = item.name;
            figcaption.appendChild(hotelName);

            const countryName = document.createElement('a');
            countryName.setAttribute('href', '#');
            countryName.className = 'homes__name--country';
            countryName.innerHTML = `${item.city}  ${item.country}`;
            figcaption.appendChild(countryName);
        });

    })

    .catch((err) => console.log(err));