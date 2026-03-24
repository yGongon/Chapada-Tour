import React, { lazy } from 'react';
import App from './App';
import NotFound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));
const Tours = lazy(() => import('./pages/Tours'));
const TourDetail = lazy(() => import('./pages/TourDetail'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const Accommodations = lazy(() => import('./pages/Accommodations'));
const RoomDetail = lazy(() => import('./pages/RoomDetail'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'passeios', element: <Tours /> },
      { path: 'passeios/:slug', element: <TourDetail /> },
      { path: 'hospedagem', element: <Accommodations /> },
      { path: 'hospedagem/:slug', element: <RoomDetail /> },
      { path: 'sobre', element: <About /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogPost /> },
      { path: 'contato', element: <Contact /> },
      { path: 'politica-de-privacidade', element: <PrivacyPolicy /> },
      { path: 'termos-de-uso', element: <TermsOfUse /> },
      // Rota explícita para gerar o 404.html via SSG
      { path: '404', element: <NotFound /> },
      // Catch-all no React também mostra 404
      { path: '*', element: <NotFound /> },
    ],
  },
];