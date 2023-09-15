//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Portfolio of Sayaka Gozkara</h2>
        <a href="https://github.com/jirosian" class="btn btn--yellow btn--cubic">View on GitHub</a>
      </header>
      
      <div class="introduction">
      <h1>Thank you for visiting my portfolio!</h1>
      <p>Welcome to my coding journey!  <br/>I'm a Computer Science enthusiast with a solid foundation from Langara College, where I earned my Computer Science diploma. 
        
        <br/><br/>
        While C++ is my trusty companion, I'm not limited to just one language; I'm fluent in Java, JavaScript, React.js, and more. 
        
        <br/><br/>
        This portfolio showcases my adventures in coding, where I've combined my knowledge and curiosity to create innovative projects.
      
        <br/><br/>
        Additionally, I'm currently pursuing a Bachelor's degree in Computer Science at Simon Fraser University, further fueling my quest for knowledge and excellence.</p>
      </div>

      <h1>Projects</h1>

      <section class="section">  
        <hr class="line"/>
        <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big"> JingleNet Announcement Processor</h1>
              <a href="https://github.com/jirosian/Myportfolio/tree/main/a3" class="viewcode">View Code</a>         
              <p class="description">IWelcome to the JingleNet Announcement Processor, a magical program I developed with C++. In the enchanting world of the North Pole, where Santa Claus and his industrious elves reside, communication is as essential as the twinkle in Rudolph's nose. This program orchestrates the flow of announcements within the North Pole's bustling community.</p>
          </div>
        </div>

        <hr class="line"/>
        <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
                Wordlist Manager - AVL Tree Implementation
              </h1>
              <a href="https://github.com/jirosian/Myportfolio/tree/main/a5" class="viewcode">View Code</a> 
              <p>The Wordlist Manager project, developed with C++, is a testament to my dedication to programming excellence, pushing the boundaries of data structures by utilizing an AVL tree as its core foundation. This undertaking demonstrates my commitment to optimizing data structures for real-world applications, emphasizing efficiency and elegance in code.</p>
          </div>
        </div>

        <hr class="line"/>
        <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
              Bird Baby Rescue Game - A JavaScript Canvas Adventure
              </h1>
              <a href="https://github.com/jirosian/jirosian.github.io" class="viewcode">View Code</a> 
              <p>The Bird Baby Rescue Game, a Javascript-based gaming project that signifies my first significant step into the world of game development. 
                This game is a demonstration of my evolving skills and my passion for creating immersive and interactive experiences.
                The Bird Baby Rescue Game is a 2D gaming marvel meticulously crafted using JavaScript and HTML5 canvas. In this game, players earn points by heroically rescuing baby birds while deftly avoiding oncoming cars.</p>
          </div>
        </div>

        <hr class="line"/>
        <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
              Travel Destinations Unveiled - An Informative Web Experience
              </h1>
              <a href="https://admirable-monstera-2df22d.netlify.app/" class="viewcode">View Website</a> 
              <p>Introducing "Travel Destinations Unveiled," a meticulously crafted web page designed to serve as an informative guide for travel enthusiasts 
                seeking unique and hidden gems for their next adventure. This project represents my inaugural team effort in web development, utilizing HTML5
                 and CSS to create a visually appealing and user-friendly platform.</p>
          </div>
        </div>
      </section>

      <footer>
      <h2>Contact</h2>
        <ul>
          <li><a href="mailto:jirosian@gmail.com"  class="contact">Email</a></li>
          <li><a href="http://www.linkedin.com/in/sykg3"  class="contact">LinkedIn</a></li>
        </ul>
        <br/>
        © 2023 Sayaka Gozkara
        
      </footer>
    </div>
    
  );


}

export default App;
