  // Bank some good vibe options
  const vibrais = [
    "...muito agradecido!",
    "...valeu,tenha um bom dia!",
    "...e você também.. é nós!",
    "...massa, estou treinando direto! 🐶"
  ];

   // choose a random good vibe
  var vibre = vibrais[Math.floor(Math.random() * Math.floor(vibrais.length))];

  // display a good vibe
  document.querySelector(".vibre").append(vibre);
