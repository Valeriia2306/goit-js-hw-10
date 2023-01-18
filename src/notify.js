import Notiflix from 'notiflix';

function warning() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}

function failure() {
  return Notiflix.Notify.failure('Oops, there is no country with that name');
}
export { warning, failure };
