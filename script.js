(() => {
  const contents = [];
  const flashcard = document.getElementById("flashcard");
  const title = document.querySelector("span.title");
  const content = document.querySelector("span.content");
  const backBtn = document.getElementById("backBtn");
  const goBtn = document.getElementById("goBtn");
  var counter = 0;
  const itemCounter = document.querySelector("span.itemCounter");

  function insertContent(title, content) {
    contents.push({ title: `"${title}"`, content: content });
  }

  function writeContent(topicArr) {
    title.innerHTML = `${topicArr[counter].title}<span class='hasScroll'>(Scroll)</span>`;
    content.innerText = topicArr[counter].content;
    itemCounter.innerText = counter + 1;

    //fala
    const speech=new SpeechSynthesisUtterance(topicArr[counter].content)
    const question=new SpeechSynthesisUtterance(topicArr[counter].title)
    
    speech.lang="pt-br"
    question.lang="pt-br"

    speech.rate=1.1
    question.rate=1.1
    
    window.speechSynthesis.speak(question)
    window.speechSynthesis.speak(speech)

    const hasScroll = title.querySelector("span.hasScroll");

    if (flashcard.clientHeight < flashcard.scrollHeight)
      hasScroll.classList.add("on");
    else hasScroll.classList.remove("on");
  }

  function changeContent(topicArr, action) {
    window.speechSynthesis.cancel()
    switch (action) {
      case "advance":
        counter++;
        break;
      case "return":
        counter--;
        break;
    }

    if (counter < 0) counter = 0;
    else if (counter >= topicArr.length) counter = topicArr.length - 1;

    writeContent(topicArr);
  }

  backBtn.addEventListener("click", () => changeContent(contents, "return"));
  goBtn.addEventListener("click", () => changeContent(contents, "advance"));

  /*
    Write your contents below this, I got no more ideas
  */

  //IA inserted this
  insertContent(
    "1. Qual foi o principal problema identificado?",
    `O problema central é a inexistência de uma plataforma centralizada para o acompanhamento e gestão dos estágios curriculares no IPDDF. O processo dependia de métodos manuais ou parcialmente informatizados, o que gerava dificuldades de comunicação entre os intervenientes, atrasos na avaliação, perda de documentos e um acompanhamento pouco eficiente dos estagiários.`,
  );

  insertContent(
    "2. Qual é a diferença entre problema e problemática?",
    `A diferença entre problemática e problema é que a problemática é o contexto geral da situaçãoque gera o problema, enquanto o problema é a questão central específica que a pesquisa pretende responder.`,
  );

  insertContent(
    "3. Qual é a questão científica do vosso trabalho?",
    `De que maneira a criação de uma aplicação web pode contribuir para a modernização e melhoria do acompanhamento e gestão de estágios no IPDDF?`,
  );

  insertContent(
    "4. O que é a questão científica?",
    `É a questão inicial, marca o referencial que lança o pesquisador ao seu trabalho de pesquisa.`,
  );

  insertContent(
    "5. O que é hipóteses?",
    `Hipótese é uma resposta que se sugere para uma questão proposta como problema de investigação.`,
  );

  insertContent(
    "6. Quias são as hipóteses do vosso trabalho?",
    `H1: A implementação de uma aplicação para gestão de estágios melhorará significativamente a eficiência dos processos administrativos relacionados ao controlo e acompanhamento dos estágios curriculares no IPDDF. H2: A utilização de uma aplicação reduzirá o tempo gasto em tarefas administrativas relacionadas à gestão de estágios, tornando o processo mais efficiente para os intervenientes. H3: A centralização das informações sobre o estágio numa única aplicação facilitará a comunicação entre as partes envolvidas e minimizará erros e perdas de dados.`,
  );

  insertContent(
    "7. Qual é a importância deste projecto?",
    `Este projecto é importante porque melhora todo o processo de acompanhamento e gestão de estágios. Com a aplicação, as informações ficam centralizadas num único sistema, reduzindo perdas de dados, melhorando a organização e facilitando a comunicação entre os intervenientes.`,
  );

  insertContent(
    "8. Qual foi a motivação do grupo para escolher este tema?",
    `A nossa principal motivação foi a observação das dificuldades reais enfrentadas pelo IPDDF na gestão de estágios. Percebemos que o processo manual causava falhas no acompanhamento dos alunos e dificuldades na comunicação com as empresas. Como estudantes de informática, vimos nisso uma oportunidade de aplicar os nossos conhecimentos técnicos para desenvolver uma solução que automatize e organize esse processo, contribuindo directamente para a melhoria do funcionamento da instituição.`,
  );

  insertContent(
    "9. Qual é o objectivo geral do vosso projecto?",
    `Objectivo geral do nosso tema é desenvolver uma aplicação web para facilitar o acompanhamento e a gestão dos estágios curriculares no IPDDF, visando melhorar a eficiência, organização e qualidade do processo de supervisão.`,
  );

  insertContent(
    "10. Quais são os objectivos específicos do vosso trabalho?",
    `Os objectivos específicos são: Rever a literatura existente relacionada com o tema em estudo, de forma a fundamentar teoricamente o desenvolvimento da aplicação; Avaliar o actual processo de acompanhamento e gestão de estágios no IPDDF, identificando as principais limitações e necessidades dos intervenientes; Analisar os requisitos funcionais e não funcionais necessários para o desenvolvimento da aplicação de acompanhamento de estágios curriculares; Testar a funcionalidade e a usabilidade da aplicação desenvolvida, no sentido de melhorar a eficiência, a organização e a qualidade no processo de supervisão de estágios.`,
  );

  insertContent(
    "11. Qual é a diferença entre objectivo geral e objectivos específicos?",
    `O objectivo geral representa a meta principal do projecto, ou seja, aquilo que se pretende alcançar de forma ampla. Já os objectivos específicos são etapas mais detalhadas que ajudam a atingir o objectivo geral.`,
  );

  insertContent(
    "12. Define estágio curricular.",
    `Estágio curricular é um processo de aprendizagem prática que visa complementar a formação académica, promovendo a integração entre teoria e prática.`,
  );

  insertContent(
    "13. Qual é a diferença entre acompanhamento e gestão de estágios?",
    `Acompanhamento é o processo de supervisão contínua do desempenho do estagiário. Gestão envolve planejar, organizar, dirigir e controlar todo o processo de estágio.`,
  );

  insertContent(
    "14. Define aplicação web.",
    `Aplicação web é um programa que reside num servidor e é acedido por meio de um navegador, permitindo que os utilizadores interajam com conteúdos dinâmicos e base de dados através da rede.`,
  );

  insertContent(
    "15. Define sistema de informação.",
    `Sistema de informação constituem uma área multidisciplinar que combina tecnologia, organizações e pessoas para recolher, filtrar, processar, criar e distribuir dados.`,
  );

  insertContent(
    "16. Quais são os componentes de um Sistema de Informação?",
    `Os componentes de um sistema de informação são: hardware, software, dados, redes e pessoas.`,
  );

  insertContent(
    "17. O que é software?",
    `Software é o conjunto de instruções e programas que permitem ao computador executar tarefas. É a parte lógica do sistema computacional.`,
  );

  insertContent(
    "18. Quais são as categorias de software?",
    `As categorias de software são: Software de sistema: controla e gere os recursos do hardware. Exemplos: Windows, Linux, Android. Software de aplicação: atende às necessidades específicas dos utilizadores. Exemplos: Microsoft Word, navegadores de internet. Software de programação: utilizado por desenvolvedores para criar outros programas. Exemplos: Python, Java, PHP, Visual Studio Code.`,
  );

  insertContent(
    "19. que é Engenharia de Software?",
    `Engenharia Software é a disciplina que aplica princípios de engenharia ao desenvolvimento de software, garantindo qualidade, organização e eficiência durante todo o ciclo de vida do sistema.`,
  );

  insertContent(
    "20. O que é ciclo de vida?",
    `Ciclo de vida é o conjunto de etapas que orientam o desenvolvimento do sistema, desde o planeamento até à manutenção.`,
  );

  insertContent(
    "21. Quais são as fases do ciclo de vida?",
    `As fases do ciclo de vida são: ✓ Planeamento Análise ✓ Projecto ✓ Implementação ✓ Testes ✓ Implantação ✓ Manutenção`,
  );

  insertContent(
    "22. Porque é importante adoptar boas práticas de desenvolvimento?",
    `Adopção de boas práticas é essencial para o sucesso de projectos de software, pois reduz a probabilidade de falhas, facilita a manutenção e aumenta a satisfação dos utilizadores`,
  );

  insertContent(
    "Por que escolheram HTML, CSS, JavaScript, PHP e MySQL?",
    `Escolhemos essas tecnologias porque: São open source (baixo custo); São amplamente utilizadas no desenvolvimento web; ✓ São compatíveis entre si; ✓ São adequadas ao contexto tecnológico da instituição.`,
  );

  insertContent(
    "23. Que tipo de pesquisa foi utilizado no vosso trabalho e porquê?",
    `Foi utilizada primariamente a pesquisa bibliográfica, que consiste no levantamento de referências teóricas já analisadas e publicadas por meios escritos e electrónicos, como livros, artigos científicos e páginas de websites. Esta abordagem foi essencial para fundamentar teoricamente o desenvolvimento da aplicação.`,
  );

  insertContent(
    "24. Qual foi o paradigma adoptado quanto à natureza da pesquisa?",
    `Foi adoptado o paradigma qualitativo como abordagem principal. Este paradigma preocupa-se em analisar e interpretar aspectos mais profundos, descrevendo a complexidade do comportamento e destacando investigações sobre hábitos, atitudes e tendências. Esta escolha justifica-se porque o trabalho procurou compreender em profundidade o processo de acompanhamento de estágios no IPDDF, identificando problemas e necessidades dos intervenientes.`,
  );

  insertContent(
    "25. Como classificam a vossa pesquisa quanto aos objectivos?",
    `O estudo enquadra-se como uma pesquisa aplicada e tecnológica. A pesquisa aplicada consiste na utilização prática do conhecimento científico para analisar problemas actuais e situações concretas. A pesquisa tecnológica corresponde à adaptação dos dados provenientes da investigação aplicada para produzir e aperfeiçoar métodos ou procedimentos novos. No caso do nosso trabalho, o conhecimento teórico foi aplicado para desenvolver uma solução tecnológica concreta para o IPDDF.`,
  );

  insertContent(
    "26. Quais técnicas de investigação utilizaram?",
    `As técnicas de investigação que foram utilizadas foram: ✓ Entrevista; ✓ Observação directa; ✓ Revisão bibliográfica.`,
  );

  insertContent(
    "27. Quais instrumentos de pesquisa utilizaram?",
    `Os instrumentos de que foram utilizados foram: ✓ Guião de entrevista; ✓ Grelha de observação; ✓ Aparelho de gravação.`,
  );

  insertContent(
    "28. O que é o Scrum e por que foi adoptado?",
    `Scrum é um framework ágil de gerenciamento de projectos de software que permite às equipas auto-organizarem-se e trabalharem em direcção a um objectivo em comum. Foi adoptado porque se adequa perfeitamente às necessidades do projecto, permitindo dividir o trabalho em partes menores, priorizar funcionalidades essenciais e entregar resultados de forma contínua. Oferece também maior flexibilidade perante mudanças e promove comunicação constante entre os intervenientes.`,
  );

  insertContent(
    "29. O que é uma Sprint no Scrum?",
    `Uma Sprint é um ciclo de desenvolvimento com duração definida e um objectivo específico. Antes de cada Sprint realiza-se o Sprint Planning para seleccionar os itens do Product Backlog a desenvolver. No final, é produzido um incremento, ou seja, uma parte do sistema completamente funcional e testada, permitindo avaliar o progresso de forma concreta.`,
  );

  insertContent(
    "30. Como aplicaram o SCRUM na prática?",
    `O SCRUM no nosso projecto foi aplicado da seguinte maneira: ✓ Dividimos o projeto em sprints. ✓ Estabelecemos tarefas semanais. ✓ Realizamos revisões internas. Ajustamos funcionalidades conforme evolução.`,
  );

  insertContent(
    "31. O que são requisitos funcionais? Dá exemplos dos que foram definidos para o Stagely.",
    `Os requisitos funcionais descrevem as funcionalidades e os serviços que o sistema deve disponibilizar aos utilizadores. Exemplos definidos para o Stagely: RF01: permitir autenticação de utilizadores (administrador e empresa) RF02: permitir ao administrador cadastrar, editar e excluir empresas RF03: permitir ao administrador atribuir alunos a uma empresa RF07: permitir à empresa submeter ficha de avaliação dos estagiários`,
  );

  insertContent(
    "32. que são requisitos não funcionais? Dá exemplos dos definidos para o Stagely.",
    `Os requisitos não funcionais especificam os critérios de qualidade e as restrições que o sistema deve respeitar. Exemplos definidos: RNF01: a aplicação deve ser desenvolvida para plataforma web RNF02: a interface deve ser intuitiva e responsiva para desktop, tablet e mobile RNF03: compatibilidade com Chrome, Safari, Firefox, Opera e Edge RNF04: autenticação obrigatória com controlo de acesso por perfil RNF05: utilização de criptografía para proteger as senhas`,
  );

  insertContent(
    "33. Como se chama a aplicação que desenvolveram e o que ela faz?",
    `A aplicação chama-se Stagely. É uma aplicação web criada para centralizar, organize e facilitar todo o processo de gestão e acompanhamento dos estágios curriculares. Permite que as instituições de ensino e as empresas interajam de forma estruturada, acompanhando todas as etapas do processo de estágio, desde a atribuição do estudante à empresa até à submissão da ficha de avaliação.`,
  );

  insertContent(
    "34. A quem se destina a aplicação Stagely?",
    `A aplicação destina-se a dois grupos principais de utilizadores: Instituições de ensino (Administrador): que acompanham e gerem os estágios dos alunos, podendo cadastrar empresas, atribuir alunos, acompanhar o estado dos estágios e consultar fichas de avaliação. Empresas: que recebem e avaliam os estagiários durante o período de estágio curricular, podendo visualizar os estagiários atribuídos e submeter fichas de avaliação.`,
  );

  insertContent(
    "35. O que é a UML e qual foi a sua importância no vosso projecto?",
    `A UML (Unified Modeling Language) é uma linguagem padrão utilizada para modelar, visualizar, especificar e documentar sistemas de informação. No nosso projecto foi importante porque permitiu representar graficamente a estrutura e o comportamento do sistema antes da implementação, tornando o desenvolvimento mais claro e eficiente.`,
  );

  insertContent(
    "36. O que representa o Diagrama de Caso de Uso do Stagely e quais são os actores?",
    `O Diagrama de Caso de Uso descreve as principais interacções entre os utilizadores e o sistema. No Stagely, os actores são o Administrador e a Empresa. O administrador pode fazer login, cadastrar empresa, consultar alunos, atribuir alunos à empresa, consultar estado do estágio e consultar ficha de avaliação. A empresa pode fazer login, visualizar estagiários, enviar ficha de avaliação e consultar estado de avaliação.`,
  );

  insertContent(
    "37. O que representa o Diagrama de Classes do Stagely?",
    `O Diagrama de Classes descreve a estrutura estática do sistema, mostrando as classes, atributos, métodos e os relacionamentos entre elas. No Stagely, as principais classes identificadas são: Aluno, Usuário, Escola, Empresa e Estágio. Por exemplo, a classe Escola possui métodos como criarConta(), listarAlunos(), atribuirEstagio() e listarRelatorios(). A classe Empresa possui métodos como enviarRelatorioDeAvaliacao() e listarEstagiarios().`,
  );

  insertContent(
    "38. O que representa o Diagrama de Actividade e o que mostra no vosso sistema?",
    `O Diagrama de Actividade descreve o comportamento dinâmico do sistema, mostrando o fluxo de actividades e decisões que ocorrem durante a execução de um processo. No Stagely, o diagrama mostra o fluxo completo desde o login do administrador, passando pelo cadastro de empresas e consulta de alunos, até à atribuição de alunos à empresa. Do lado da empresa, mostra a visualização dos alunos, o início formal do estágio e o envio da ficha de avaliação, terminando com o arquivamento dos dados na aplicação.`,
  );

  insertContent(
    "8. Para que servem os Diagramas de Sequência e quais foram elaborados?",
    `Os Diagramas de Sequência descrevem a interacção entre os elementos do sistema ao longo do tempo, evidenciando a ordem em que as mensagens são trocadas entre os actores e os objectos. No Stagely foram elaborados sete diagramas de sequência: ✓ Cadastrar empresa ✓ Atribuir alunos às vagas ✓ Consultar alunos ✓ Consultar estado de avaliação do estagiário ✓ Consultar estado do estágio ✓ Enviar ficha de avaliação ✓ Visualização de relatórios`,
  );

  insertContent(
    "39. O que é o Diagrama Entidade-Relacionamento e o que representa no Stagely?",
    `O Diagrama Entidade-Relacionamento (DER) é uma representação gráfica que mostra as entidades de um sistema, os seus atributos e os relacionamentos entre elas. No Stagely, o DER representa todas as tabelas da base de dados e as suas relações, incluindo entidades como: estagiários, empresas, alunos, cursos, usuários, avaliações, estágios, horários, escola, encarregado, entre outras. Serve para modelar a estrutura lógica da base de dados, facilitando a compreensão de como os dados estão organizados e interconectados.`,
  );

  insertContent(
    "40. A aplicação atingiu os objectivos propostos? Justifica.",
    `Sim, a aplicação atingiu os objectivos propostos. Permitiu centralizar informações dos estagiários, facilitar a atribuição de alunos às empresas e possibilitar o acompanhamento do progresso dos estágios, além do acesso às fichas de avaliação. Todas as funcionalidades essenciais foram implementadas e testadas com sucesso, incluindo consulta de alunos, gestão de empresas e submissão de fichas de avaliação. O sistema apresentou bom desempenho durante os testes e funciona de forma estável em diferentes navegadores e dispositivos.`,
  );

  insertContent(
    "41. Que limitações foram identificadas na aplicação?",
    `As principais limitações identificadas foram: Necessidade de integração futura com sistemas internos da instituição para automatizar a importação de dados dos alunos, evitando inserção manual A geração de relatórios avançados ainda não está automatizada A aplicação não foi implementada em ambiente de produção real, apenas em ambiente local com XAMPP Os testes foram realizados apenas pela equipa de desenvolvimento, sem utilizadores reais`,
  );

  insertContent(
    "42. As hipóteses do trabalho foram confirmadas? Explica.",
    `Sim, as três hipóteses foram confirmadas: H1 foi confirmada porque a aplicação melhorou significativamente a eficiência dos processos administrativos, centralizando toda a gestão numa única plataforma digital. H2 foi confirmada porque a digitalização reduziu o tempo gasto em tarefas como recolha manual de fichas de avaliação e deslocações desnecessárias às empresas. H3 foi confirmada porque a centralização das informações numa única aplicação facilitou a comunicação entre escola e empresas e minimizou erros e perdas de dados.`,
  );

  insertContent(
    "43. Como garantir integridade dos dados?",
    `É possível garantir a integridade dos dados através do: ✓ Uso de chaves primárias e estrangeiras ✓ Validações no backend ✓ Restrições no banco de dados ✓ Controle de permissões`,
  );

  insertContent(
    "44. Como protegeram o sistema contra SQL Injection?",
    `Protegemos o sistema contra o SQL Injection através da: ✓ Validação e sanitização de entradas ✓ Uso de prepared statements ✓ Restrição de permissões no banco de dados`,
  );

  insertContent(
    "45. Qual é a arquitetura do sistema desenvolvido?",
    `O sistema segue o modelo cliente-servidor, onde: O frontend foi desenvolvido com HTML, CSS e JavaScript. O backend foi desenvolvido em PHP. A configuração e persistência dos dados é feita através de banco de dados relacional utilizando SQL. A comunicação ocorre através de requisições HTTP entre navegador e servidor.`,
  );

  insertContent(
    "46. Quais foram os principais benefícios da aplicação?",
    `Os principais beneficios da aplicação foram: ✓ Organização das informações ✓ Melhor comunicação ✓ Centralização dos dados ✓ Maior controlo dos estágios`,
  );

  insertContent(
    "47. Quais foram as limitações do projeto?",
    `A principal limitação foi a necessidade futura de integração com sistemas internos da instituição para automatizar importação de dados.`,
  );

  insertContent(
    "48. O sistema está pronto para uso real?",
    `Ele está funcional e testado em ambiente académico, mas para implementação oficial seriam necessários testes adicionais, ajustes de segurança e validação institucional.`,
  );

  insertContent(
    "49. Vocês atingiram os objetivos propostos?",
    `Sim. Conseguimos: ✓ Avaliar o processo actual; ✓ Desenvolver a aplicação; ✓ Testar funcionalidades e usabilidade; ✓ Identificar melhorias necessárias.`,
  );

  insertContent(
    "50. O que é um banco de dados?",
    `É um conjunto organizado de dados relacionados, armazenados de forma estruturada para facilitar consulta, inserção e actualização.`,
  );

  insertContent(
    "51. Como funciona a comunicação entre frontend e backend?",
    `O frontend envia dados através de formulários ou requisições HTTP (GET/POST). O PHP processa esses dados no servidor, interage com o banco de dados e retorna a resposta ao navegador.`,
  );

  insertContent(
    "52. O que é chave primária?",
    `É o campo que identifica unicamente cada registo numa tabela.`,
  );

  insertContent(
    "53. O que é chave estrangeira?",
    `É um campo que cria ligação entre duas tabelas, garantindo integridade referencial.`,
  );

  insertContent(
    "54. Como garantiram a segurança do sistema?",
    `Garantimos a segurança do sistema através de: ✓ Login obrigatório ✓ Validação de campos ✓ Controle de acesso por tipo de usuário ✓ Organização adequada da base de dados ✓ Criptografia das senhas ✓ Utilizamos boas práticas para evitar vulnerabilidades como SQL Injection.`,
  );

  insertContent(
    "55. que é criptografia?",
    `É o processo de transformar informações em formato protegido para evitar acessos não autorizados.`,
  );

  insertContent(
    "56. que é MVC?",
    `MVC é uma arquitectura de desenvolvimento de software que organiza a aplicação em três partes: ✓ Model (Modelo): responsável pelos dados e regras do sistema; ✓ View (Visão): responsável pela interface que o utilizador vê; ✓ Controller (Controlador): faz a ligação entre o Model e a View.`,
  );

  insertContent(
    "57. O que é variável?",
    `Variável é um espaço utilizado para armazenar dados que podem mudar durante a execução do programa.`,
  );

  insertContent(
    "58. O que é Classe?",
    `Classe é uma estrutura que define características e comportamentos de um objecto.`,
  );

  insertContent(
    "59. O que é Objecto?",
    `Objecto é uma instância de uma classe, ou seja, um elemento criado a partir dela.`,
  );

  insertContent(
    "60. O que é POO?",
    `POO é um paradigma de programação baseado em objectos, utilizado para organizar melhor o código e representar elementos do mundo real dentro do sistema.`,
  );

  insertContent(
    "61. O que é Atributo?",
    `Atributo é uma característica de uma classe.`,
  );

  insertContent(
    "62. O que é Método?",
    `Método é uma função pertencente a uma classe.`,
  );

  insertContent(
    "63. O que é Encapsulamento?",
    `Encapsulamento é o processo de proteger os dados da classe, controlando o acesso através de métodos.`,
  );

  insertContent(
    "64. O que é Herança?",
    `Herança é quando uma classe herda características e métodos de outra classe.`,
  );

  insertContent(
    "65. O que é Polimorfismo?",
    `Polimorfismo é a capacidade de um método ter comportamentos diferentes.`,
  );

  /*
    Insert all your stuff between these comments
  */

  document.addEventListener("DOMContentLoaded", () => writeContent(contents));
})();
