/**
 * Gerador de Slides - Posicionamento Badaro 2026
 *
 * Como usar:
 * 1. Acesse https://script.google.com
 * 2. Crie um novo projeto (Novo projeto)
 * 3. Cole todo este codigo no editor (substituindo o codigo existente)
 * 4. Clique em Salvar (Ctrl+S ou Cmd+S)
 * 5. No menu suspenso de funcoes, selecione: gerarApresentacao
 * 6. Clique em Executar
 * 7. Autorize o script quando solicitado
 * 8. A apresentacao sera criada no seu Google Drive
 */

var COR_MAGENTA = '#5F0033';
var COR_PINK    = '#FF1596';
var COR_BRANCO  = '#FFFFFF';
var COR_PRETO   = '#1A1A1A';
var COR_CINZA   = '#888888';

function gerarApresentacao() {
  var pres = SlidesApp.create('Posicionamento Badaro 2026 - Para Lideranca');
  pres.getSlides()[0].remove();

  slideCapa(pres,
    'Posicionamento Badaro 2026',
    'AI Emotion-driven Experience',
    'Para aprovacao da lideranca - Marco 2026'
  );

  slideConteudo(pres,
    'Essa reuniao tem um objetivo claro',
    'Apresentar o novo posicionamento da Badaro e obter alinhamento da lideranca para seguir com a implementacao.\n\nNos ultimos meses, revisamos nossa identidade verbal, mensagem e tom de forma sistematica. O que apresentamos aqui e o resultado desse trabalho - nao uma mudanca de nome ou visual, mas uma definicao precisa do que somos e do que queremos comunicar.',
    'NOTA: Deixar claro desde o inicio que o objetivo e aprovacao, nao debate aberto. A construcao ja foi feita - essa e a etapa de validacao e alinhamento.'
  );

  slideConteudo(pres,
    'O que os clientes esperam hoje',
    '- Velocidade de entrega nao e mais diferencial - e commodity\n- Projetos bem-feitos tecnicamente deixaram de ser criterio de escolha\n- Clientes buscam parceiros que entendam o contexto antes de propor solucoes\n- A onda de IA acelerou a producao de interfaces - mas nao resolveu experiencias que nao conectam\n\nO que ficou escasso: consultorias que integram pesquisa, design e tecnologia com profundidade metodologica real.',
    'NOTA: Esse slide nao e sobre crise - e sobre oportunidade. O mercado criou um espaco para quem tem o que a Badaro tem. Esse posicionamento ocupa esse espaco.'
  );

  slideConteudo(pres,
    '12 anos. Metodo consolidado. Resultado mensuravel.',
    '- 200+ projetos entregues em mais de uma decada\n- 80+ organizacoes orientadas em decisoes estrategicas\n- 15+ setores atendidos - de saude a varejo, de financas a servicos publicos\n- 5 disciplinas integradas: CX, UX, TX, BX, EX\n- 3 modelos de contratacao: Projetos, Squad as a Service, Outsourcing estrategico\n\nA Badaro nao e agencia. Nao e software house. E consultoria estrategica com profundidade metodologica e execucao integrada.',
    'ATENCAO: Confirmar os numeros antes da apresentacao - 200+, 80+, 15+ precisam de validacao com dados reais.'
  );

  slideConteudo(pres,
    'Tinhamos o trabalho. Faltava a narrativa.',
    'O que fazemos ja era diferenciado. O problema era como comunicavamos - ou nao comunicavamos.\n\nAntes: descricoes tecnicas por disciplina. Cada servico explicado separadamente. Sem um fio condutor que conectasse pesquisa, design e tecnologia a um resultado estrategico claro.\n\nAgora: um posicionamento que explica a logica por tras do trabalho. Uma mensagem que conecta o que fazemos ao porque fazemos. Uma voz que reflete quem somos de fato.\n\nO posicionamento nao muda o que entregamos. Torna legivel o valor do que ja entregamos.',
    ''
  );

  slideDestaque(pres,
    'AI Emotion-driven Experience',
    'Consultoria estrategica de design e tecnologia que, ha mais de 12 anos, orienta decisoes organizacionais a partir de experiencias reais.\n\nAtuamos na intersecao entre pesquisa, design e tecnologia - com emocao como criterio central de valor, conexao e desempenho.\n\nSobre o termo "AI Emotion-driven": nao e sobre inteligencia artificial como ferramenta. E sobre a integracao entre dado emocional e metodo analitico. IA e o contexto do mercado em que esse posicionamento se diferencia.',
    'NOTA: Antecipar a pergunta sobre "AI" - esclarecer antes que alguem pergunte.'
  );

  slideDestaque(pres,
    'Emocao nao e intuicao. E dado.',
    'Sinais emocionais sao mensuraveis. Podem ser identificados na jornada, quantificados por metodologias especificas e usados como criterio de projeto - da fase de pesquisa ate a decisao de tecnologia.\n\nQuando se sabe o que as pessoas sentem em cada ponto da experiencia, as decisoes mudam.\n\nEsse e o criterio que unifica pesquisa, design e tecnologia na Badaro. Nao como filosofia - como metodo.',
    'NOTA: Esta e a frase ancora. Se a lideranca lembrar de uma coisa dessa reuniao, que seja essa.'
  );

  slideConteudo(pres,
    'O que comunicamos, sempre',
    '1. Emocao como estrategia - dado emocional orienta decisoes, nao decora campanhas\n\n2. Experiencia como ponto de partida - a escuta real define o diagnostico antes de qualquer proposta\n\n3. Integracao entre pesquisa, design e tecnologia - tres disciplinas com uma logica compartilhada\n\n4. Parceria de longo prazo - trabalhamos dentro do contexto real do cliente, nao sobre ele\n\n5. Impacto mensuravel - cada projeto gera valor pratico com criterios claros',
    'NOTA: Esses pilares nao sao taglines - sao os temas que devem aparecer em todo material da empresa, do site a propostas comerciais.'
  );

  slideConteudo(pres,
    'O posicionamento ja esta nos materiais',
    'O trabalho de identidade verbal resultou em um sistema editorial completo - aplicado a todo o site, a apresentacao institucional e aos materiais comerciais.\n\nO que foi revisado:\n- Site institucional (todas as paginas principais)\n- Apresentacao institucional 2026 (22 slides)\n- Paginas internas de servico: CX, UX, TX, BX, EX\n\nO que ainda sera feito:\n- Pagina Metodo\n- Pagina Cases\n- AI Experience (conteudo em desenvolvimento)\n- Formulario de Contato (aguardando time comercial)',
    ''
  );

  slideConteudo(pres,
    'Quem somos quando falamos',
    'Personalidade da marca:\nEstrategica, Precisa, Proxima, Rigorosa, Humana\n\nArquetipos:\n- O Sabio (primario) - orienta com conhecimento, nao vende\n- O Parceiro (secundario) - constroi junto, respeita a cultura do cliente\n\nO que nunca usamos:\n- Superlativos vazios: "melhor", "revolucionario", "excelencia"\n- Urgencia artificial: "nao perca", "exclusivo", "agora"\n- Jargao tecnico sem contexto\n- Humildade excessiva - temos 12 anos e metodo; podemos afirmar isso',
    ''
  );

  slideConteudo(pres,
    'A diferenca na pratica',
    'ANTES -> DEPOIS\n\n"Oferecemos solucoes inovadoras de CX"\n-> "Desenhamos experiencias de cliente a partir da jornada real"\n\n"E um prazer apresentar nossa proposta"\n-> "Antes de propor qualquer solucao, entendemos o contexto"\n\n"Cinco disciplinas integradas. Uma visao estrategica."\n-> "Cinco disciplinas. Uma logica: a experiencia como ponto de partida."\n\n"Pronto para evoluir?"\n-> "Fale com quem entende o seu desafio"\n\nO padrao: especifico e ancorado em metodo real, nunca generico ou aspiracional vazio.',
    ''
  );

  slideConteudo(pres,
    'O que muda com esse posicionamento',
    'Para o comercial:\nPropostas com narrativa mais coerente. Diferenciacao clara em relacao a agencias e software houses. Argumento de valor que vai alem de portfolio.\n\nPara a marca:\nComunicacao unificada em todos os pontos de contato. Voz consistente do site ao WhatsApp.\n\nPara o time:\nClareza sobre o que a Badaro e - e o que nao e. Criterio para novos projetos, novas contratacoes e novas parcerias.\n\nPara o mercado:\nUma posicao legivel. Somos a consultoria que orienta decisoes a partir de experiencias reais.',
    ''
  );

  slideConteudo(pres,
    'A infraestrutura que sustenta a consistencia',
    'Para garantir que esse posicionamento nao seja diluido com o tempo, construimos um sistema editorial da marca.\n\nO que e o Content System:\n- 7 modulos: identidade verbal, voz, tom, mensagem e governanca\n- Referencia unica para qualquer conteudo criado pela Badaro\n- Responsabilidade centralizada: uma pessoa garante a consistencia\n\nO que ele resolve:\n- Comunicacao inconsistente entre times\n- Dependencia de quem escreveu bem em vez de criterio claro\n- Retrabalho em revisoes sem criterio definido\n\nO sistema nao e processo burocratico - e criterio editorial que escala.',
    ''
  );

  slideConteudo(pres,
    'O que acontece depois dessa reuniao',
    '1. Aprovacao do posicionamento - validacao da lideranca para seguir com implementacao\n\n2. Publicacao do site revisado - conteudo pronto, aguardando sinal verde\n\n3. Alinhamento do time comercial - briefing sobre nova narrativa e linguagem\n\n4. Finalizacao dos materiais pendentes - Metodo, Cases, AI Experience, Formulario\n\n5. Revisao periodica - o Content System preve ciclos de atualizacao para manter coerencia\n\nO que precisamos hoje: aprovacao para avancar.',
    ''
  );

  slideCapa(pres,
    'Experiencia que transforma relacoes em resultado',
    'Doze anos de metodo. Um posicionamento que finalmente representa o que sempre fizemos.',
    'Badaro - AI Emotion-driven Experience'
  );

  var url = pres.getUrl();
  Logger.log('Apresentacao criada: ' + url);
  Browser.msgBox('Apresentacao criada!', 'Acesse em:\n' + url, Browser.Buttons.OK);
}

// ============================================================
// FUNCOES AUXILIARES
// ============================================================

function slideCapa(pres, headline, subheadline, rodape) {
  var slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  var w = pres.getPageWidth();
  var h = pres.getPageHeight();

  slide.getBackground().setSolidFill(COR_MAGENTA);

  var t1 = slide.insertTextBox(headline, 60, h * 0.28, w - 120, 120);
  t1.getText().getTextStyle().setFontSize(40).setBold(true).setForegroundColor(COR_BRANCO);
  t1.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);

  var t2 = slide.insertTextBox(subheadline, 60, h * 0.52, w - 120, 60);
  t2.getText().getTextStyle().setFontSize(22).setForegroundColor(COR_PINK);
  t2.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);

  var t3 = slide.insertTextBox(rodape, 60, h * 0.82, w - 120, 40);
  t3.getText().getTextStyle().setFontSize(13).setForegroundColor(COR_BRANCO).setItalic(true);
  t3.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
}

function slideConteudo(pres, headline, body, nota) {
  var slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  var w = pres.getPageWidth();
  var h = pres.getPageHeight();

  slide.getBackground().setSolidFill(COR_BRANCO);

  var bar = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 0, 0, w, 8);
  bar.getFill().setSolidFill(COR_PINK);
  bar.getBorder().setTransparent();

  var t1 = slide.insertTextBox(headline, 40, 28, w - 80, 70);
  t1.getText().getTextStyle().setFontSize(24).setBold(true).setForegroundColor(COR_MAGENTA);

  var linha = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 40, 102, w - 80, 2);
  linha.getFill().setSolidFill(COR_PINK);
  linha.getBorder().setTransparent();

  var bodyH = (nota && nota.length > 0) ? h - 200 : h - 140;
  var t2 = slide.insertTextBox(body, 40, 116, w - 80, bodyH);
  t2.getText().getTextStyle().setFontSize(14).setForegroundColor(COR_PRETO);
  t2.setContentAlignment(SlidesApp.ContentAlignment.TOP);

  if (nota && nota.length > 0) {
    var t3 = slide.insertTextBox(nota, 40, h - 70, w - 80, 55);
    t3.getText().getTextStyle().setFontSize(11).setForegroundColor(COR_CINZA).setItalic(true);
  }
}

function slideDestaque(pres, headline, body, nota) {
  var slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  var w = pres.getPageWidth();
  var h = pres.getPageHeight();

  slide.getBackground().setSolidFill(COR_MAGENTA);

  var t1 = slide.insertTextBox(headline, 40, 40, w - 80, 100);
  t1.getText().getTextStyle().setFontSize(34).setBold(true).setForegroundColor(COR_PINK);

  var linha = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 40, 148, w - 80, 2);
  linha.getFill().setSolidFill(COR_PINK);
  linha.getBorder().setTransparent();

  var bodyH = (nota && nota.length > 0) ? h - 230 : h - 180;
  var t2 = slide.insertTextBox(body, 40, 162, w - 80, bodyH);
  t2.getText().getTextStyle().setFontSize(14).setForegroundColor(COR_BRANCO);
  t2.setContentAlignment(SlidesApp.ContentAlignment.TOP);

  if (nota && nota.length > 0) {
    var t3 = slide.insertTextBox(nota, 40, h - 60, w - 80, 50);
    t3.getText().getTextStyle().setFontSize(11).setForegroundColor('#FFAAD6').setItalic(true);
  }
}
