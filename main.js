// locomotive-scroll 
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: true,
    getDirection: true,
    getSpeed: true,
    reloadOnContextChange: true,
    lerp: 0.1,
    smartphone: {
        smooth: true,
    },
    tablet: {
        smooth: true,
    },
    
});



// language switcher
var checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function() {
    document.getElementById("who").innerHTML = checkbox.checked ? "Who am I ?" : "Qui suis-je ?";
    document.getElementById("desc").innerHTML = checkbox.checked ? "I'm a web development and cybersecurity enthusiast. I'm currently training as a ''developer'' in France. I'm also a big fan of video games and manga." : "Je suis un passionné du développement web et de la cybersécurité. Je suis actuellement en formation de ''développeur'' en France. Je suis également un grand fan de jeux vidéos et de manga.";
    document.getElementById("h1-prj").innerHTML = checkbox.checked ? "My projects" : "Mes projets";
    document.getElementById("desc-prj").innerHTML = checkbox.checked ? "I currently do not have many personal projects, but rather school projects (websites, games...). I am currently working on several personal projects, if you want to know more, please check out my Github!" : "Je n'ai actuellement pas beaucoup de projets personnels, mais plutôt des projets scolaires(sites web, jeux...). <br>Je suis actuellement en train de faire plusieurs projets personnels, si vous voulez en savoir plus, je vous invite à voir mon Github !";
    document.getElementById("footer-txt").innerHTML = checkbox.checked ? "© 2022 Monsieur BoiBoi - This website is under my pseudonym and contains no personal information, it's a website created just for me to practice." : "© 2022 Monsieur BoiBoi - Ce site est sous mon pseudonyme et ne contient aucune information personnelle, c'est un site créé uniquement pour m'exercer.";
  });

  //dark mode switcher
    var checkbox2 = document.getElementById("checkbox-darkmode");
    checkbox2.addEventListener("change", function() {
        document.body.classList.toggle("light");
    }
    );
  


