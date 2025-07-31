import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GirlfriendDay from './pages/GirlfriendDay';
import Video from './pages/Video';
import Reasons from './pages/Reasons';
import Game from './pages/Game';
import Gift from './pages/Gift';
import Final from './pages/Final';

export default function App() {
  return (
    <Router basename="/august">
  	<Routes>
    		<Route path="/" element={<GirlfriendDay />} />
    		<Route path="/girlfriend-day" element={<GirlfriendDay />} />
    		<Route path="/video" element={<Video />} />
    		<Route path="/reasons" element={<Reasons />} />
    		<Route path="/game" element={<Game />} />
    		<Route path="/gift" element={<Gift />} />
    		<Route path="/final" element={<Final />} />
  	</Routes>
     </Router>

  );
}
