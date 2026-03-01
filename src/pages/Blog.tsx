import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Blog = () => {
  const posts = [
    {
      title: "O que levar para a Chapada Diamantina?",
      excerpt: "Um guia completo de equipamentos, roupas e itens essenciais para suas trilhas.",
      date: "15 Mai, 2024",
      author: "Equipe Chapada",
      img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Melhor época para visitar a Chapada",
      excerpt: "Entenda as estações e escolha o período ideal para ver as cachoeiras cheias ou os poços iluminados.",
      date: "10 Mai, 2024",
      author: "Guia Local",
      img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Trilha do Pati: O que esperar?",
      excerpt: "Relatos e dicas sobre o trekking mais famoso do Brasil. Prepare-se para a jornada.",
      date: "05 Mai, 2024",
      author: "Aventureiro",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Gastronomia em Lençóis",
      excerpt: "Onde comer e o que provar na cidade mais charmosa da região. Do godó de banana à culinária internacional.",
      date: "01 Mai, 2024",
      author: "Equipe Chapada",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Blog - Chapada Tour"
        description="Dicas de viagem, guias de trilhas e as melhores histórias sobre a Chapada Diamantina em nosso blog oficial."
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-brand-olive font-bold uppercase tracking-widest text-sm mb-4 block">Diário de Bordo</span>
          <h1 className="text-6xl font-serif mb-6">Blog Chapada</h1>
          <p className="text-stone-600 text-lg">Dicas, histórias e guias práticos para você aproveitar ao máximo sua estadia no paraíso.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 2) * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden rounded-[2rem] mb-8">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 flex gap-4">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-olive uppercase tracking-widest mb-4">
                  <User size={14} /> {post.author}
                </div>
                <h2 className="text-3xl font-serif mb-4 group-hover:text-brand-olive transition-colors">{post.title}</h2>
                <p className="text-stone-500 mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-2 font-bold text-stone-900 group-hover:gap-4 transition-all">
                  Ler mais <ArrowRight size={18} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
