console.log('script.js chargé');

// Lottie animation reader

const giveMeFun = (animationNameAndID) => {
  console.log('giveMeFun chargée');
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

giveMeFun('mobile');







          // Chargement des partials dans la section asked-section
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





      // hamburger menu

      // transition timeline

      // timer
