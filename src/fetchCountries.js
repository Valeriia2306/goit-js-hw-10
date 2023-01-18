// https://restcountries.com/v3.1/name/{name}
// https://restcountries.com/v2/{service}?fields={field},{field},{field}
const BASE_URL = 'https://restcountries.com';
const filterResponse = 'fields=name,capital,population,flags,languages';
function fetchCountries(name) {
  const url = `${BASE_URL}/v3.1/name/${name}?${filterResponse}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response);
    }

    return response.json();
  });
}
export { fetchCountries };
