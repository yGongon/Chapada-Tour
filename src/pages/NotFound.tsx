import { Navigate, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  const location = useLocation();
  // We only redirect if it's the client side. During SSG it might evaluate and redirect the SSG process
  // But wait, Navigate works in SSG too depending on setup.
  
  return <Navigate to="/" replace />;
}