# Instruções para o Codex: UFSC Acessível, mapa interativo com rotas inclusivas

Crie um site funcional, navegável e com aparência profissional chamado “UFSC Acessível”. O objetivo é desenvolver um protótipo de IHC para ajudar pessoas a encontrar rotas dentro do Campus Reitor João David Ferreira Lima, da UFSC Trindade, em Florianópolis, considerando diferentes necessidades de acessibilidade.

O site deve usar a imagem `mapa_ufsc.jpg` como base visual do mapa do campus. A imagem deve ficar em uma pasta `assets`, com o caminho:

`assets/mapa_ufsc.jpg`

Caso o arquivo ainda não exista no projeto, crie a estrutura esperando esse arquivo. Não use backend. Todos os dados devem ser mockados em JavaScript.

## Objetivo do protótipo

O usuário deve conseguir completar um fluxo inteiro:

1. Escolher um ponto de origem no campus.
2. Escolher um destino.
3. Informar seu perfil de acessibilidade ou preferência de navegação.
4. Visualizar a melhor rota sugerida no mapa.
5. Ler instruções passo a passo.
6. Ver alertas de acessibilidade da rota.
7. Confirmar que chegou ao destino.
8. Receber uma tela final de conclusão.

O fluxo precisa ter início, meio e fim. Não crie login, cadastro ou qualquer tela fora do fluxo principal.

## Tecnologias

Use HTML, CSS e JavaScript puro.

Crie os arquivos:

```txt
index.html
styles.css
script.js
assets/mapa_ufsc.jpg
README.md
```

Não use React, Vue, Angular, Tailwind, Bootstrap ou bibliotecas externas. O projeto deve abrir diretamente no navegador ao clicar em `index.html`. Os arquivos HTML, CSS e JS devem estar dentro de pastas de forma organizada, não "soltos".

## Conceito do produto

O site deve parecer um produto real da UFSC para orientação acessível no campus. Ele deve ajudar visitantes, estudantes, servidores e pessoas estrangeiras a se deslocarem com mais autonomia.

Nome do produto:

`UFSC Acessível`

Subtítulo:

`Rotas inclusivas pelo campus Trindade`

## Idiomas obrigatórios

O idioma padrão deve ser português do Brasil.

Implemente troca de idioma entre:

* PT-BR
* EN

A troca de idioma deve estar disponível em todas as etapas do fluxo, sempre no topo da interface.

A troca não pode ser apenas visual. Todos os textos devem mudar, incluindo:

* títulos
* botões
* rótulos
* placeholders
* mensagens de erro
* instruções da rota
* alertas
* textos da confirmação
* textos do modo acessível
* labels ARIA

Use um objeto JavaScript de traduções, por exemplo:

```js
const translations = {
  pt: {},
  en: {}
}
```

Não deixe nenhum texto fixo no HTML que não seja traduzido pelo JavaScript.

## Estrutura da interface

A interface deve ser uma aplicação de página única, com etapas visíveis por estado.

Crie as seguintes etapas:

### Etapa 1: Boas-vindas

Deve apresentar:

* nome do produto
* explicação curta do objetivo
* botão “Planejar rota”
* opção de idioma no topo
* botão para ativar “Modo alto contraste”
* link “Pular para o conteúdo principal”

### Etapa 2: Escolha da origem e destino

Deve apresentar:

* campo select para origem
* campo select para destino
* botão “Continuar”
* validação caso origem ou destino não sejam selecionados
* validação caso origem e destino sejam iguais

Locais mockados:

```js
[
  {
    id: "reitoria",
    namePt: "Reitoria",
    nameEn: "Rector's Office",
    typePt: "Unidade administrativa",
    typeEn: "Administrative unit",
    x: 56,
    y: 60
  },
  {
    id: "biblioteca",
    namePt: "Biblioteca Central",
    nameEn: "Central Library",
    typePt: "Biblioteca",
    typeEn: "Library",
    x: 49,
    y: 45
  },
  {
    id: "ru",
    namePt: "Restaurante Universitário",
    nameEn: "University Restaurant",
    typePt: "Alimentação",
    typeEn: "Food service",
    x: 45,
    y: 62
  },
  {
    id: "hu",
    namePt: "Hospital Universitário",
    nameEn: "University Hospital",
    typePt: "Saúde",
    typeEn: "Health service",
    x: 62,
    y: 32
  },
  {
    id: "ctc",
    namePt: "Centro Tecnológico",
    nameEn: "Technology Center",
    typePt: "Centro de ensino",
    typeEn: "Academic center",
    x: 67,
    y: 51
  },
  {
    id: "cse",
    namePt: "Centro Socioeconômico",
    nameEn: "Socioeconomic Center",
    typePt: "Centro de ensino",
    typeEn: "Academic center",
    x: 35,
    y: 43
  },
  {
    id: "cfh",
    namePt: "Centro de Filosofia e Ciências Humanas",
    nameEn: "Center of Philosophy and Human Sciences",
    typePt: "Centro de ensino",
    typeEn: "Academic center",
    x: 31,
    y: 65
  },
  {
    id: "cce",
    namePt: "Centro de Comunicação e Expressão",
    nameEn: "Communication and Expression Center",
    typePt: "Centro de ensino",
    typeEn: "Academic center",
    x: 39,
    y: 50
  },
  {
    id: "centro_eventos",
    namePt: "Centro de Cultura e Eventos",
    nameEn: "Culture and Events Center",
    typePt: "Eventos",
    typeEn: "Events",
    x: 53,
    y: 60
  }
]
```

Use os valores `x` e `y` como porcentagens para posicionar marcadores sobre a imagem do mapa.

### Etapa 3: Perfil de acessibilidade

O usuário deve escolher um perfil:

* Rota com menos escadas
* Rota com menos inclinação
* Rota com mais pontos de descanso
* Rota com instruções simplificadas
* Rota para baixa visão
* Rota padrão

Cada opção deve ser um card selecionável acessível por teclado. Use radio buttons reais, não apenas divs clicáveis.

Mostre uma breve descrição para cada perfil.

Exemplo:

`Rota com menos escadas: prioriza caminhos planos, rampas e travessias mais seguras.`

### Etapa 4: Resultado da rota

Mostre:

* mapa com a imagem `mapa_ufsc.jpg`
* marcadores da origem e destino
* linha visual simulando a rota entre os pontos
* card com resumo da rota
* tempo estimado
* distância estimada
* nível de acessibilidade
* lista de alertas
* instruções passo a passo
* botão “Iniciar rota”
* botão “Voltar e alterar”

A rota pode ser simulada com base nos dados mockados. Não precisa ser geograficamente perfeita, mas deve parecer coerente com o mapa.

Crie pelo menos 4 (mas pode ser mais) rotas mockadas específicas:

1. Biblioteca Central para Restaurante Universitário
2. Reitoria para CTC
3. CSE para Biblioteca Central
4. Centro de Cultura e Eventos para Hospital Universitário

Se o usuário selecionar uma combinação sem rota específica, gere uma rota padrão com base nos pontos escolhidos.

Alertas possíveis:

* Trecho com travessia de veículos
* Caminho com sombra parcial
* Possível trecho com piso irregular
* Rota recomendada para cadeira de rodas
* Há ponto de descanso próximo
* Evite este trecho em dias de chuva
* Ambiente com grande circulação de pessoas

Importante: os alertas não podem depender apenas de cor. Cada alerta deve ter ícone, texto e, se necessário, uma etiqueta textual como “Atenção”, “Informação” ou “Acessível”.

### Etapa 5: Modo passo a passo

Depois que o usuário clicar em “Iniciar rota”, mostre uma tela com instruções em cards sequenciais.

Cada passo deve ter:

* número do passo
* instrução curta
* informação de acessibilidade
* botão “Próximo passo”
* botão “Voltar ao passo anterior”

Exemplo de instruções:

1. Saia da Biblioteca Central pela entrada principal.
2. Siga pela via interna em direção ao Restaurante Universitário.
3. Atravesse pela faixa sinalizada.
4. Continue pelo caminho com menor inclinação.
5. Você chegou ao Restaurante Universitário.

A cada avanço, atualize uma barra de progresso textual e visual. A barra não pode depender apenas da cor. Use também texto como “Passo 2 de 5”.

### Etapa 6: Confirmação de chegada

Mostre uma tela final com:

* mensagem de sucesso
* origem
* destino
* perfil escolhido
* resumo da rota
* botão “Planejar nova rota”
* botão “Ver mapa novamente”

Mensagem em português:

`Você chegou ao destino. Rota concluída com sucesso.`

Mensagem em inglês:

`You have arrived at your destination. Route completed successfully.`

## Requisitos de acessibilidade

A acessibilidade é o principal critério do trabalho. Implemente de verdade, não apenas como aparência.

### Contraste

Use cores com contraste alto. O padrão visual deve seguir no mínimo WCAG AA. Se possível, use contraste AAA nos textos principais.

Sugestão de paleta:

* fundo principal: `#F8FAFC`
* texto principal: `#0F172A`
* texto secundário: `#334155`
* azul UFSC acessível: `#005A9C`
* azul escuro: `#003B66`
* verde acessível: `#007A5E`
* amarelo de alerta com texto escuro: `#FACC15`
* vermelho acessível: `#B91C1C`
* borda: `#CBD5E1`
* foco: `#FFB703`

Crie também modo alto contraste com fundo escuro e texto claro.

### Navegação por teclado

Todo o fluxo deve funcionar por teclado.

Garanta:

* ordem lógica de tabulação
* `:focus-visible` bem destacado
* nenhum elemento interativo sem foco
* cards selecionáveis com radio buttons reais
* botões e selects acessíveis
* tecla Enter ou Space funcionando nos elementos interativos nativos
* link “Pular para o conteúdo principal”

### Leitores de tela

Use HTML semântico:

* `header`
* `main`
* `section`
* `nav`
* `form`
* `fieldset`
* `legend`
* `button`
* `label`
* `ol`
* `ul`

Use atributos quando fizer sentido:

* `aria-live="polite"` para mensagens de erro e mudança de etapa
* `aria-current="step"` no indicador de etapa atual
* `aria-label` em botões de ícone
* `alt` descritivo para a imagem do mapa
* `aria-describedby` para descrições de campos e perfis

Inclua uma região de status para leitores de tela informando mudanças importantes, por exemplo:

`Rota calculada com sucesso. Revise os detalhes antes de iniciar.`

### Feedback sem depender só de cor

Erros devem ter:

* texto claro
* ícone ou prefixo textual
* associação ao campo correspondente

Exemplo:

`Erro: selecione um destino diferente da origem.`

Alertas devem ter:

* ícone
* texto
* categoria escrita

Exemplo:

`Atenção: trecho com travessia de veículos.`

### Zoom e responsividade

A interface deve funcionar bem em:

* desktop
* tablet
* celular

Use layout responsivo com CSS Grid e Flexbox.

O site não pode quebrar com zoom de 200%.

No celular, o mapa pode aparecer acima e os controles abaixo. Em telas grandes, use layout em duas colunas: mapa de um lado, painel de rota do outro.

### Modo texto do mapa

Como a imagem do mapa pode ser difícil para leitores de tela, implemente um botão:

`Ver rota em modo texto`

Esse modo deve mostrar a rota sem depender da imagem, com:

* origem
* destino
* distância
* tempo
* passos numerados
* alertas
* pontos de referência

Isso é obrigatório.

## Design visual

O resultado deve ter aparência de produto real.

Estilo desejado:

* limpo
* institucional
* moderno
* acessível
* com bastante espaço em branco
* sem poluição visual
* cards bem organizados
* botões grandes e claros
* hierarquia visual forte

Use fonte do sistema:

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Não use textos pequenos demais. O corpo do texto deve ter pelo menos `1rem`.

## Mapa interativo

A imagem `mapa_ufsc.jpg` deve aparecer dentro de um container responsivo.

Sobre a imagem, posicione os marcadores usando `position: absolute` e coordenadas percentuais.

Cada marcador deve ser um botão acessível com:

* nome do local
* tipo do local
* `aria-label` traduzido

Ao clicar ou focar em um marcador, mostre um pequeno card com informações do local.

A rota deve ser desenhada com SVG sobre o mapa ou com uma linha CSS entre origem e destino. Prefira SVG para permitir melhor responsividade.

A linha da rota deve ter padrão visual que não dependa só de cor, por exemplo:

* linha sólida grossa
* pontos intermediários
* legenda textual
* origem e destino com etiquetas escritas

## Aplicação de conceitos de IHC

Inclua no README uma seção curta chamada “Justificativa de IHC e acessibilidade”.

Explique que o protótipo aplica:

* visibilidade do estado do sistema
* prevenção de erros
* consistência visual e textual
* reconhecimento em vez de memorização
* redução de carga cognitiva
* controle e liberdade do usuário
* ergonomia física por botões grandes e navegação por teclado
* ergonomia cognitiva por fluxo guiado e instruções curtas
* acessibilidade por contraste, semântica, foco visível, modo texto, i18n e feedback textual

## README

Crie um `README.md` com:

1. Nome do projeto.
2. Descrição curta.
3. Problema resolvido.
4. Fluxo principal.
5. Recursos de acessibilidade implementados.
6. Internacionalização implementada.
7. Como executar.
8. Justificativa de IHC e acessibilidade.
9. Observação de que os dados são mockados e não representam rotas oficiais da UFSC.

Inclua esta observação:

`Este protótipo utiliza dados simulados para fins acadêmicos. As rotas apresentadas não devem ser usadas como orientação oficial de acessibilidade da UFSC.`

## Validações obrigatórias

Implemente validações no JavaScript:

* não permitir continuar sem origem
* não permitir continuar sem destino
* não permitir origem igual ao destino
* não permitir avançar sem escolher perfil de acessibilidade

As mensagens devem aparecer na tela e também serem anunciadas em `aria-live`.

## Critérios de aceite

O projeto só estará pronto se cumprir todos estes itens:

* O usuário consegue concluir uma rota do início ao fim.
* A imagem do mapa da UFSC aparece e é usada como base visual.
* Existem marcadores interativos sobre o mapa.
* Existe uma rota visual entre origem e destino.
* Existe uma alternativa textual completa para a rota.
* Existe troca de idioma PT-BR e EN em todas as etapas.
* Todos os textos mudam ao trocar idioma.
* A interface funciona sem backend.
* A interface funciona por teclado.
* O foco visível aparece em todos os elementos interativos.
* Há modo alto contraste.
* Há feedback textual para erros e alertas.
* O layout é responsivo.
* O projeto tem aparência profissional.
* Não existem telas vazias.
* Não existem botões sem função.
* Não existem textos “Lorem ipsum”.
* O README explica as decisões de IHC e acessibilidade.

## Importante

Não crie um site genérico de mapa. O foco é um protótipo de IHC com acessibilidade e internacionalização.

Não faça apenas uma imagem com botões. O site precisa ter fluxo completo, estados de navegação, validações, feedbacks, i18n e conclusão da tarefa.

Não use dados reais de acessibilidade se não houver fonte oficial. Use dados mockados e deixe claro no README que são dados simulados para fins acadêmicos.

Gere o projeto completo agora.
