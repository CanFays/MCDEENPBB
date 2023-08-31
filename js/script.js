console.log('script.js chargé');

// Date section
const timeLeft = () => {
  const weddingDate = new Date(2023, 8, 16, 11);
  const today = new Date();
  const timeLeft = weddingDate - today;
  return timeLeft;
}

const timeCalculator = (timeLeft) => {
  const putDays = document.getElementById('date-timer-days');
  const putHours = document.getElementById('date-timer-hours');
  const putMinutes = document.getElementById('date-timer-minutes');
  const putSeconds = document.getElementById('date-timer-seconds');

  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

  putDays.innerHTML = daysLeft;
  putHours.innerHTML = hoursLeft;
  putMinutes.innerHTML = minutesLeft;
  putSeconds.innerHTML = secondsLeft;
}

const goodTimingText = (timeLeft) => {
  const putBeforeOrAfter = document.getElementById('before-after');
  if (timeLeft < 0) {
    putBeforeOrAfter.innerHTML = 'depuis';
  } else {
    putBeforeOrAfter.innerHTML = 'dans';
  }
}

const countdown = () => {
  setInterval(() => {
    timeCalculator(timeLeft());
  }, 1000);;
  goodTimingText();
}

countdown();


// Chargement des partials dans la section asked-section

const sectionsList = ['map', 'notice', 'contact', 'photos', 'timeline']
const navListening = document.querySelectorAll('.nav--listening');


const fetchAskedPartial = (sectionName) => {
const askedSection = document.getElementById('main__asked-section');
          fetch(`./_${sectionName}.html`)
          .then(response => response.text())
          .then(content => askedSection.innerHTML = content);
}

const loadingAskedPartial = (sectionWanted) => {
  const askedSection = document.getElementById('main__asked-section');
  askedSection.innerHTML = '';
  fetchAskedPartial(sectionWanted);
}

const isolateClickedClass = (clk) => {
  const clickedClasses = Array.from(clk.classList);
  console.log("array clickedClasses", clickedClasses);
  const clickedClass = clickedClasses.find(cls => sectionsList.includes(cls));
  return clickedClass;
}

navListening.forEach((nav) => {
  nav.addEventListener('click', event => {
    const clickedElement = event.target;
    console.log("clickedElement", clickedElement);
    const clickedClass = isolateClickedClass(clickedElement);
    loadingAskedPartial(clickedClass);
  });
});


// TODO: add event listener on click on the alveolus to load the asked section

// addEventListener du click sur chaque .nav--listening
// supprimer le contenu de la div .main__asked-section
// récupérer l'élément clické (nécé de les mettre dans la même div?) => variable avec la target
// faire correspondre l'élément clické avec un des partials
// fetch le partial correspondant => fetch(`/_${target}.html`)
// injecter le partial dans la div .main__asked-section
// => innerHTML dans variable qui cible la div .main__asked-section
// style: alterner une fois sur deux thèmes pink et white, avec la transition qui va bien
// ../elements\images\.svg  => alterner WPG et PWG et remplir l'attribut src de l'image dans .main__asked-section



/* <html>

<body>

<div id="header"></div>

<h1>Contenu principal de la page</h1>

<div id="footer"></div>

<script>
  // Chargement du contenu des partiels
  const headerDiv = document.getElementById('header');
  const footerDiv = document.getElementById('footer');

  fetch('/partials/header.html')
    .then(response => response.text())
    .then(content => headerDiv.innerHTML = content);

  fetch('/partials/footer.html')
    .then(response => response.text())
    .then(content => footerDiv.innerHTML = content);
</script>

</body>
</html> */




// Lottie animation reader

const giveMeFun = (animationNameAndID) => {
  const path = `../elements/images/${animationNameAndID}.json`;
  const location = document.getElementById(animationNameAndID);

  const animation = bodymovin.loadAnimation({
    container: location,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: path
  });
  return animation;
}

console.log('giveMeFun active');
giveMeFun('mobile');
// giveMeFun('bear');
// giveMeFun('cat');
// giveMeFun('watermelon');
// giveMeFun('poele');
// giveMeFun('calandar');


      // hamburger menu
