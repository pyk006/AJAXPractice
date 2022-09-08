'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//   const languages = Object.values(data.languages)[0];
//   const currencies = Object.values(data.currencies)[0].name;

//   const html = `
//   <article class="country ${className}">
//   <img class="country__img" src= "${data.flags.svg}">
//   <div class="country__data">
//     <h3 class="country__name"> ${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       data.population / 1000000
//     ).toFixed(1)} million</p>
//     <p class="country__row"><span>🗣️</span>${languages}</p>
//     <p class="country__row"><span>💰</span>${currencies}</p>
//   </div>
//  </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   //countriesContainer.style.opacity = 1;
// };

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// // First AJAX CALL

// // const countriesContainer = document.querySelector('.countries');

// // const getCountryData = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data); //use this to study the data you want to use.

// //     const languages = Object.values(data.languages);
// //     const currencies = Object.values(data.currencies);
// //     const html = `
// //   <article class="country">
// //  <img class="country__img" src= "${data.flags.svg}">
// //  <div class="country__data">
// //    <h3 class="country__name"> ${data.name.official}</h3>
// //    <h4 class="country__region">${data.region}</h4>
// //    <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(
// //      1
// //    )} million</p>
// //    <p class="country__row"><span>🗣️</span>${languages[0]}</p>
// //    <p class="country__row"><span>💰</span>${currencies[0].name}</p>
// //  </div>
// // </article>`;

// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// // getCountryData('Portugal');
// // getCountryData('usa');
// /*
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//   const languages = Object.values(data.languages)[0];
//   const currencies = Object.values(data.currencies)[0].name;

//   const html = `
//   <article class="country ${className}">
//   <img class="country__img" src= "${data.flags.svg}">
//   <div class="country__data">
//     <h3 class="country__name"> ${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       data.population / 1000000
//     ).toFixed(1)} million</p>
//     <p class="country__row"><span>🗣️</span>${languages}</p>
//     <p class="country__row"><span>💰</span>${currencies}</p>
//   </div>
//  </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbor = function (country) {
//   // AJAX Call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data); //use this to study the data you want to use.

//     // Render country 1
//     renderCountry(data);

//     //Get neighbor country (2)
//     const neighbor = data.borders?.[0];

//     if (!neighbor) return;

//     // AJAX Call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbor');
//     });
//   });
// };

// //getCountryAndNeighbor('Portugal');

// getCountryAndNeighbor('USA');
// */

// // const request = new XMLHttpRequest();
// // request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// // request.send();

// // const getCountryData = function (country) {
// //   const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then(function (response) {
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       renderCountry(data[0]);
// //     });
// // };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// // const getCountryData = function (country) {
// //   //country 1
// //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then(response => {
// //       console.log(response);

// //       if (!response.ok)
// //         throw new Error(`Country not found (${response.status})`);
// //       return response.json();
// //     })
// //     .then(data => {
// //       renderCountry(data[0]);
// //       // const neighbor = data[0].borders?.[0];
// //       const neighbor = 'dkjlhklafjd';
// //       if (!neighbor) return;

// //       //country 2
// //       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
// //     })
// //     .then(response => {})
// //     .then(data => renderCountry(data[0], 'neighbor'))
// //     .catch(err => {
// //       console.error(`${err} 🚨🚨🚨`);
// //       renderError(`Something went wrong ${err.message}`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };
// const getCountryData = function (country) {
//   //country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not Found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders?.[0];
//       if (!neighbor) {
//         throw new Error('No neighbor found');
//       }

//       //country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbor}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbor'))
//     .catch(err => {
//       console.error(`${err} 🚨🚨🚨`);
//       renderError(`Something went wrong ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
btn.addEventListener('click', function () {
  getCountryData('USA');
});

// getCountryData('Australia');

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

const renderCountry = function (data, className = '') {
  const languages = Object.values(data.languages)[0];
  const currencies = Object.values(data.currencies)[0].name;

  const html = `
    <article class="country ${className}">
    <img class="country__img" src= "${data.flags.svg}">
    <div class="country__data">
      <h3 class="country__name"> ${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)} million</p>
      <p class="country__row"><span>🗣️</span>${languages}</p>
      <p class="country__row"><span>💰</span>${currencies}</p>
    </div>
   </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=162182908017622101228x35396`
  )
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Error request too fast! ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message}`));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
