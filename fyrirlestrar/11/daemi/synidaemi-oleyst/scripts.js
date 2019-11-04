const API_URL = 'https://apis.is/car?number=';

document.addEventListener('DOMContentLoaded', function () {
  const cars = document.querySelector('.cars');

  program.init(cars);
});

/**
 * Bílaleit. Sækir gögn með Ajax á apis.is.
 */
const program = (() => {
  function init(_cars) {

  }

  return {
    init,
  }
})();
