<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bastien Lang Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    var options = {
      strings: ["Welcome", "Hi", "Greetings", "Hey", "Hello World"],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
      backDelay: 2000,
      cursorChar: '_'
    };

    var typed = new Typed("#typed", options);
  });
</script>
</head>
<body>
    <header id="header">
    <div id="cookie-container"></div>
      <nav>

      <div id="burger">
        <div id="burgerDraw"></div>
      </div>
        <div id="left-nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <div id="right-nav">
          <a href="CV-Bastien-Lang.pdf" download="Bastien_Lang_CV">
            <button id="mycv" aria-label="Download my CV"><b>My CV</b></button>
            <?php include("svg.php");?>
          </a>
        </div>
      </nav>
    </header>
      <section id="home">
      <?php include("bg-forme.php");?>

        <div id="title-text" class="title">
          <div>
            <span id="typed"></span>
          </div>
          <div id="title-text-div">
            <span id="im">I'm</span>
            <span id="bastien">Bastien</span>
          </div>
        </div>
        
        <div id="cookieClicker">
          <div id="cookie-text">
            <span>First, have a <b>cookie</b></span>
            <span>(click)</span>
          </div>
          <img src="cookie.png" alt="cookie" id="imgCookie">
          <div id="cookie-count">
            <span><b>0</b></span>
            <span id="cookie-plural">cookie</span>
          </div>
        </div>


        <div id="arrow">
          <a href="#projects">
            <svg id="arrowSvg" width="47" height="29" viewBox="0 0 47 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42 5L23.5 24L5 5" stroke="#263547" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
      
      <section id="projects">
        <span class="title">WHAT I DO</span>
        <div>
            <button class="english-flag showFlag">
            <?php include("english-flag.php");?>
            </button>
            <button class="french-flag">
              <?php include("french-flag.php");?>
            </button>
          </div>
        <div class="cards-container">
        <span class="subtitles">Websites</span>
        <div class="cards">
          <a class="card" href="budget_app/index.php">
            <div class="card-inner">
              <div class="card-front">
                <span>Budget</span>
                <span>App</span>
              </div>
              <div class="card-back">
                <span>Voir Détails</span>
              </div>
            </div>
          </a>
          <a class="card" href="budget_app/index.php">
            <div class="card-inner">
              <div class="card-front">
                <span>Weackers</span>
              </div>
              <div class="card-back">
                <span>Voir Détails</span>
              </div>
            </div>
          </a>
          <a class="card" href="budget_app/index.php">
            <div class="card-inner">
              <div class="card-front">
                <span>Weackers</span>
              </div>
              <div class="card-back">
                <span>Voir Détails</span>
              </div>
            </div>
          </a>
        </div>
        </div>
        <div class="cards-container">
          <span class="subtitles">Designs</span>
          <div class="cards">
            <a class="card" href="budget_app/index.php">
              <div class="card-inner">
                <div class="card-front">
                  <span>Budget</span>
                  <span>App</span>
                </div>
                <div class="card-back">
                  <span>Voir Détails</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id='contact'>
        <div>
          <span class="title">CONTACT</span>
          <button>Send a message</button>
        </div>
      </section>  
      <div id="closeForm" class="hidden"></div>
      <div id="contact-form" class="hidden">
        <form action="contactT.php" method="post">
          <button aria-label="Fermer le formulaire" id="close">
            <i class='bx bx-x-circle'></i>
          </button>
          <div id="names" class="allFields">
            <div id="lastName">
              <label for="lastName">Last name</label>
              <input type="text" required name="lastName">
            </div>
            <div id="firstName">
              <label for="firstName">First name</label>
              <input type="text" required name="firstName">
            </div>
          </div>
          <div class="fields allFields">
            <label for="email">E-mail</label>
            <input type="email" required name="email">
          </div>
          <div class="fields allFields">
            <label for="message">Message (french or english)</label>
              <textarea name="message" id="message" required maxlength="500"></textarea>
          </div>
          <input type="submit" name="submit" value="Submit" id="submit">
        </form>
      </div>

      <section id="about">
        <div>
          <span class="title hidden" id="à-propos">À PROPOS</span>
          <span class="title" id="about-me">ABOUT ME</span>
          <div>
            <button class="showFlag english-flag">
            <?php include("english-flag.php");?>
            </button>
            <button class="french-flag">
              <?php include("french-flag.php");?>
            </button>
          </div>
          <div>
            <span id="french" class="hidden">
              Actuellement étudiant de <b>2ème année</b> en <b>MMI</b> (Métiers du Multimédia et de l'Internet) à l'IUT de Lens, je suis passionné par les nouvelles technologies et le développement d'applications web. Je maitrise le <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, ainsi que des frameworks tel que <b>Laravel</b>. J'ai également travaillé avec des langages back-end comme <b>PHP</b> ou <b>Node.js</b> et je suis à l'aise avec la gestion de bases de données en <b>MySQL</b>.
            </span>
            <span id="english">
              Currently a <b>2nd year</b> student in <b>MMI</b> (Multimedia and Internet Trades) at the IUT of Lens, I am passionate about new technologies and web application development. I am proficient in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, as well as frameworks such as <b>Laravel</b>. I have also worked with back-end languages like <b>PHP</b> or <b>Node.js</b> and I am comfortable with managing databases in <b>MySQL</b>.
            </span>
          </div>
          <div>
            <span id="competences" class="hidden">Compétences</span>
            <span id="skills">Skills</span>
          </div>

          <?php include('skills-icons.php');?>
        </div>
        <?php include("portrait.php");?>
      </section>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/16.1.3/smooth-scroll.polyfills.min.js"></script>

      <script>
  // Initialize smooth scroll for navbar links
  var scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 800,
    speedAsDuration: true
  });

  // Scroll animation when using the mouse scroll
  let isScrolling = false;
  let lastScrollTime = 0;

  window.addEventListener('wheel', (event) => {
    const now = Date.now();
    if (!isScrolling && now - lastScrollTime > 1000) {  // Délai minimum d'une seconde entre les scrolls
      isScrolling = true;
      lastScrollTime = now;
      
      let direction = event.deltaY > 0 ? 1 : -1; // Determine scroll direction
      const sections = document.querySelectorAll('section');
      let currentSection = Math.round(window.scrollY / window.innerHeight);
      let nextSectionIndex = currentSection + direction;

      if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
        const nextSection = sections[nextSectionIndex];
        scroll.animateScroll(nextSection);
      }

      setTimeout(() => { isScrolling = false; }, 800); // Timeout pour éviter le scroll rapide
    }
  });
</script>

      <script type="module" src="main.js"></script>
</body>
</html>