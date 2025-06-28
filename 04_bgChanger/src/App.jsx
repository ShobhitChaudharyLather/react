import { useState } from 'react';
import './App.css'; // assuming only tailwind imports

function App() {
  const [color, setColor] = useState('pink');

  return (
    <div className="w-screen h-screen duration-200" style={{ backgroundColor: color || 'white' }}>
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor('red')}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>
          <button
            onClick={() => setColor('green')}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>
          <button
            onClick={() => setColor('yellow')}
            className="outline-none px-4 py-1 rounded-full text-black"
            style={{ backgroundColor: 'yellow' }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor('violet')}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: 'violet' }}
          >
            Violet
          </button>
          <button
            onClick={() => setColor('blue')}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
