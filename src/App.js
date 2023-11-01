import './App.css';
import devBoY from './assets/image.png'


function App() {
  return (
    <div className="App">
        <div className='container'>
        <header>
        <h1>NI<span>KA</span></h1>
        <nav>
          <ul>
            <li><a href='/HOME'>HOME</a> </li>
            <li><a href='/HOME'>ABOUT US</a> </li>
            <li><a href='/HOME'>CONTACT US</a> </li>
            <li><a href='/HOME'>SERVICES</a> </li>
          </ul>
        </nav>
        </header>
        <section className='visitext'>
          <div className='visitText'>
            <h2>HI!</h2>
            <h3>I AM NIKA</h3>
            <span>Front End Developer</span>
            <a href='#'>VISIT MY WORKS</a>
          </div>
        </section>
        <section className='aboutMe'>
          <div className='img'>
            <img src={devBoY}/>
          </div>
          <div className='texts'>
            <h2>Who am I?</h2>
            <h3>About Me</h3>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                 specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
            </span>

          </div>

        </section>
        </div>
        
      
    </div>
  );
}

export default App;
