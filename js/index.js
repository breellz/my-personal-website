window.onload = function () {
    setInterval(loadIntro, 2000)
  }
  
  var intros = ["a front end developer", "a statistician", "a Gamer", "a Swimmer", "a Gym Freak", "a Tech Lover", "a Movie enthusiast"]
  var index = 0;
  var intro = document.querySelector("#intro-loader")
  
  function loadIntro() {
    intro.innerHTML = intros[index];
    intro.classList.add("fade");
    index++;
    if (index >= intros.length) {
      index = 0;
    }
  }
  