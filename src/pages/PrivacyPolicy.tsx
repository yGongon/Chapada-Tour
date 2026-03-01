import { motion } from 'motion/react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-5xl font-serif mb-8 md:mb-12">Política de Privacidade</h1>
          <div className="prose prose-stone max-w-none text-stone-600 space-y-8">
            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4">1. Coleta de Informações</h2>
              <p>Coletamos informações que você nos fornece diretamente ao entrar em contato conosco via WhatsApp, e-mail ou formulários em nosso site. Isso pode incluir seu nome, número de telefone, endereço de e-mail e detalhes sobre sua viagem planejada.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4">2. Uso das Informações</h2>
              <p>As informações coletadas são utilizadas exclusivamente para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processar suas reservas e consultas;</li>
                <li>Enviar informações relevantes sobre seus passeios;</li>
                <li>Melhorar nossos serviços e atendimento ao cliente;</li>
                <li>Cumprir obrigações legais.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4">3. Proteção de Dados</h2>
              <p>Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4">4. Compartilhamento com Terceiros</h2>
              <p>Não vendemos ou alugamos seus dados pessoais. Podemos compartilhar informações com parceiros locais (como guias ou hotéis) apenas na medida necessária para a execução dos serviços contratados.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4">5. Seus Direitos</h2>
              <p>Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Para isso, entre em contato conosco através dos canais oficiais.</p>
            </section>

            <section className="pt-12 border-t border-stone-200">
              <p className="text-sm italic">Última atualização: Março de 2024</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
