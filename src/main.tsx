import { ViteReactSSG } from 'vite-react-ssg';
import './index.css';
import { routes } from './routes';

export const createRoot = ViteReactSSG(
  { routes },
  () => {
    // Optional: add any initialization logic here
  }
);
