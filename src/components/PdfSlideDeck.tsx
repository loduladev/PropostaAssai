import React from 'react';
import {
  Sparkles,
  Users,
  TrendingUp,
  Award,
  Eye,
  MapPin,
  BarChart3,
  Target,
  Building2,
  CheckCircle2,
  Calendar,
  FileText,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { JP_PROFILE_SUMMARY, MONTHLY_METRICS_DATA } from '../data/profileData';

interface PdfSlideDeckProps {
  idPrefix?: string;
}

export const PdfSlideDeck: React.FC<PdfSlideDeckProps> = ({ idPrefix = 'pdf-slide' }) => {
  const profile = JP_PROFILE_SUMMARY;

  return (
    <div className="flex flex-col gap-12 bg-slate-950 text-slate-100 font-sans">
      {/* ========================================================================= */}
      {/* SLIDE 1: Capa & Diagnóstico Estratégico */}
      {/* ========================================================================= */}
      <div
        id={`${idPrefix}-1`}
        style={{ width: '1280px', height: '720px' }}
        className="print-slide relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12 flex flex-col justify-between overflow-hidden border border-slate-800 shadow-2xl shrink-0"
      >
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Slide Header */}
        <div className="flex justify-between items-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>APRESENTAÇÃO EXECUTIVA & PROPOSTA COMERCIAL</span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold text-slate-400">Perfil Oficial • 2026</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-8 items-center my-auto relative z-10">
          {/* Left Column: Title and Metrics */}
          <div className="col-span-7 space-y-5">
            <h1 className="text-5xl font-black tracking-tight text-white leading-tight">
              Análise Estratégica <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-amber-200">
                @{profile.username}
              </span>
            </h1>

            <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
              Diagnóstico aprofundado de <strong className="text-white">impressões, alcance, interações e taxas de engajamento</strong>, com foco no comparativo mensal de <strong className="text-amber-400">visualizações de Feed vs. Stories</strong> do perfil de <strong className="text-white">{profile.name}</strong>.
            </p>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-4 gap-3 pt-2">
              <div className="bg-slate-900/95 border border-slate-800 p-3.5 rounded-xl">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1 font-medium">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>Seguidores</span>
                </div>
                <div className="text-xl font-black text-white">
                  {profile.followers.toLocaleString('pt-BR')}
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold">↑ +14.2% ao semestre</span>
              </div>

              <div className="bg-slate-900/95 border border-slate-800 p-3.5 rounded-xl">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1 font-medium">
                  <TrendingUp className="w-3.5 h-3.5 text-rose-400" />
                  <span>Alcance Médio</span>
                </div>
                <div className="text-xl font-black text-rose-400">
                  1.1M+
                </div>
                <span className="text-[10px] text-slate-400 font-medium">contas únicas/mês</span>
              </div>

              <div className="bg-slate-900/95 border border-slate-800 p-3.5 rounded-xl">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1 font-medium">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Engajamento</span>
                </div>
                <div className="text-xl font-black text-emerald-400">
                  {profile.averageEngagementRate}%
                </div>
                <span className="text-[10px] text-slate-400 font-medium">2.3x acima do mercado</span>
              </div>

              <div className="bg-slate-900/95 border border-slate-800 p-3.5 rounded-xl">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1 font-medium">
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Média Stories</span>
                </div>
                <div className="text-xl font-black text-amber-400">
                  9.2K
                </div>
                <span className="text-[10px] text-slate-400 font-medium">13.4% retenção diária</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Summary Card */}
          <div className="col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl shadow-xl relative overflow-hidden space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full flex-shrink-0 bg-amber-500/20 border-2 border-amber-500/40 flex items-center justify-center text-amber-400 font-black text-3xl select-none">
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

              <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-300 italic">
                "{profile.bio}"
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Pilar Principal:</span>
                  <span className="font-semibold text-slate-200">Humor com @ruka & Vida Noturna</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Empresário em:</span>
                  <span className="font-semibold text-amber-400">Bar do Coronel (SJC)</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Mídia & Conteúdo:</span>
                  <span className="font-semibold text-slate-200">Podcast "Aqui Acontece"</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-400">Público-Alvo:</span>
                  <span className="font-semibold text-emerald-400">25 a 44 anos (69.4% da base)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-800/80 text-xs text-slate-500 relative z-10">
          <span>@{profile.username} • João Paulo Córdoba</span>
          <span className="font-bold text-amber-400">Slide 1 de 5</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE 2: Impressões e Alcance Total */}
      {/* ========================================================================= */}
      <div
        id={`${idPrefix}-2`}
        style={{ width: '1280px', height: '720px' }}
        className="print-slide relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12 flex flex-col justify-between overflow-hidden border border-slate-800 shadow-2xl shrink-0"
      >
        {/* Slide Header */}
        <div className="flex justify-between items-center relative z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5" />
              SLIDE 02 • IMPRESSÕES E ALCANCE
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Inserção de Marca & Alcance Total
            </h2>
          </div>
          <div className="text-right bg-slate-900/90 px-4 py-2 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 block font-medium">Impressões no Período</span>
            <span className="text-lg font-black text-amber-400">19.450.000+</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-6 my-auto relative z-10">
          {/* Chart Box */}
          <div className="col-span-8 bg-slate-900/95 border border-slate-800 p-5 rounded-2xl">
            <div className="flex justify-between items-center mb-3">
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

            <div style={{ width: '740px', height: '260px' }}>
              <AreaChart
                width={740}
                height={260}
                data={MONTHLY_METRICS_DATA}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorImpressionsPdf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="colorReachPdf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
                <XAxis dataKey="shortMonth" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                <Area
                  isAnimationActive={false}
                  type="monotone"
                  dataKey="impressoes"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorImpressionsPdf)"
                />
                <Area
                  isAnimationActive={false}
                  type="monotone"
                  dataKey="alcance"
                  stroke="#38bdf8"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorReachPdf)"
                />
              </AreaChart>
            </div>
          </div>

          {/* Key Insights */}
          <div className="col-span-4 space-y-3.5">
            <div className="bg-slate-900/95 border border-slate-800 p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-semibold uppercase">Não-Seguidores Alcançados</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Viral</span>
              </div>
              <div className="text-2xl font-black text-emerald-400 mt-1">74.2%</div>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                A maioria do público impactado vem da aba Explorar e Reels, impulsionada pelas esquetes cômicas com a Ruka.
              </p>
            </div>

            <div className="bg-slate-900/95 border border-slate-800 p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-semibold uppercase">Frequência Média</span>
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">Brand Recall</span>
              </div>
              <div className="text-2xl font-black text-amber-400 mt-1">2.25x</div>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Cada usuário ativo na região visualiza em média mais de 2 publicações por mês, consolidando a marca do Bar do Coronel.
              </p>
            </div>

            <div className="bg-slate-900/95 border border-slate-800 p-3.5 rounded-xl">
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

        {/* Slide Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-800/80 text-xs text-slate-500 relative z-10">
          <span>@{profile.username} • Indicadores de Alcance e Conversão</span>
          <span className="font-bold text-amber-400">Slide 2 de 5</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE 3: Comparativo Feed vs Stories */}
      {/* ========================================================================= */}
      <div
        id={`${idPrefix}-3`}
        style={{ width: '1280px', height: '720px' }}
        className="print-slide relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12 flex flex-col justify-between overflow-hidden border border-slate-800 shadow-2xl shrink-0"
      >
        {/* Slide Header */}
        <div className="flex justify-between items-center relative z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              SLIDE 03 • COMPARATIVO FEED VS STORIES (REQUISITO PRINCIPAL)
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Médias de Visualizações: Feed vs. Stories
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold">
            <div className="bg-rose-500/10 border border-rose-500/20 px-3 py-1.5 rounded-xl text-rose-300">
              Média Feed: <strong>45.8K views</strong>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl text-amber-300">
              Média Stories: <strong>9.2K views</strong>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-6 my-auto relative z-10">
          {/* Bar Chart Box */}
          <div className="col-span-8 bg-slate-900/95 border border-slate-800 p-5 rounded-2xl">
            <div className="flex justify-between items-center mb-3">
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

            <div style={{ width: '740px', height: '260px' }}>
              <BarChart
                width={740}
                height={260}
                data={MONTHLY_METRICS_DATA}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                <XAxis dataKey="shortMonth" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} tickFormatter={(val) => `${(val / 1000).toFixed(0)}k`} />
                <Bar isAnimationActive={false} dataKey="feedAvgViews" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                <Bar isAnimationActive={false} dataKey="storiesAvgViews" fill="#fbbf24" radius={[4, 4, 0, 0]} />
              </BarChart>
            </div>
          </div>

          {/* Insights Cards */}
          <div className="col-span-4 space-y-3.5">
            <div className="bg-gradient-to-br from-rose-950/30 to-slate-900 border border-rose-500/30 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-rose-400 uppercase">Média Feed (Reels)</span>
                <span className="text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded">Topo de Funil</span>
              </div>
              <div className="text-2xl font-black text-white mt-1">45.800 <span className="text-xs font-normal text-slate-400">views/post</span></div>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Picos virais chegam a <strong className="text-rose-300">485.000 views</strong>. Excelente canal para novos clientes e atração de público regional para o bar.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-950/30 to-slate-900 border border-amber-500/30 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-amber-400 uppercase">Média Stories</span>
                <span className="text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded">Fundo de Funil</span>
              </div>
              <div className="text-2xl font-black text-white mt-1">9.200 <span className="text-xs font-normal text-slate-400">views/dia</span></div>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Retenção diária de <strong className="text-amber-300">13.4% dos seguidores</strong>, garantindo público fiel para reservas, promoções de chopp e eventos noturnos.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl text-xs text-slate-300">
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

        {/* Slide Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-800/80 text-xs text-slate-500 relative z-10">
          <span>@{profile.username} • Comparativo de Formatos</span>
          <span className="font-bold text-amber-400">Slide 3 de 5</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE 4: Oportunidades Comerciais & Estratégia */}
      {/* ========================================================================= */}
      <div
        id={`${idPrefix}-4`}
        style={{ width: '1280px', height: '720px' }}
        className="print-slide relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12 flex flex-col justify-between overflow-hidden border border-slate-800 shadow-2xl shrink-0"
      >
        {/* Slide Header */}
        <div className="flex justify-between items-center relative z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" />
              SLIDE 04 • CONCLUSÕES & MÍDIA KIT
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Oportunidades Comerciais & Estratégia
            </h2>
          </div>
          <div className="text-xs font-semibold text-slate-400 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800">
            Diferenciais Competitivos
          </div>
        </div>

        {/* 3 Strategic Columns */}
        <div className="grid grid-cols-3 gap-6 my-auto relative z-10">
          <div className="bg-slate-900/95 border border-slate-800 p-6 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl">
              👑
            </div>
            <h3 className="font-bold text-white text-lg">Autoridade no Vale do Paraíba</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Com mais de <strong className="text-white">360 mil seguidores fiéis</strong> e quase metade em São José dos Campos, @jpbcordoba é referência direta para decisões de consumo e entretenimento na região.
            </p>
          </div>

          <div className="bg-slate-900/95 border border-slate-800 p-6 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xl">
              🎯
            </div>
            <h3 className="font-bold text-white text-lg">Audiência Qualificada (25 a 44 anos)</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              69.4% do público possui perfil de consumo ativo, com alto engajamento em gastronomia, cervejas artesanais, eventos, negócios e lifestyle.
            </p>
          </div>

          <div className="bg-slate-900/95 border border-slate-800 p-6 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl">
              💡
            </div>
            <h3 className="font-bold text-white text-lg">Formatos de Alta Conversão</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Integração nativa de marcas em <strong className="text-emerald-300">esquetes cômicas com a Ruka</strong> (Reels) e sequências de stories matinais/noturnos com link e cupom.
            </p>
          </div>
        </div>

        {/* Slide Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-800/80 text-xs text-slate-500 relative z-10">
          <span>@{profile.username} • Pilares Estratégicos</span>
          <span className="font-bold text-amber-400">Slide 4 de 5</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE 5: Proposta Comercial & Cronograma Estratégico */}
      {/* ========================================================================= */}
      <div
        id={`${idPrefix}-5`}
        style={{ width: '1280px', height: '720px' }}
        className="print-slide relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-7 flex flex-col justify-between overflow-hidden border border-slate-800 shadow-2xl shrink-0"
      >
        {/* Top Orange Proposal Header Banner */}
        <div className="bg-gradient-to-r from-[#d95700] via-[#ea580c] to-[#c2410c] p-4.5 rounded-2xl shadow-xl text-white relative overflow-hidden">
          <div className="flex items-center justify-between gap-4 relative z-10">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="bg-white text-[#d95700] text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#d95700]" />
                  Estudo de Precificação & Proposta Comercial
                </span>
                <span className="bg-black/30 text-amber-100 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-white/20 flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-amber-300" />
                  Cliente: Assaí Atacadista
                </span>
              </div>

              <h2 className="text-2xl font-black text-white tracking-tight">
                Proposta: João Córdoba • 360 Mil Seguidores
              </h2>

              <p className="text-xs text-amber-100/95 font-medium leading-tight">
                Contrato trimestral <strong className="text-white">(OUT • NOV • DEZ)</strong> com entrega de <strong className="text-white">2 posts em formato REELS por mês</strong> (Total de 6 Reels).
              </p>
            </div>

            <div className="bg-black/35 backdrop-blur-md border border-white/25 p-3 rounded-xl text-right flex-shrink-0 shadow-lg">
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-200 block mb-0.5">
                VALOR SUGERIDO PARA FECHAMENTO
              </span>
              <div className="text-2xl font-black text-white flex items-baseline justify-end gap-1">
                R$ 6.800,00
                <span className="text-xs font-normal text-amber-200">/ mês</span>
              </div>
              <span className="text-[10px] font-bold text-amber-300 block mt-0.5 bg-white/10 px-2 py-0.5 rounded border border-white/10">
                Total 3 Meses: R$ 20.400,00 (6 Reels)
              </span>
            </div>
          </div>
        </div>

        {/* Middle Deliverables & Schedule */}
        <div className="grid grid-cols-12 gap-4 my-auto">
          {/* Deliverables Card (5 cols) */}
          <div className="col-span-5 bg-slate-900/95 border border-slate-800 p-4 rounded-xl space-y-2.5">
            <div className="pb-1.5 border-b border-slate-800 flex justify-between items-center">
              <h3 className="text-sm font-black text-white">
                Pacote Recomendado (Equilíbrio de Mercado)
              </h3>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                ~40% Desconto
              </span>
            </div>

            <p className="text-[11px] text-slate-300 leading-snug">
              Valor calibrado no ponto de equilíbrio do mercado para 360 mil seguidores com desconto de ~40% sobre a tabela avulsa.
            </p>

            <div className="space-y-0.5">
              <div className="text-2xl font-black text-white flex items-baseline gap-1.5">
                R$ 6.800,00 <span className="text-xs font-normal text-slate-400">/ mês</span>
              </div>
              <div className="text-xs font-semibold text-slate-200">
                <strong className="text-white">Total 3 Meses: R$ 20.400,00 (6 Reels)</strong>
              </div>
              <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                <span>Contrato trimestral (OUT • NOV • DEZ) • 3 parcelas de R$ 6.800,00</span>
              </div>
            </div>

            <div className="space-y-1 pt-1">
              <div className="text-[10px] uppercase font-extrabold tracking-wider text-amber-400">
                ENTREGÁVEIS:
              </div>
              <ul className="space-y-1 text-xs text-slate-200">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">2 Reels (com possibilidade de collab)</strong> por mês no Feed (Total 6 Reels)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">4 combo de 3 stories</strong> (3 telas de no mínimo 15 segundos cada, total 12 telas);</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">4 Visitas a loja mais próxima do seu endereço</strong> para gravações dos conteúdos</span>
                </li>
              </ul>
            </div>

            <div className="pt-1 text-[11px] text-slate-300 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
              <strong className="text-amber-400">Direitos de Imagem:</strong> Uso orgânico irrestrito + direito de repostagem em todas as redes do Assaí Atacadista e aprovação prévia.
            </div>
          </div>

          {/* Schedule 3 Months (7 cols) */}
          <div className="col-span-7 bg-slate-900/95 border border-slate-800 p-4 rounded-xl space-y-2.5">
            <div className="flex items-center gap-2 pb-1">
              <Calendar className="w-4 h-4 text-orange-400" />
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Cronograma Estratégico de Entregas (Outubro a Dezembro)
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {/* OUT */}
              <div className="bg-slate-950/90 border border-slate-800 p-2 rounded-lg space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-orange-400 uppercase">OUTUBRO</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-300">2 Reels</span>
                </div>
                <div className="text-[10px] font-bold text-white leading-tight">Primavera & Crianças</div>
                <ul className="space-y-0.5 text-[9px] text-slate-300 leading-tight">
                  <li>• 1ª Visita presencial p/ ofertas</li>
                  <li>• 2 Reels (collab)</li>
                  <li>• Combo Stories (15s+)</li>
                  <li>• Destaque Hortifrúti Assaí</li>
                </ul>
              </div>

              {/* NOV */}
              <div className="bg-slate-950/90 border border-slate-800 p-2 rounded-lg space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-orange-400 uppercase">NOVEMBRO</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-300">2 Reels</span>
                </div>
                <div className="text-[10px] font-bold text-white leading-tight">Black Friday & Ofertas</div>
                <ul className="space-y-0.5 text-[9px] text-slate-300 leading-tight">
                  <li>• Visita captação de ofertas</li>
                  <li>• 2 Reels Esquenta Black Friday</li>
                  <li>• Combo Stories promocionais</li>
                  <li>• Economia e atacado</li>
                </ul>
              </div>

              {/* DEZ */}
              <div className="bg-amber-950/30 border border-amber-500/50 p-2 rounded-lg space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-amber-400 uppercase">DEZEMBRO</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">2 Reels</span>
                </div>
                <div className="text-[10px] font-bold text-amber-200 leading-tight">Fim de Ano & Natal</div>
                <ul className="space-y-0.5 text-[9px] text-amber-100/90 leading-tight">
                  <li>• Visita especial ceia natalina</li>
                  <li>• 2 Reels ceia econômica</li>
                  <li>• Combo Stories festivos</li>
                  <li>• Carnes, panetones e bebidas</li>
                </ul>
              </div>
            </div>

            {/* Bottom ROI recommendation strip */}
            <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-orange-400" />
                <span className="text-slate-300 text-[11px]">
                  RESUMO: Fechamento sugerido: <strong className="text-amber-400">R$ 6.800,00/mês</strong> (Total 3 Meses: R$ 20.400,00 - 6 Reels).
                </span>
              </div>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                Excelente ROI para 360k de Audiência
              </span>
            </div>
          </div>
        </div>

        {/* Slide Footer */}
        <div className="flex justify-between items-center pt-3 border-t border-slate-800/80 text-xs text-slate-500 relative z-10">
          <span>@{profile.username} • Proposta Comercial Assaí Atacadista</span>
          <span className="font-bold text-amber-400">Slide 5 de 5</span>
        </div>
      </div>
    </div>
  );
};
