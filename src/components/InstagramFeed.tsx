import { motion } from 'motion/react';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';

const InstagramFeed = () => {
  // In a real production app, you would fetch this data from an API like Behold.so 
  // or the Instagram Basic Display API.
  // For now, we use high-quality images from the region to simulate the feed.
  const posts = [
    {
      id: 1,
      image: "https://ik.imagekit.io/ozcvccl1z/Pacotes/Vale%20do%20Pati/IMG-6025.jpg",
      likes: "1.2k",
      comments: "48",
      link: "https://www.instagram.com/chapadatour/"
    },
    {
      id: 2,
      image: "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20Adventure/IMG-9997.jpg",
      likes: "856",
      comments: "32",
      link: "https://www.instagram.com/chapadatour/"
    },
    {
      id: 3,
      image: "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20profunda/765d23f4-fabd-45e1-a0f8-da52978bdde1.jpg",
      likes: "2.1k",
      comments: "94",
      link: "https://www.instagram.com/chapadatour/"
    },
    {
      id: 4,
      image: "https://ik.imagekit.io/ozcvccl1z/Pacotes/Chapada%20classica/IMG-9466.jpg",
      likes: "1.5k",
      comments: "56",
      link: "https://www.instagram.com/chapadatour/"
    },
    {
      id: 5,
      image: "https://ik.imagekit.io/ozcvccl1z/Capa%20da%20home.avif",
      likes: "3.4k",
      comments: "120",
      link: "https://www.instagram.com/chapadatour/"
    },
    {
      id: 6,
      image: "https://landedtravel.com/wp-content/uploads/2020/02/Private-Custom-Travel-Design-Brazil-Chapada-Diamantina-Pratinha-Cave.jpg",
      likes: "920",
      comments: "28",
      link: "https://www.instagram.com/chapadatour/"
    }
  ];

  return (
    <section id="instagram-feed" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <Instagram size={24} />
              </div>
              <span className="text-brand-olive font-bold uppercase tracking-widest text-xs">Siga-nos no Instagram</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif">@chapadatour</h2>
          </motion.div>

          <motion.a
            href="https://www.instagram.com/chapadatour/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-stone-200 px-8 py-3 rounded-full font-semibold hover:bg-brand-olive hover:text-white transition-all flex items-center gap-2 group shadow-sm"
          >
            Seguir no Instagram <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, idx) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-md"
            >
              <img 
                src={post.image} 
                alt={`Post do Instagram Chapada Tour - Aventura na Chapada Diamantina #${post.id}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                <div className="flex items-center gap-1">
                  <Heart size={18} fill="currentColor" />
                  <span className="text-sm font-bold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle size={18} fill="currentColor" />
                  <span className="text-sm font-bold">{post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-stone-400 text-sm italic">
            Acompanhe nossas aventuras diárias e dicas exclusivas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
