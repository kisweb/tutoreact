import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';

import ListeMembre from './components/famille/ListeMembre.js';
// import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// export const AppContext = createContext();

function App() {
  // const [username, setUsername] = useState('Ibrahima Sarr');
  const client = new QueryClient();

  return (
    <div className="container w-4xl mx-auto">
      <QueryClientProvider client={client}>
        <Router>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            veritatis deleniti voluptate quibusdam in, accusamus nemo possimus
            molestias est dolor dolores sit reprehenderit repudiandae quam
            repellat? Laborum blanditiis dolorum assumenda!
          </p>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/famille" element={<ListeMembre />} />
            <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
