import { motion } from 'motion/react';

const TermsOfUse = () => {
  return (
    <div className="pt-24 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-5xl font-serif mb-8 md:mb-12">Termos de Uso</h1>
          <div className="prose prose-stone max-w-none text-stone-600 space-y-8">
            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4">1. Aceitação dos Termos</h2>
              <p>Ao acessar e utilizar o site da Chapada Tour, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não utilize nosso site.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4">2. Uso do Site</h2>
              <p>O conteúdo deste site é para sua informação geral e uso pessoal. Ele está sujeito a alterações sem aviso prévio. É proibida a reprodução de qualquer parte deste site sem autorização prévia por escrito.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4">3. Reservas e Pagamentos</h2>
              <p>As reservas feitas através do site ou via WhatsApp estão sujeitas à disponibilidade. Os preços e condições de pagamento serão confirmados no momento da reserva. Reservamo-nos o direito de alterar preços sem aviso prévio.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4">4. Cancelamentos e Reembolsos</h2>
              <p>As políticas de cancelamento e reembolso variam de acordo com o passeio ou serviço contratado e serão detalhadas no momento da confirmação da reserva. Em caso de condições climáticas adversas que comprometam a segurança, a Chapada Tour reserva-se o direito de reagendar ou cancelar passeios.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4">5. Responsabilidade</h2>
              <p>A Chapada Tour não se responsabiliza por perdas, danos, atrasos ou despesas decorrentes de circunstâncias fora de nosso controle razoável, incluindo, mas não se limitando a, desastres naturais, greves ou problemas de transporte de terceiros.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-stone-900 mb-4">6. Links de Terceiros</h2>
              <p>Nosso site pode conter links para sites de terceiros. Esses links são fornecidos apenas para sua conveniência e não significam que endossamos esses sites. Não temos responsabilidade pelo conteúdo dos sites vinculados.</p>
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

export default TermsOfUse;
