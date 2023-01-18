import { refs } from './refs';

function renderCountries(country) {
  const markup = country
    .map(({ name, flags }) => {
      return `<li class="item" ><img class="flags" src="${flags.svg}" width="70">${name.official}</li>`;
    })
    .join('');
  refs.list.insertAdjacentHTML('beforeend', markup);
}

function renderCountryCards(country) {
  const [{ name, capital, population, flags, languages }] = country;
  const language = Object.values(languages);
  const markup = `
    <p class="country"><img class="flags" src="${flags.svg}" width="70">${name.official}</p>
    <ul class="country-info">
    <li class ="item-text"><span class="label">Capital: </span>${capital}</li>
    <li class ="item-text"><span class="label">Population: </span>${population}</li>
    <li class ="item-text"><span class="label">Languages: </span>${language}</li>
    </ul>`;

  refs.info.insertAdjacentHTML('beforeend', markup);
}
// Export
export { renderCountries, renderCountryCards };
