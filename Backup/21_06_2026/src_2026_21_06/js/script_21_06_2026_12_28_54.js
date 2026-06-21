'use strict';

const locations = [
  {
    id: 'reitoria',
    namePt: 'Reitoria',
    nameEn: "Rector's Office",
    typePt: 'Unidade administrativa',
    typeEn: 'Administrative unit',
    x: 52.4,
    y: 56.8
  },
  {
    id: 'biblioteca',
    namePt: 'Biblioteca Central',
    nameEn: 'Central Library',
    typePt: 'Biblioteca',
    typeEn: 'Library',
    x: 52.4,
    y: 43.7
  },
  {
    id: 'ru',
    namePt: 'Restaurante Universitário',
    nameEn: 'University Restaurant',
    typePt: 'Alimentação',
    typeEn: 'Food service',
    x: 40.4,
    y: 70.6
  },
  {
    id: 'hu',
    namePt: 'Hospital Universitário',
    nameEn: 'University Hospital',
    typePt: 'Saúde',
    typeEn: 'Health service',
    x: 63.8,
    y: 28.5
  },
  {
    id: 'ctc',
    namePt: 'Centro Tecnológico',
    nameEn: 'Technology Center',
    typePt: 'Centro de ensino',
    typeEn: 'Academic center',
    x: 63.5,
    y: 62.6
  },
  {
    id: 'cse',
    namePt: 'Centro Socioeconômico',
    nameEn: 'Socioeconomic Center',
    typePt: 'Centro de ensino',
    typeEn: 'Academic center',
    x: 40.7,
    y: 44.6
  },
  {
    id: 'cfh',
    namePt: 'Centro de Filosofia e Ciências Humanas',
    nameEn: 'Center of Philosophy and Human Sciences',
    typePt: 'Centro de ensino',
    typeEn: 'Academic center',
    x: 31.6,
    y: 67.7
  },
  {
    id: 'cce',
    namePt: 'Centro de Comunicação e Expressão',
    nameEn: 'Communication and Expression Center',
    typePt: 'Centro de ensino',
    typeEn: 'Academic center',
    x: 43.2,
    y: 57.9
  },
  {
    id: 'ccb',
    namePt: 'Centro de Ciências Biológicas',
    nameEn: 'Biological Sciences Center',
    typePt: 'Centro de ensino',
    typeEn: 'Academic center',
    x: 29.8,
    y: 56.7
  },
  {
    id: 'cfm',
    namePt: 'Centro de Ciências Físicas e Matemáticas',
    nameEn: 'Physical and Mathematical Sciences Center',
    typePt: 'Centro de ensino',
    typeEn: 'Academic center',
    x: 34.3,
    y: 51.7
  },
  {
    id: 'ced',
    namePt: 'Centro de Ciências da Educação',
    nameEn: 'Education Sciences Center',
    typePt: 'Centro de ensino',
    typeEn: 'Academic center',
    x: 35.6,
    y: 65.5
  },
  {
    id: 'ccj',
    namePt: 'Centro de Ciências Jurídicas',
    nameEn: 'Legal Sciences Center',
    typePt: 'Centro de ensino',
    typeEn: 'Academic center',
    x: 42.2,
    y: 35.1
  },
  {
    id: 'ccs',
    namePt: 'Centro de Ciências da Saúde',
    nameEn: 'Health Sciences Center',
    typePt: 'Centro de ensino',
    typeEn: 'Academic center',
    x: 66.7,
    y: 43
  },
  {
    id: 'cds',
    namePt: 'Centro de Desportos',
    nameEn: 'Sports Center',
    typePt: 'Centro de ensino',
    typeEn: 'Academic center',
    x: 56.8,
    y: 79
  },
  {
    id: 'centro_eventos',
    namePt: 'Centro de Cultura e Eventos',
    nameEn: 'Culture and Events Center',
    typePt: 'Eventos',
    typeEn: 'Events',
    x: 50.5,
    y: 64.6
  }
];

const profiles = [
  {
    id: 'stairs',
    titlePt: 'Rota com menos escadas',
    titleEn: 'Route with fewer stairs',
    descriptionPt: 'Prioriza caminhos planos, rampas e travessias mais seguras.',
    descriptionEn: 'Prioritizes flat paths, ramps, and safer crossings.',
    notePt: 'A rota foi ajustada para reduzir escadas e privilegiar rampas.',
    noteEn: 'The route was adjusted to reduce stairs and favor ramps.'
  },
  {
    id: 'slope',
    titlePt: 'Rota com menos inclinação',
    titleEn: 'Route with less slope',
    descriptionPt: 'Evita trechos muito inclinados e favorece caminhos mais suaves.',
    descriptionEn: 'Avoids steep segments and favors gentler paths.',
    notePt: 'A rota prioriza trechos com menor inclinação percebida.',
    noteEn: 'The route prioritizes segments with lower perceived slope.'
  },
  {
    id: 'rest',
    titlePt: 'Rota com mais pontos de descanso',
    titleEn: 'Route with more rest points',
    descriptionPt: 'Dá preferência a caminhos com bancos, sombra e pausas possíveis.',
    descriptionEn: 'Favors paths with benches, shade, and possible pauses.',
    notePt: 'A rota destaca pontos de descanso próximos ao percurso.',
    noteEn: 'The route highlights rest points close to the path.'
  },
  {
    id: 'simple',
    titlePt: 'Rota com instruções simplificadas',
    titleEn: 'Route with simplified instructions',
    descriptionPt: 'Usa frases curtas, referências diretas e menor carga cognitiva.',
    descriptionEn: 'Uses short sentences, direct references, and lower cognitive load.',
    notePt: 'As instruções foram simplificadas para leitura rápida durante o deslocamento.',
    noteEn: 'Instructions were simplified for quick reading while moving.'
  },
  {
    id: 'lowVision',
    titlePt: 'Rota para baixa visão',
    titleEn: 'Route for low vision',
    descriptionPt: 'Reforça contraste, referências textuais e orientação sem depender do mapa.',
    descriptionEn: 'Reinforces contrast, textual references, and guidance without relying on the map.',
    notePt: 'A rota reforça referências textuais e evita depender apenas de elementos visuais.',
    noteEn: 'The route reinforces textual references and avoids relying only on visual elements.'
  },
  {
    id: 'standard',
    titlePt: 'Rota padrão',
    titleEn: 'Standard route',
    descriptionPt: 'Equilibra distância, clareza das instruções e acessibilidade geral.',
    descriptionEn: 'Balances distance, instruction clarity, and general accessibility.',
    notePt: 'A rota padrão equilibra distância estimada e clareza de navegação.',
    noteEn: 'The standard route balances estimated distance and navigation clarity.'
  }
];

const translations = {
  pt: {
    appTitle: 'AcessibiliUFSC',
    appSubtitle: 'Guia acessível do campus',
    appKicker: 'Guia acessível do campus',
    skipLink: 'Pular para o conteúdo principal',
    languageLabel: 'Idioma',
    languagePt: 'PT-BR',
    languageEn: 'EN',
    languageEs: 'ES',
    contrastOn: 'Ativar modo alto contraste',
    contrastOff: 'Desativar modo alto contraste',
    stepNavLabel: 'Etapas do planejamento de rota',
    steps: ['Boas-vindas', 'Origem e destino', 'Perfil', 'Resultado', 'Passo a passo', 'Conclusão'],
    welcomeEyebrow: 'Guia acessível do campus',
    welcomeTitle: 'AcessibiliUFSC',
    welcomeIntro: 'Planeje rotas inclusivas no Campus Reitor João David Ferreira Lima, considerando mobilidade, baixa visão, descanso e clareza das instruções.',
    welcomeAction: 'Planejar rota',
    welcomeFeatureTitle: 'O que é o AcessibiliUFSC?',
    welcomeFeatures: [
      ['Planejamento guiado', 'Escolha origem, destino e perfil em poucos passos.'],
      ['Recursos inclusivos', 'Modo texto, alto contraste, foco visível e alertas claros.'],
      ['Português e inglês', 'A interface acompanha quem prefere usar outro idioma.']
    ],
    placesTitle: 'Escolha origem e destino',
    placesLead: 'Selecione dois pontos do campus para calcular uma rota acessível simulada.',
    originLabel: 'Origem',
    destinationLabel: 'Destino',
    originHelp: 'Escolha de onde você vai sair.',
    destinationHelp: 'Escolha para onde você quer ir.',
    locationAssistTitle: 'Não sei onde estou',
    locationAssistText: 'Ative sua localização para o site sugerir a origem mais próxima no campus. Depois escolha apenas o destino.',
    locationAssistButton: 'Usar minha localização como origem',
    locationDetecting: 'Solicitando sua localização...',
    locationDetected: 'Você está próximo de {location}. Usamos esse ponto como origem.',
    locationDetectedApprox: 'Você parece estar fora da área central do campus. Usamos o ponto mais próximo como origem: {location}.',
    locationUnsupported: 'Seu navegador não permite identificar a localização automaticamente.',
    locationPermissionDenied: 'Permissão de localização negada. Ative a localização do navegador ou escolha a origem manualmente.',
    locationUnavailable: 'Não foi possível identificar sua localização agora. Escolha a origem manualmente.',
    selectPlaceholder: 'Selecione um local',
    locationCategories: {
      academic: 'Centros de ensino',
      services: 'Serviços do campus',
      administration: 'Administração e eventos'
    },
    mapPickerSummary: 'Escolher no mapa',
    mapPickerCollapse: 'Recolher mapa',
    mapPickerTitle: 'Mapa de seleção',
    mapPickerTargetLabel: 'Preencher campo',
    mapPickerOriginTarget: 'Origem',
    mapPickerDestinationTarget: 'Destino',
    mapPickerEmpty: 'não selecionado',
    mapPickerStatus: 'Origem: {origin}. Destino: {destination}.',
    mapPickerPromptOrigin: 'Escolha a origem',
    mapPickerPromptDestination: 'Escolha o destino',
    mapPickerPromptComplete: 'Origem e destino selecionados. Clique em um ponto selecionado para desmarcar.',
    mapPickerOriginSelected: 'Origem selecionada no mapa:',
    mapPickerOriginCleared: 'Origem removida no mapa.',
    mapPickerDestinationCleared: 'Destino removido no mapa.',
    mapPickerDestinationSelected: 'Destino selecionado no mapa:',
    continueButton: 'Continuar',
    backButton: 'Voltar',
    errorPrefix: 'Erro:',
    originRequired: 'selecione uma origem.',
    destinationRequired: 'selecione um destino.',
    samePlaceError: 'selecione um destino diferente da origem.',
    navigationBlocked: 'Etapa ainda não disponível. Continue pelo fluxo para liberar essa página.',
    profileTitle: 'Informe seu perfil de acessibilidade',
    profileLead: 'A seleção orienta o resumo, os alertas e a forma de apresentar a rota.',
    profileLegend: 'Perfil de acessibilidade ou preferência de navegação',
    profileRequired: 'escolha um perfil de acessibilidade para continuar.',
    calculateRoute: 'Calcular rota',
    routeTitle: 'Resultado da rota',
    routeLead: 'Revise o mapa, os alertas e as instruções antes de iniciar.',
    mapTitle: 'Mapa do campus',
    mapAlt: 'Mapa visual do Campus Trindade da UFSC usado como base para marcadores de rota.',
    mapSourceLabel: 'Fonte do mapa',
    mapSourceText: 'Imagem baseada no Mapa e Endereços da UFSC.',
    mapSourceAction: 'Acessar fonte oficial',
    mapScrollHint: 'No celular, deslize o mapa para ver os detalhes.',
    mapScrollLabel: 'Mapa ampliado do campus. Deslize horizontalmente para ver todas as áreas.',
    mapInfoInitial: 'Foque ou selecione um marcador para ver detalhes do local.',
    buttonSpeechPrefix: 'Botão',
    linkSpeechPrefix: 'Link',
    routeSummaryTitle: 'Resumo da rota',
    estimatedTime: 'Tempo estimado',
    estimatedDistance: 'Distância estimada',
    accessibilityLevel: 'Nível de acessibilidade',
    chosenProfile: 'Perfil escolhido',
    profileAdjustment: 'Ajuste aplicado',
    alertsTitle: 'Alertas da rota',
    instructionsTitle: 'Instruções passo a passo',
    landmarksTitle: 'Pontos de referência',
    startRoute: 'Iniciar rota',
    editRoute: 'Voltar e alterar',
    showTextRoute: 'Ver rota em modo texto',
    hideTextRoute: 'Ocultar modo texto',
    textRouteTitle: 'Rota em modo texto',
    originBadge: 'Origem',
    destinationBadge: 'Destino',
    markerAria: 'Marcador de mapa',
    routeCalculated: 'Rota calculada com sucesso. Revise os detalhes antes de iniciar.',
    routeStarted: 'Modo passo a passo iniciado.',
    routeReaderTitle: 'Leitor da rota',
    routeReaderReadSummary: 'Ler resumo da rota',
    routeReaderReadAlerts: 'Ler alertas',
    routeReaderReadTextMode: 'Ler modo texto',
    routeReaderReadCurrentStep: 'Ler este passo',
    routeReaderReadAllSteps: 'Ler todos os passos',
    routeReaderPause: 'Pausar',
    routeReaderResume: 'Continuar',
    routeReaderStop: 'Parar',
    routeReaderAuto: 'Ler automaticamente ao mudar de passo',
    routeReaderReady: 'Leitor pronto.',
    routeReaderReading: 'Lendo instrução.',
    routeReaderPaused: 'Leitura pausada.',
    routeReaderStopped: 'Leitura interrompida.',
    routeReaderUnsupported: 'Leitor de voz indisponível neste navegador.',
    locationSelected: 'Local selecionado no mapa:',
    defaultRouteName: 'Rota acessível simulada',
    defaultRouteSummary: 'Rota gerada automaticamente com base nos pontos escolhidos. Use os alertas e o modo texto como apoio.',
    routeAccessibleHigh: 'Alta',
    routeAccessibleMedium: 'Média',
    routeAccessibleModerate: 'Moderada',
    warningLabel: 'Atenção',
    infoLabel: 'Informação',
    accessibleLabel: 'Acessível',
    dangerLabel: 'Cuidado',
    alerts: {
      vehicleCrossing: 'trecho com travessia de veículos.',
      partialShade: 'caminho com sombra parcial.',
      unevenFloor: 'possível trecho com piso irregular.',
      wheelchair: 'rota recomendada para cadeira de rodas.',
      restPoint: 'há ponto de descanso próximo.',
      rain: 'evite este trecho em dias de chuva.',
      crowded: 'ambiente com grande circulação de pessoas.',
      textReference: 'use também as referências textuais se a leitura do mapa estiver difícil.'
    },
    progressLabel: 'Progresso da rota',
    progressText: 'Passo {current} de {total}',
    previousStep: 'Voltar ao passo anterior',
    nextStep: 'Próximo passo',
    confirmArrival: 'Confirmar chegada',
    arrivalTitle: 'Rota concluída',
    arrivalMessage: 'Você chegou ao destino. Rota concluída com sucesso.',
    newRoute: 'Planejar nova rota',
    viewMapAgain: 'Ver mapa novamente',
    hideMapAgain: 'Ocultar mapa',
    summaryOrigin: 'Origem',
    summaryDestination: 'Destino',
    summaryProfile: 'Perfil',
    summaryRoute: 'Resumo',
    noRouteSelected: 'Nenhuma rota calculada ainda.',
    placesAria: 'Lista de locais do campus',
    statusStepChanged: 'Etapa atualizada:',
    markerRoleOrigin: 'origem da rota',
    markerRoleDestination: 'destino da rota',
    markerRoleNeutral: 'ponto do campus',
    routeSpecificNames: {
      bibliotecaRu: 'Biblioteca Central para Restaurante Universitário',
      reitoriaCtc: 'Reitoria para Centro Tecnológico',
      cseBiblioteca: 'Centro Socioeconômico para Biblioteca Central',
      eventosHu: 'Centro de Cultura e Eventos para Hospital Universitário'
    }
  },
  en: {
    appTitle: 'AcessibiliUFSC',
    appSubtitle: 'Accessible campus guide',
    appKicker: 'Accessible campus guide',
    skipLink: 'Skip to main content',
    languageLabel: 'Language',
    languagePt: 'PT-BR',
    languageEn: 'EN',
    languageEs: 'ES',
    contrastOn: 'Enable high contrast mode',
    contrastOff: 'Disable high contrast mode',
    stepNavLabel: 'Route planning steps',
    steps: ['Welcome', 'Origin and destination', 'Profile', 'Result', 'Step by step', 'Completion'],
    welcomeEyebrow: 'Accessible campus guide',
    welcomeTitle: 'AcessibiliUFSC',
    welcomeIntro: 'Plan inclusive routes on UFSC Trindade campus, considering mobility, low vision, rest points, and clear instructions.',
    welcomeAction: 'Plan route',
    welcomeFeatureTitle: 'What is AcessibiliUFSC?',
    welcomeFeatures: [
      ['Guided planning', 'Choose origin, destination, and profile in a few steps.'],
      ['Inclusive resources', 'Text mode, high contrast, visible focus, and clear alerts.'],
      ['Portuguese and English', 'The interface supports users who prefer another language.']
    ],
    placesTitle: 'Choose origin and destination',
    placesLead: 'Select two campus points to calculate a simulated accessible route.',
    originLabel: 'Origin',
    destinationLabel: 'Destination',
    originHelp: 'Choose where you will start.',
    destinationHelp: 'Choose where you want to go.',
    locationAssistTitle: 'I do not know where I am',
    locationAssistText: 'Turn on location so the site can suggest the nearest campus origin. Then choose only the destination.',
    locationAssistButton: 'Use my location as origin',
    locationDetecting: 'Requesting your location...',
    locationDetected: 'You are near {location}. We used this point as your origin.',
    locationDetectedApprox: 'You appear to be outside the central campus area. We used the nearest point as origin: {location}.',
    locationUnsupported: 'Your browser does not allow automatic location detection.',
    locationPermissionDenied: 'Location permission denied. Enable browser location or choose the origin manually.',
    locationUnavailable: 'Could not identify your location right now. Choose the origin manually.',
    selectPlaceholder: 'Select a location',
    locationCategories: {
      academic: 'Academic centers',
      services: 'Campus services',
      administration: 'Administration and events'
    },
    mapPickerSummary: 'Choose on map',
    mapPickerCollapse: 'Collapse map',
    mapPickerTitle: 'Selection map',
    mapPickerTargetLabel: 'Field to fill',
    mapPickerOriginTarget: 'Origin',
    mapPickerDestinationTarget: 'Destination',
    mapPickerEmpty: 'not selected',
    mapPickerStatus: 'Origin: {origin}. Destination: {destination}.',
    mapPickerPromptOrigin: 'Choose the origin',
    mapPickerPromptDestination: 'Choose the destination',
    mapPickerPromptComplete: 'Origin and destination selected. Click a selected point to remove it.',
    mapPickerOriginSelected: 'Origin selected on map:',
    mapPickerOriginCleared: 'Origin removed on map.',
    mapPickerDestinationCleared: 'Destination removed on map.',
    mapPickerDestinationSelected: 'Destination selected on map:',
    continueButton: 'Continue',
    backButton: 'Back',
    errorPrefix: 'Error:',
    originRequired: 'select an origin.',
    destinationRequired: 'select a destination.',
    samePlaceError: 'select a destination different from the origin.',
    navigationBlocked: 'This step is not available yet. Continue through the flow to unlock this page.',
    profileTitle: 'Choose your accessibility profile',
    profileLead: 'The selection guides the summary, alerts, and how the route is presented.',
    profileLegend: 'Accessibility profile or navigation preference',
    profileRequired: 'choose an accessibility profile to continue.',
    calculateRoute: 'Calculate route',
    routeTitle: 'Route result',
    routeLead: 'Review the map, alerts, and instructions before starting.',
    mapTitle: 'Campus map',
    mapAlt: 'Visual map of UFSC Trindade campus used as a base for route markers.',
    mapSourceLabel: 'Map source',
    mapSourceText: 'Image based on UFSC Maps and Addresses.',
    mapSourceAction: 'Open official source',
    mapScrollHint: 'On mobile, swipe the map to see details.',
    mapScrollLabel: 'Enlarged campus map. Swipe horizontally to see all areas.',
    mapInfoInitial: 'Focus or select a marker to see location details.',
    buttonSpeechPrefix: 'Button',
    linkSpeechPrefix: 'Link',
    routeSummaryTitle: 'Route summary',
    estimatedTime: 'Estimated time',
    estimatedDistance: 'Estimated distance',
    accessibilityLevel: 'Accessibility level',
    chosenProfile: 'Chosen profile',
    profileAdjustment: 'Applied adjustment',
    alertsTitle: 'Route alerts',
    instructionsTitle: 'Step-by-step instructions',
    landmarksTitle: 'Reference points',
    startRoute: 'Start route',
    editRoute: 'Go back and edit',
    showTextRoute: 'View route in text mode',
    hideTextRoute: 'Hide text mode',
    textRouteTitle: 'Route in text mode',
    originBadge: 'Origin',
    destinationBadge: 'Destination',
    markerAria: 'Map marker',
    routeCalculated: 'Route calculated successfully. Review the details before starting.',
    routeStarted: 'Step-by-step mode started.',
    routeReaderTitle: 'Route reader',
    routeReaderReadSummary: 'Read route summary',
    routeReaderReadAlerts: 'Read alerts',
    routeReaderReadTextMode: 'Read text mode',
    routeReaderReadCurrentStep: 'Read this step',
    routeReaderReadAllSteps: 'Read all steps',
    routeReaderPause: 'Pause',
    routeReaderResume: 'Resume',
    routeReaderStop: 'Stop',
    routeReaderAuto: 'Automatically read when step changes',
    routeReaderReady: 'Reader ready.',
    routeReaderReading: 'Reading instruction.',
    routeReaderPaused: 'Reading paused.',
    routeReaderStopped: 'Reading stopped.',
    routeReaderUnsupported: 'Voice reader is unavailable in this browser.',
    locationSelected: 'Location selected on the map:',
    defaultRouteName: 'Simulated accessible route',
    defaultRouteSummary: 'Route automatically generated from the chosen points. Use alerts and text mode as support.',
    routeAccessibleHigh: 'High',
    routeAccessibleMedium: 'Medium',
    routeAccessibleModerate: 'Moderate',
    warningLabel: 'Warning',
    infoLabel: 'Information',
    accessibleLabel: 'Accessible',
    dangerLabel: 'Caution',
    alerts: {
      vehicleCrossing: 'segment with vehicle crossing.',
      partialShade: 'path with partial shade.',
      unevenFloor: 'possible segment with uneven pavement.',
      wheelchair: 'route recommended for wheelchair users.',
      restPoint: 'there is a rest point nearby.',
      rain: 'avoid this segment on rainy days.',
      crowded: 'area with heavy pedestrian circulation.',
      textReference: 'also use textual references if the map is hard to read.'
    },
    progressLabel: 'Route progress',
    progressText: 'Step {current} of {total}',
    previousStep: 'Previous step',
    nextStep: 'Next step',
    confirmArrival: 'Confirm arrival',
    arrivalTitle: 'Route completed',
    arrivalMessage: 'You have arrived at your destination. Route completed successfully.',
    newRoute: 'Plan new route',
    viewMapAgain: 'View map again',
    hideMapAgain: 'Hide map',
    summaryOrigin: 'Origin',
    summaryDestination: 'Destination',
    summaryProfile: 'Profile',
    summaryRoute: 'Summary',
    noRouteSelected: 'No route has been calculated yet.',
    placesAria: 'Campus location list',
    statusStepChanged: 'Current step updated:',
    markerRoleOrigin: 'route origin',
    markerRoleDestination: 'route destination',
    markerRoleNeutral: 'campus point',
    routeSpecificNames: {
      bibliotecaRu: 'Central Library to University Restaurant',
      reitoriaCtc: "Rector's Office to Technology Center",
      cseBiblioteca: 'Socioeconomic Center to Central Library',
      eventosHu: 'Culture and Events Center to University Hospital'
    }
  }
};

translations.pt.pageReaderLabel = 'Modo leitura';
translations.pt.pageReaderStarted = 'Modo leitura iniciado.';
translations.pt.welcomeFeatures[2] = ['Português, inglês e espanhol', 'A interface acompanha quem prefere usar outro idioma.'];
translations.en.pageReaderLabel = 'Reading mode';
translations.en.pageReaderStarted = 'Reading mode started.';
translations.en.welcomeFeatures[2] = ['Portuguese, English and Spanish', 'The interface supports users who prefer another language.'];

translations.es = {
  ...translations.pt,
  appSubtitle: 'Guía accesible del campus',
  appKicker: 'Guía accesible del campus',
  skipLink: 'Saltar al contenido principal',
  languageLabel: 'Idioma',
  languagePt: 'PT-BR',
  languageEn: 'EN',
  languageEs: 'ES',
  contrastOn: 'Activar modo de alto contraste',
  contrastOff: 'Desactivar modo de alto contraste',
  pageReaderLabel: 'Modo lectura',
  pageReaderStarted: 'Modo lectura iniciado.',
  stepNavLabel: 'Etapas de planificación de ruta',
  steps: ['Bienvenida', 'Origen y destino', 'Perfil', 'Resultado', 'Paso a paso', 'Conclusión'],
  welcomeEyebrow: 'Guía accesible del campus',
  welcomeIntro: 'Planifica rutas inclusivas en el Campus Reitor João David Ferreira Lima, considerando movilidad, baja visión, descanso y claridad de las instrucciones.',
  welcomeAction: 'Planificar ruta',
  welcomeFeatureTitle: '¿Qué es AcessibiliUFSC?',
  welcomeFeatures: [
    ['Planificación guiada', 'Elige origen, destino y perfil en pocos pasos.'],
    ['Recursos inclusivos', 'Modo texto, alto contraste, foco visible y alertas claras.'],
    ['Portugués, inglés y español', 'La interfaz acompaña a quienes prefieren usar otro idioma.']
  ],
  placesTitle: 'Elige origen y destino',
  placesLead: 'Selecciona dos puntos del campus para calcular una ruta accesible simulada.',
  originLabel: 'Origen',
  destinationLabel: 'Destino',
  originHelp: 'Elige desde dónde vas a salir.',
  destinationHelp: 'Elige hacia dónde quieres ir.',
  locationAssistTitle: 'No sé dónde estoy',
  locationAssistText: 'Activa tu ubicación para que el sitio sugiera el origen más cercano en el campus. Después elige solo el destino.',
  locationAssistButton: 'Usar mi ubicación como origen',
  locationDetecting: 'Solicitando tu ubicación...',
  locationDetected: 'Estás cerca de {location}. Usamos este punto como origen.',
  locationDetectedApprox: 'Parece que estás fuera del área central del campus. Usamos el punto más cercano como origen: {location}.',
  locationUnsupported: 'Tu navegador no permite identificar la ubicación automáticamente.',
  locationPermissionDenied: 'Permiso de ubicación denegado. Activa la ubicación del navegador o elige el origen manualmente.',
  locationUnavailable: 'No fue posible identificar tu ubicación ahora. Elige el origen manualmente.',
  selectPlaceholder: 'Selecciona un lugar',
  locationCategories: {
    academic: 'Centros de enseñanza',
    services: 'Servicios del campus',
    administration: 'Administración y eventos'
  },
  mapPickerSummary: 'Elegir en el mapa',
  mapPickerCollapse: 'Replegar mapa',
  mapPickerTitle: 'Mapa de selección',
  mapPickerTargetLabel: 'Campo a completar',
  mapPickerOriginTarget: 'Origen',
  mapPickerDestinationTarget: 'Destino',
  mapPickerEmpty: 'no seleccionado',
  mapPickerStatus: 'Origen: {origin}. Destino: {destination}.',
  mapPickerPromptOrigin: 'Elige el origen',
  mapPickerPromptDestination: 'Elige el destino',
  mapPickerPromptComplete: 'Origen y destino seleccionados. Haz clic en un punto seleccionado para desmarcarlo.',
  mapPickerOriginSelected: 'Origen seleccionado en el mapa:',
  mapPickerOriginCleared: 'Origen eliminado en el mapa.',
  mapPickerDestinationCleared: 'Destino eliminado en el mapa.',
  mapPickerDestinationSelected: 'Destino seleccionado en el mapa:',
  continueButton: 'Continuar',
  backButton: 'Volver',
  errorPrefix: 'Error:',
  originRequired: 'selecciona un origen.',
  destinationRequired: 'selecciona un destino.',
  samePlaceError: 'selecciona un destino diferente del origen.',
  navigationBlocked: 'Etapa aún no disponible. Continúa el flujo para liberar esta página.',
  profileTitle: 'Informa tu perfil de accesibilidad',
  profileLead: 'La selección orienta el resumen, las alertas y la forma de presentar la ruta.',
  profileLegend: 'Perfil de accesibilidad o preferencia de navegación',
  profileRequired: 'elige un perfil de accesibilidad para continuar.',
  calculateRoute: 'Calcular ruta',
  routeTitle: 'Resultado de la ruta',
  routeLead: 'Revisa el mapa, las alertas y las instrucciones antes de iniciar.',
  mapTitle: 'Mapa del campus',
  mapAlt: 'Mapa visual del Campus Trindade de UFSC usado como base para marcadores de ruta.',
  mapSourceLabel: 'Fuente del mapa',
  mapSourceText: 'Imagen basada en el Mapa y Direcciones de UFSC.',
  mapSourceAction: 'Acceder a la fuente oficial',
  mapScrollHint: 'En celular, desliza el mapa para ver los detalles.',
  mapScrollLabel: 'Mapa ampliado del campus. Desliza horizontalmente para ver todas las áreas.',
  mapInfoInitial: 'Enfoca o selecciona un marcador para ver detalles del lugar.',
  buttonSpeechPrefix: 'Botón',
  linkSpeechPrefix: 'Enlace',
  routeSummaryTitle: 'Resumen de la ruta',
  estimatedTime: 'Tiempo estimado',
  estimatedDistance: 'Distancia estimada',
  accessibilityLevel: 'Nivel de accesibilidad',
  chosenProfile: 'Perfil elegido',
  profileAdjustment: 'Ajuste realizado',
  alertsTitle: 'Alertas de la ruta',
  instructionsTitle: 'Instrucciones paso a paso',
  landmarksTitle: 'Puntos de referencia',
  startRoute: 'Iniciar ruta',
  editRoute: 'Volver y cambiar',
  showTextRoute: 'Ver ruta en modo texto',
  hideTextRoute: 'Ocultar modo de texto',
  textRouteTitle: 'Ruta en modo texto',
  originBadge: 'Origen',
  destinationBadge: 'Destino',
  markerAria: 'Marcador de mapa',
  routeCalculated: 'Ruta calculada con éxito. Revisa los detalles antes de iniciar.',
  routeStarted: 'Modo paso a paso iniciado.',
  routeReaderTitle: 'Lector de ruta',
  routeReaderReadSummary: 'Leer resumen',
  routeReaderReadAlerts: 'Leer alertas',
  routeReaderReadTextMode: 'Leer modo texto',
  routeReaderReadCurrentStep: 'Leer este paso',
  routeReaderReadAllSteps: 'Leer todos los pasos',
  routeReaderPause: 'Pausar lectura',
  routeReaderResume: 'Continuar lectura',
  routeReaderStop: 'Detener lectura',
  routeReaderAuto: 'Leer automáticamente al cambiar de paso',
  routeReaderReady: 'Lector listo.',
  routeReaderReading: 'Leyendo instrucción.',
  routeReaderPaused: 'Lectura pausada.',
  routeReaderStopped: 'Lectura interrumpida.',
  routeReaderUnsupported: 'Lector de voz no disponible en este navegador.',
  locationSelected: 'Lugar seleccionado en el mapa:',
  defaultRouteName: 'Ruta accesible simulada',
  defaultRouteSummary: 'Ruta generada automáticamente con base en los puntos elegidos. Usa las alertas y el modo texto como apoyo.',
  routeAccessibleHigh: 'Alta',
  routeAccessibleMedium: 'Media',
  routeAccessibleModerate: 'Moderada',
  warningLabel: 'Atención',
  infoLabel: 'Información',
  accessibleLabel: 'Accesible',
  dangerLabel: 'Precaución',
  alerts: {
    vehicleCrossing: 'tramo con cruce de vehículos.',
    partialShade: 'camino con sombra parcial.',
    unevenFloor: 'posible tramo con piso irregular.',
    wheelchair: 'ruta recomendada para silla de ruedas.',
    restPoint: 'hay un punto de descanso cercano.',
    rain: 'evita este tramo en días de lluvia.',
    crowded: 'ambiente con gran circulación de personas.',
    textReference: 'usa también las referencias textuales si la lectura del mapa es difícil.'
  },
  progressLabel: 'Progreso de la ruta',
  progressText: 'Paso {current} de {total}',
  previousStep: 'Volver al paso anterior',
  nextStep: 'Próximo paso',
  confirmArrival: 'Confirmar llegada',
  arrivalTitle: 'Ruta concluida',
  arrivalMessage: 'Llegaste al destino. Ruta concluida con éxito.',
  newRoute: 'Planificar nueva ruta',
  viewMapAgain: 'Ver mapa nuevamente',
  hideMapAgain: 'Ocultar el mapa',
  summaryOrigin: 'Origen',
  summaryDestination: 'Destino',
  summaryProfile: 'Perfil',
  summaryRoute: 'Resumen',
  noRouteSelected: 'Aún no se calculó ninguna ruta.',
  placesAria: 'Lista de lugares del campus',
  statusStepChanged: 'Etapa actualizada:',
  markerRoleOrigin: 'origen de la ruta',
  markerRoleDestination: 'destino de la ruta',
  markerRoleNeutral: 'punto del campus',
  routeSpecificNames: {
    bibliotecaRu: 'Biblioteca Central a Restaurante Universitario',
    reitoriaCtc: 'Rectoría a Centro de Tecnología',
    cseBiblioteca: 'Centro Socioeconómico a Biblioteca Central',
    eventosHu: 'Centro de Cultura y Eventos a Hospital Universitario'
  }
};

const alertMeta = {
  vehicleCrossing: { type: 'warning', icon: '!' },
  partialShade: { type: 'info', icon: 'i' },
  unevenFloor: { type: 'warning', icon: '!' },
  wheelchair: { type: 'accessible', icon: 'A' },
  restPoint: { type: 'accessible', icon: 'A' },
  rain: { type: 'danger', icon: '!' },
  crowded: { type: 'info', icon: 'i' },
  textReference: { type: 'info', icon: 'i' }
};

const routeTemplates = {
  'biblioteca|ru': {
    nameKey: 'bibliotecaRu',
    accessibility: 'routeAccessibleHigh',
    summaryPt: 'Trajeto curto entre a Biblioteca Central e o RU, com travessia sinalizada e alternativa por trecho mais plano.',
    summaryEn: 'Short path between the Central Library and the University Restaurant, with a marked crossing and a flatter alternative segment.',
    path: [
      { x: 52.4, y: 43.7 },
      { x: 49, y: 53.4 },
      { x: 45, y: 63.7 },
      { x: 40.4, y: 70.6 }
    ],
    alerts: ['vehicleCrossing', 'partialShade', 'wheelchair', 'crowded'],
    landmarksPt: ['Entrada principal da Biblioteca Central', 'Via interna central', 'Faixa sinalizada próxima ao RU'],
    landmarksEn: ['Central Library main entrance', 'Central internal road', 'Marked crossing near the University Restaurant'],
    stepsPt: [
      ['Saia da Biblioteca Central pela entrada principal.', 'Use a calçada mais larga antes de acessar a via interna.'],
      ['Siga pela via interna em direção ao Restaurante Universitário.', 'Mantenha-se no lado com menor inclinação.'],
      ['Atravesse pela faixa sinalizada.', 'A travessia tem circulação de veículos, avance com atenção.'],
      ['Continue pelo caminho com sombra parcial.', 'Há área de pausa próxima ao acesso do RU.'],
      ['Você chegou ao Restaurante Universitário.', 'A entrada fica logo após o trecho de maior circulação.']
    ],
    stepsEn: [
      ['Leave the Central Library through the main entrance.', 'Use the wider sidewalk before reaching the internal road.'],
      ['Follow the internal road toward the University Restaurant.', 'Stay on the side with less slope.'],
      ['Cross at the marked crosswalk.', 'The crossing has vehicle circulation, proceed carefully.'],
      ['Continue along the partially shaded path.', 'There is a pause area close to the restaurant access.'],
      ['You have arrived at the University Restaurant.', 'The entrance is just after the busier circulation area.']
    ]
  },
  'reitoria|ctc': {
    nameKey: 'reitoriaCtc',
    accessibility: 'routeAccessibleMedium',
    summaryPt: 'Rota institucional entre a Reitoria e o CTC, evitando atalhos com piso irregular quando possível.',
    summaryEn: 'Institutional route between the Rector\'s Office and the Technology Center, avoiding uneven shortcuts where possible.',
    path: [
      { x: 52.4, y: 56.8 },
      { x: 56, y: 59.3 },
      { x: 60, y: 60.8 },
      { x: 63.5, y: 62.6 }
    ],
    alerts: ['unevenFloor', 'partialShade', 'restPoint', 'rain'],
    landmarksPt: ['Praça próxima à Reitoria', 'Via interna em direção ao setor leste', 'Acesso principal ao CTC'],
    landmarksEn: ['Square near the Rector\'s Office', 'Internal road toward the east sector', 'Main access to the Technology Center'],
    stepsPt: [
      ['Saia da Reitoria em direção à via interna principal.', 'Prefira o percurso contornando a praça.'],
      ['Siga para o setor leste do campus.', 'Evite atalhos com piso visualmente irregular.'],
      ['Passe pelo trecho com sombra parcial.', 'Há ponto de descanso antes da chegada ao CTC.'],
      ['Aproxime-se do acesso principal do Centro Tecnológico.', 'A circulação pode aumentar nos horários de troca de aula.'],
      ['Você chegou ao Centro Tecnológico.', 'Use a entrada principal para melhor orientação.']
    ],
    stepsEn: [
      ['Leave the Rector\'s Office toward the main internal road.', 'Prefer the path around the square.'],
      ['Continue toward the east sector of campus.', 'Avoid shortcuts with visibly uneven pavement.'],
      ['Pass through the partially shaded segment.', 'There is a rest point before reaching the Technology Center.'],
      ['Approach the main access to the Technology Center.', 'Circulation may increase between classes.'],
      ['You have arrived at the Technology Center.', 'Use the main entrance for clearer orientation.']
    ]
  },
  'cse|biblioteca': {
    nameKey: 'cseBiblioteca',
    accessibility: 'routeAccessibleHigh',
    summaryPt: 'Trajeto direto entre CSE e Biblioteca Central, com referências simples e baixa distância estimada.',
    summaryEn: 'Direct path between the Socioeconomic Center and the Central Library, with simple references and low estimated distance.',
    path: [
      { x: 40.7, y: 44.6 },
      { x: 45, y: 44 },
      { x: 49, y: 43.9 },
      { x: 52.4, y: 43.7 }
    ],
    alerts: ['partialShade', 'wheelchair', 'restPoint'],
    landmarksPt: ['Saída do CSE', 'Eixo de circulação central', 'Entrada lateral da Biblioteca Central'],
    landmarksEn: ['Socioeconomic Center exit', 'Central circulation axis', 'Side entrance of the Central Library'],
    stepsPt: [
      ['Saia do CSE pela saída voltada ao eixo central.', 'O trecho inicial é curto e com boa visibilidade.'],
      ['Siga em linha gradual em direção à Biblioteca Central.', 'Mantenha a referência dos prédios à direita.'],
      ['Continue pelo caminho com sombra parcial.', 'Há ponto de descanso no trajeto.'],
      ['Aproxime-se da Biblioteca Central pela lateral.', 'A entrada principal fica logo à frente.'],
      ['Você chegou à Biblioteca Central.', 'Confirme o acesso pela entrada sinalizada.']
    ],
    stepsEn: [
      ['Leave the Socioeconomic Center through the exit facing the central axis.', 'The initial segment is short and has good visibility.'],
      ['Follow a gradual line toward the Central Library.', 'Keep the buildings as a reference on your right.'],
      ['Continue through the partially shaded path.', 'There is a rest point along the way.'],
      ['Approach the Central Library from the side.', 'The main entrance is just ahead.'],
      ['You have arrived at the Central Library.', 'Confirm access through the marked entrance.']
    ]
  },
  'centro_eventos|hu': {
    nameKey: 'eventosHu',
    accessibility: 'routeAccessibleModerate',
    summaryPt: 'Rota mais longa entre o Centro de Cultura e Eventos e o HU, com alertas para chuva e circulação intensa.',
    summaryEn: 'Longer route between the Culture and Events Center and the University Hospital, with alerts for rain and heavy circulation.',
    path: [
      { x: 50.5, y: 64.6 },
      { x: 55, y: 52 },
      { x: 60, y: 38.7 },
      { x: 63.8, y: 28.5 }
    ],
    alerts: ['rain', 'vehicleCrossing', 'crowded', 'textReference'],
    landmarksPt: ['Centro de Cultura e Eventos', 'Via interna em direção ao norte', 'Acesso do Hospital Universitário'],
    landmarksEn: ['Culture and Events Center', 'Internal road toward the north', 'University Hospital access'],
    stepsPt: [
      ['Saia do Centro de Cultura e Eventos pelo acesso principal.', 'Use a referência da via interna à frente.'],
      ['Siga em direção ao setor norte do campus.', 'O trecho é mais longo, planeje pausas se necessário.'],
      ['Atravesse apenas nas áreas sinalizadas.', 'Há circulação de veículos em parte do percurso.'],
      ['Evite o trecho exposto em dias de chuva.', 'O piso pode ficar mais escorregadio.'],
      ['Você chegou ao Hospital Universitário.', 'Procure a entrada sinalizada do atendimento desejado.']
    ],
    stepsEn: [
      ['Leave the Culture and Events Center through the main access.', 'Use the internal road ahead as your reference.'],
      ['Continue toward the north sector of campus.', 'This segment is longer, plan pauses if needed.'],
      ['Cross only at marked areas.', 'There is vehicle circulation along part of the route.'],
      ['Avoid the exposed segment on rainy days.', 'The pavement may become more slippery.'],
      ['You have arrived at the University Hospital.', 'Look for the marked entrance for the service you need.']
    ]
  }
};

const locationTranslationsEs = {
  reitoria: { name: 'Rectoría', type: 'Unidad administrativa' },
  biblioteca: { name: 'Biblioteca Central', type: 'Biblioteca' },
  ru: { name: 'Restaurante Universitario', type: 'Alimentación' },
  hu: { name: 'Hospital Universitario', type: 'Salud' },
  ctc: { name: 'Centro de Tecnología', type: 'Centro de enseñanza' },
  cse: { name: 'Centro Socioeconómico', type: 'Centro de enseñanza' },
  cfh: { name: 'Centro de Filosofía y Ciencias Humanas', type: 'Centro de enseñanza' },
  cce: { name: 'Centro de Comunicación y Expresión', type: 'Centro de enseñanza' },
  ccb: { name: 'Centro de Ciencias Biológicas', type: 'Centro de enseñanza' },
  cfm: { name: 'Centro de Ciencias Físicas y Matemáticas', type: 'Centro de enseñanza' },
  ced: { name: 'Centro de Ciencias de la Educación', type: 'Centro de enseñanza' },
  ccj: { name: 'Centro de Ciencias Jurídicas', type: 'Centro de enseñanza' },
  ccs: { name: 'Centro de Ciencias de la Salud', type: 'Centro de enseñanza' },
  cds: { name: 'Centro de Deportes', type: 'Centro de enseñanza' },
  centro_eventos: { name: 'Centro de Cultura y Eventos', type: 'Eventos' }
};

locations.forEach(location => {
  const translatedLocation = locationTranslationsEs[location.id];
  if (translatedLocation) {
    location.nameEs = translatedLocation.name;
    location.typeEs = translatedLocation.type;
  }
});

profiles.forEach(profile => {
  const profileEs = {
    stairs: {
      title: 'Ruta con menos escaleras',
      description: 'Prioriza caminos planos, rampas y cruces más seguros.',
      note: 'La ruta fue ajustada para reducir escaleras y favorecer rampas.'
    },
    slope: {
      title: 'Ruta con menos inclinación',
      description: 'Evita tramos muy inclinados y favorece caminos más suaves.',
      note: 'La ruta prioriza tramos con menor inclinación percibida.'
    },
    rest: {
      title: 'Ruta con más puntos de descanso',
      description: 'Da preferencia a caminos con bancos, sombra y posibles pausas.',
      note: 'La ruta destaca puntos de descanso cercanos al recorrido.'
    },
    simple: {
      title: 'Ruta con instrucciones simplificadas',
      description: 'Usa frases cortas, referencias directas y menor carga cognitiva.',
      note: 'Las instrucciones fueron simplificadas para lectura rápida durante el desplazamiento.'
    },
    lowVision: {
      title: 'Ruta para baja visión',
      description: 'Refuerza contraste, referencias textuales y orientación sin depender del mapa.',
      note: 'La ruta refuerza referencias textuales y evita depender solo de elementos visuales.'
    },
    standard: {
      title: 'Ruta estándar',
      description: 'Equilibra distancia, claridad de las instrucciones y accesibilidad general.',
      note: 'La ruta estándar equilibra distancia estimada y claridad de navegación.'
    }
  }[profile.id];

  if (profileEs) {
    profile.titleEs = profileEs.title;
    profile.descriptionEs = profileEs.description;
    profile.noteEs = profileEs.note;
  }
});

Object.assign(routeTemplates['biblioteca|ru'], {
  summaryEs: 'Trayecto corto entre la Biblioteca Central y el Restaurante Universitario, con cruce señalizado y alternativa por tramo más plano.',
  landmarksEs: ['Entrada principal de la Biblioteca Central', 'Vía interna central', 'Cruce señalizado cerca del Restaurante Universitario'],
  stepsEs: [
    ['Sal de la Biblioteca Central por la entrada principal.', 'Usa la acera más ancha antes de acceder a la vía interna.'],
    ['Sigue por la vía interna hacia el Restaurante Universitario.', 'Mantente en el lado con menor inclinación.'],
    ['Cruza por el paso señalizado.', 'El cruce tiene circulación de vehículos, avanza con atención.'],
    ['Continúa por el camino con sombra parcial.', 'Hay un área de pausa cerca del acceso al restaurante.'],
    ['Llegaste al Restaurante Universitario.', 'La entrada queda justo después del tramo de mayor circulación.']
  ]
});

Object.assign(routeTemplates['reitoria|ctc'], {
  summaryEs: 'Ruta institucional entre la Rectoría y el CTC, evitando atajos con piso irregular cuando sea posible.',
  landmarksEs: ['Plaza cercana a la Rectoría', 'Vía interna hacia el sector este', 'Acceso principal al CTC'],
  stepsEs: [
    ['Sal de la Rectoría hacia la vía interna principal.', 'Prefiere el recorrido alrededor de la plaza.'],
    ['Sigue hacia el sector este del campus.', 'Evita atajos con piso visualmente irregular.'],
    ['Pasa por el tramo con sombra parcial.', 'Hay un punto de descanso antes de llegar al CTC.'],
    ['Acércate al acceso principal del Centro de Tecnología.', 'La circulación puede aumentar en los horarios de cambio de clase.'],
    ['Llegaste al Centro de Tecnología.', 'Usa la entrada principal para una orientación más clara.']
  ]
});

Object.assign(routeTemplates['cse|biblioteca'], {
  summaryEs: 'Trayecto directo entre CSE y Biblioteca Central, con referencias simples y baja distancia estimada.',
  landmarksEs: ['Salida del CSE', 'Eje de circulación central', 'Entrada lateral de la Biblioteca Central'],
  stepsEs: [
    ['Sal del CSE por la salida orientada al eje central.', 'El tramo inicial es corto y con buena visibilidad.'],
    ['Sigue en línea gradual hacia la Biblioteca Central.', 'Mantén la referencia de los edificios a la derecha.'],
    ['Continúa por el camino con sombra parcial.', 'Hay un punto de descanso en el trayecto.'],
    ['Acércate a la Biblioteca Central por el lateral.', 'La entrada principal queda justo al frente.'],
    ['Llegaste a la Biblioteca Central.', 'Confirma el acceso por la entrada señalizada.']
  ]
});

Object.assign(routeTemplates['centro_eventos|hu'], {
  summaryEs: 'Ruta más larga entre el Centro de Cultura y Eventos y el Hospital Universitario, con alertas para lluvia y circulación intensa.',
  landmarksEs: ['Centro de Cultura y Eventos', 'Vía interna hacia el norte', 'Acceso del Hospital Universitario'],
  stepsEs: [
    ['Sal del Centro de Cultura y Eventos por el acceso principal.', 'Usa como referencia la vía interna al frente.'],
    ['Sigue hacia el sector norte del campus.', 'El tramo es más largo, planifica pausas si es necesario.'],
    ['Cruza solo en las áreas señalizadas.', 'Hay circulación de vehículos en parte del recorrido.'],
    ['Evita el tramo expuesto en días de lluvia.', 'El piso puede quedar más resbaladizo.'],
    ['Llegaste al Hospital Universitario.', 'Busca la entrada señalizada del servicio que necesitas.']
  ]
});

const state = {
  lang: 'pt',
  highContrast: false,
  currentView: 'welcome',
  origin: '',
  destination: '',
  profile: '',
  route: null,
  errors: {},
  placesValidationSubmitted: false,
  currentRouteStep: 0,
  textMode: false,
  activeMarkerId: '',
  routeCompleted: false,
  placePickerTarget: 'origin',
  routeReaderAutoRead: false,
  pageReaderActive: false,
  navigationMapVisible: true
};

const viewOrder = ['welcome', 'places', 'profile', 'route', 'navigation', 'complete'];
const viewPaths = {
  welcome: 'boas-vindas',
  places: 'origem-destino',
  profile: 'perfil',
  route: 'resultado',
  navigation: 'passo-a-passo',
  complete: 'conclusao'
};
const pathViews = Object.entries(viewPaths).reduce((accumulator, [view, path]) => {
  accumulator[path] = view;
  return accumulator;
}, {});
const mapSourceUrl = 'https://ufsc.br/mapa-e-enderecos/';
const mapImageSize = { width: 1500, height: 1443 };
const metersPerMapPixel = 1.18;
const mobileMarkerSpacingMedia = '(max-width: 680px)';
const mobileMarkerSpacingDistances = [0, 26, 40, 56, 72];
const campusGeoBounds = {
  north: -27.5928,
  south: -27.6088,
  west: -48.5325,
  east: -48.5125
};
const locationCategoryOrder = ['services', 'administration', 'academic'];
const locationShortCodes = {
  reitoria: 'R',
  biblioteca: 'BU',
  ru: 'RU',
  hu: 'HU',
  ctc: 'CTC',
  cse: 'CSE',
  cfh: 'CFH',
  cce: 'CCE',
  ccb: 'CCB',
  cfm: 'CFM',
  ced: 'CED',
  ccj: 'CCJ',
  ccs: 'CCS',
  cds: 'CDS',
  centro_eventos: 'CE'
};
const routeMetricProfiles = {
  standard: { distanceMultiplier: 1, metersPerMinute: 72, extraMinutes: 0, rangeMinutes: 2 },
  stairs: { distanceMultiplier: 1.12, metersPerMinute: 56, extraMinutes: 0, rangeMinutes: 3 },
  slope: { distanceMultiplier: 1.08, metersPerMinute: 58, extraMinutes: 0, rangeMinutes: 3 },
  rest: { distanceMultiplier: 1.14, metersPerMinute: 52, extraMinutes: 2, rangeMinutes: 4 },
  simple: { distanceMultiplier: 0.98, metersPerMinute: 70, extraMinutes: 0, rangeMinutes: 2 },
  lowVision: { distanceMultiplier: 1.05, metersPerMinute: 48, extraMinutes: 1, rangeMinutes: 4 }
};

const app = document.querySelector('#app');
const stepNav = document.querySelector('#step-nav');
const topActions = document.querySelector('#top-actions');
const statusRegion = document.querySelector('#screen-reader-status');
const routeReaderStatusRegion = document.querySelector('#route-reader-status');
let mapCollisionResizeHandler = null;
let mapCollisionResizeFrame = 0;
let currentRouteUtterance = null;
let speechVoices = [];
const speechQueue = [];

function getT() {
  return translations[state.lang];
}

function tr(path) {
  return path.split('.').reduce((value, key) => value && value[key], getT());
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatTemplate(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');
}

function getLangSuffix() {
  if (state.lang === 'en') {
    return 'En';
  }

  if (state.lang === 'es') {
    return 'Es';
  }

  return 'Pt';
}

function getLocalizedField(source, field) {
  const suffix = getLangSuffix();
  return source[`${field}${suffix}`] || source[`${field}Pt`] || source[`${field}En`] || '';
}

function getLanguageFlag(value) {
  return {
    pt: 'https://flagcdn.com/w80/br.png',
    en: 'https://userway.org/blog/wp-content/themes/amix4.0/public/images/language-selector/en.jpg',
    es: 'https://userway.org/es/blog/wp-content/themes/new-amix4.0/public/images/language-selector/es.jpg'
  }[value] || '';
}

function getLanguageDisplayName(value) {
  return {
    pt: 'Português (Brasil)',
    en: 'English (USA)',
    es: 'Español (España)'
  }[value] || value;
}

function renderBrandName() {
  return `
    <span class="brand-name">
      <span class="brand-name-main">Acessibili</span><span class="brand-name-highlight">UFSC</span>
    </span>
  `;
}

function renderIcon(name) {
  const icons = {
    language: `
      <svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M3 12h18"></path>
        <path d="M12 3a14 14 0 0 1 0 18"></path>
        <path d="M12 3a14 14 0 0 0 0 18"></path>
      </svg>
    `,
    contrast: `
      <img class="ui-icon ui-icon--image" src="https://cdn-icons-png.flaticon.com/512/475/475980.png" alt="" aria-hidden="true">
    `,
    reading: `
      <svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H7a3 3 0 0 0-3 3z"></path>
        <path d="M8 7h8"></path>
        <path d="M8 11h7"></path>
        <path d="M8 15h5"></path>
      </svg>
    `,
    location: `
      <svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11z"></path>
        <circle cx="12" cy="10" r="2.4"></circle>
      </svg>
    `
  };

  return icons[name] || '';
}
function getLocation(id) {
  return locations.find(location => location.id === id);
}

function getMapPointFromGeolocation(latitude, longitude) {
  const x = ((longitude - campusGeoBounds.west) / (campusGeoBounds.east - campusGeoBounds.west)) * 100;
  const y = ((campusGeoBounds.north - latitude) / (campusGeoBounds.north - campusGeoBounds.south)) * 100;
  return { x, y };
}

function getNearestCampusLocationFromGeolocation(latitude, longitude) {
  const point = getMapPointFromGeolocation(latitude, longitude);
  return locations
    .map(location => ({
      location,
      distance: Math.hypot(location.x - point.x, location.y - point.y)
    }))
    .sort((first, second) => first.distance - second.distance)[0];
}

function getLocationName(location) {
  return getLocalizedField(location, 'name');
}

function getLocationType(location) {
  return getLocalizedField(location, 'type');
}

function getLocationShortCode(location) {
  return locationShortCodes[location.id] || getLocationName(location).slice(0, 3).toUpperCase();
}

function getLocationCategoryId(location) {
  if (location.typePt === 'Centro de ensino') {
    return 'academic';
  }

  if (['Biblioteca', 'Alimentação', 'Saúde'].includes(location.typePt)) {
    return 'services';
  }

  return 'administration';
}

function getLocationCategoryLabel(categoryId) {
  return getT().locationCategories[categoryId] || categoryId;
}

function getLocationGroups() {
  const groups = locationCategoryOrder.map(categoryId => ({
    id: categoryId,
    label: getLocationCategoryLabel(categoryId),
    locations: []
  }));

  locations.forEach(location => {
    const categoryId = getLocationCategoryId(location);
    const group = groups.find(item => item.id === categoryId);
    if (group) {
      group.locations.push(location);
    }
  });

  return groups.filter(group => group.locations.length > 0);
}

function getProfile(id) {
  return profiles.find(profile => profile.id === id);
}

function getProfileTitle(profile) {
  return getLocalizedField(profile, 'title');
}

function getProfileDescription(profile) {
  return getLocalizedField(profile, 'description');
}

function getProfileNote(profile) {
  return getLocalizedField(profile, 'note');
}

function routeMatchesSelection(route = state.route) {
  return Boolean(route && route.originId === state.origin && route.destinationId === state.destination && route.profileId === state.profile);
}

function invalidateRoute(options = {}) {
  const shouldStopSpeech = options.stopSpeech ?? Boolean(state.route);
  if (shouldStopSpeech) {
    stopSpeech();
  }

  state.route = null;
  state.currentRouteStep = 0;
  state.textMode = false;
  state.activeMarkerId = '';
  state.routeCompleted = false;
  state.navigationMapVisible = true;
}

function hasValidPlaceSelection() {
  return Boolean(getLocation(state.origin) && getLocation(state.destination) && state.origin !== state.destination);
}

function getPlaceSelectionErrors({ showRequired = false } = {}) {
  const t = getT();
  const errors = {};

  if (showRequired && !state.origin) {
    errors.origin = t.originRequired;
  }

  if (showRequired && !state.destination) {
    errors.destination = t.destinationRequired;
  }

  if (state.origin && state.destination && state.origin === state.destination) {
    errors.destination = t.samePlaceError;
  }

  return errors;
}

function applyPlaceSelectionErrors(options = {}) {
  const errors = getPlaceSelectionErrors(options);
  const nextErrors = { ...state.errors };
  delete nextErrors.origin;
  delete nextErrors.destination;
  state.errors = { ...nextErrors, ...errors };
  return errors;
}

function updatePlaceErrorDisplay() {
  const t = getT();
  const fields = [
    { key: 'origin', selectId: 'origin-select', errorId: 'origin-error' },
    { key: 'destination', selectId: 'destination-select', errorId: 'destination-error' }
  ];

  fields.forEach(({ key, selectId, errorId }) => {
    const message = state.errors[key] ? `${t.errorPrefix} ${state.errors[key]}` : '';
    const error = document.querySelector(`#${errorId}`);
    const select = document.querySelector(`#${selectId}`);
    const customButton = document.querySelector(`[data-select-id="${selectId}"] .custom-select__button`);

    if (error) {
      error.textContent = message;
    }

    if (select) {
      select.setAttribute('aria-invalid', String(Boolean(message)));
    }

    if (customButton) {
      customButton.setAttribute('aria-invalid', String(Boolean(message)));
    }
  });
}

function validatePlaceSelection({ showRequired = state.placesValidationSubmitted, announce = false } = {}) {
  const errors = applyPlaceSelectionErrors({ showRequired });
  updatePlaceErrorDisplay();

  if (announce && Object.keys(errors).length > 0) {
    const t = getT();
    setStatus(Object.values(errors).map(error => `${t.errorPrefix} ${error}`).join(' '));
  }

  return errors;
}

function hasProfileSelection() {
  return Boolean(getProfile(state.profile));
}

function ensureRouteForCurrentSelection() {
  if (!hasValidPlaceSelection() || !hasProfileSelection()) {
    return false;
  }

  if (!routeMatchesSelection()) {
    invalidateRoute();
  }

  if (!state.route) {
    state.route = buildRoute();
    state.currentRouteStep = 0;
    state.textMode = false;
    state.activeMarkerId = state.origin;
    state.routeCompleted = false;
    state.navigationMapVisible = true;
  }

  return Boolean(state.route);
}

function resolveAllowedView(requestedView) {
  const view = viewOrder.includes(requestedView) ? requestedView : 'welcome';

  if (view === 'welcome' || view === 'places') {
    return view;
  }

  if (!hasValidPlaceSelection()) {
    return 'places';
  }

  if (view === 'profile') {
    return view;
  }

  if (!hasProfileSelection()) {
    return 'profile';
  }

  if (view === 'route' || view === 'navigation') {
    return routeMatchesSelection() ? view : 'profile';
  }

  if (view === 'complete') {
    if (!routeMatchesSelection()) {
      return 'profile';
    }

    return state.routeCompleted ? 'complete' : 'navigation';
  }

  return 'welcome';
}

function isViewUnlocked(view) {
  if (view === 'welcome' || view === 'places') {
    return true;
  }

  if (view === 'profile') {
    return hasValidPlaceSelection();
  }

  if (view === 'route' || view === 'navigation') {
    return hasValidPlaceSelection() && hasProfileSelection() && routeMatchesSelection();
  }

  if (view === 'complete') {
    return hasValidPlaceSelection() && hasProfileSelection() && routeMatchesSelection() && state.routeCompleted;
  }

  return false;
}
function getHistoryViewFromUrl() {
  const path = decodeURIComponent(window.location.hash.replace(/^#/, ''));
  return pathViews[path] || 'welcome';
}

function getHistoryUrl(view) {
  const path = viewPaths[view] || viewPaths.welcome;
  return `${window.location.pathname}${window.location.search}#${path}`;
}

function syncHistoryView(view, mode = 'push') {
  if (!window.history || !window.history.pushState) {
    return;
  }

  const historyState = { view };
  const url = getHistoryUrl(view);

  if (mode === 'replace' || window.history.state?.view === view) {
    window.history.replaceState(historyState, '', url);
    return;
  }

  window.history.pushState(historyState, '', url);
}

function announceViewChange(view, blocked = false) {
  if (blocked) {
    setStatus(getT().navigationBlocked);
    return;
  }

  const index = viewOrder.indexOf(view);
  if (index >= 0) {
    setStatus(`${getT().statusStepChanged} ${getT().steps[index]}.`);
  }
}

function handleHistoryNavigation(event) {
  const requestedView = event.state?.view || getHistoryViewFromUrl();
  const allowedView = resolveAllowedView(requestedView);
  const blocked = allowedView !== requestedView;

  if (state.currentView === 'navigation' && allowedView !== 'navigation') {
    stopSpeech();
  }

  runPageTransition(() => {
    state.currentView = allowedView;
    state.errors = {};
    render(true);
  });
  announceViewChange(allowedView, blocked);

  if (blocked) {
    syncHistoryView(allowedView, 'replace');
  }
}

function initializeHistory() {
  const requestedView = getHistoryViewFromUrl();
  const allowedView = resolveAllowedView(requestedView);

  state.currentView = allowedView;
  syncHistoryView(allowedView, 'replace');
  window.addEventListener('popstate', handleHistoryNavigation);
}

function setStatus(message) {
  statusRegion.textContent = message;
}

function setRouteReaderStatus(message) {
  routeReaderStatusRegion.textContent = message;
  document.querySelectorAll('[data-route-reader-status]').forEach(status => {
    status.textContent = message;
  });
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function runPageTransition(update) {
  if (typeof document.startViewTransition !== 'function' || prefersReducedMotion()) {
    update();
    return;
  }

  document.startViewTransition(update);
}

function getCurrentLanguage() {
  if (state.lang === 'en') {
    return 'en-US';
  }

  if (state.lang === 'es') {
    return 'es-ES';
  }

  return 'pt-BR';
}

function getSpeechLanguageCandidates(language = getCurrentLanguage()) {
  const normalizedLanguage = String(language || '').toLowerCase();

  if (normalizedLanguage.startsWith('en')) {
    return ['en-US', 'en'];
  }

  if (normalizedLanguage.startsWith('es')) {
    return ['es-ES', 'es'];
  }

  return ['pt-BR', 'pt'];
}

function refreshSpeechVoices() {
  if (!('speechSynthesis' in window) || typeof window.speechSynthesis.getVoices !== 'function') {
    speechVoices = [];
    return speechVoices;
  }

  speechVoices = window.speechSynthesis.getVoices() || [];
  return speechVoices;
}

function prepareSpeechSynthesisVoices() {
  if (!('speechSynthesis' in window)) {
    return;
  }

  refreshSpeechVoices();

  if (typeof window.speechSynthesis.addEventListener === 'function') {
    window.speechSynthesis.addEventListener('voiceschanged', refreshSpeechVoices);
    return;
  }

  if ('onvoiceschanged' in window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = refreshSpeechVoices;
  }
}

function getPreferredSpeechVoice(language = getCurrentLanguage()) {
  const voices = speechVoices.length > 0 ? speechVoices : refreshSpeechVoices();
  if (!voices.length) {
    return null;
  }

  const candidates = getSpeechLanguageCandidates(language).map(candidate => candidate.toLowerCase());
  const exactVoice = voices.find(voice => candidates.includes(String(voice.lang || '').toLowerCase()));
  if (exactVoice) {
    return exactVoice;
  }

  const primaryLanguage = candidates[candidates.length - 1];
  return voices.find(voice => String(voice.lang || '').toLowerCase().startsWith(`${primaryLanguage}-`)) || null;
}

function speakText(text, options = {}) {
  if (!('speechSynthesis' in window)) {
    setRouteReaderStatus(getT().routeReaderUnsupported);
    return;
  }

  const keepPageReaderActive = Boolean(options.keepPageReaderActive);
  const shouldQueue = Boolean(options.queue);
  const content = String(text || '').trim();
  if (!content) {
    return;
  }

  if (shouldQueue && currentRouteUtterance) {
    speechQueue.push({
      text: content,
      options: { ...options, queue: true }
    });
    return;
  }

  if (!shouldQueue) {
    speechQueue.length = 0;
  }

  currentRouteUtterance = null;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(content);
  const speechLanguage = getCurrentLanguage();
  const speechVoice = getPreferredSpeechVoice(speechLanguage);
  currentRouteUtterance = utterance;
  utterance.lang = speechLanguage;
  if (speechVoice) {
    utterance.voice = speechVoice;
  }

  const finishSpeech = status => {
    if (currentRouteUtterance !== utterance) {
      return;
    }

    currentRouteUtterance = null;
    if (state.pageReaderActive && !keepPageReaderActive) {
      state.pageReaderActive = false;
      updatePageReaderButton();
    }

    const nextSpeech = speechQueue.shift();
    if (nextSpeech) {
      speakText(nextSpeech.text, nextSpeech.options);
      return;
    }

    setRouteReaderStatus(status);
  };

  utterance.onend = () => {
    finishSpeech(getT().routeReaderReady);
  };
  utterance.onerror = () => {
    speechQueue.length = 0;
    finishSpeech(getT().routeReaderStopped);
  };

  setRouteReaderStatus(getT().routeReaderReading);
  window.speechSynthesis.speak(utterance);
}

function pauseSpeech() {
  if (!('speechSynthesis' in window)) {
    setRouteReaderStatus(getT().routeReaderUnsupported);
    return;
  }

  window.speechSynthesis.pause();
  setRouteReaderStatus(getT().routeReaderPaused);
}

function resumeSpeech() {
  if (!('speechSynthesis' in window)) {
    setRouteReaderStatus(getT().routeReaderUnsupported);
    return;
  }

  window.speechSynthesis.resume();
  setRouteReaderStatus(getT().routeReaderReading);
}

function stopSpeech() {
  speechQueue.length = 0;
  currentRouteUtterance = null;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  if (state.pageReaderActive) {
    state.pageReaderActive = false;
    updatePageReaderButton();
  }
  setRouteReaderStatus(getT().routeReaderStopped);
}

function buildRouteSummarySpeechText() {
  if (!state.route) {
    return '';
  }

  const t = getT();
  const routeView = getRouteView();
  return [
    `${t.estimatedTime}: ${routeView.time}.`,
    `${t.estimatedDistance}: ${routeView.distance}.`,
    `${t.accessibilityLevel}: ${routeView.accessibility}.`,
    `${t.chosenProfile}: ${routeView.profileTitle}.`,
    `${t.profileAdjustment}: ${routeView.profileNote}.`
  ].join(' ');
}

function buildRouteAlertsSpeechText() {
  if (!state.route) {
    return '';
  }

  const t = getT();
  return state.route.alerts.map(key => {
    const meta = alertMeta[key];
    return `${getAlertLabel(meta.type)}: ${t.alerts[key]}.`;
  }).join(' ');
}

function buildRouteTextModeSpeechText() {
  if (!state.route) {
    return '';
  }

  const t = getT();
  const routeView = getRouteView();
  return [
    `${t.summaryOrigin}: ${getLocationName(routeView.origin)}.`,
    `${t.summaryDestination}: ${getLocationName(routeView.destination)}.`,
    `${t.estimatedDistance}: ${routeView.distance}.`,
    `${t.estimatedTime}: ${routeView.time}.`,
    buildAllStepsSpeechText(),
    buildRouteAlertsSpeechText(),
    `${t.landmarksTitle}: ${routeView.landmarks.join('. ')}.`
  ].filter(Boolean).join(' ');
}

function speakTextIfPageReaderActive(text, options = {}) {
  if (!state.pageReaderActive) {
    return;
  }

  speakText(text, {
    ...options,
    keepPageReaderActive: true,
    queue: options.queue ?? true
  });
}

function buildLocationSpeechText(location) {
  if (!location) {
    return '';
  }

  return `${getLocationName(location)}. ${getLocationType(location)}.`;
}

function speakLocationIfPageReaderActive(location, force = false) {
  if ((!state.pageReaderActive && !force) || !location) {
    return;
  }

  if (force && !state.pageReaderActive) {
    state.pageReaderActive = true;
    updatePageReaderButton();
  }

  speakText(buildLocationSpeechText(location), { keepPageReaderActive: true });
}

function getControlSpeechName(control) {
  const ariaLabel = control.getAttribute('aria-label');
  const text = ariaLabel || control.innerText || control.textContent || '';
  return text.replace(/\s+/g, ' ').trim();
}

function buildControlSpeechText(control) {
  const name = getControlSpeechName(control);
  if (!name) {
    return '';
  }

  const t = getT();
  const prefix = control.matches('a') ? t.linkSpeechPrefix : t.buttonSpeechPrefix;
  const context = control.dataset.readerContext || '';
  return [`${prefix}: ${name}.`, context].filter(Boolean).join(' ');
}

function shouldSkipPageReaderControlSpeech(control) {
  return control.id === 'page-reader-toggle'
    || control.matches('.place-picker-marker, .map-marker, [data-route-reader-action]');
}

function handlePageReaderControlClick(event) {
  if (!state.pageReaderActive) {
    return;
  }

  const control = event.target.closest('button, a.button, summary');
  if (!control || shouldSkipPageReaderControlSpeech(control)) {
    return;
  }

  const speechText = buildControlSpeechText(control);
  if (speechText) {
    speakText(speechText, { keepPageReaderActive: true });
  }
}

function setupPageReaderControlNarration() {
  document.addEventListener('click', handlePageReaderControlClick, true);
}

function buildPageReaderSpeechText() {
  const currentStepName = getT().steps[viewOrder.indexOf(state.currentView)] || '';
  const appText = app.innerText
    .replace(/\s+/g, ' ')
    .trim();

  return [currentStepName, appText].filter(Boolean).join('. ');
}

function updatePageReaderButton() {
  const button = document.querySelector('#page-reader-toggle');
  if (!button) {
    return;
  }

  button.classList.toggle('is-active', state.pageReaderActive);
  button.setAttribute('aria-pressed', String(state.pageReaderActive));
}

function buildCurrentStepSpeechText() {
  if (!state.route) {
    return '';
  }

  const t = getT();
  const routeView = getRouteView();
  const step = routeView.steps[state.currentRouteStep];
  const total = routeView.steps.length;
  const current = state.currentRouteStep + 1;
  return `${formatTemplate(t.progressText, { current, total })}. ${step.text} ${step.access}`;
}

function buildAllStepsSpeechText() {
  if (!state.route) {
    return '';
  }

  const t = getT();
  const routeView = getRouteView();
  const total = routeView.steps.length;
  return routeView.steps.map((step, index) => {
    const current = index + 1;
    return `${formatTemplate(t.progressText, { current, total })}. ${step.text} ${step.access}`;
  }).join(' ');
}

function renderRouteReaderControls(context) {
  const t = getT();
  const isNavigation = context === 'navigation';
  const playbackControls = `
    <button class="route-reader__button route-reader__button--icon" type="button" data-route-reader-action="pause" aria-label="${escapeHtml(t.routeReaderPause)}" title="${escapeHtml(t.routeReaderPause)}">⏸</button>
    <button class="route-reader__button route-reader__button--icon" type="button" data-route-reader-action="resume" aria-label="${escapeHtml(t.routeReaderResume)}" title="${escapeHtml(t.routeReaderResume)}">▶</button>
    <button class="route-reader__button route-reader__button--icon" type="button" data-route-reader-action="stop" aria-label="${escapeHtml(t.routeReaderStop)}" title="${escapeHtml(t.routeReaderStop)}">■</button>
  `;

  return `
    <section class="route-reader" aria-labelledby="route-reader-title-${escapeHtml(context)}">
      <h4 class="route-reader__title" id="route-reader-title-${escapeHtml(context)}">${escapeHtml(t.routeReaderTitle)}</h4>
      <div class="route-reader__actions">
        ${isNavigation
          ? `
            <button class="route-reader__button" type="button" data-route-reader-action="current-step">${escapeHtml(t.routeReaderReadCurrentStep)}</button>
            <button class="route-reader__button" type="button" data-route-reader-action="all-steps">${escapeHtml(t.routeReaderReadAllSteps)}</button>
          `
          : `
            <button class="route-reader__button" type="button" data-route-reader-action="summary">${escapeHtml(t.routeReaderReadSummary)}</button>
            <button class="route-reader__button" type="button" data-route-reader-action="alerts">${escapeHtml(t.routeReaderReadAlerts)}</button>
            <button class="route-reader__button" type="button" data-route-reader-action="text-mode">${escapeHtml(t.routeReaderReadTextMode)}</button>
          `}
        ${playbackControls}
      </div>
      ${isNavigation
        ? `
          <label class="route-reader__auto">
            <input type="checkbox" id="route-reader-auto" ${state.routeReaderAutoRead ? ' checked' : ''}>
            <span>${escapeHtml(t.routeReaderAuto)}</span>
          </label>
        `
        : ''}
      <p class="route-reader__status" data-route-reader-status aria-live="polite" aria-atomic="true">${escapeHtml(t.routeReaderReady)}</p>
    </section>
  `;
}

function setupRouteReaderControls() {
  document.querySelectorAll('[data-route-reader-action]').forEach(button => {
    button.addEventListener('click', () => {
      const action = button.dataset.routeReaderAction;

      if (action === 'summary') speakText(buildRouteSummarySpeechText());
      if (action === 'alerts') speakText(buildRouteAlertsSpeechText());
      if (action === 'text-mode') speakText(buildRouteTextModeSpeechText());
      if (action === 'current-step') speakText(buildCurrentStepSpeechText());
      if (action === 'all-steps') speakText(buildAllStepsSpeechText());
      if (action === 'pause') pauseSpeech();
      if (action === 'resume') resumeSpeech();
      if (action === 'stop') stopSpeech();
    });
  });

  const autoReader = document.querySelector('#route-reader-auto');
  if (autoReader) {
    autoReader.addEventListener('change', event => {
      state.routeReaderAutoRead = event.target.checked;
      setRouteReaderStatus(getT().routeReaderReady);
    });
  }
}

function setView(view, options = {}) {
  const allowedView = resolveAllowedView(view);
  const blocked = allowedView !== view;
  const previousView = state.currentView;

  if (previousView === 'navigation' && allowedView !== 'navigation') {
    stopSpeech();
  }

  runPageTransition(() => {
    state.currentView = allowedView;
    state.errors = {};
    render(Boolean(options.focus));
  });

  if (options.history !== false) {
    syncHistoryView(allowedView, options.historyMode || 'push');
  }

  announceViewChange(allowedView, blocked);
}
function render(shouldFocus = false) {
  const t = getT();
  document.documentElement.lang = getCurrentLanguage();
  document.title = `${t.appTitle} | ${t.appSubtitle}`;
  document.body.classList.toggle('high-contrast', state.highContrast);

  document.querySelector('[data-i18n="skipLink"]').textContent = t.skipLink;
  document.querySelector('#brand-kicker').textContent = t.appKicker;
  document.querySelector('#brand-title').setAttribute('aria-label', t.appTitle);
  document.querySelector('#brand-title').innerHTML = renderBrandName();
  document.querySelector('#brand-subtitle').textContent = '';
  document.querySelector('#brand-subtitle').hidden = true;

  renderTopActions();
  renderStepNav();

  if (state.currentView === 'welcome') {
    renderWelcome();
  }

  if (state.currentView === 'places') {
    renderPlaces();
  }

  if (state.currentView === 'profile') {
    renderProfile();
  }

  if (state.currentView === 'route') {
    renderRoute();
  }

  if (state.currentView === 'navigation') {
    renderNavigation();
  }

  if (state.currentView === 'complete') {
    renderComplete();
  }

  if (shouldFocus) {
    const focusTarget = document.querySelector('[data-focus-target]');
    if (focusTarget) {
      focusTarget.focus({ preventScroll: false });
    }
  }
}

function renderTopActions() {
  const t = getT();
  topActions.innerHTML = `
    <div class="control-group">
      <label class="sr-only" for="language-select">${escapeHtml(t.languageLabel)}</label>
      <select class="select" id="language-select" aria-label="${escapeHtml(t.languageLabel)}">
        <option value="pt"${state.lang === 'pt' ? ' selected' : ''}>${escapeHtml(t.languagePt)}</option>
        <option value="en"${state.lang === 'en' ? ' selected' : ''}>${escapeHtml(t.languageEn)}</option>
        <option value="es"${state.lang === 'es' ? ' selected' : ''}>${escapeHtml(t.languageEs)}</option>
      </select>
    </div>
    <button class="icon-button button-secondary" id="contrast-toggle" type="button" aria-pressed="${state.highContrast}" aria-label="${escapeHtml(state.highContrast ? t.contrastOff : t.contrastOn)}">
      ${renderIcon('contrast')}
      <span aria-hidden="true">Aa</span>
      <span>${escapeHtml(state.highContrast ? t.contrastOff : t.contrastOn)}</span>
    </button>
    <button class="icon-button button-secondary${state.pageReaderActive ? ' is-active' : ''}" id="page-reader-toggle" type="button" aria-pressed="${state.pageReaderActive}" aria-label="${escapeHtml(t.pageReaderLabel)}">
      ${renderIcon('reading')}
      <span>${escapeHtml(t.pageReaderLabel)}</span>
    </button>
  `;

  document.querySelector('#language-select').addEventListener('change', event => {
    state.lang = event.target.value;
    stopSpeech();
    render();
    const languageNames = { pt: getT().languagePt, en: getT().languageEn, es: getT().languageEs };
    setStatus(`${getT().languageLabel}: ${languageNames[state.lang]}.`);
  });
  setupCustomSelect(document.querySelector('#language-select'));

  document.querySelector('#contrast-toggle').addEventListener('click', () => {
    state.highContrast = !state.highContrast;
    render();
    setStatus(state.highContrast ? getT().contrastOn : getT().contrastOff);
  });

  document.querySelector('#page-reader-toggle').addEventListener('click', () => {
    if (state.pageReaderActive) {
      stopSpeech();
      return;
    }

    state.pageReaderActive = true;
    updatePageReaderButton();
    speakText(buildPageReaderSpeechText(), { keepPageReaderActive: true });
    setStatus(getT().pageReaderStarted);
  });
}

function renderStepNav() {
  const t = getT();
  const activeIndex = viewOrder.indexOf(state.currentView);
  stepNav.className = 'flow-stepper';
  stepNav.setAttribute('aria-label', t.stepNavLabel);
  stepNav.innerHTML = `
    <ol class="flow-stepper__list">
      ${t.steps.map((label, index) => {
        const view = viewOrder[index];
        const isCurrent = index === activeIndex;
        const isComplete = index < activeIndex;
        const isUnlocked = isViewUnlocked(view);
        const itemClasses = ['flow-stepper__item'];
        if (isComplete) {
          itemClasses.push('is-complete');
        }
        if (isCurrent) {
          itemClasses.push('is-current');
        }
        if (!isUnlocked) {
          itemClasses.push('is-locked');
        }
        const buttonAttributes = isUnlocked
          ? `data-step-view="${escapeHtml(view)}"`
          : `disabled aria-disabled="true" title="${escapeHtml(t.navigationBlocked)}"`;

        return `
          <li class="${itemClasses.join(' ')}"${isCurrent ? ' aria-current="step"' : ''}>
            <button class="flow-stepper__button" type="button" ${buttonAttributes}>
              <span class="flow-stepper__number">${index + 1}</span>
              <span class="flow-stepper__label">${escapeHtml(label)}</span>
            </button>
          </li>
        `;
      }).join('')}
    </ol>
  `;

  stepNav.querySelectorAll('[data-step-view]').forEach(button => {
    button.addEventListener('click', () => {
      setView(button.dataset.stepView, { focus: true });
    });
  });
}

function renderWelcome() {
  const t = getT();
  app.innerHTML = `
    <section class="panel hero-panel welcome-panel" aria-labelledby="welcome-title">
      <div class="panel-inner welcome-panel__inner">
        <div class="welcome-brand">
          <span class="hero-logo-wrap" aria-hidden="true">
            <img class="hero-logo" src="assets/logo.svg" alt="">
          </span>
          <div class="welcome-brand__copy">
            <p class="eyebrow">${escapeHtml(t.welcomeEyebrow)}</p>
            <h2 class="page-title" id="welcome-title" tabindex="-1" data-focus-target aria-label="${escapeHtml(t.welcomeTitle)}">${renderBrandName()}</h2>
          </div>
        </div>
        <p class="section-lead welcome-panel__lead">${escapeHtml(t.welcomeIntro)}</p>

        <div class="action-row action-row--hero">
          <button class="button button-primary button-hero" type="button" id="start-planning">${escapeHtml(t.welcomeAction)}</button>
        </div>

        <ol class="welcome-flow" aria-label="${escapeHtml(t.welcomeFeatureTitle)}">
          ${t.welcomeFeatures.map((feature, index) => `
            <li class="welcome-flow__item">
              <span class="welcome-flow__number ${index === 1 ? 'is-accent' : ''}" aria-hidden="true">${index + 1}</span>
              <strong class="welcome-flow__title">${escapeHtml(feature[0])}</strong>
              <span class="welcome-flow__text">${escapeHtml(feature[1])}</span>
            </li>
          `).join('')}
        </ol>
      </div>
    </section>
  `;

  document.querySelector('#start-planning').addEventListener('click', () => {
    setView('places', { focus: true });
  });
}

function setLocationAssistStatus(message, options = {}) {
  const status = document.querySelector('#location-assist-status');
  if (status) {
    status.textContent = message;
  }

  setStatus(message);
  if (options.speak) {
    speakTextIfPageReaderActive(message);
  }
}

function getLocationErrorMessage(error) {
  const t = getT();

  if (error && error.code === error.PERMISSION_DENIED) {
    return t.locationPermissionDenied;
  }

  return t.locationUnavailable;
}

function useCurrentLocationAsOrigin() {
  const t = getT();
  const button = document.querySelector('#use-current-location');

  if (!('geolocation' in navigator)) {
    setLocationAssistStatus(t.locationUnsupported, { speak: true });
    return;
  }

  if (button) {
    button.disabled = true;
  }

  setLocationAssistStatus(t.locationDetecting, { speak: true });
  navigator.geolocation.getCurrentPosition(
    position => {
      const nearest = getNearestCampusLocationFromGeolocation(position.coords.latitude, position.coords.longitude);

      if (!nearest || !nearest.location) {
        setLocationAssistStatus(t.locationUnavailable, { speak: true });
        if (button) button.disabled = false;
        return;
      }

      state.origin = nearest.location.id;
      state.placePickerTarget = 'origin';

      if (!routeMatchesSelection()) {
        invalidateRoute();
      }

      const locationName = getLocationName(nearest.location);
      const messageKey = nearest.distance > 18 ? 'locationDetectedApprox' : 'locationDetected';
      syncPlacePickerSelection();
      renderStepNav();
      setLocationAssistStatus(formatTemplate(t[messageKey], { location: locationName }), { speak: true });
      validatePlaceSelection({ announce: true });

      if (button) {
        button.disabled = false;
      }
    },
    error => {
      setLocationAssistStatus(getLocationErrorMessage(error), { speak: true });
      if (button) {
        button.disabled = false;
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000
    }
  );
}

function renderPlaces() {
  const t = getT();
  applyPlaceSelectionErrors({ showRequired: state.placesValidationSubmitted });
  const originError = state.errors.origin ? `${t.errorPrefix} ${state.errors.origin}` : '';
  const destinationError = state.errors.destination ? `${t.errorPrefix} ${state.errors.destination}` : '';

  app.innerHTML = `
    <section class="panel" aria-labelledby="places-title">
      <div class="panel-inner">
        <h2 class="section-title" id="places-title" tabindex="-1" data-focus-target>${escapeHtml(t.placesTitle)}</h2>
        <p class="section-lead">${escapeHtml(t.placesLead)}</p>
        <form id="places-form" novalidate>
          <section class="location-assist" aria-labelledby="location-assist-title">
            <div>
              <h3 class="location-assist__title" id="location-assist-title">${escapeHtml(t.locationAssistTitle)}</h3>
              <p class="location-assist__text">${escapeHtml(t.locationAssistText)}</p>
            </div>
            <button class="button button-secondary location-assist__button" type="button" id="use-current-location" data-reader-context="${escapeHtml(`${t.locationAssistTitle}. ${t.locationAssistText}`)}">
              ${renderIcon('location')}
              <span>${escapeHtml(t.locationAssistButton)}</span>
            </button>
            <p class="location-assist__status" id="location-assist-status" aria-live="polite" aria-atomic="true"></p>
          </section>

          <div class="form-grid">
            <div class="field">
              <label for="origin-select">${escapeHtml(t.originLabel)}</label>
              <select class="select" id="origin-select" aria-describedby="origin-help origin-error" aria-invalid="${Boolean(originError)}">
                ${renderLocationOptions(state.origin)}
              </select>
              <span class="field-help" id="origin-help">${escapeHtml(t.originHelp)}</span>
              <span class="field-error" id="origin-error" aria-live="polite">${escapeHtml(originError)}</span>
            </div>

            <div class="field">
              <label for="destination-select">${escapeHtml(t.destinationLabel)}</label>
              <select class="select" id="destination-select" aria-describedby="destination-help destination-error" aria-invalid="${Boolean(destinationError)}">
                ${renderLocationOptions(state.destination)}
              </select>
              <span class="field-help" id="destination-help">${escapeHtml(t.destinationHelp)}</span>
              <span class="field-error" id="destination-error" aria-live="polite">${escapeHtml(destinationError)}</span>
            </div>
          </div>

          ${renderPlaceMapPicker()}

          <div class="action-row">
            <button class="button button-ghost" type="button" id="places-back">${escapeHtml(t.backButton)}</button>
            <button class="button button-primary" type="submit">${escapeHtml(t.continueButton)}</button>
          </div>
        </form>
      </div>
    </section>
  `;

  document.querySelector('#origin-select').addEventListener('change', event => {
    state.origin = event.target.value;
    if (!routeMatchesSelection()) {
      invalidateRoute();
    }
    syncPlacePickerSelection();
    validatePlaceSelection({ announce: true });
    renderStepNav();
  });

  document.querySelector('#destination-select').addEventListener('change', event => {
    state.destination = event.target.value;
    if (!routeMatchesSelection()) {
      invalidateRoute();
    }
    syncPlacePickerSelection();
    validatePlaceSelection({ announce: true });
    renderStepNav();
  });
  setupCustomSelect(document.querySelector('#origin-select'));
  setupCustomSelect(document.querySelector('#destination-select'));
  updatePlaceErrorDisplay();

  bindPlaceMapPicker();

  document.querySelector('#use-current-location').addEventListener('click', useCurrentLocationAsOrigin);

  document.querySelector('#places-back').addEventListener('click', () => {
    setView('welcome', { focus: true });
  });

  document.querySelector('#places-form').addEventListener('submit', event => {
    event.preventDefault();
    state.origin = document.querySelector('#origin-select').value;
    state.destination = document.querySelector('#destination-select').value;

    state.placesValidationSubmitted = true;
    const errors = validatePlaceSelection({ showRequired: true });

    if (Object.keys(errors).length > 0) {
      render(true);
      setStatus(Object.values(errors).map(error => `${t.errorPrefix} ${error}`).join(' '));
      return;
    }


    if (!routeMatchesSelection()) {
      invalidateRoute();
    }

    setView('profile', { focus: true });
  });
}

function renderLocationOptions(selectedValue) {
  const t = getT();
  return `
    <option value="" disabled hidden${selectedValue ? "" : " selected"}>${escapeHtml(t.selectPlaceholder)}</option>
    ${getLocationGroups().map(group => `
      <optgroup label="${escapeHtml(group.label)}">
        ${group.locations.map(location => `
          <option value="${escapeHtml(location.id)}"${selectedValue === location.id ? ' selected' : ''}>
            ${escapeHtml(getLocationShortCode(location))} - ${escapeHtml(getLocationName(location))}
          </option>
        `).join('')}
      </optgroup>
    `).join('')}
  `;
}

function setupCustomSelect(select) {
  if (!select || select.dataset.customSelectReady === 'true') {
    return;
  }

  select.dataset.customSelectReady = 'true';
  select.classList.add('select--native');

  const wrapper = document.createElement('div');
  wrapper.className = 'custom-select';
  wrapper.dataset.selectId = select.id;

  const button = document.createElement('button');
  button.className = 'custom-select__button';
  button.type = 'button';
  button.id = `${select.id}-custom-button`;
  button.setAttribute('aria-haspopup', 'listbox');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-invalid', select.getAttribute('aria-invalid') || 'false');
  if (select.getAttribute('aria-describedby')) {
    button.setAttribute('aria-describedby', select.getAttribute('aria-describedby'));
  }

  const value = document.createElement('span');
  value.className = 'custom-select__value';

  const icon = document.createElement('span');
  icon.className = 'custom-select__icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = '⌄';

  const list = document.createElement('div');
  list.className = 'custom-select__list';
  list.id = `${select.id}-custom-list`;
  list.setAttribute('role', 'listbox');
  list.setAttribute('aria-labelledby', button.id);
  list.hidden = true;

  button.append(value, icon);
  wrapper.append(button, list);
  select.insertAdjacentElement('afterend', wrapper);

  const close = () => {
    wrapper.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    list.hidden = true;
  };

  const open = () => {
    document.querySelectorAll('.custom-select.is-open').forEach(item => {
      if (item !== wrapper) {
        item.querySelector('.custom-select__button')?.setAttribute('aria-expanded', 'false');
        item.querySelector('.custom-select__list')?.setAttribute('hidden', '');
        item.classList.remove('is-open');
      }
    });

    wrapper.classList.add('is-open');
    button.setAttribute('aria-expanded', 'true');
    list.hidden = false;
  };

  const refresh = () => {
    const selectedOption = select.selectedOptions[0] || select.options[0];
    value.innerHTML = '';
    if (selectedOption && select.id === 'language-select') {
      const flag = document.createElement('img');
      flag.className = 'custom-select__flag';
      flag.src = getLanguageFlag(selectedOption.value);
      flag.alt = '';
      flag.setAttribute('aria-hidden', 'true');
      value.append(flag);
    }
    value.classList.toggle('is-placeholder', Boolean(selectedOption && selectedOption.value === ''));
    const valueText = document.createElement('span');
    valueText.textContent = selectedOption ? selectedOption.textContent.trim() : '';
    value.append(valueText);
    list.innerHTML = '';

    [...select.children].forEach(child => {
      if (child.tagName === 'OPTGROUP') {
        const group = document.createElement('div');
        group.className = 'custom-select__group';
        group.textContent = child.label;
        list.append(group);

        [...child.children].forEach(option => {
          const item = renderCustomSelectOption(select, option, close);
          if (item) {
            list.append(item);
          }
        });
        return;
      }

      if (child.tagName === 'OPTION') {
        const item = renderCustomSelectOption(select, child, close);
        if (item) {
          list.append(item);
        }
      }
    });
  };

  button.addEventListener('click', () => {
    if (wrapper.classList.contains('is-open')) {
      close();
      return;
    }

    open();
  });

  button.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open();
      list.querySelector('[role="option"]')?.focus();
    }

    if (event.key === 'Escape') {
      close();
    }
  });

  select.addEventListener('change', refresh);
  select.addEventListener('customselectrefresh', refresh);
  document.addEventListener('click', event => {
    if (!wrapper.contains(event.target)) {
      close();
    }
  });

  refresh();
}

function renderCustomSelectOption(select, option, close) {
  if (option.disabled || option.hidden) {
    return null;
  }

  const item = document.createElement('button');
  item.className = 'custom-select__option';
  item.type = 'button';
  item.setAttribute('role', 'option');
  item.dataset.value = option.value;
  if (select.id === 'language-select') {
    const flag = document.createElement('img');
    flag.className = 'custom-select__flag';
    flag.src = getLanguageFlag(option.value);
    flag.alt = '';
    flag.setAttribute('aria-hidden', 'true');
    item.append(flag);
  }

  const label = document.createElement('span');
  label.className = 'custom-select__option-label';
  label.textContent = select.id === 'language-select'
    ? getLanguageDisplayName(option.value)
    : option.textContent.trim();
  item.append(label);

  if (select.id === 'language-select' && option.selected) {
    const check = document.createElement('span');
    check.className = 'custom-select__check';
    check.setAttribute('aria-hidden', 'true');
    check.textContent = '✓';
    item.append(check);
  }

  if (option.selected) {
    item.classList.add('is-selected');
    item.setAttribute('aria-selected', 'true');
  } else {
    item.setAttribute('aria-selected', 'false');
  }

  item.addEventListener('click', () => {
    select.value = option.value;
    select.dispatchEvent(new Event('change', { bubbles: true }));
    close();
  });

  item.addEventListener('keydown', event => {
    const options = [...item.parentElement.querySelectorAll('[role="option"]')];
    const currentIndex = options.indexOf(item);

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      options[Math.min(currentIndex + 1, options.length - 1)]?.focus();
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      options[Math.max(currentIndex - 1, 0)]?.focus();
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      item.click();
    }

    if (event.key === 'Escape') {
      close();
    }
  });

  return item;
}

function renderPlaceMapPicker() {
  const t = getT();
  const originName = state.origin ? getLocationName(getLocation(state.origin)) : t.mapPickerEmpty;
  const destinationName = state.destination ? getLocationName(getLocation(state.destination)) : t.mapPickerEmpty;
  const promptState = getPlacePickerPromptState();
  const promptText = getPlacePickerPromptText();

  return `
    <details class="place-map-disclosure">
      <summary>
        <span class="place-map-summary-icon" aria-hidden="true"></span>
        <span class="place-map-summary-label place-map-summary-label--closed">${escapeHtml(t.mapPickerSummary)}</span>
        <span class="place-map-summary-label place-map-summary-label--open">${escapeHtml(t.mapPickerCollapse)}</span>
      </summary>
      <section class="place-map-picker" aria-labelledby="place-map-title">
        <h3 class="item-title place-map-title" id="place-map-title">${escapeHtml(t.mapPickerTitle)}</h3>
        <p class="place-map-guidance place-map-guidance--${escapeHtml(promptState)}" id="place-map-guidance" aria-live="polite" aria-atomic="true">${escapeHtml(promptText)}</p>
        <p class="map-scroll-hint">${escapeHtml(t.mapScrollHint)}</p>
        <div class="place-map-scroll" tabindex="0" aria-label="${escapeHtml(t.mapScrollLabel)}">
          <div class="place-map-wrap">
            <img class="map-image" src="assets/mapa_ufsc.jpg" alt="${escapeHtml(t.mapAlt)}">
            <div class="place-picker-layer" aria-label="${escapeHtml(t.placesAria)}">
              ${locations.map(location => renderPlacePickerMarker(location)).join('')}
            </div>
          </div>
        </div>
        <div class="place-map-actions">
          <a class="button button-secondary place-map-source-link" href="${escapeHtml(mapSourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.mapSourceAction)}</a>
        </div>
        <p class="place-map-status" id="place-map-status">${escapeHtml(formatTemplate(t.mapPickerStatus, { origin: originName, destination: destinationName }))}</p>
      </section>
    </details>
  `;
}

function getPlacePickerPromptState() {
  if (!state.origin) {
    return 'origin';
  }

  if (!state.destination) {
    return 'destination';
  }

  return 'complete';
}

function getPlacePickerPromptText() {
  const t = getT();
  const promptState = getPlacePickerPromptState();

  if (promptState === 'origin') {
    return t.mapPickerPromptOrigin;
  }

  if (promptState === 'destination') {
    return t.mapPickerPromptDestination;
  }

  return t.mapPickerPromptComplete;
}

function getAutomaticPlacePickerTarget() {
  return state.origin ? 'destination' : 'origin';
}

function renderPlacePickerMarker(location) {
  const isOrigin = location.id === state.origin;
  const isDestination = location.id === state.destination;
  const className = `place-picker-marker${isOrigin ? ' selected-origin' : ''}${isDestination ? ' selected-destination' : ''}`;
  const ariaLabel = `${getLocationShortCode(location)} - ${getLocationName(location)}, ${getLocationType(location)}.`;

  return `
    <button class="${className}" type="button" data-place-id="${escapeHtml(location.id)}" style="left: ${location.x}%; top: ${location.y}%;" aria-label="${escapeHtml(ariaLabel)}">
      <span aria-hidden="true">${escapeHtml(getLocationShortCode(location))}</span>
    </button>
  `;
}

function bindPlaceMapPicker() {
  document.querySelectorAll('[data-place-id]').forEach(button => {
    button.addEventListener('click', () => {
      const t = getT();
      const selectedId = button.dataset.placeId;
      const shouldSpeakLocation = state.pageReaderActive;
      const selectedLocation = getLocation(selectedId);
      let statusMessage = '';

      if (selectedId === state.origin) {
        state.origin = '';
        state.placePickerTarget = 'origin';
        statusMessage = t.mapPickerOriginCleared;
      } else if (selectedId === state.destination) {
        state.destination = '';
        state.placePickerTarget = state.origin ? 'destination' : 'origin';
        statusMessage = t.mapPickerDestinationCleared;
      } else {
        const target = getAutomaticPlacePickerTarget();
        state.placePickerTarget = target;
        state[target] = selectedId;
        statusMessage = `${target === 'origin' ? t.mapPickerOriginSelected : t.mapPickerDestinationSelected} ${getLocationName(selectedLocation)}.`;
      }

      if (!routeMatchesSelection()) {
        invalidateRoute();
      }

      state.placePickerTarget = getAutomaticPlacePickerTarget();
      syncPlacePickerSelection();
      const errors = validatePlaceSelection({ announce: false });
      renderStepNav();
      schedulePlaceMapLayout();

      speakLocationIfPageReaderActive(selectedLocation, shouldSpeakLocation);

      if (Object.keys(errors).length > 0) {
        setStatus(Object.values(errors).map(error => `${t.errorPrefix} ${error}`).join(' '));
        return;
      }

      setStatus(`${statusMessage} ${getPlacePickerPromptText()}`.trim());
    });
  });

  schedulePlaceMapLayout();
}


function syncPlacePickerSelection() {
  const t = getT();
  const originSelect = document.querySelector('#origin-select');
  const destinationSelect = document.querySelector('#destination-select');
  const originName = state.origin ? getLocationName(getLocation(state.origin)) : t.mapPickerEmpty;
  const destinationName = state.destination ? getLocationName(getLocation(state.destination)) : t.mapPickerEmpty;

  if (originSelect) {
    originSelect.value = state.origin;
    originSelect.dispatchEvent(new Event('customselectrefresh'));
  }

  if (destinationSelect) {
    destinationSelect.value = state.destination;
    destinationSelect.dispatchEvent(new Event('customselectrefresh'));
  }

  document.querySelectorAll('[data-place-id]').forEach(marker => {
    marker.classList.toggle('selected-origin', marker.dataset.placeId === state.origin);
    marker.classList.toggle('selected-destination', marker.dataset.placeId === state.destination);
  });

  const guidance = document.querySelector('#place-map-guidance');
  if (guidance) {
    const promptState = getPlacePickerPromptState();
    guidance.className = `place-map-guidance place-map-guidance--${promptState}`;
    guidance.textContent = getPlacePickerPromptText();
  }

  const status = document.querySelector('#place-map-status');
  if (status) {
    status.textContent = formatTemplate(t.mapPickerStatus, { origin: originName, destination: destinationName });
  }
}

function renderProfile() {
  const t = getT();
  const profileError = state.errors.profile ? `${t.errorPrefix} ${state.errors.profile}` : '';

  app.innerHTML = `
    <section class="panel" aria-labelledby="profile-title">
      <div class="panel-inner">
        <h2 class="section-title" id="profile-title" tabindex="-1" data-focus-target>${escapeHtml(t.profileTitle)}</h2>
        <p class="section-lead">${escapeHtml(t.profileLead)}</p>
        <form id="profile-form" novalidate>
          <fieldset>
            <legend class="legend">${escapeHtml(t.profileLegend)}</legend>
            <div class="profile-grid">
              ${profiles.map(profile => `
                <label class="profile-option" for="profile-${escapeHtml(profile.id)}">
                  <input id="profile-${escapeHtml(profile.id)}" name="profile" type="radio" value="${escapeHtml(profile.id)}"${state.profile === profile.id ? ' checked' : ''} aria-describedby="profile-desc-${escapeHtml(profile.id)}">
                  <span>
                    <span class="profile-title">${escapeHtml(getProfileTitle(profile))}</span>
                    <span class="profile-description" id="profile-desc-${escapeHtml(profile.id)}">${escapeHtml(getProfileDescription(profile))}</span>
                  </span>
                </label>
              `).join('')}
            </div>
          </fieldset>

          <p class="form-error" id="profile-error" aria-live="polite">${escapeHtml(profileError)}</p>

          <div class="action-row">
            <button class="button button-ghost" type="button" id="profile-back">${escapeHtml(t.backButton)}</button>
            <button class="button button-primary" type="submit">${escapeHtml(t.calculateRoute)}</button>
          </div>
        </form>
      </div>
    </section>
  `;

  document.querySelectorAll('input[name="profile"]').forEach(input => {
    input.addEventListener('change', event => {
      state.profile = event.target.value;
      if (!routeMatchesSelection()) {
        invalidateRoute();
      }
      renderStepNav();
    });
  });

  document.querySelector('#profile-back').addEventListener('click', () => {
    setView('places', { focus: true });
  });

  document.querySelector('#profile-form').addEventListener('submit', event => {
    event.preventDefault();
    const selectedProfile = document.querySelector('input[name="profile"]:checked');
    state.profile = selectedProfile ? selectedProfile.value : '';

    if (!state.profile) {
      state.errors = { profile: t.profileRequired };
      render(true);
      setStatus(`${t.errorPrefix} ${t.profileRequired}`);
      return;
    }

    state.route = buildRoute();
    state.routeCompleted = false;
    state.currentRouteStep = 0;
    state.textMode = false;
    state.activeMarkerId = state.origin;
    state.navigationMapVisible = true;
    setView('route', { focus: true });
    setStatus(t.routeCalculated);
  });
}

function buildRoute() {
  const origin = getLocation(state.origin);
  const destination = getLocation(state.destination);
  const template = routeTemplates[`${state.origin}|${state.destination}`];

  if (template) {
    return normalizeTemplateRoute(template, origin, destination, state.profile);
  }

  return buildFallbackRoute(origin, destination);
}

function normalizeTemplateRoute(template, origin, destination, profileId = state.profile) {
  const path = buildProfilePath(template.path, origin, destination, profileId);
  const metrics = buildRouteMetrics(path, profileId);

  return {
    namePt: translations.pt.routeSpecificNames[template.nameKey],
    nameEn: translations.en.routeSpecificNames[template.nameKey],
    nameEs: translations.es.routeSpecificNames[template.nameKey],
    originId: origin.id,
    destinationId: destination.id,
    profileId,
    distance: metrics.distancePt,
    distancePt: metrics.distancePt,
    distanceEn: metrics.distanceEn,
    distanceEs: metrics.distanceEs,
    timePt: metrics.timePt,
    timeEn: metrics.timeEn,
    timeEs: metrics.timeEs,
    accessibility: getProfileAccessibility(template.accessibility, profileId),
    summaryPt: template.summaryPt,
    summaryEn: template.summaryEn,
    summaryEs: template.summaryEs,
    path,
    alerts: buildProfileAlerts(template.alerts, profileId),
    landmarksPt: template.landmarksPt,
    landmarksEn: template.landmarksEn,
    landmarksEs: template.landmarksEs,
    steps: template.stepsPt.map((step, index) => ({
      textPt: step[0],
      accessPt: step[1],
      textEn: template.stepsEn[index][0],
      accessEn: template.stepsEn[index][1],
      textEs: template.stepsEs[index][0],
      accessEs: template.stepsEs[index][1]
    }))
  };
}
function buildFallbackRoute(origin, destination) {
  const midpoint = getPointBetween(origin, destination, 0.5);
  const basePath = [
    { x: origin.x, y: origin.y },
    midpoint,
    { x: destination.x, y: destination.y }
  ];
  const path = buildProfilePath(basePath, origin, destination, state.profile);
  const metrics = buildRouteMetrics(path, state.profile);
  const baseDistanceMeters = estimatePathMeters(basePath);
  const originNameEs = origin.nameEs || origin.namePt;
  const destinationNameEs = destination.nameEs || destination.namePt;

  return {
    namePt: translations.pt.defaultRouteName,
    nameEn: translations.en.defaultRouteName,
    nameEs: translations.es.defaultRouteName,
    originId: origin.id,
    destinationId: destination.id,
    profileId: state.profile,
    distance: metrics.distancePt,
    distancePt: metrics.distancePt,
    distanceEn: metrics.distanceEn,
    distanceEs: metrics.distanceEs,
    timePt: metrics.timePt,
    timeEn: metrics.timeEn,
    timeEs: metrics.timeEs,
    accessibility: getProfileAccessibility(baseDistanceMeters > 650 ? 'routeAccessibleModerate' : 'routeAccessibleMedium', state.profile),
    summaryPt: translations.pt.defaultRouteSummary,
    summaryEn: translations.en.defaultRouteSummary,
    summaryEs: translations.es.defaultRouteSummary,
    path,
    alerts: buildProfileAlerts(['partialShade', 'unevenFloor', 'textReference'], state.profile),
    landmarksPt: [origin.namePt, 'Via interna do campus', destination.namePt],
    landmarksEn: [origin.nameEn, 'Campus internal road', destination.nameEn],
    landmarksEs: [originNameEs, 'Vía interna del campus', destinationNameEs],
    steps: [
      {
        textPt: `Saia de ${origin.namePt} pelo acesso mais visível.`,
        accessPt: 'Confirme a sinalização local antes de iniciar.',
        textEn: `Leave ${origin.nameEn} through the most visible access point.`,
        accessEn: 'Check local signage before starting.',
        textEs: `Sal de ${originNameEs} por el acceso más visible.`,
        accessEs: 'Confirma la señalización local antes de iniciar.'
      },
      {
        textPt: 'Siga pela via interna indicada no mapa.',
        accessPt: 'Use o modo texto se a imagem do mapa não for suficiente.',
        textEn: 'Follow the internal road indicated on the map.',
        accessEn: 'Use text mode if the map image is not enough.',
        textEs: 'Sigue por la vía interna indicada en el mapa.',
        accessEs: 'Usa el modo texto si la imagen del mapa no es suficiente.'
      },
      {
        textPt: 'Reduza o ritmo nos trechos com maior circulação.',
        accessPt: 'O percurso pode ter piso irregular em partes isoladas.',
        textEn: 'Slow down in areas with heavier circulation.',
        accessEn: 'The route may have uneven pavement in isolated parts.',
        textEs: 'Reduce el ritmo en los tramos con mayor circulación.',
        accessEs: 'El recorrido puede tener piso irregular en partes aisladas.'
      },
      {
        textPt: `Continue até ${destination.namePt}.`,
        accessPt: 'Procure a entrada sinalizada mais próxima.',
        textEn: `Continue until ${destination.nameEn}.`,
        accessEn: 'Look for the nearest marked entrance.',
        textEs: `Continúa hasta ${destinationNameEs}.`,
        accessEs: 'Busca la entrada señalizada más cercana.'
      }
    ]
  };
}

function buildRouteMetrics(path, profileId = 'standard') {
  const profile = routeMetricProfiles[profileId] || routeMetricProfiles.standard;
  const meters = roundToNearest(estimatePathMeters(path) * profile.distanceMultiplier, 10);
  const minimumMinutes = Math.max(2, Math.ceil(meters / profile.metersPerMinute + profile.extraMinutes));
  const maximumMinutes = minimumMinutes + profile.rangeMinutes;

  return {
    distancePt: formatDistance(meters, 'pt'),
    distanceEn: formatDistance(meters, 'en'),
    distanceEs: formatDistance(meters, 'es'),
    timePt: `${minimumMinutes} a ${maximumMinutes} min`,
    timeEn: `${minimumMinutes} to ${maximumMinutes} min`,
    timeEs: `${minimumMinutes} a ${maximumMinutes} min`
  };
}

function estimatePathMeters(path) {
  if (!Array.isArray(path) || path.length < 2) {
    return 0;
  }

  const pixels = path.slice(1).reduce((total, point, index) => {
    const previous = path[index];
    const dx = ((point.x - previous.x) / 100) * mapImageSize.width;
    const dy = ((point.y - previous.y) / 100) * mapImageSize.height;
    return total + Math.hypot(dx, dy);
  }, 0);

  return pixels * metersPerMapPixel;
}

function roundToNearest(value, step) {
  return Math.max(step, Math.round(value / step) * step);
}

function formatDistance(meters, lang) {
  if (meters >= 1000) {
    const kilometers = (meters / 1000).toFixed(1);
    return `${lang === 'pt' || lang === 'es' ? kilometers.replace('.', ',') : kilometers} km`;
  }

  return `${meters} m`;
}

function buildProfilePath(basePath, origin, destination, profileId = 'standard') {
  const anchoredPath = anchorPathEndpoints(basePath, origin, destination);

  if (profileId === 'simple') {
    return [
      getLocationPoint(origin),
      getPointBetween(origin, destination, 0.5),
      getLocationPoint(destination)
    ];
  }

  if (profileId === 'stairs') {
    const corridorY = clampCoordinate((origin.y + destination.y) / 2, 'y');
    return [
      getLocationPoint(origin),
      { x: origin.x, y: corridorY },
      { x: destination.x, y: corridorY },
      getLocationPoint(destination)
    ];
  }

  if (profileId === 'slope') {
    return [
      getLocationPoint(origin),
      getPointBetween(origin, destination, 0.25, -1.2),
      getPointBetween(origin, destination, 0.5, -1.8),
      getPointBetween(origin, destination, 0.75, -1.2),
      getLocationPoint(destination)
    ];
  }

  if (profileId === 'rest') {
    return [
      getLocationPoint(origin),
      getPointBetween(origin, destination, 0.2, 1.4),
      getPointBetween(origin, destination, 0.4, -1.2),
      getPointBetween(origin, destination, 0.6, 1.2),
      getPointBetween(origin, destination, 0.8, -1.4),
      getLocationPoint(destination)
    ];
  }

  if (profileId === 'lowVision') {
    return [
      getLocationPoint(origin),
      getPointBetween(origin, destination, 0.33, 2.4),
      getPointBetween(origin, destination, 0.66, 2.4),
      getLocationPoint(destination)
    ];
  }

  return anchoredPath;
}

function anchorPathEndpoints(basePath, origin, destination) {
  const middlePoints = Array.isArray(basePath) && basePath.length > 2
    ? basePath.slice(1, -1).map(point => ({ x: point.x, y: point.y }))
    : [];

  return [
    getLocationPoint(origin),
    ...middlePoints,
    getLocationPoint(destination)
  ];
}

function getPointBetween(origin, destination, ratio, perpendicularOffset = 0) {
  const dx = destination.x - origin.x;
  const dy = destination.y - origin.y;
  const length = Math.hypot(dx, dy) || 1;
  const normalX = -dy / length;
  const normalY = dx / length;

  return {
    x: clampCoordinate(origin.x + dx * ratio + normalX * perpendicularOffset, 'x'),
    y: clampCoordinate(origin.y + dy * ratio + normalY * perpendicularOffset, 'y')
  };
}

function getLocationPoint(location) {
  return { x: location.x, y: location.y };
}

function clampCoordinate(value, axis) {
  const min = axis === 'x' ? 3 : 3;
  const max = axis === 'x' ? 97 : 97;
  return Math.min(max, Math.max(min, Number(value.toFixed(2))));
}

function buildProfileAlerts(baseAlerts, profileId = 'standard') {
  const profileAlerts = {
    stairs: ['wheelchair', 'vehicleCrossing'],
    slope: ['unevenFloor', 'partialShade'],
    rest: ['restPoint', 'partialShade'],
    simple: ['textReference'],
    lowVision: ['textReference', 'crowded'],
    standard: []
  };

  return [...new Set([...(baseAlerts || []), ...(profileAlerts[profileId] || [])])];
}

function getProfileAccessibility(defaultAccessibility, profileId = 'standard') {
  if (['stairs', 'slope', 'rest', 'lowVision'].includes(profileId)) {
    return 'routeAccessibleHigh';
  }

  if (profileId === 'simple') {
    return 'routeAccessibleMedium';
  }

  return defaultAccessibility;
}
function renderRoute() {
  const t = getT();

  if (!state.route) {
    app.innerHTML = `<p>${escapeHtml(t.noRouteSelected)}</p>`;
    return;
  }

  const route = getRouteView();

  app.innerHTML = `
    <section aria-labelledby="route-title">
      <div class="panel panel-inner">
        <h2 class="section-title" id="route-title" tabindex="-1" data-focus-target>${escapeHtml(t.routeTitle)}</h2>
        <p class="section-lead">${escapeHtml(t.routeLead)}</p>
      </div>

      <div class="route-layout" style="margin-top: 1rem;">
        ${renderMap(route)}
        ${renderRoutePanel(route)}
      </div>
    </section>
  `;

  bindMapMarkers(route);
  setupRouteReaderControls();

  document.querySelector('#toggle-text-mode').addEventListener('click', () => {
    state.textMode = !state.textMode;
    render();
    setStatus(state.textMode ? t.showTextRoute : t.hideTextRoute);
  });

  document.querySelector('#start-route').addEventListener('click', () => {
    state.currentRouteStep = 0;
    setView('navigation', { focus: true });
    setStatus(t.routeStarted);
  });

  document.querySelector('#edit-route').addEventListener('click', () => {
    setView('profile', { focus: true });
  });
}

function getRouteView() {
  if (!routeMatchesSelection() && state.origin && state.destination && state.profile) {
    state.route = buildRoute();
  }

  const route = state.route;
  const origin = getLocation(route.originId);
  const destination = getLocation(route.destinationId);
  const profile = getProfile(state.profile);
  const path = buildProfilePath(route.path, origin, destination, state.profile);

  return {
    route,
    origin,
    destination,
    path,
    profile,
    name: getLocalizedField(route, 'name'),
    summary: getLocalizedField(route, 'summary'),
    time: getLocalizedField(route, 'time'),
    distance: getLocalizedField(route, 'distance') || route.distance,
    accessibility: tr(route.accessibility),
    landmarks: getLocalizedField(route, 'landmarks'),
    steps: route.steps.map(step => ({
      text: getLocalizedField(step, 'text'),
      access: getLocalizedField(step, 'access')
    })),
    profileTitle: getProfileTitle(profile),
    profileNote: getProfileNote(profile)
  };
}

function renderMap(routeView) {
  const t = getT();
  return `
    <section class="panel map-panel" aria-labelledby="map-title">
      <div class="map-header">
        <div>
          <h3 class="map-title" id="map-title">${escapeHtml(t.mapTitle)}</h3>
          <p class="item-text">${escapeHtml(routeView.name)}</p>
        </div>
      </div>
      <p class="map-scroll-hint">${escapeHtml(t.mapScrollHint)}</p>
      <div class="map-scroll" tabindex="0" aria-label="${escapeHtml(t.mapScrollLabel)}">
        <div class="map-wrap">
          <img class="map-image" src="assets/mapa_ufsc.jpg" alt="${escapeHtml(t.mapAlt)}">
          ${renderRouteSvg(routeView.path)}
          <div class="marker-layer" aria-label="${escapeHtml(t.placesAria)}">
            ${locations.map(location => renderMarker(location, routeView)).join('')}
          </div>
        </div>
      </div>
      <div class="map-source">
        <p class="map-source-copy"><strong>${escapeHtml(t.mapSourceLabel)}:</strong> ${escapeHtml(t.mapSourceText)}</p>
        <a class="button button-secondary map-source-link" href="${escapeHtml(mapSourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.mapSourceAction)}</a>
      </div>
      <div class="map-location-panel" id="map-location-panel">
        ${renderLocationInfo(state.activeMarkerId ? getLocation(state.activeMarkerId) : null, routeView)}
      </div>
    </section>
  `;
}

function renderRouteSvg(path) {
  const points = path.map(point => `${point.x},${point.y}`).join(' ');
  const circles = path.map(point => `<circle class="route-dot" cx="${point.x}" cy="${point.y}" r="0.45"></circle>`).join('');
  return `
    <svg class="route-layer" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%" aria-hidden="true" focusable="false">
      <polyline class="route-shadow" points="${points}"></polyline>
      <polyline class="route-line" points="${points}"></polyline>
      ${circles}
    </svg>
  `;
}

function renderMarker(location, routeView) {
  const t = getT();
  const isOrigin = location.id === routeView.origin.id;
  const isDestination = location.id === routeView.destination.id;
  const isActive = location.id === state.activeMarkerId;
  const roleText = isOrigin ? t.markerRoleOrigin : isDestination ? t.markerRoleDestination : t.markerRoleNeutral;
  const visibleLabel = isOrigin ? t.originBadge : isDestination ? t.destinationBadge : '';
  const shortLabel = isOrigin ? 'O' : isDestination ? 'D' : getLocationShortCode(location);
  const ariaLabel = `${t.markerAria}: ${getLocationName(location)}, ${getLocationType(location)}, ${roleText}.`;

  return `
    <button class="map-marker${isOrigin ? ' origin' : ''}${isDestination ? ' destination' : ''}${isActive ? ' active' : ''}" type="button" data-location-id="${escapeHtml(location.id)}" style="left: ${location.x}%; top: ${location.y}%; " aria-label="${escapeHtml(ariaLabel)}">
      <span aria-hidden="true">${escapeHtml(shortLabel)}</span>
      ${visibleLabel ? `<span class="marker-tag">${escapeHtml(visibleLabel)}</span>` : ''}
    </button>
  `;
}

function bindMapMarkers(routeView) {
  document.querySelectorAll('.map-marker').forEach(marker => {
    const update = (shouldSpeak = false) => {
      const id = marker.dataset.locationId;
      const location = getLocation(id);
      state.activeMarkerId = id;
      document.querySelectorAll('.map-marker').forEach(item => {
        item.classList.toggle('active', item.dataset.locationId === id);
      });
      document.querySelector('#map-location-panel').innerHTML = renderLocationInfo(location, routeView);
      setStatus(`${getT().locationSelected} ${getLocationName(location)}.`);

      if (shouldSpeak) {
        speakLocationIfPageReaderActive(location);
      }
    };

    marker.addEventListener('focus', () => update(false));
    marker.addEventListener('click', () => update(true));
  });

  scheduleMapMarkerCollisionResolution(routeView);
}

function scheduleMapMarkerCollisionResolution(routeView) {
  window.requestAnimationFrame(() => {
    centerScrollableMapOnPoints('.map-scroll', '.map-wrap', routeView.path);
    applyMobileMarkerSpacing('.map-wrap', '.map-marker', marker => marker.classList.contains('origin') || marker.classList.contains('destination'));
    resolveMapTagCollisions(routeView);
  });

  if (mapCollisionResizeHandler) {
    window.removeEventListener('resize', mapCollisionResizeHandler);
  }

  mapCollisionResizeHandler = () => {
    if (mapCollisionResizeFrame) {
      window.cancelAnimationFrame(mapCollisionResizeFrame);
    }

    mapCollisionResizeFrame = window.requestAnimationFrame(() => {
      if (state.currentView === 'route' && state.route) {
        const updatedRouteView = getRouteView();
        centerScrollableMapOnPoints('.map-scroll', '.map-wrap', updatedRouteView.path);
        applyMobileMarkerSpacing('.map-wrap', '.map-marker', marker => marker.classList.contains('origin') || marker.classList.contains('destination'));
        resolveMapTagCollisions(updatedRouteView);
      }
    });
  };

  window.addEventListener('resize', mapCollisionResizeHandler);
}

function schedulePlaceMapLayout() {
  window.requestAnimationFrame(() => {
    centerPlaceMapScroll();
    applyMobileMarkerSpacing('.place-map-wrap', '.place-picker-marker', marker => marker.classList.contains('selected-origin') || marker.classList.contains('selected-destination'));
  });
}

function centerPlaceMapScroll() {
  const preferredLocationId = state[state.placePickerTarget] || state.origin || state.destination;
  const preferredLocation = preferredLocationId ? getLocation(preferredLocationId) : null;
  const points = preferredLocation ? [{ x: preferredLocation.x, y: preferredLocation.y }] : [];

  centerScrollableMapOnPoints('.place-map-scroll', '.place-map-wrap', points);
}

function centerScrollableMapOnPoints(scrollSelector, mapSelector, points = []) {
  const scrollContainer = document.querySelector(scrollSelector);
  const mapElement = document.querySelector(mapSelector);

  if (!scrollContainer || !mapElement || scrollContainer.scrollWidth <= scrollContainer.clientWidth) {
    return;
  }

  const validPoints = points.filter(point => Number.isFinite(point.x));
  const centerX = validPoints.length
    ? validPoints.reduce((total, point) => total + point.x, 0) / validPoints.length
    : 50;
  const targetLeft = (centerX / 100) * mapElement.offsetWidth - scrollContainer.clientWidth / 2;
  const maxLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

  scrollContainer.scrollLeft = Math.max(0, Math.min(maxLeft, targetLeft));
}

function applyMobileMarkerSpacing(mapSelector, markerSelector, isPinnedMarker = () => false) {
  const mapWrap = document.querySelector(mapSelector);
  const markers = [...document.querySelectorAll(markerSelector)];

  if (!mapWrap || markers.length === 0) {
    return;
  }

  markers.forEach(marker => {
    applyMarkerSpread(marker, { x: 0, y: 0 });
    marker.classList.remove('is-spaced');
  });

  if (!window.matchMedia(mobileMarkerSpacingMedia).matches) {
    return;
  }

  const wrapRect = mapWrap.getBoundingClientRect();
  const markerEntries = markers.map(marker => ({
    marker,
    pinned: isPinnedMarker(marker),
    rect: inflateRect(getElementRect(marker, wrapRect), 5)
  }));
  const pinnedRects = markerEntries
    .filter(entry => entry.pinned)
    .map(entry => inflateRect(entry.rect, 4));
  const movableEntries = markerEntries
    .filter(entry => !entry.pinned)
    .map(entry => ({
      ...entry,
      collisionCount: markerEntries.filter(other => other.marker !== entry.marker && rectsOverlap(entry.rect, other.rect)).length
    }))
    .sort((first, second) => second.collisionCount - first.collisionCount);
  const occupiedRects = [...pinnedRects];

  movableEntries.forEach(entry => {
    const otherInitialRects = markerEntries
      .filter(other => other.marker !== entry.marker)
      .map(other => other.rect);
    const shift = chooseMarkerSpread(entry.marker, wrapRect, occupiedRects, otherInitialRects);

    applyMarkerSpread(entry.marker, shift);
    entry.marker.classList.toggle('is-spaced', Math.abs(shift.x) > 0 || Math.abs(shift.y) > 0);
    occupiedRects.push(inflateRect(getElementRect(entry.marker, wrapRect), 7));
  });
}

function chooseMarkerSpread(marker, wrapRect, occupiedRects, initialRects) {
  const candidates = buildMarkerSpreadCandidates();
  let bestCandidate = candidates[0];
  let bestScore = Number.POSITIVE_INFINITY;

  candidates.forEach(candidate => {
    applyMarkerSpread(marker, candidate);
    const markerRect = inflateRect(getElementRect(marker, wrapRect), 4);
    const occupiedHits = countOccupiedCollisions([markerRect], occupiedRects);
    const initialHits = countOccupiedCollisions([markerRect], initialRects);
    const outsidePenalty = getOutsidePenalty([markerRect], wrapRect);
    const movementPenalty = Math.hypot(candidate.x, candidate.y) / 80;
    const stillOverlappingPenalty = initialHits > 0 && candidate.x === 0 && candidate.y === 0 ? 520 : 0;
    const score = occupiedHits * 1000 + initialHits * 400 + outsidePenalty * 120 + movementPenalty + stillOverlappingPenalty;

    if (score < bestScore) {
      bestScore = score;
      bestCandidate = candidate;
    }
  });

  return bestCandidate;
}

function buildMarkerSpreadCandidates() {
  const directions = [
    { x: 0, y: 0 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    normalizeVector({ x: -1, y: -1 }),
    normalizeVector({ x: 1, y: -1 }),
    normalizeVector({ x: -1, y: 1 }),
    normalizeVector({ x: 1, y: 1 })
  ];
  const candidates = [];
  const seen = new Set();

  mobileMarkerSpacingDistances.forEach(distance => {
    directions.forEach(direction => {
      const candidate = {
        x: Math.round(direction.x * distance),
        y: Math.round(direction.y * distance)
      };
      const key = candidate.x + ':' + candidate.y;

      if (!seen.has(key)) {
        seen.add(key);
        candidates.push(candidate);
      }
    });
  });

  return candidates;
}

function applyMarkerSpread(marker, shift) {
  marker.style.setProperty('--marker-spread-x', shift.x + 'px');
  marker.style.setProperty('--marker-spread-y', shift.y + 'px');
}

function resolveMapTagCollisions(routeView) {
  const mapWrap = document.querySelector('.map-wrap');
  const tags = [...document.querySelectorAll('.marker-tag')];
  const markers = [...document.querySelectorAll('.map-marker')];

  if (!mapWrap || tags.length === 0 || !Array.isArray(routeView.path) || routeView.path.length < 2) {
    return;
  }

  const wrapRect = mapWrap.getBoundingClientRect();
  const routeSegments = buildRouteSegments(routeView.path, wrapRect);
  const markerRects = markers.map(marker => inflateRect(getElementRect(marker, wrapRect), 6));
  const occupiedRects = [...markerRects];

  tags.forEach(tag => applyTagShift(tag, { x: 0, y: 0 }));

  tags.forEach(tag => {
    const shift = chooseTagShift(tag, routeSegments, wrapRect, occupiedRects);
    applyTagShift(tag, shift);
    tag.classList.toggle('is-displaced', Math.abs(shift.x) > 0 || Math.abs(shift.y) > 0);
    occupiedRects.push(inflateRect(getElementRect(tag, wrapRect), 5));
  });
}

function chooseTagShift(tag, routeSegments, wrapRect, occupiedRects) {
  const candidates = buildTagShiftCandidates(tag, routeSegments, wrapRect);
  let bestCandidate = candidates[0];
  let bestScore = Number.POSITIVE_INFINITY;

  candidates.forEach(candidate => {
    applyTagShift(tag, candidate);
    const tagRect = getElementRect(tag, wrapRect);
    const routeHits = countRouteCollisions([tagRect], routeSegments);
    const occupiedHits = countOccupiedCollisions([tagRect], occupiedRects);
    const outsidePenalty = getOutsidePenalty([tagRect], wrapRect);
    const movementPenalty = Math.hypot(candidate.x, candidate.y) / 120;
    const score = routeHits * 1000 + occupiedHits * 700 + outsidePenalty * 120 + movementPenalty;

    if (score < bestScore) {
      bestScore = score;
      bestCandidate = candidate;
    }
  });

  return bestCandidate;
}

function buildTagShiftCandidates(tag, routeSegments, wrapRect) {
  const tagRect = getElementRect(tag, wrapRect);
  const center = getRectCenter(tagRect);
  const directions = buildShiftDirections(center, routeSegments);
  const distances = [0, 34, 52, 76, 104, 136, 174];
  const candidates = [{ x: 0, y: 0 }];
  const seen = new Set(['0:0']);

  distances.slice(1).forEach(distance => {
    directions.forEach(direction => {
      const candidate = {
        x: Math.round(direction.x * distance),
        y: Math.round(direction.y * distance)
      };
      const key = `${candidate.x}:${candidate.y}`;

      if (!seen.has(key)) {
        seen.add(key);
        candidates.push(candidate);
      }
    });
  });

  return candidates;
}

function buildShiftDirections(anchor, routeSegments) {
  const nearest = getNearestRouteSegment(anchor, routeSegments);
  const fallbackDirections = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    normalizeVector({ x: 1, y: 1 }),
    normalizeVector({ x: -1, y: 1 }),
    normalizeVector({ x: 1, y: -1 }),
    normalizeVector({ x: -1, y: -1 })
  ];

  if (!nearest) {
    return fallbackDirections;
  }

  let away = {
    x: anchor.x - nearest.closestPoint.x,
    y: anchor.y - nearest.closestPoint.y
  };

  if (Math.hypot(away.x, away.y) < 1) {
    away = getSegmentNormal(nearest.segment);
  }

  const primary = normalizeVector(away);
  const perpendicular = normalizeVector({ x: -primary.y, y: primary.x });
  const directions = [
    primary,
    perpendicular,
    { x: -perpendicular.x, y: -perpendicular.y },
    { x: -primary.x, y: -primary.y },
    normalizeVector({ x: primary.x + perpendicular.x, y: primary.y + perpendicular.y }),
    normalizeVector({ x: primary.x - perpendicular.x, y: primary.y - perpendicular.y }),
    ...fallbackDirections
  ];
  const seen = new Set();

  return directions.filter(direction => {
    const key = `${Math.round(direction.x * 100)}:${Math.round(direction.y * 100)}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function buildRouteSegments(path, wrapRect) {
  return path.slice(1).map((point, index) => ({
    start: mapPointToPixels(path[index], wrapRect),
    end: mapPointToPixels(point, wrapRect)
  }));
}

function mapPointToPixels(point, wrapRect) {
  return {
    x: (point.x / 100) * wrapRect.width,
    y: (point.y / 100) * wrapRect.height
  };
}

function getNearestRouteSegment(point, routeSegments) {
  return routeSegments.reduce((nearest, segment) => {
    const closestPoint = getClosestPointOnSegment(point, segment);
    const distance = Math.hypot(point.x - closestPoint.x, point.y - closestPoint.y);

    if (!nearest || distance < nearest.distance) {
      return { segment, closestPoint, distance };
    }

    return nearest;
  }, null);
}

function getClosestPointOnSegment(point, segment) {
  const dx = segment.end.x - segment.start.x;
  const dy = segment.end.y - segment.start.y;
  const lengthSquared = dx * dx + dy * dy || 1;
  const ratio = Math.max(0, Math.min(1, ((point.x - segment.start.x) * dx + (point.y - segment.start.y) * dy) / lengthSquared));

  return {
    x: segment.start.x + dx * ratio,
    y: segment.start.y + dy * ratio
  };
}

function getSegmentNormal(segment) {
  const dx = segment.end.x - segment.start.x;
  const dy = segment.end.y - segment.start.y;
  return normalizeVector({ x: -dy, y: dx });
}

function normalizeVector(vector) {
  const length = Math.hypot(vector.x, vector.y) || 1;
  return {
    x: vector.x / length,
    y: vector.y / length
  };
}

function applyTagShift(tag, shift) {
  tag.style.setProperty('--tag-shift-x', `${shift.x}px`);
  tag.style.setProperty('--tag-shift-y', `${shift.y}px`);
}

function getElementRect(element, wrapRect) {
  const rect = element.getBoundingClientRect();
  return {
    left: rect.left - wrapRect.left,
    top: rect.top - wrapRect.top,
    right: rect.right - wrapRect.left,
    bottom: rect.bottom - wrapRect.top
  };
}

function getRectCenter(rect) {
  return {
    x: (rect.left + rect.right) / 2,
    y: (rect.top + rect.bottom) / 2
  };
}

function countRouteCollisions(rects, routeSegments) {
  return rects.reduce((total, rect) => {
    const collisionRect = inflateRect(rect, 8);
    const hitsRoute = routeSegments.some(segment => segmentIntersectsRect(segment, collisionRect));
    return total + (hitsRoute ? 1 : 0);
  }, 0);
}

function countOccupiedCollisions(rects, occupiedRects) {
  return rects.reduce((total, rect) => {
    const collisionRect = inflateRect(rect, 5);
    const overlaps = occupiedRects.some(occupied => rectsOverlap(collisionRect, occupied));
    return total + (overlaps ? 1 : 0);
  }, 0);
}

function getOutsidePenalty(rects, wrapRect) {
  const edgePadding = 6;

  return rects.reduce((total, rect) => {
    const leftOverflow = Math.max(0, edgePadding - rect.left);
    const topOverflow = Math.max(0, edgePadding - rect.top);
    const rightOverflow = Math.max(0, rect.right - (wrapRect.width - edgePadding));
    const bottomOverflow = Math.max(0, rect.bottom - (wrapRect.height - edgePadding));
    return total + leftOverflow + topOverflow + rightOverflow + bottomOverflow;
  }, 0);
}

function inflateRect(rect, amount) {
  return {
    left: rect.left - amount,
    top: rect.top - amount,
    right: rect.right + amount,
    bottom: rect.bottom + amount
  };
}

function rectsOverlap(first, second) {
  return first.left < second.right
    && first.right > second.left
    && first.top < second.bottom
    && first.bottom > second.top;
}

function segmentIntersectsRect(segment, rect) {
  const corners = [
    { x: rect.left, y: rect.top },
    { x: rect.right, y: rect.top },
    { x: rect.right, y: rect.bottom },
    { x: rect.left, y: rect.bottom }
  ];
  const edges = corners.map((corner, index) => ({
    start: corner,
    end: corners[(index + 1) % corners.length]
  }));

  return pointInsideRect(segment.start, rect)
    || pointInsideRect(segment.end, rect)
    || edges.some(edge => lineSegmentsIntersect(segment.start, segment.end, edge.start, edge.end));
}

function pointInsideRect(point, rect) {
  return point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom;
}

function lineSegmentsIntersect(a, b, c, d) {
  const direction1 = getTurnDirection(a, b, c);
  const direction2 = getTurnDirection(a, b, d);
  const direction3 = getTurnDirection(c, d, a);
  const direction4 = getTurnDirection(c, d, b);

  if (direction1 === 0 && pointOnSegment(c, a, b)) return true;
  if (direction2 === 0 && pointOnSegment(d, a, b)) return true;
  if (direction3 === 0 && pointOnSegment(a, c, d)) return true;
  if (direction4 === 0 && pointOnSegment(b, c, d)) return true;

  return direction1 !== direction2 && direction3 !== direction4;
}

function getTurnDirection(a, b, c) {
  const value = (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y);

  if (Math.abs(value) < 0.001) {
    return 0;
  }

  return value > 0 ? 1 : 2;
}

function pointOnSegment(point, start, end) {
  return point.x <= Math.max(start.x, end.x) + 0.001
    && point.x >= Math.min(start.x, end.x) - 0.001
    && point.y <= Math.max(start.y, end.y) + 0.001
    && point.y >= Math.min(start.y, end.y) - 0.001;
}
function renderLocationInfo(location, routeView) {
  const t = getT();
  if (!location) {
    return `<p class="item-text">${escapeHtml(t.mapInfoInitial)}</p>`;
  }

  const role = location.id === routeView.origin.id
    ? t.originBadge
    : location.id === routeView.destination.id
      ? t.destinationBadge
      : t.markerRoleNeutral;

  return `
    <article class="location-card">
      <strong>${escapeHtml(getLocationName(location))}</strong>
      <p>${escapeHtml(getLocationType(location))}</p>
      <p>${escapeHtml(role)}</p>
    </article>
  `;
}

function renderRoutePanel(routeView) {
  const t = getT();
  const textMode = state.textMode ? renderTextRoute(routeView) : '';
  return `
    <aside class="panel route-panel" aria-labelledby="route-summary-title">
      <div class="route-panel-header">
        <div>
          <h3 class="route-panel-title" id="route-summary-title">${escapeHtml(t.routeSummaryTitle)}</h3>
          <p class="item-text">${escapeHtml(routeView.summary)}</p>
        </div>
      </div>
      <div class="route-content">
        <div class="metric-grid">
          <div class="metric">
            <span class="metric-label">${escapeHtml(t.estimatedTime)}</span>
            <span class="metric-value">${escapeHtml(routeView.time)}</span>
          </div>
          <div class="metric">
            <span class="metric-label">${escapeHtml(t.estimatedDistance)}</span>
            <span class="metric-value">${escapeHtml(routeView.distance)}</span>
          </div>
          <div class="metric">
            <span class="metric-label">${escapeHtml(t.accessibilityLevel)}</span>
            <span class="metric-value">${escapeHtml(routeView.accessibility)}</span>
          </div>
        </div>

        <ul class="summary-list">
          <li class="summary-item">
            <span class="summary-icon" aria-hidden="true">P</span>
            <span>
              <strong class="item-title">${escapeHtml(t.chosenProfile)}</strong>
              <span class="item-text">${escapeHtml(routeView.profileTitle)}</span>
            </span>
          </li>
          <li class="summary-item">
            <span class="summary-icon" aria-hidden="true">A</span>
            <span>
              <strong class="item-title">${escapeHtml(t.profileAdjustment)}</strong>
              <span class="item-text">${escapeHtml(routeView.profileNote)}</span>
            </span>
          </li>
        </ul>

        ${renderRouteReaderControls('route')}
        ${renderAlerts(routeView.route.alerts)}
        ${renderInstructionPreview(routeView)}

        <div class="action-row action-row--route-result">
          <button class="button button-ghost" type="button" id="edit-route">${escapeHtml(t.editRoute)}</button>
          <button class="button button-secondary" type="button" id="toggle-text-mode">${escapeHtml(state.textMode ? t.hideTextRoute : t.showTextRoute)}</button>
          <button class="button button-primary" type="button" id="start-route">${escapeHtml(t.startRoute)}</button>
        </div>

        ${textMode}
      </div>
    </aside>
  `;
}

function renderAlerts(alertKeys) {
  const t = getT();
  return `
    <section aria-labelledby="alerts-title">
      <h4 class="item-title" id="alerts-title">${escapeHtml(t.alertsTitle)}</h4>
      <ul class="alert-list">
        ${alertKeys.map(key => {
          const meta = alertMeta[key];
          const label = getAlertLabel(meta.type);
          return `
            <li class="alert-item">
              <span class="alert-icon ${escapeHtml(meta.type)}" aria-hidden="true">${escapeHtml(meta.icon)}</span>
              <span>
                <strong class="item-title">${escapeHtml(label)}:</strong>
                <span class="item-text">${escapeHtml(t.alerts[key])}</span>
              </span>
            </li>
          `;
        }).join('')}
      </ul>
    </section>
  `;
}

function getAlertLabel(type) {
  const t = getT();
  if (type === 'warning') {
    return t.warningLabel;
  }

  if (type === 'accessible') {
    return t.accessibleLabel;
  }

  if (type === 'danger') {
    return t.dangerLabel;
  }

  return t.infoLabel;
}

function renderInstructionPreview(routeView) {
  const t = getT();
  return `
    <section aria-labelledby="instructions-title">
      <h4 class="item-title" id="instructions-title">${escapeHtml(t.instructionsTitle)}</h4>
      <ol class="instruction-list">
        ${routeView.steps.map((step, index) => `
          <li class="instruction-item">
            <span class="instruction-number" aria-hidden="true">${index + 1}</span>
            <span>
              <strong class="item-title">${escapeHtml(step.text)}</strong>
              <span class="item-text">${escapeHtml(step.access)}</span>
            </span>
          </li>
        `).join('')}
      </ol>
    </section>
  `;
}

function renderTextRoute(routeView) {
  const t = getT();
  return `
    <section class="text-route" aria-labelledby="text-route-title">
      <h4 class="item-title" id="text-route-title">${escapeHtml(t.textRouteTitle)}</h4>
      <dl class="summary-list">
        <div class="summary-item">
          <dt class="item-title">${escapeHtml(t.summaryOrigin)}</dt>
          <dd class="item-text">${escapeHtml(getLocationName(routeView.origin))}</dd>
        </div>
        <div class="summary-item">
          <dt class="item-title">${escapeHtml(t.summaryDestination)}</dt>
          <dd class="item-text">${escapeHtml(getLocationName(routeView.destination))}</dd>
        </div>
        <div class="summary-item">
          <dt class="item-title">${escapeHtml(t.estimatedDistance)}</dt>
          <dd class="item-text">${escapeHtml(routeView.distance)}</dd>
        </div>
        <div class="summary-item">
          <dt class="item-title">${escapeHtml(t.estimatedTime)}</dt>
          <dd class="item-text">${escapeHtml(routeView.time)}</dd>
        </div>
      </dl>
      ${renderInstructionPreview(routeView)}
      ${renderAlerts(routeView.route.alerts)}
      <section aria-labelledby="landmarks-title">
        <h4 class="item-title" id="landmarks-title">${escapeHtml(t.landmarksTitle)}</h4>
        <ul class="reference-list">
          ${routeView.landmarks.map(reference => `
            <li class="reference-item">${escapeHtml(reference)}</li>
          `).join('')}
        </ul>
      </section>
    </section>
  `;
}

function renderNavigation() {
  const t = getT();
  const routeView = getRouteView();
  const step = routeView.steps[state.currentRouteStep];
  const total = routeView.steps.length;
  const current = state.currentRouteStep + 1;
  const progress = Math.round((current / total) * 100);
  const progressText = formatTemplate(t.progressText, { current, total });
  const mapButtonText = state.navigationMapVisible ? t.hideMapAgain : t.viewMapAgain;

  app.innerHTML = `
    <section class="walkthrough" aria-labelledby="navigation-title">
      <div class="panel panel-inner">
        <h2 class="section-title" id="navigation-title" tabindex="-1" data-focus-target>${escapeHtml(t.instructionsTitle)}</h2>
        <p class="section-lead">${escapeHtml(routeView.name)}</p>
      </div>

      <div class="progress-block" role="group" aria-label="${escapeHtml(t.progressLabel)}">
        <strong>${escapeHtml(progressText)}</strong>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="width: ${progress}%;"></div>
        </div>
      </div>

      <article class="step-card">
        <span class="step-number-large" aria-hidden="true">${current}</span>
        <h3 class="section-title">${escapeHtml(step.text)}</h3>
        <p class="section-lead">${escapeHtml(step.access)}</p>
        ${renderRouteReaderControls('navigation')}
        <div class="action-row action-row--step-navigation">
          <button class="button button-secondary" type="button" id="previous-route-step"${state.currentRouteStep === 0 ? ' disabled' : ''}>${escapeHtml(t.previousStep)}</button>
          <button class="button button-primary" type="button" id="next-route-step">${escapeHtml(state.currentRouteStep === total - 1 ? t.confirmArrival : t.nextStep)}</button>
          <button class="button button-ghost" type="button" id="navigation-map" aria-controls="navigation-map-preview" aria-expanded="${state.navigationMapVisible}">${escapeHtml(mapButtonText)}</button>
        </div>
      </article>

      <div class="navigation-map-preview" id="navigation-map-preview"${state.navigationMapVisible ? '' : ' hidden'}>
        ${renderMap(routeView)}
      </div>
    </section>
  `;

  setupRouteReaderControls();
  bindMapMarkers(routeView);

  document.querySelector('#previous-route-step').addEventListener('click', () => {
    if (state.currentRouteStep > 0) {
      state.currentRouteStep -= 1;
      render(true);
      setStatus(formatTemplate(t.progressText, { current: state.currentRouteStep + 1, total }));
      if (state.routeReaderAutoRead) {
        speakText(buildCurrentStepSpeechText());
      }
    }
  });

  document.querySelector('#next-route-step').addEventListener('click', () => {
    if (state.currentRouteStep === total - 1) {
      state.routeCompleted = true;
      setView('complete', { focus: true });
      setStatus(t.arrivalMessage);
      return;
    }

    state.currentRouteStep += 1;
    render(true);
    setStatus(formatTemplate(t.progressText, { current: state.currentRouteStep + 1, total }));
    if (state.routeReaderAutoRead) {
      speakText(buildCurrentStepSpeechText());
    }
  });

  document.querySelector('#navigation-map').addEventListener('click', () => {
    const mapPreview = document.querySelector('#navigation-map-preview');
    const button = document.querySelector('#navigation-map');
    state.navigationMapVisible = !state.navigationMapVisible;
    mapPreview.hidden = !state.navigationMapVisible;
    button.textContent = state.navigationMapVisible ? t.hideMapAgain : t.viewMapAgain;
    button.setAttribute('aria-expanded', String(state.navigationMapVisible));
  });
}

function renderComplete() {
  const t = getT();
  const routeView = getRouteView();

  app.innerHTML = `
    <section class="arrival-panel" aria-labelledby="arrival-title">
      <div class="panel panel-inner">
        <div class="success-banner">
          <span class="success-badge" aria-hidden="true">OK</span>
          <div>
            <h2 class="section-title" id="arrival-title" tabindex="-1" data-focus-target>${escapeHtml(t.arrivalTitle)}</h2>
            <p class="section-lead">${escapeHtml(t.arrivalMessage)}</p>
          </div>
        </div>

        <dl class="summary-list" style="margin-top: 1rem;">
          <div class="summary-item">
            <dt class="item-title">${escapeHtml(t.summaryOrigin)}</dt>
            <dd class="item-text">${escapeHtml(getLocationName(routeView.origin))}</dd>
          </div>
          <div class="summary-item">
            <dt class="item-title">${escapeHtml(t.summaryDestination)}</dt>
            <dd class="item-text">${escapeHtml(getLocationName(routeView.destination))}</dd>
          </div>
          <div class="summary-item">
            <dt class="item-title">${escapeHtml(t.summaryProfile)}</dt>
            <dd class="item-text">${escapeHtml(routeView.profileTitle)}</dd>
          </div>
          <div class="summary-item">
            <dt class="item-title">${escapeHtml(t.summaryRoute)}</dt>
            <dd class="item-text">${escapeHtml(routeView.summary)}</dd>
          </div>
        </dl>

        <div class="action-row">
          <button class="button button-secondary" type="button" id="view-map-again">${escapeHtml(t.viewMapAgain)}</button>
          <button class="button button-primary" type="button" id="new-route">${escapeHtml(t.newRoute)}</button>
        </div>
      </div>
    </section>
  `;

  document.querySelector('#new-route').addEventListener('click', () => {
    state.origin = '';
    state.destination = '';
    state.profile = '';
    state.route = null;
    state.currentRouteStep = 0;
    state.textMode = false;
    state.activeMarkerId = '';
    state.routeCompleted = false;
    state.navigationMapVisible = true;
    setView('welcome', { focus: true });
  });

  document.querySelector('#view-map-again').addEventListener('click', () => {
    setView('route', { focus: true });
  });
}

setupPageReaderControlNarration();
prepareSpeechSynthesisVoices();
initializeHistory();
render(true);
