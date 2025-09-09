(function () {
  function generateDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  const button = document.querySelector('.roll-dice-button');
  const allFaces = Array.from(document.querySelectorAll('.dice-number'));
  const diceSide = document.querySelector('.dice-side');
  const resultText = document.getElementById('rolled-result');

  // Initial state
  allFaces.forEach((face) => {
    if (face.id === 'dice-number-1') {
      face.style.visibility = 'visible';
      face.setAttribute('aria-hidden', 'false');
    } else {
      face.style.visibility = 'hidden';
      face.setAttribute('aria-hidden', 'true');
    }
  });

  if (button) {
    button.addEventListener('click', () => {
      const rolledNumber = generateDiceNumber();

      // trigger animation
      diceSide.classList.add('rolling');

      setTimeout(() => {
        // hide all faces
        allFaces.forEach((face) => {
          face.style.visibility = 'hidden';
          face.setAttribute('aria-hidden', 'true');
        });

        // show the chosen face
        const faceToShow = document.getElementById(
          'dice-number-' + rolledNumber
        );
        if (faceToShow) {
          faceToShow.style.visibility = 'visible';
          faceToShow.setAttribute('aria-hidden', 'false');
        }

        // update result text
        if (resultText) {
          resultText.textContent = `You rolled: ${rolledNumber}`;
        }

        // remove animation class so it can re-trigger next click
        diceSide.classList.remove('rolling');

        console.log('Rolled:', rolledNumber);
      }, 500); // matches animation duration
    });
  }
})();
