import './App.css';
import Testimonio from './componentes/Testimonio'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>freeCodeCamp</h1>
        <Testimonio 
          nombre="Emma Bostian"
          imagen="Emma"
          testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at"
          pais="Suecia"
          empresa="Spotify"
          cargo="Ingeniera de Software"  
        />
        <Testimonio
          nombre="Shawn Wang"
          imagen="Shawn"
          testimonio="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
          pais="Singapur"
          empresa="Amazon"
          cargo="Ingeniero de Software"
        />
        <Testimonio
          nombre="Sarah Chima"
          imagen="Sarah"
          testimonio="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
          pais="Nigeria"
          empresa="ChatDesk"
          cargo="Ingeniera de Software"
        />
      
        
      </header>
    </div>
  );
}

export default App;
