const celciusEl = document.getElementById('Celcius');
const fahrenheitEl = document.getElementById('Fahrenheit');
const kelvinEl = document.getElementById('Kelvin');

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

celciusEl.addEventListener('input', function (e) {
  let cTemp = parseFloat(e.target.value);
  let fTemp = cTemp * (9 / 5) + 32;
  let kTemp = cTemp + 273.15;

  fahrenheitEl.value = roundNumber(fTemp);
  kelvinEl.value = roundNumber(kTemp);
});

fahrenheitEl.addEventListener('input', function (e) {
  let fTemp = parseFloat(e.target.value);
  let cTemp = (fTemp - 32) * (5 / 9);
  let kTemp = (fTemp - 32) * (5 / 9) + 273.15;

  celciusEl.value = roundNumber(cTemp);
  kelvinEl.value = roundNumber(kTemp);
});

kelvinEl.addEventListener('input', function (e) {
  let kTemp = parseFloat(e.target.value);
  let cTemp = kTemp - 273.15;
  let fTemp = (kTemp - 273.15) * (9 / 5) + 32;

  celciusEl.value = roundNumber(cTemp);
  fahrenheitEl.value = roundNumber(fTemp);
});
