const leeftijdInput = document.getElementById('leeftijdInput');
const urenInput = document.getElementById('urenInput');
const resultaat = document.getElementById('salarisResultaat');

const uurlonen = {
  15: 3.98,
  16: 4.67,
  17: 5.37,
  18: 6.97,
  19: 7.81,
  20: 8.96,
  21: 13.68,
};

function berekenSalaris() {
  const leeftijd = parseInt(leeftijdInput.value);
  const uren = parseFloat(urenInput.value);

  if (!leeftijdInput.value || !urenInput.value) {
    resultaat.textContent = 'salaris';
    return;
  }

  if (isNaN(leeftijd) || leeftijd < 15) {
    resultaat.textContent = 'salaris';
    return;
  }

  if (isNaN(uren) || uren <= 0) {
    resultaat.textContent = 'salaris';
    return;
  }

  const uurloon = leeftijd >= 21 ? uurlonen[21] : uurlonen[leeftijd];
  const maandloon = (uurloon * uren * 52 / 12).toFixed(2);

  resultaat.textContent = `€${uurloon.toFixed(2)}/u — €${maandloon}/mnd`;
}

leeftijdInput.addEventListener('input', berekenSalaris);
urenInput.addEventListener('input', berekenSalaris);