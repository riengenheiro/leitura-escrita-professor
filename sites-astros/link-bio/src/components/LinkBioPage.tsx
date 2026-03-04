import { Header } from './Header';
import { MainCTA } from './MainCTA';
import { LinkCard } from './LinkCard';
import { SocialProof } from './SocialProof';
import { Footer } from './Footer';
import { Users, Star, ClipboardCheck, BookOpen, GraduationCap, Hash, Palette, Crown, FileText, Calendar, MapPin, Lightbulb, Zap, MessageCircle } from 'lucide-react';

export function LinkBioPage() {
  return (
    <main className="min-h-screen w-full bg-slate-100">
      <div className="relative z-10 max-w-md mx-auto px-4 py-8 pb-20">
        <Header />
        <MainCTA />

        <a
          href="https://wa.me/5519989863544"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-3 w-full rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 shadow-lg shadow-green-500/30 transition-all hover:shadow-green-500/40 link-card border-2 border-green-400/50"
        >
          <MessageCircle className="w-7 h-7 flex-shrink-0" />
          <span className="text-center">Tire suas dúvidas no WhatsApp</span>
        </a>
        <p className="text-center text-slate-500 text-sm mt-1">+55 19 98986-3544</p>

        <div className="space-y-4 mt-6">
          <LinkCard
            href="https://depoimentos.doutoraescola.com.br"
            icon={<Star className="w-6 h-6" />}
            title="Veja o que dizem da Fábrica Mágica"
            subtitle="Depoimentos reais de professoras"
            variant="testimonials"
          />
          <LinkCard
            href="https://doutoraescola.com.br/vip"
            icon={<Users className="w-6 h-6" />}
            title="Grupo VIP do WhatsApp"
            subtitle="Dicas, materiais e novidades exclusivas"
            variant="whatsapp"
            badge="GRÁTIS"
          />
          <LinkCard
            href="https://doutoraescola.com.br/questionario-fabrica-magica"
            icon={<ClipboardCheck className="w-6 h-6" />}
            title="Checklist de Sondagem"
            subtitle="Responda o questionário e receba o checklist grátis"
            variant="default"
            badge="GRÁTIS"
          />
          <LinkCard
            href="https://presente.doutoraescola.com.br/"
            icon={<BookOpen className="w-6 h-6" />}
            title="Roteiro Para Fazer o Relatório do Aluno"
            subtitle="Roteiro grátis | Doutora Escola"
            variant="default"
            badge="GRÁTIS"
          />

          <p className="text-slate-600 text-sm font-semibold mt-8 mb-3 text-center">Todos os nossos sites</p>

          <LinkCard href="https://guiapratico.doutoraescola.com.br" icon={<GraduationCap className="w-6 h-6" />} title="Guia Prático – Dificuldades Escolares" subtitle="Identifique e atue nas dificuldades de aprendizagem" variant="default" />
          <LinkCard href="https://codigos.doutoraescola.com.br" icon={<Hash className="w-6 h-6" />} title="Códigos BNCC (Alfanuméricos)" subtitle="Guia completo dos códigos da BNCC" variant="default" />
          <LinkCard href="https://atividadesludicas.doutoraescola.com.br" icon={<Palette className="w-6 h-6" />} title="Atividades Lúdicas – Alfabetização" subtitle="Atividades para alfabetização" variant="default" />
          <LinkCard href="https://clube.doutoraescola.com.br" icon={<Crown className="w-6 h-6" />} title="Clube Doutora Escola" subtitle="Conteúdos e materiais por assinatura" variant="default" />
          <LinkCard href="https://relatorioconstrutivista.doutoraescola.com.br" icon={<FileText className="w-6 h-6" />} title="Relatórios Construtivistas (TEA)" subtitle="Relatórios para alunos com TEA" variant="default" />
          <LinkCard href="https://planejamento.doutoraescola.com.br" icon={<Calendar className="w-6 h-6" />} title="Planejamento Anual BNCC" subtitle="Planejamento alinhado à BNCC" variant="default" />
          <LinkCard href="https://presente.doutoraescola.com.br" icon={<MapPin className="w-6 h-6" />} title="Roteiro Para Relatórios (Presente)" subtitle="Roteiro para elaboração de relatórios" variant="default" />
          <LinkCard href="https://ideias.doutoraescola.com.br" icon={<Lightbulb className="w-6 h-6" />} title="Doutora Escola – Ideias" subtitle="Ideias e conteúdos Doutora Escola" variant="default" />
          <LinkCard href="https://protocolo.vivasuamissao.top" icon={<Zap className="w-6 h-6" />} title="Protocolo Energia Total" subtitle="Viva Sua Missão" variant="default" />
        </div>

        <SocialProof />
        <Footer />
      </div>
    </main>
  );
}
