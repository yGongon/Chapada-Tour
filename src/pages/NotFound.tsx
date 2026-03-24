import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Página não encontrada | Chapada Tour"
        description="A página que você está procurando não existe ou foi removida."
      />
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-8xl font-serif text-brand-olive mb-6">404</p>
          <h1 className="text-3xl font-serif mb-4">Página não encontrada</h1>
          <p className="text-stone-500 mb-10">
            A página que você está procurando não existe ou foi removida.
          </p>
          <Link
            to="/"
            className="inline-block bg-brand-olive text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </>
  );
}