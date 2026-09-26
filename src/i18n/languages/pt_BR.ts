import Key from "../i18nKey";
import type { Translation } from "../translation";
import { en } from "./en";

// Traduzido só o que aparece de fato com os módulos ligados neste blog (posts, tags,
// categorias, comentários, busca, TOC, paginação, RSS). O resto herda do inglês (`...en`)
// porque some/vndb/bangumi/mal/bilibili/música/galeria/etc. estão desligados.
export const pt_BR: Translation = {
	...en,

	[Key.home]: "Início",
	[Key.about]: "Sobre",
	[Key.archive]: "Arquivo",
	[Key.search]: "Buscar",
	[Key.searchNoResults]: "Nenhum resultado encontrado.",
	[Key.searchTypeSomething]: "Digite algo pra buscar...",
	[Key.searchLoading]: "Buscando...",
	[Key.searchSummary]: "Resumo",
	[Key.searchContent]: "Conteúdo",
	[Key.searchViewMore]: "Ver mais resultados ({count} a mais)",
	[Key.other]: "Outro",

	[Key.navArticles]: "Posts",
	[Key.navSocial]: "Social",
	[Key.navMine]: "Meu",
	[Key.navAbout]: "Sobre",
	[Key.navLinks]: "Links",
	[Key.all]: "Todos",

	[Key.tags]: "Tags",
	[Key.categories]: "Categorias",
	[Key.allCategories]: "Todas as categorias",
	[Key.allTags]: "Todas as tags",
	[Key.allSeries]: "Todas as séries",
	[Key.recentPosts]: "Posts recentes",
	[Key.postList]: "Lista de posts",
	[Key.tableOfContents]: "Sumário",
	[Key.tocEmpty]: "Sem sumário nesta página",

	// Announcement
	[Key.announcement]: "Aviso",
	[Key.announcementClose]: "Fechar",

	[Key.comments]: "Comentários",
	[Key.commentSection]: "Comentários",
	[Key.commentSubtitle]: "Compartilhe sua opinião e converse com a galera",
	[Key.commentNotConfigured]: "Sistema de comentários não configurado",

	[Key.untitled]: "Sem título",
	[Key.uncategorized]: "Sem categoria",
	[Key.noTags]: "Sem tags",

	[Key.wordCount]: "palavra",
	[Key.wordsCount]: "palavras",
	[Key.minuteCount]: "minuto",
	[Key.minutesCount]: "minutos",
	[Key.postCount]: "post",
	[Key.postsCount]: "posts",
	[Key.tagsCount]: "tags",
	[Key.noData]: "Sem dados ainda",

	[Key.themeColor]: "Cor do tema",

	[Key.lightMode]: "Claro",
	[Key.darkMode]: "Escuro",
	[Key.systemMode]: "Sistema",

	[Key.more]: "Mais",
	[Key.collapse]: "Recolher",

	[Key.author]: "Autor",
	[Key.publishedAt]: "Publicado em",
	[Key.updatedAt]: "Atualizado em",
	[Key.readTime]: "Tempo de leitura",
	[Key.license]: "Licença",

	// Pagination
	[Key.paginationFirst]: "Primeira",
	[Key.paginationPrev]: "Anterior",
	[Key.paginationNext]: "Próxima",
	[Key.paginationLast]: "Última",
	[Key.paginationPage]: "Página",
	[Key.paginationOf]: "de",
	[Key.paginationTotal]: ", total",
	[Key.paginationRecords]: " registros",
	[Key.paginationJump]: "Ir para a página",

	// 404
	[Key.notFound]: "404",
	[Key.notFoundTitle]: "Página não encontrada",
	[Key.notFoundDescription]: "Essa página não existe ou foi movida.",
	[Key.backToHome]: "Voltar ao início",

	// RSS
	[Key.rss]: "Feed RSS",
	[Key.rssDescription]: "Assine pra receber as novidades",
	[Key.rssSubtitle]: "Assine por RSS pra receber os últimos posts e novidades na hora",
	[Key.rssLink]: "Link do RSS",
	[Key.rssCopyToReader]: "Copie o link pro seu leitor de RSS",
	[Key.rssCopyLink]: "Copiar link",
	[Key.rssLatestPosts]: "Últimos posts",
	[Key.rssWhatIsRSS]: "O que é RSS?",
	[Key.rssWhatIsRSSDescription]:
		"RSS (Really Simple Syndication) é um formato padrão pra publicar conteúdo atualizado com frequência. Com RSS, você pode:",
	[Key.rssBenefit1]: "Receber o conteúdo mais recente do site sem precisar visitar toda hora",
	[Key.rssBenefit2]: "Gerenciar a assinatura de vários sites num lugar só",
	[Key.rssBenefit3]: "Não perder atualizações e posts importantes",
	[Key.rssBenefit4]: "Ter uma leitura limpa, sem anúncio",
	[Key.rssHowToUse]: "Recomendamos o Feedly, Inoreader ou outro leitor de RSS pra assinar este site.",
	[Key.rssCopied]: "Link do RSS copiado!",
	[Key.rssCopyFailed]: "Não deu pra copiar, copie o link manualmente",

	// Atom
	[Key.atom]: "Feed Atom",
	[Key.atomDescription]: "Assine pra receber as novidades",
	[Key.atomSubtitle]: "Assine por Atom pra receber os últimos posts e novidades na hora",
	[Key.atomLink]: "Link do Atom",
	[Key.atomCopyToReader]: "Copie o link pro seu leitor de Atom",
	[Key.atomCopied]: "Link do Atom copiado!",

	// Last modified
	[Key.lastModifiedPrefix]: "Atualizado em ",
	[Key.lastModifiedOutdated]: "Parte do conteúdo pode estar desatualizada",
	[Key.lastModifiedDaysAgo]: "há {days} dias",
	[Key.year]: "ano",
	[Key.month]: "mês",
	[Key.day]: "dia",
	[Key.hour]: "hora",
	[Key.minute]: "minuto",
	[Key.second]: "segundo",

	// Page views
	[Key.pageViews]: "Visualizações",
	[Key.pageViewsLoading]: "Carregando...",
	[Key.pageViewsError]: "Estatística indisponível",

	[Key.pinned]: "Fixado",

	// Related posts
	[Key.relatedPosts]: "Posts relacionados",
	[Key.randomPosts]: "Posts aleatórios",
	[Key.smartRecommend]: "Inteligente",
	[Key.randomRecommend]: "Aleatório",
	[Key.noRelatedPosts]: "Sem posts relacionados",
	[Key.noRandomPosts]: "Sem posts aleatórios",

	// Series
	[Key.series]: "Série",
	[Key.seriesPartOf]: "Parte da série",
	[Key.seriesPart]: "Parte {n}",
	[Key.seriesThisArticle]: "Este post",
	[Key.noSeries]: "Sem série ainda",

	// Wallpaper mode
	[Key.wallpaperMode]: "Modo do papel de parede",
	[Key.wallpaperBannerMode]: "Papel de parede em faixa",
	[Key.wallpaperFullscreenMode]: "Papel de parede em tela cheia",
	[Key.fullscreenLayout]: "Layout em tela cheia",
	[Key.fullscreenClassicLayout]: "Clássico",
	[Key.fullscreenHeroLayout]: "Destaque",
	[Key.wallpaperOverlayMode]: "Papel de parede com sobreposição",
	[Key.wallpaperNoneMode]: "Sem papel de parede",

	[Key.wallpaperSettings]: "Configurações do papel de parede",
	[Key.wallpaperTitle]: "Título do papel de parede da home",
	[Key.wallpaperCarousel]: "Carrossel de papel de parede",
	[Key.wavesAnimation]: "Animação de ondas",
	[Key.gradientTransition]: "Transição em gradiente",
	[Key.sakuraEffect]: "Efeito de sakura",
	[Key.effectsSettings]: "Configurações de efeitos",
	[Key.overlaySettings]: "Configurações de transparência",
	[Key.overlayOpacity]: "Opacidade do papel de parede",
	[Key.overlayBlur]: "Desfoque do fundo",
	[Key.overlayCardOpacity]: "Opacidade dos cards",

	[Key.settingsTabAppearance]: "Aparência",
	[Key.settingsTabWallpaper]: "Papel de parede",
	[Key.settingsTabEffects]: "Efeitos",

	[Key.cardSettings]: "Estilo dos cards",
	[Key.cardBorder]: "Borda e sombra do card",
	[Key.cardFollowTheme]: "Card segue a cor do tema",

	[Key.postListLayout]: "Layout da lista de posts",
	[Key.postListLayoutList]: "Lista",
	[Key.postListLayoutGrid]: "Grade",

	[Key.sponsorButton]: "Apoiar e compartilhar",
	[Key.sponsorButtonText]: "Se esse post te ajudou, compartilha ou apoia o projeto!",

	[Key.shareOnSocial]: "Compartilhar post",
	[Key.shareOnSocialDescription]: "Se esse post te ajudou, compartilha com mais gente!",

	// Site stats
	[Key.siteStats]: "Estatísticas do site",
	[Key.siteStatsPostCount]: "Posts",
	[Key.siteStatsDynamicCount]: "Momentos",
	[Key.siteStatsCategoryCount]: "Categorias",
	[Key.siteStatsTagCount]: "Tags",
	[Key.siteStatsTotalWords]: "Palavras no total",
	[Key.siteStatsRunningDays]: "Dias no ar",
	[Key.siteStatsLastUpdate]: "Última atividade",
	[Key.siteStatsDaysAgo]: "há {days} dias",
	[Key.siteStatsDays]: "{days} dias",
	[Key.today]: "Hoje",

	// Site info
	[Key.siteInfo]: "Sobre o site",
	[Key.siteInfoBuildTime]: "Build feito em",
	[Key.siteInfoBuildPlatform]: "Plataforma de build",
	[Key.siteInfoBlogVersion]: "Versão do blog",
	[Key.siteInfoAstroVersion]: "Versão do Astro",
	[Key.siteInfoNodeVersion]: "Versão do Node",
	[Key.siteInfoPnpmVersion]: "Versão do pnpm",
	[Key.siteInfoSystem]: "Sistema",
	[Key.siteInfoExpand]: "Mostrar detalhes do build",
	[Key.siteInfoCollapse]: "Esconder detalhes do build",
	[Key.siteInfoDomain]: "Domínio",
	[Key.siteInfoLicense]: "Licença",

	// Calendar
	[Key.calendarSunday]: "Dom",
	[Key.calendarMonday]: "Seg",
	[Key.calendarTuesday]: "Ter",
	[Key.calendarWednesday]: "Qua",
	[Key.calendarThursday]: "Qui",
	[Key.calendarFriday]: "Sex",
	[Key.calendarSaturday]: "Sáb",
	[Key.calendarJanuary]: "Jan",
	[Key.calendarFebruary]: "Fev",
	[Key.calendarMarch]: "Mar",
	[Key.calendarApril]: "Abr",
	[Key.calendarMay]: "Mai",
	[Key.calendarJune]: "Jun",
	[Key.calendarJuly]: "Jul",
	[Key.calendarAugust]: "Ago",
	[Key.calendarSeptember]: "Set",
	[Key.calendarOctober]: "Out",
	[Key.calendarNovember]: "Nov",
	[Key.calendarDecember]: "Dez",
	[Key.calendar]: "Calendário do site",
	[Key.calendarHeatmapWeek]: "Semana {week} de {month}, {count} posts",
	[Key.advertisement]: "Anúncio",

	[Key.shareArticle]: "Compartilhar",
	[Key.generatingPoster]: "Gerando imagem...",
	[Key.copied]: "Copiado",
	[Key.copyLink]: "Copiar link",
	[Key.savePoster]: "Salvar imagem",
	[Key.scanToRead]: "Escaneie pra ler",

	// Code block
	[Key.codeCollapsibleShowMore]: "Mostrar mais",
	[Key.codeCollapsibleShowLess]: "Mostrar menos",
	[Key.codeCollapsibleExpanded]: "Bloco de código expandido",
	[Key.codeCollapsibleCollapsed]: "Bloco de código recolhido",

	// Immersive reading
	[Key.immersiveReading]: "Leitura imersiva",
	[Key.enterImmersiveReading]: "Entrar na leitura imersiva",
	[Key.exitImmersiveReading]: "Sair da leitura imersiva",
	[Key.tocExpand]: "Expandir sumário",
	[Key.tocCollapse]: "Recolher sumário",
};
