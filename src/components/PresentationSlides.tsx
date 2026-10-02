import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  TrendingUp,
  Share2,
  Users,
  Award,
  BarChart3,
  Flame,
  ArrowUpRight,
  Layers,
  Sparkles,
  MapPin,
  ExternalLink,
  Target,
  Building2,
  CheckCircle2,
  Calendar,
  Percent,
  BadgePercent,
  Calculator,
  FileText,
  FileDown
} from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { JP_PROFILE_SUMMARY, MONTHLY_METRICS_DATA, CONTENT_PILLARS, TOP_POSTS_DATA, DEMOGRAPHICS_DATA } from '../data/profileData';

interface PresentationSlidesProps {
  onGoToDashboard: () => void;
  onGoToMediaKit: () => void;
  onDownloadPdf?: () => void;
}

export function PresentationSlides({
  onGoToDashboard,
  onGoToMediaKit,
  onDownloadPdf,
}: PresentationSlidesProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 5;
  const profile = JP_PROFILE_SUMMARY;

  const nextSlide = () => {
    if (currentSlide < totalSlides) setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 1) setCurrentSlide(prev => prev - 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="flex flex-col justify-between min-h-[calc(100vh-8rem)] w-full">
      {/* Slide Content Area with Motion Transitions */}
      <div className="flex-1 flex flex-col justify-center my-auto">
        <AnimatePresence mode="wait">
          {currentSlide === 1 && (
            <motion.div
              key="slide-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="py-4"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>APRESENTAÇÃO EXECUTIVA & PROPOSTA COMERCIAL</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                    Análise Estratégica <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-amber-200">
                      @{profile.username}
                    </span>
                  </h1>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                    Diagnóstico aprofundado de <strong class="text-white">impressões, alcance, interações e taxas de engajamento</strong>, com foco no comparativo mensal de <strong class="text-amber-400">visualizações de Feed vs. Stories</strong> do perfil de <strong class="text-white">{profile.name}</strong>.
                  </p>

                  {/* Summary Metric Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl hover:border-slate-700 transition">
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1 font-medium">
                        <Users className="w-3.5 h-3.5 text-amber-400" />
                        <span>Seguidores</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-white">
                        {profile.followers.toLocaleString('pt-BR')}
                      </div>
                      <span className="text-[10px] text-emerald-400 font-semibold">↑ +14.2% ao semestre</span>
                    </div>

                    <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl hover:border-slate-700 transition">
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1 font-medium">
                        <TrendingUp className="w-3.5 h-3.5 text-rose-400" />
                        <span>Alcance Médio</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-rose-400">
                        1.1M+
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">contas únicas/mês</span>
                    </div>

                    <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl hover:border-slate-700 transition">
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1 font-medium">
                        <Award className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Engajamento</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-emerald-400">
                        {profile.averageEngagementRate}%
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">2.3x acima do mercado</span>
                    </div>

                    <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl hover:border-slate-700 transition">
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1 font-medium">
                        <Eye className="w-3.5 h-3.5 text-amber-400" />
                        <span>Média Stories</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-amber-400">
                        9.2K
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">13.4% retenção diária</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => setCurrentSlide(2)}
                      className="px-6 py-3 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
                    >
                      <span>Iniciar Apresentação</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <a
                      href={profile.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold rounded-xl text-sm transition flex items-center gap-2"
                    >
                      <span>Abrir @{profile.username}</span>
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                    </a>
                  </div>
                </div>

                {/* Profile Visual Card */}
                <div className="lg:col-span-5">
                  <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="absolute -right-16 -top-16 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0 bg-amber-500/20 border-2 border-amber-500/40 shadow-lg flex items-center justify-center text-amber-400 font-black text-3xl sm:text-4xl select-none">
                        J
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-white">{profile.name}</h3>
                          <span className="bg-amber-500/20 text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-amber-500/30">Oficial</span>
                        </div>
                        <p className="text-xs text-amber-400 font-semibold">@{profile.username}</p>
                        <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          <span>{profile.location}</span>
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 mb-5 text-xs text-slate-300 leading-relaxed italic">
                      "{profile.bio}"
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between items-center py-2 border-b border-slate-800">
                        <span className="text-slate-400">Pilar Principal:</span>
                        <span className="font-semibold text-slate-200">Humor com @ruka & Vida Noturna</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-800">
                        <span className="text-slate-400">Empresário em:</span>
                        <span className="font-semibold text-amber-400">Bar do Coronel (SJC)</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-800">
                        <span className="text-slate-400">Mídia & Conteúdo:</span>
                        <span className="font-semibold text-slate-200">Podcast "Aqui Acontece"</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-slate-400">Público-Alvo:</span>
                        <span className="font-semibold text-emerald-400">25 a 44 anos (69.4% da base)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentSlide === 2 && (
            <motion.div
              key="slide-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="py-4 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5" />
                    SLIDE 02 • IMPRESSÕES E ALCANCE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Inserção de Marca & Alcance Total
                  </h2>
                </div>
                <div className="text-left sm:text-right bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 block font-medium">Impressões no Período</span>
                  <span className="text-lg font-black text-amber-400">19.450.000+</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-6">
                {/* Evolution Chart */}
                <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-sm font-bold text-white">Evolução Mensal: Impressões vs. Contas Alcançadas</h3>
                      <p className="text-xs text-slate-400">Crescimento constante de Janeiro a Agosto</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-medium">
                      <span className="flex items-center gap-1 text-amber-400">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Impressões
                      </span>
                      <span className="flex items-center gap-1 text-sky-400">
                        <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span> Alcance Único
                      </span>
                    </div>
                  </div>

                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={MONTHLY_METRICS_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                          </linearGradient>
                          <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
                        <XAxis dataKey="shortMonth" stroke="#94a3b8" fontSize={12} />
                        <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '0.75rem', fontSize: '12px' }}
                          formatter={(value: any, name: any) => [
                            `${Number(value).toLocaleString('pt-BR')} ${name === 'impressoes' ? 'impressões' : 'contas'}`,
                            name === 'impressoes' ? 'Impressões' : 'Alcance Único'
                          ]}
                        />
                        <Area type="monotone" dataKey="impressoes" name="impressoes" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorImpressions)" />
                        <Area type="monotone" dataKey="alcance" name="alcance" stroke="#38bdf8" strokeWidth={2.5} fillOpacity={1} fill="url(#colorReach)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Key Insights Breakdown */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-semibold uppercase">Não-Seguidores Alcançados</span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Viral</span>
                    </div>
                    <div className="text-2xl font-black text-emerald-400 mt-1">74.2%</div>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      A maioria do público impactado vem da aba Explorar e Reels, impulsionada pelas esquetes cômicas com a Ruka.
                    </p>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-semibold uppercase">Frequência Média</span>
                      <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">Brand Recall</span>
                    </div>
                    <div className="text-2xl font-black text-amber-400 mt-1">2.25x</div>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Cada usuário ativo na região visualiza em média mais de 2 publicações por mês, consolidando a marca do Bar do Coronel.
                    </p>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                    <div className="text-xs text-slate-400 font-semibold uppercase mb-1">Polo Geográfico Principal</div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-rose-500" />
                      <span>São José dos Campos (48.5%)</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Grande SP (19.2%) • Jacareí (11.4%) • Taubaté (8.1%)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentSlide === 3 && (
            <motion.div
              key="slide-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="py-4 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    SLIDE 03 • COMPARATIVO FEED VS STORIES (REQUISITO PRINCIPAL)
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Médias de Visualizações: Feed vs. Stories
                  </h2>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <div className="bg-rose-500/10 border border-rose-500/20 px-3 py-1.5 rounded-xl text-rose-300">
                    Média Feed: <strong>45.8K views</strong>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl text-amber-300">
                    Média Stories: <strong>9.2K views</strong>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-6">
                {/* Comparative Monthly Bar Chart */}
                <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
                    <div>
                      <h3 className="text-sm font-bold text-white">Comparativo Mensal de Médias (Jan a Ago)</h3>
                      <p className="text-xs text-slate-400">Visualizações médias por conteúdo no Feed e Stories diários</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-medium">
                      <span className="flex items-center gap-1 text-rose-400">
                        <span className="w-2.5 h-2.5 rounded bg-rose-500"></span> Feed (Reels/Post)
                      </span>
                      <span className="flex items-center gap-1 text-amber-400">
                        <span className="w-2.5 h-2.5 rounded bg-amber-400"></span> Stories Diários
                      </span>
                    </div>
                  </div>

                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={MONTHLY_METRICS_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                        <XAxis dataKey="shortMonth" stroke="#94a3b8" fontSize={12} />
                        <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(val) => `${(val / 1000).toFixed(0)}k`} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '0.75rem', fontSize: '12px' }}
                          formatter={(value: any, name: any) => [
                            `${Number(value).toLocaleString('pt-BR')} visualizações`,
                            name === 'feedAvgViews' ? 'Média Feed (Reels)' : 'Média Stories'
                          ]}
                        />
                        <Bar dataKey="feedAvgViews" name="feedAvgViews" fill="#f43f5e" radius={[6, 6, 0, 0]} />
                        <Bar dataKey="storiesAvgViews" name="storiesAvgViews" fill="#fbbf24" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Comparative Card Insights */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="bg-gradient-to-br from-rose-950/30 to-slate-900 border border-rose-500/30 p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-rose-400 uppercase">Média Feed (Reels)</span>
                      <span className="text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded">Topo de Funil</span>
                    </div>
                    <div className="text-2xl font-black text-white mt-1">45.800 <span class="text-xs font-normal text-slate-400">views/post</span></div>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Picos virais chegam a <strong class="text-rose-300">485.000 views</strong>. Excelente canal para novos clientes e atração de público regional para o bar.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-950/30 to-slate-900 border border-amber-500/30 p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-amber-400 uppercase">Média Stories</span>
                      <span className="text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded">Fundo de Funil</span>
                    </div>
                    <div className="text-2xl font-black text-white mt-1">9.200 <span className="text-xs font-normal text-slate-400">views/dia</span></div>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Retenção diária de <strong className="text-amber-300">13.4% dos seguidores</strong>, garantindo público fiel para reservas, promoções de chopp e eventos noturnos.
                    </p>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-xs text-slate-300">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-400 font-medium">Proporção Feed vs Stories:</span>
                      <span className="font-bold text-amber-400">~5.0x no Feed</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Estratégia sinérgica perfeita: o Feed gera awareness e os Stories fecham o consumo no mesmo dia.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentSlide === 4 && (
            <motion.div
              key="slide-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="py-4 space-y-6"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" />
                  SLIDE 04 • CONCLUSÕES & MÍDIA KIT
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Oportunidades Comerciais & Estratégia
                </h2>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
                    👑
                  </div>
                  <h3 className="font-bold text-white text-base">Autoridade no Vale do Paraíba</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Com mais de <strong className="text-white">360 mil seguidores fiéis</strong> e quase metade em São José dos Campos, @jpbcordoba é referência direta para decisões de consumo e entretenimento na região.
                  </p>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-lg">
                    🎯
                  </div>
                  <h3 className="font-bold text-white text-base">Audiência Qualificada (25 a 44 anos)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    69.4% do público possui perfil de consumo ativo, com alto engajamento em gastronomia, cervejas artesanais, eventos, negócios e lifestyle.
                  </p>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                    💡
                  </div>
                  <h3 className="font-bold text-white text-base">Formatos de Alta Conversão</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Integração nativa de marcas em <strong className="text-emerald-300">esquetes cômicas com a Ruka</strong> (Reels) e sequências de stories matinais/noturnos com link e cupom.
                  </p>
                </div>
              </div>

            </motion.div>
          )}

          {currentSlide === 5 && (
            <motion.div
              key="slide-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="py-2 space-y-6"
            >
              {/* Top Orange Proposal Header Banner */}
              <div className="bg-gradient-to-r from-[#d95700] via-[#ea580c] to-[#c2410c] p-6 sm:p-7 rounded-2xl shadow-2xl text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                  <div className="space-y-3 max-w-2xl">
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="bg-white text-[#d95700] text-xs font-extrabold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#d95700]" />
                        Estudo de Precificação & Proposta Comercial
                      </span>
                      <span className="bg-black/30 backdrop-blur-sm text-amber-100 text-xs font-semibold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-amber-300" />
                        Cliente: Assaí Atacadista
                      </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                      Proposta: João Córdoba • 360 Mil Seguidores
                    </h2>

                    {/* Subtitle / Contract Scope */}
                    <p className="text-sm sm:text-base text-amber-100/95 font-medium leading-relaxed">
                      Contrato trimestral <strong className="text-white">(OUT • NOV • DEZ)</strong> com entrega de <strong className="text-white">2 posts em formato REELS por mês</strong> (Total de 6 Reels).
                    </p>
                  </div>

                  {/* Value Box on Right */}
                  <div className="bg-black/35 backdrop-blur-md border border-white/25 p-5 rounded-2xl text-left lg:text-right w-full lg:w-auto flex-shrink-0 shadow-lg">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-amber-200 block mb-1">
                      VALOR SUGERIDO PARA FECHAMENTO
                    </span>
                    <div className="text-3xl sm:text-4xl font-black text-white flex items-baseline lg:justify-end gap-1.5">
                      R$ 6.800,00
                      <span className="text-sm font-normal text-amber-200">/ mês</span>
                    </div>
                    <span className="text-xs font-bold text-amber-300 block mt-1.5 bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">
                      Total 3 Meses: R$ 20.400,00 (6 Reels)
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Recommended Package Card */}
              <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 max-w-4xl mx-auto">
                {/* Header */}
                <div className="space-y-1.5 pb-4 border-b border-slate-800">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Pacote Recomendado (Equilíbrio de Mercado)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Valor calibrado no ponto de equilíbrio do mercado para 360 mil seguidores com desconto de ~40% sobre a tabela avulsa.
                  </p>
                </div>

                {/* Price block */}
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-black text-white flex items-baseline gap-2">
                    R$ 6.800,00
                    <span className="text-base font-medium text-slate-400">/ mês</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    <strong className="text-white">Total 3 Meses: R$ 20.400,00 (6 Reels)</strong>
                  </div>
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Contrato trimestral (OUT • NOV • DEZ) • 3 parcelas de R$ 6.800,00</span>
                  </div>
                </div>

                <div className="border-t border-slate-800"></div>

                {/* Deliverables Section */}
                <div className="space-y-3.5">
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                    ENTREGÁVEIS:
                  </h4>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="leading-snug">
                        <strong className="text-white">2 Reels (com possibilidade de collab)</strong> por mês no Feed (Total de 6 Reels no período)
                      </span>
                    </li>

                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="leading-snug">
                        <strong className="text-white">4 combo de 3 stories</strong> (3 telas de no mínimo 15 segundos cada, total 12 telas);
                      </span>
                    </li>

                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="leading-snug">
                        <strong className="text-white">4 Visitas a loja mais próxima do seu endereço</strong> para gravações dos conteúdos
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-slate-800"></div>

                {/* Image Rights Section */}
                <div className="pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-850">
                  <strong className="text-amber-400 font-bold">Direitos de Imagem:</strong>{' '}
                  <span className="text-slate-300">
                    Uso orgânico irrestrito + direito de repostagem em todas as redes do Assaí Atacadista e aprovação prévia de roteiros.
                  </span>
                </div>
              </div>

              {/* Strategic Delivery Schedule (Outubro a Dezembro) */}
              <div className="bg-slate-900 border border-slate-800 p-6 sm:p-7 rounded-2xl shadow-xl space-y-5">
                {/* Header */}
                <div className="flex items-center gap-2.5 pb-2">
                  <span className="p-1.5 rounded-lg bg-orange-500/20 text-orange-400">
                    <Calendar className="w-4 h-4 text-orange-400" />
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Cronograma Estratégico de Entregas (Outubro a Dezembro)
                  </h3>
                </div>

                {/* 3 Columns for Oct, Nov, Dec */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* OUTUBRO */}
                  <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black tracking-wider text-orange-400 uppercase">
                        OUTUBRO
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        2 Reels
                      </span>
                    </div>
                    <div className="text-xs font-bold text-white">
                      Primavera & Dia das Crianças
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-slate-300">
                      <li className="leading-snug">• 1ª Visita presencial para gravação de ofertas</li>
                      <li className="leading-snug">• 2 Reels (com possibilidade de collab)</li>
                      <li className="leading-snug">• Combo de Stories (3 telas de 15s+)</li>
                      <li className="leading-snug">• Compras especiais Dia das Crianças & Hortifrúti</li>
                    </ul>
                  </div>

                  {/* NOVEMBRO */}
                  <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black tracking-wider text-orange-400 uppercase">
                        NOVEMBRO
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        2 Reels
                      </span>
                    </div>
                    <div className="text-xs font-bold text-white">
                      Black Friday & Economia
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-slate-300">
                      <li className="leading-snug">• Visitas presenciais à loja para captação de ofertas</li>
                      <li className="leading-snug">• 2 Reels focados em Esquenta Black Friday</li>
                      <li className="leading-snug">• Combo de Stories com ofertas da semana</li>
                      <li className="leading-snug">• Bebidas e compras inteligentes em atacado</li>
                    </ul>
                  </div>

                  {/* DEZEMBRO (Highlighted) */}
                  <div className="bg-amber-950/20 border-2 border-amber-500/70 p-4 rounded-xl space-y-3 shadow-lg shadow-amber-950/40">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black tracking-wider text-amber-400 uppercase">
                        DEZEMBRO
                      </span>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        2 Reels
                      </span>
                    </div>
                    <div className="text-xs font-bold text-amber-200">
                      Festas de Fim de Ano & Natal
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-amber-100/90">
                      <li className="leading-snug">• Visita especial para cobertura de compras de Natal</li>
                      <li className="leading-snug">• 2 Reels temáticos com ceia completa e econômica</li>
                      <li className="leading-snug">• Combo de Stories de encerramento de ano</li>
                      <li className="leading-snug">• Carnes, panetones e bebidas festivas Assaí</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Recommendation Summary Banner */}
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-950/50">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-extrabold text-white tracking-wide uppercase">
                      RESUMO DA RECOMENDAÇÃO PARA O ASSAÍ ATACADISTA
                    </h4>
                    <p className="text-xs text-slate-300">
                      Fechamento sugerido: <strong className="text-amber-400 font-bold">R$ 6.800,00/mês</strong> <span className="text-slate-400">(Total 3 Meses: R$ 20.400,00 - 6 Reels em OUT • NOV • DEZ).</span>
                    </p>
                  </div>
                </div>

                <div className="self-stretch sm:self-auto flex items-center justify-center px-4 py-2 bg-slate-950 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold whitespace-nowrap shadow-sm">
                  Excelente ROI para 360k de Audiência
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Slide Navigation Footer Bar */}
      <div className="pt-6 pb-2 border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition ${
              currentSlide === 1
                ? 'bg-slate-900 text-slate-600 border border-slate-850 cursor-not-allowed'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition ${
              currentSlide === totalSlides
                ? 'bg-slate-900 text-slate-600 border border-slate-850 cursor-not-allowed'
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
            }`}
          >
            <span>Próximo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx + 1)}
              className={`h-2.5 rounded-full transition-all ${
                currentSlide === idx + 1
                  ? 'w-7 bg-amber-500'
                  : 'w-2.5 bg-slate-800 hover:bg-slate-700'
              }`}
              title={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          {onDownloadPdf && (
            <button
              onClick={onDownloadPdf}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/30 rounded-lg text-xs font-semibold transition cursor-pointer"
              title="Baixar versão PDF estilo apresentação dos slides"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Baixar PDF</span>
            </button>
          )}

          <div className="text-xs text-slate-400 font-medium">
            Slide <span className="text-white font-bold">{currentSlide}</span> de <span className="text-slate-300">{totalSlides}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
