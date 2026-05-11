import { createRoot } from 'react-dom/client';
import HomeScreen from './app/components/HomeScreen.tsx';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(<HomeScreen />);
