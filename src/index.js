import './css/styles.css';
import { refs } from './refs';
import { fetchCountries } from './fetchCountries';
import { renderCountries, renderCountryCards } from './renderCountries';
import { warning, failure } from './notify';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

refs.searchInput.addEventListener(
  'keydown',
  debounce(onSearch, DEBOUNCE_DELAY)
);
function onSearch(e) {
  e.preventDefault();

  const inputName = e.target.value;

  if (inputName.trim() === '') {
    clearHTML();
    return (refs.list.innerHTML = '');
  }

  // Function
  fetchCountries(inputName)
    .then(countries => {
      clearHTML();
      const renderResult = checkAmountContries(countries);

      renderResult(countries);
    })
    .catch(error => {
      console.log(error);
      clearHTML();
      failure();
    });
}

function checkAmountContries(countries) {
  const amount = countries.length;
  let result = null;

  if (amount > 10) {
    return warning;
  }
  if (amount >= 2 && amount <= 10) {
    result = renderCountries;
  }
  if (amount === 1) {
    result = renderCountryCards;
  }

  return result;
}

function clearHTML() {
  refs.list.innerHTML = '';
  refs.info.innerHTML = '';
}
