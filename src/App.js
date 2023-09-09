import './App.css';
import Navbar from './components/Navbar';
import StratInsights from './components/StratInsights';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='bg-black'>
        <div>
          <div
            className="bg-cover bg-center h-screen w-screen relative flex flex-col items-center justify-center"
            style={{
              backgroundImage: `url('https://i.imgur.com/BYu3zAD.png')`,
            }}
          >
            <div className='text-white text-6xl font-semibold mb-2'>BITS Goa Consulting Club</div>
            <div className='text-[#E5CF5F] text-5xl font-light tracking-wide'>Insight. Impact. Excellence</div>
          </div>
          <StratInsights />
        </div>
      </div>
      
    </div>
  );
}

export default App;
