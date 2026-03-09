import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { optimizeImageUrl, generateSrcSet } from '../utils/imageOptimizer';
import { blogPosts } from '../data/blogPosts';
import { SEO_KEYWORDS } from '../constants/seoKeywords';

const Blog = () => {
  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Blog - Chapada Tour | Dicas e Histórias da Chapada Diamantina"
        description="Dicas de viagem, guias de trilhas e as melhores histórias sobre a Chapada Diamantina em nosso blog oficial. Planeje sua aventura com quem conhece o terreno."
        keywords={[
          ...SEO_KEYWORDS.BLOG_SEO,
          ...SEO_KEYWORDS.GENERAL
        ]}
        schemaType="BreadcrumbList"
        schemaData={[
          { name: 'Início', path: '/' },
          { name: 'Blog', path: '/blog' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-brand-olive font-bold uppercase tracking-widest text-sm mb-4 block">Diário de Bordo</span>
          <h1 className="text-6xl font-serif mb-6">Blog Chapada</h1>
          <p className="text-stone-600 text-lg">Dicas, histórias e guias práticos para você aproveitar ao máximo sua estadia no paraíso.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 2) * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-video overflow-hidden rounded-[2rem] mb-8">
                  <img 
                    src={optimizeImageUrl(post.img, 800)} 
                    srcSet={generateSrcSet(post.img, [400, 800])}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt={`Artigo: ${post.title} - Blog Chapada Tour`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-6 left-6 flex gap-4">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                      <Calendar size={14} /> {post.date}
                    </span>
                  </div>
                </div>
                <div className="px-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-olive uppercase tracking-widest mb-4">
                    <User size={14} /> {post.author}
                  </div>
                  <h2 className="text-3xl font-serif mb-4 group-hover:text-brand-olive transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-stone-500 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 font-bold text-stone-900 group-hover:gap-4 transition-all">
                    Ler artigo completo <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
