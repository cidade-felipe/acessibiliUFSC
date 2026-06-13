'use strict';

const locations = [
  {
    id: 'reitoria',
    namePt: 'Reitoria',
    nameEn: "Rector's Office",
    typePt: 'Unidade administrativa',
    typeEn: 'Administrative unit',
    x: 52.4,
    y: 46.3
  },
  {
    id: 'biblioteca',
    namePt: 'Biblioteca Central',
    nameEn: 'Central Library',
    typePt: 'Biblioteca',
    typeEn: 'Library',
    x: 52.4,
    y: 37.4
  },
  {
    id: 'ru',
    namePt: 'Restaurante Universitário',
    nameEn: 'University Restaurant',
    typePt: 'Alimentação',
    typeEn: 'Food service',
    x: 40.4,
    y: 55.7
  },
  {
    id: 'hu',
    namePt: 'Hospital Universitário',
    nameEn: 'University Hospital',
    typePt: 'Saúde',
    typeEn: 'Health service',
    x: 63.8,
    y: 27
  },
  {
    id: 'ctc',
    namePt: 'Centro Tecnológico',
    nameEn: 'Technology Center',
    typePt: 'Centro de ensino',
    typeEn: 'Academic center',
    x: 63.5,
    y: 50.2
  },
  {
    id: 'cse',
    namePt: 'Centro Socioeconômico',
    nameEn: 'Socioeconomic Center',
    typePt: 'Centro de ensino',
    typeEn: 'Academic center',
    x: 40.7,
    y: 38
  },
  {
    id: 'cfh',
    namePt: 'Centro de Filosofia e Ciências Humanas',
    nameEn: 'Center of Philosophy and Human Sciences',
    typePt: 'Centro de ensino',
    typeEn: 'Academic center',
    x: 31.6,
    y: 53.7
  },
  {
    id: 'cce',
    namePt: 'Centro de Comunicação e Expressão',
    nameEn: 'Communication and Expression Center',
    typePt: 'Centro de ensino',
    typeEn: 'Academic center',
    x: 43.2,
    y: 47
  },
  {
    id: 'centro_eventos',
    namePt: 'Centro de Cultura e Eventos',
    nameEn: 'Culture and Events Center',
    typePt: 'Eventos',
    typeEn: 'Events',
    x: 50.5,
    y: 51.6
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
    appSubtitle: 'Rotas inclusivas pelo campus Trindade',
    appKicker: 'Protótipo de IHC',
    skipLink: 'Pular para o conteúdo principal',
    languageLabel: 'Idioma',
    languagePt: 'PT-BR',
    languageEn: 'EN',
    contrastOn: 'Ativar modo alto contraste',
    contrastOff: 'Desativar modo alto contraste',
    stepNavLabel: 'Etapas do planejamento de rota',
    steps: ['Boas-vindas', 'Origem e destino', 'Perfil', 'Resultado', 'Passo a passo', 'Conclusão'],
    welcomeEyebrow: 'Orientação acessível no campus',
    welcomeTitle: 'AcessibiliUFSC',
    welcomeIntro: 'Planeje rotas inclusivas no Campus Reitor João David Ferreira Lima, considerando mobilidade, baixa visão, descanso e clareza das instruções.',
    welcomeAction: 'Planejar rota',
    welcomeFeatureTitle: 'O que este protótipo entrega',
    welcomeFeatures: [
      ['Fluxo completo', 'Da escolha do local até a confirmação de chegada.'],
      ['Acessibilidade real', 'Foco visível, modo texto, alto contraste e feedback textual.'],
      ['Dois idiomas', 'Todos os textos mudam entre português e inglês.']
    ],
    placesTitle: 'Escolha origem e destino',
    placesLead: 'Selecione dois pontos do campus para calcular uma rota acessível simulada.',
    originLabel: 'Origem',
    destinationLabel: 'Destino',
    originHelp: 'Escolha de onde você vai sair.',
    destinationHelp: 'Escolha para onde você quer ir.',
    selectPlaceholder: 'Selecione um local',
    continueButton: 'Continuar',
    backButton: 'Voltar',
    errorPrefix: 'Erro:',
    originRequired: 'selecione uma origem.',
    destinationRequired: 'selecione um destino.',
    samePlaceError: 'selecione um destino diferente da origem.',
    profileTitle: 'Informe seu perfil de acessibilidade',
    profileLead: 'A seleção orienta o resumo, os alertas e a forma de apresentar a rota.',
    profileLegend: 'Perfil de acessibilidade ou preferência de navegação',
    profileRequired: 'escolha um perfil de acessibilidade para continuar.',
    calculateRoute: 'Calcular rota',
    routeTitle: 'Resultado da rota',
    routeLead: 'Revise o mapa, os alertas e as instruções antes de iniciar.',
    mapTitle: 'Mapa do campus',
    mapAlt: 'Mapa visual do Campus Trindade da UFSC usado como base para marcadores de rota.',
    mapInfoInitial: 'Foque ou selecione um marcador para ver detalhes do local.',
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
    appSubtitle: 'Inclusive routes through Trindade campus',
    appKicker: 'HCI prototype',
    skipLink: 'Skip to main content',
    languageLabel: 'Language',
    languagePt: 'PT-BR',
    languageEn: 'EN',
    contrastOn: 'Enable high contrast mode',
    contrastOff: 'Disable high contrast mode',
    stepNavLabel: 'Route planning steps',
    steps: ['Welcome', 'Origin and destination', 'Profile', 'Result', 'Step by step', 'Completion'],
    welcomeEyebrow: 'Accessible campus guidance',
    welcomeTitle: 'AcessibiliUFSC',
    welcomeIntro: 'Plan inclusive routes on UFSC Trindade campus, considering mobility, low vision, rest points, and clear instructions.',
    welcomeAction: 'Plan route',
    welcomeFeatureTitle: 'What this prototype delivers',
    welcomeFeatures: [
      ['Complete flow', 'From location selection to arrival confirmation.'],
      ['Real accessibility', 'Visible focus, text mode, high contrast, and textual feedback.'],
      ['Two languages', 'All text changes between Portuguese and English.']
    ],
    placesTitle: 'Choose origin and destination',
    placesLead: 'Select two campus points to calculate a simulated accessible route.',
    originLabel: 'Origin',
    destinationLabel: 'Destination',
    originHelp: 'Choose where you will start.',
    destinationHelp: 'Choose where you want to go.',
    selectPlaceholder: 'Select a location',
    continueButton: 'Continue',
    backButton: 'Back',
    errorPrefix: 'Error:',
    originRequired: 'select an origin.',
    destinationRequired: 'select a destination.',
    samePlaceError: 'select a destination different from the origin.',
    profileTitle: 'Choose your accessibility profile',
    profileLead: 'The selection guides the summary, alerts, and how the route is presented.',
    profileLegend: 'Accessibility profile or navigation preference',
    profileRequired: 'choose an accessibility profile to continue.',
    calculateRoute: 'Calculate route',
    routeTitle: 'Route result',
    routeLead: 'Review the map, alerts, and instructions before starting.',
    mapTitle: 'Campus map',
    mapAlt: 'Visual map of UFSC Trindade campus used as a base for route markers.',
    mapInfoInitial: 'Focus or select a marker to see location details.',
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
    distance: '650 m',
    timePt: '8 a 10 min',
    timeEn: '8 to 10 min',
    accessibility: 'routeAccessibleHigh',
    summaryPt: 'Trajeto curto entre a Biblioteca Central e o RU, com travessia sinalizada e alternativa por trecho mais plano.',
    summaryEn: 'Short path between the Central Library and the University Restaurant, with a marked crossing and a flatter alternative segment.',
    path: [
      { x: 52.4, y: 37.4 },
      { x: 49, y: 44 },
      { x: 45, y: 51 },
      { x: 40.4, y: 55.7 }
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
    distance: '900 m',
    timePt: '12 a 14 min',
    timeEn: '12 to 14 min',
    accessibility: 'routeAccessibleMedium',
    summaryPt: 'Rota institucional entre a Reitoria e o CTC, evitando atalhos com piso irregular quando possível.',
    summaryEn: 'Institutional route between the Rector\'s Office and the Technology Center, avoiding uneven shortcuts where possible.',
    path: [
      { x: 52.4, y: 46.3 },
      { x: 56, y: 48 },
      { x: 60, y: 49 },
      { x: 63.5, y: 50.2 }
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
    distance: '520 m',
    timePt: '7 a 9 min',
    timeEn: '7 to 9 min',
    accessibility: 'routeAccessibleHigh',
    summaryPt: 'Trajeto direto entre CSE e Biblioteca Central, com referências simples e baixa distância estimada.',
    summaryEn: 'Direct path between the Socioeconomic Center and the Central Library, with simple references and low estimated distance.',
    path: [
      { x: 40.7, y: 38 },
      { x: 45, y: 37.6 },
      { x: 49, y: 37.5 },
      { x: 52.4, y: 37.4 }
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
    distance: '1,2 km',
    timePt: '16 a 20 min',
    timeEn: '16 to 20 min',
    accessibility: 'routeAccessibleModerate',
    summaryPt: 'Rota mais longa entre o Centro de Cultura e Eventos e o HU, com alertas para chuva e circulação intensa.',
    summaryEn: 'Longer route between the Culture and Events Center and the University Hospital, with alerts for rain and heavy circulation.',
    path: [
      { x: 50.5, y: 51.6 },
      { x: 55, y: 43 },
      { x: 60, y: 34 },
      { x: 63.8, y: 27 }
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

const state = {
  lang: 'pt',
  highContrast: false,
  currentView: 'welcome',
  origin: '',
  destination: '',
  profile: '',
  route: null,
  errors: {},
  currentRouteStep: 0,
  textMode: false,
  activeMarkerId: ''
};

const viewOrder = ['welcome', 'places', 'profile', 'route', 'navigation', 'complete'];

const app = document.querySelector('#app');
const stepNav = document.querySelector('#step-nav');
const topActions = document.querySelector('#top-actions');
const statusRegion = document.querySelector('#screen-reader-status');

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

function renderBrandName() {
  return `
    <span class="brand-name">
      <span class="brand-name-main">Acessibili</span><span class="brand-name-highlight">UFSC</span>
    </span>
  `;
}
function getLocation(id) {
  return locations.find(location => location.id === id);
}

function getLocationName(location) {
  return state.lang === 'pt' ? location.namePt : location.nameEn;
}

function getLocationType(location) {
  return state.lang === 'pt' ? location.typePt : location.typeEn;
}

function getProfile(id) {
  return profiles.find(profile => profile.id === id);
}

function getProfileTitle(profile) {
  return state.lang === 'pt' ? profile.titlePt : profile.titleEn;
}

function getProfileDescription(profile) {
  return state.lang === 'pt' ? profile.descriptionPt : profile.descriptionEn;
}

function getProfileNote(profile) {
  return state.lang === 'pt' ? profile.notePt : profile.noteEn;
}

function setStatus(message) {
  statusRegion.textContent = message;
}

function setView(view, options = {}) {
  state.currentView = view;
  state.errors = {};
  render(Boolean(options.focus));
  const index = viewOrder.indexOf(view);
  if (index >= 0) {
    setStatus(`${getT().statusStepChanged} ${getT().steps[index]}.`);
  }
}

function render(shouldFocus = false) {
  const t = getT();
  document.documentElement.lang = state.lang === 'pt' ? 'pt-BR' : 'en';
  document.title = `${t.appTitle} | ${t.appSubtitle}`;
  document.body.classList.toggle('high-contrast', state.highContrast);

  document.querySelector('[data-i18n="skipLink"]').textContent = t.skipLink;
  document.querySelector('#brand-kicker').textContent = t.appKicker;
  document.querySelector('#brand-title').setAttribute('aria-label', t.appTitle);
  document.querySelector('#brand-title').innerHTML = renderBrandName();
  document.querySelector('#brand-subtitle').textContent = t.appSubtitle;

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
      <label class="control-label" for="language-select">${escapeHtml(t.languageLabel)}</label>
      <select class="select" id="language-select" aria-label="${escapeHtml(t.languageLabel)}">
        <option value="pt"${state.lang === 'pt' ? ' selected' : ''}>${escapeHtml(t.languagePt)}</option>
        <option value="en"${state.lang === 'en' ? ' selected' : ''}>${escapeHtml(t.languageEn)}</option>
      </select>
    </div>
    <button class="icon-button button-secondary" id="contrast-toggle" type="button" aria-pressed="${state.highContrast}" aria-label="${escapeHtml(state.highContrast ? t.contrastOff : t.contrastOn)}">
      <span aria-hidden="true">Aa</span>
      <span>${escapeHtml(state.highContrast ? t.contrastOff : t.contrastOn)}</span>
    </button>
  `;

  document.querySelector('#language-select').addEventListener('change', event => {
    state.lang = event.target.value;
    render();
    setStatus(`${getT().languageLabel}: ${state.lang === 'pt' ? getT().languagePt : getT().languageEn}.`);
  });

  document.querySelector('#contrast-toggle').addEventListener('click', () => {
    state.highContrast = !state.highContrast;
    render();
    setStatus(state.highContrast ? getT().contrastOn : getT().contrastOff);
  });
}

function renderStepNav() {
  const t = getT();
  const activeIndex = viewOrder.indexOf(state.currentView);
  stepNav.setAttribute('aria-label', t.stepNavLabel);
  stepNav.innerHTML = `
    <ol class="step-list">
      ${t.steps.map((label, index) => `
        <li class="step-item"${index === activeIndex ? ' aria-current="step"' : ''}>
          <span class="step-label">${index + 1}. ${escapeHtml(label)}</span>
        </li>
      `).join('')}
    </ol>
  `;
}

function renderWelcome() {
  const t = getT();
  app.innerHTML = `
    <div class="welcome-layout">
      <section class="panel hero-panel" aria-labelledby="welcome-title">
        <div class="panel-inner">
          <img class="hero-logo" src="assets/logo.svg" alt="" aria-hidden="true">
          <p class="eyebrow">${escapeHtml(t.welcomeEyebrow)}</p>
          <h2 class="page-title" id="welcome-title" tabindex="-1" data-focus-target aria-label="${escapeHtml(t.welcomeTitle)}">${renderBrandName()}</h2>
          <p class="section-lead">${escapeHtml(t.welcomeIntro)}</p>
          <div class="action-row">
            <button class="button button-primary" type="button" id="start-planning">${escapeHtml(t.welcomeAction)}</button>
          </div>
        </div>
      </section>

      <aside class="panel" aria-labelledby="welcome-feature-title">
        <div class="panel-inner">
          <h3 class="section-title" id="welcome-feature-title">${escapeHtml(t.welcomeFeatureTitle)}</h3>
          <ul class="feature-list">
            ${t.welcomeFeatures.map((feature, index) => `
              <li class="feature-item">
                <span class="feature-icon ${index === 1 ? 'accessible' : ''}" aria-hidden="true">${index + 1}</span>
                <span>
                  <strong class="item-title">${escapeHtml(feature[0])}</strong>
                  <span class="item-text">${escapeHtml(feature[1])}</span>
                </span>
              </li>
            `).join('')}
          </ul>
        </div>
      </aside>
    </div>
  `;

  document.querySelector('#start-planning').addEventListener('click', () => {
    setView('places', { focus: true });
  });
}

function renderPlaces() {
  const t = getT();
  const originError = state.errors.origin ? `${t.errorPrefix} ${state.errors.origin}` : '';
  const destinationError = state.errors.destination ? `${t.errorPrefix} ${state.errors.destination}` : '';

  app.innerHTML = `
    <section class="panel" aria-labelledby="places-title">
      <div class="panel-inner">
        <h2 class="section-title" id="places-title" tabindex="-1" data-focus-target>${escapeHtml(t.placesTitle)}</h2>
        <p class="section-lead">${escapeHtml(t.placesLead)}</p>
        <form id="places-form" novalidate>
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

          <div class="action-row">
            <button class="button button-primary" type="submit">${escapeHtml(t.continueButton)}</button>
            <button class="button button-ghost" type="button" id="places-back">${escapeHtml(t.backButton)}</button>
          </div>
        </form>
      </div>
    </section>
  `;

  document.querySelector('#origin-select').addEventListener('change', event => {
    state.origin = event.target.value;
  });

  document.querySelector('#destination-select').addEventListener('change', event => {
    state.destination = event.target.value;
  });

  document.querySelector('#places-back').addEventListener('click', () => {
    setView('welcome', { focus: true });
  });

  document.querySelector('#places-form').addEventListener('submit', event => {
    event.preventDefault();
    state.origin = document.querySelector('#origin-select').value;
    state.destination = document.querySelector('#destination-select').value;

    const errors = {};
    if (!state.origin) {
      errors.origin = t.originRequired;
    }

    if (!state.destination) {
      errors.destination = t.destinationRequired;
    }

    if (state.origin && state.destination && state.origin === state.destination) {
      errors.destination = t.samePlaceError;
    }

    state.errors = errors;

    if (Object.keys(errors).length > 0) {
      render(true);
      setStatus(Object.values(errors).map(error => `${t.errorPrefix} ${error}`).join(' '));
      return;
    }

    setView('profile', { focus: true });
  });
}

function renderLocationOptions(selectedValue) {
  const t = getT();
  return `
    <option value="">${escapeHtml(t.selectPlaceholder)}</option>
    ${locations.map(location => `
      <option value="${escapeHtml(location.id)}"${selectedValue === location.id ? ' selected' : ''}>
        ${escapeHtml(getLocationName(location))} - ${escapeHtml(getLocationType(location))}
      </option>
    `).join('')}
  `;
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
            <button class="button button-primary" type="submit">${escapeHtml(t.calculateRoute)}</button>
            <button class="button button-ghost" type="button" id="profile-back">${escapeHtml(t.backButton)}</button>
          </div>
        </form>
      </div>
    </section>
  `;

  document.querySelectorAll('input[name="profile"]').forEach(input => {
    input.addEventListener('change', event => {
      state.profile = event.target.value;
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
    state.currentRouteStep = 0;
    state.textMode = false;
    state.activeMarkerId = state.origin;
    setView('route', { focus: true });
    setStatus(t.routeCalculated);
  });
}

function buildRoute() {
  const origin = getLocation(state.origin);
  const destination = getLocation(state.destination);
  const template = routeTemplates[`${state.origin}|${state.destination}`];

  if (template) {
    return normalizeTemplateRoute(template, origin, destination);
  }

  return buildFallbackRoute(origin, destination);
}

function normalizeTemplateRoute(template, origin, destination) {
  return {
    namePt: translations.pt.routeSpecificNames[template.nameKey],
    nameEn: translations.en.routeSpecificNames[template.nameKey],
    originId: origin.id,
    destinationId: destination.id,
    distance: template.distance,
    timePt: template.timePt,
    timeEn: template.timeEn,
    accessibility: template.accessibility,
    summaryPt: template.summaryPt,
    summaryEn: template.summaryEn,
    path: template.path,
    alerts: template.alerts,
    landmarksPt: template.landmarksPt,
    landmarksEn: template.landmarksEn,
    steps: template.stepsPt.map((step, index) => ({
      textPt: step[0],
      accessPt: step[1],
      textEn: template.stepsEn[index][0],
      accessEn: template.stepsEn[index][1]
    }))
  };
}

function buildFallbackRoute(origin, destination) {
  const dx = destination.x - origin.x;
  const dy = destination.y - origin.y;
  const rawDistance = Math.hypot(dx, dy);
  const meters = Math.max(350, Math.round(rawDistance * 22));
  const minutes = Math.max(6, Math.round(meters / 75));
  const midpoint = {
    x: Math.round((origin.x + destination.x) / 2),
    y: Math.round((origin.y + destination.y) / 2)
  };

  return {
    namePt: translations.pt.defaultRouteName,
    nameEn: translations.en.defaultRouteName,
    originId: origin.id,
    destinationId: destination.id,
    distance: `${meters} m`,
    timePt: `${minutes} a ${minutes + 3} min`,
    timeEn: `${minutes} to ${minutes + 3} min`,
    accessibility: rawDistance > 24 ? 'routeAccessibleModerate' : 'routeAccessibleMedium',
    summaryPt: translations.pt.defaultRouteSummary,
    summaryEn: translations.en.defaultRouteSummary,
    path: [
      { x: origin.x, y: origin.y },
      { x: midpoint.x, y: midpoint.y },
      { x: destination.x, y: destination.y }
    ],
    alerts: ['partialShade', 'unevenFloor', 'textReference'],
    landmarksPt: [origin.namePt, 'Via interna do campus', destination.namePt],
    landmarksEn: [origin.nameEn, 'Campus internal road', destination.nameEn],
    steps: [
      {
        textPt: `Saia de ${origin.namePt} pelo acesso mais visível.`,
        accessPt: 'Confirme a sinalização local antes de iniciar.',
        textEn: `Leave ${origin.nameEn} through the most visible access point.`,
        accessEn: 'Check local signage before starting.'
      },
      {
        textPt: 'Siga pela via interna indicada no mapa.',
        accessPt: 'Use o modo texto se a imagem do mapa não for suficiente.',
        textEn: 'Follow the internal road indicated on the map.',
        accessEn: 'Use text mode if the map image is not enough.'
      },
      {
        textPt: 'Reduza o ritmo nos trechos com maior circulação.',
        accessPt: 'O percurso pode ter piso irregular em partes isoladas.',
        textEn: 'Slow down in areas with heavier circulation.',
        accessEn: 'The route may have uneven pavement in isolated parts.'
      },
      {
        textPt: `Continue até ${destination.namePt}.`,
        accessPt: 'Procure a entrada sinalizada mais próxima.',
        textEn: `Continue until ${destination.nameEn}.`,
        accessEn: 'Look for the nearest marked entrance.'
      }
    ]
  };
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
  const route = state.route;
  const origin = getLocation(route.originId);
  const destination = getLocation(route.destinationId);
  const profile = getProfile(state.profile);

  return {
    route,
    origin,
    destination,
    profile,
    name: state.lang === 'pt' ? route.namePt : route.nameEn,
    summary: state.lang === 'pt' ? route.summaryPt : route.summaryEn,
    time: state.lang === 'pt' ? route.timePt : route.timeEn,
    accessibility: tr(route.accessibility),
    landmarks: state.lang === 'pt' ? route.landmarksPt : route.landmarksEn,
    steps: route.steps.map(step => ({
      text: state.lang === 'pt' ? step.textPt : step.textEn,
      access: state.lang === 'pt' ? step.accessPt : step.accessEn
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
      <div class="map-wrap">
        <img class="map-image" src="assets/mapa_ufsc.jpg" alt="${escapeHtml(t.mapAlt)}">
        ${renderRouteSvg(routeView.route.path)}
        <div class="marker-layer" aria-label="${escapeHtml(t.placesAria)}">
          ${locations.map(location => renderMarker(location, routeView)).join('')}
        </div>
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
    <svg class="route-layer" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
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
  const shortLabel = isOrigin ? 'O' : isDestination ? 'D' : getLocationName(location).slice(0, 1);
  const ariaLabel = `${t.markerAria}: ${getLocationName(location)}, ${getLocationType(location)}, ${roleText}.`;

  return `
    <button class="map-marker${isOrigin ? ' origin' : ''}${isDestination ? ' destination' : ''}${isActive ? ' active' : ''}" type="button" data-location-id="${escapeHtml(location.id)}" style="left: ${location.x}%; top: ${location.y}%;" aria-label="${escapeHtml(ariaLabel)}">
      <span aria-hidden="true">${escapeHtml(shortLabel)}</span>
      ${visibleLabel ? `<span class="marker-tag">${escapeHtml(visibleLabel)}</span>` : ''}
    </button>
  `;
}

function bindMapMarkers(routeView) {
  document.querySelectorAll('.map-marker').forEach(marker => {
    const update = () => {
      const id = marker.dataset.locationId;
      state.activeMarkerId = id;
      document.querySelectorAll('.map-marker').forEach(item => {
        item.classList.toggle('active', item.dataset.locationId === id);
      });
      document.querySelector('#map-location-panel').innerHTML = renderLocationInfo(getLocation(id), routeView);
      setStatus(`${getT().locationSelected} ${getLocationName(getLocation(id))}.`);
    };

    marker.addEventListener('focus', update);
    marker.addEventListener('click', update);
  });
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
            <span class="metric-value">${escapeHtml(routeView.route.distance)}</span>
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

        ${renderAlerts(routeView.route.alerts)}
        ${renderInstructionPreview(routeView)}

        <div class="action-row">
          <button class="button button-secondary" type="button" id="toggle-text-mode">${escapeHtml(state.textMode ? t.hideTextRoute : t.showTextRoute)}</button>
          <button class="button button-primary" type="button" id="start-route">${escapeHtml(t.startRoute)}</button>
          <button class="button button-ghost" type="button" id="edit-route">${escapeHtml(t.editRoute)}</button>
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
          <dd class="item-text">${escapeHtml(routeView.route.distance)}</dd>
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
        <div class="action-row">
          <button class="button button-secondary" type="button" id="previous-route-step"${state.currentRouteStep === 0 ? ' disabled' : ''}>${escapeHtml(t.previousStep)}</button>
          <button class="button button-primary" type="button" id="next-route-step">${escapeHtml(state.currentRouteStep === total - 1 ? t.confirmArrival : t.nextStep)}</button>
          <button class="button button-ghost" type="button" id="navigation-map">${escapeHtml(t.viewMapAgain)}</button>
        </div>
      </article>
    </section>
  `;

  document.querySelector('#previous-route-step').addEventListener('click', () => {
    if (state.currentRouteStep > 0) {
      state.currentRouteStep -= 1;
      render(true);
      setStatus(formatTemplate(t.progressText, { current: state.currentRouteStep + 1, total }));
    }
  });

  document.querySelector('#next-route-step').addEventListener('click', () => {
    if (state.currentRouteStep === total - 1) {
      setView('complete', { focus: true });
      setStatus(t.arrivalMessage);
      return;
    }

    state.currentRouteStep += 1;
    render(true);
    setStatus(formatTemplate(t.progressText, { current: state.currentRouteStep + 1, total }));
  });

  document.querySelector('#navigation-map').addEventListener('click', () => {
    setView('route', { focus: true });
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
          <button class="button button-primary" type="button" id="new-route">${escapeHtml(t.newRoute)}</button>
          <button class="button button-secondary" type="button" id="view-map-again">${escapeHtml(t.viewMapAgain)}</button>
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
    setView('welcome', { focus: true });
  });

  document.querySelector('#view-map-again').addEventListener('click', () => {
    setView('route', { focus: true });
  });
}

render(true);
