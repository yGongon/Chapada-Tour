import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import { optimizeImageUrl } from '../utils/imageOptimizer';
import { useEffect } from 'react';
import { SEO_KEYWORDS } from '../constants/seoKeywords';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) return null;

  const getPostKeywords = () => {
    const k = [...SEO_KEYWORDS.BLOG_SEO, ...SEO_KEYWORDS.GENERAL];
    const titleLower = post.title.toLowerCase();
    const contentLower = post.content.toLowerCase();

    if (titleLower.includes('pati') || contentLower.includes('pati')) {
      k.push(...SEO_KEYWORDS.TREKKING);
    }
    if (titleLower.includes('cachoeira') || contentLower.includes('cachoeira')) {
      k.push(...SEO_KEYWORDS.WATERFALLS);
    }
    if (titleLower.includes('gruta') || titleLower.includes('poço') || contentLower.includes('gruta') || contentLower.includes('poço')) {
      k.push(...SEO_KEYWORDS.CAVES_POOLS);
    }
    
    k.push(post.title.toLowerCase());
    return k;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="pt-32 pb-24 bg-brand-cream min-h-screen">
      <SEO 
        title={`${post.title} - Blog Chapada Tour`}
        description={post.excerpt}
        keywords={getPostKeywords()}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-stone-600 hover:text-brand-olive transition-colors font-bold uppercase tracking-widest text-sm"
          >
            <ArrowLeft size={18} /> Voltar ao Blog
          </Link>
        </motion.div>

        <article>
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-6 mb-6">
              <span className="bg-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-sm">
                <Calendar size={14} /> {post.date}
              </span>
              <span className="text-brand-olive font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <User size={14} /> {post.author}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-stone-900">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed italic border-l-4 border-brand-olive pl-8 py-2 mb-12 bg-white/30 rounded-r-3xl">
              {post.excerpt}
            </p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2.5rem] mb-16 shadow-2xl"
          >
            <img 
              src={optimizeImageUrl(post.img, 1200)} 
              alt={`Artigo: ${post.title} - Blog Chapada Tour`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="blog-content"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.div>

          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 pt-12 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border border-stone-100 shadow-sm">
                <img 
                  src="https://ik.imagekit.io/ozcvccl1z/LOGOMARCA1__2_-removebg-preview-1-e1736863590369-300x162.webp?updatedAt=1772365084253" 
                  alt="Chapada Tour Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <p className="font-bold text-stone-900">{post.author}</p>
                <p className="text-sm text-stone-500">Especialistas em Chapada Diamantina</p>
              </div>
            </div>
            
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 bg-white px-6 py-3 rounded-full font-bold shadow-sm hover:shadow-md transition-all text-stone-900"
            >
              <Share2 size={18} /> Compartilhar Artigo
            </button>
          </motion.footer>
        </article>

        {/* Related Posts or CTA */}
        <div className="mt-32 bg-stone-900 rounded-[3rem] p-12 md:p-20 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-serif mb-6">Inspirado para sua próxima aventura?</h3>
          <p className="text-stone-400 mb-10 max-w-2xl mx-auto">
            Nossos guias estão prontos para levar você aos lugares mais incríveis da Chapada Diamantina com segurança e conhecimento.
          </p>
          <Link 
            to="/passeios" 
            className="inline-block bg-brand-olive text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-olive/90 transition-all"
          >
            Ver Nossos Pacotes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
