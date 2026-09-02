const perguntas = [
    {
        enunciado: "Imagine uma pessoa com deficiência visual que precisa ler um texto muito extenso para estudar. De que maneira a Inteligência Artificial poderia contribuir para tornar essa tarefa mais acessível?",

        alternativas: [
            {
                texto: "Transformando o texto em uma descrição ou narração por voz.",
                afirmacao: "Você percebeu que a IA pode transformar informações visuais e textos em áudio, facilitando o acesso ao conhecimento para pessoas com deficiência visual."
            },
            {
                texto: "Apenas aumentando o tamanho das letras.",
                afirmacao: "Você percebeu que aumentar as letras pode ajudar algumas pessoas, mas não resolve todas as dificuldades enfrentadas por quem possui deficiência visual."
            }
        ]
    },

    {
        enunciado: "Uma pessoa com deficiência auditiva está assistindo a uma aula pela internet, mas o vídeo não possui legendas. Como a IA poderia ajudar nessa situação?",

        alternativas: [
            {
                texto: "Gerando legendas automaticamente a partir da fala.",
                afirmacao: "Você identificou uma das possibilidades da IA para acessibilidade: transformar a fala em texto e facilitar o acompanhamento de vídeos e aulas."
            },
            {
                texto: "Fazendo a pessoa assistir ao vídeo sem nenhuma adaptação.",
                afirmacao: "Você percebeu que, sem recursos de acessibilidade, conteúdos em áudio podem criar uma barreira para pessoas com deficiência auditiva."
            }
        ]
    },

    {
        enunciado: "Pense em uma pessoa com dificuldade de comunicação. Ela precisa escrever uma mensagem para explicar o que está sentindo, mas encontra dificuldades para organizar as palavras. Como a IA poderia colaborar?",

        alternativas: [
            {
                texto: "Ajudando a organizar ideias e sugerindo formas de comunicação.",
                afirmacao: "Você entendeu que a IA pode funcionar como uma ferramenta de apoio à comunicação, ajudando a pessoa a expressar suas ideias com mais autonomia."
            },
            {
                texto: "Escrevendo tudo sozinha e decidindo o que a pessoa deve dizer.",
                afirmacao: "Você percebeu que a tecnologia deve apoiar a pessoa, e não substituir sua vontade, suas escolhas ou sua forma de se expressar."
            }
        ]
    },

    {
        enunciado: "Uma escola quer tornar suas atividades mais acessíveis para estudantes com diferentes tipos de deficiência. Qual seria uma utilização responsável da IA nesse contexto?",

        alternativas: [
            {
                texto: "Adaptar textos, atividades e explicações de acordo com diferentes necessidades.",
                afirmacao: "Você percebeu que a IA pode ajudar a personalizar materiais educacionais e contribuir para uma aprendizagem mais inclusiva."
            },
            {
                texto: "Criar uma única atividade igual para todos os estudantes.",
                afirmacao: "Você percebeu que pessoas diferentes podem ter necessidades diferentes e que a acessibilidade exige alternativas adequadas a cada situação."
            }
        ]
    },

    {
        enunciado: "Uma pessoa com deficiência física possui dificuldades para utilizar determinados dispositivos. Como tecnologias baseadas em IA poderiam aumentar sua autonomia?",

        alternativas: [
            {
                texto: "Reconhecendo comandos de voz e auxiliando no controle de dispositivos.",
                afirmacao: "Você entendeu que a IA pode facilitar a interação com tecnologias por meio de voz, reconhecimento de padrões e outros recursos assistivos."
            },
            {
                texto: "Exigindo que a pessoa utilize os dispositivos exatamente da maneira tradicional.",
                afirmacao: "Você percebeu que a tecnologia deve se adaptar às necessidades das pessoas, e não criar novas barreiras para quem precisa utilizá-la."
            }
        ]
    },

    {
        enunciado: "Apesar de seus benefícios, a Inteligência Artificial também pode apresentar riscos quando utilizada para acessibilidade. Qual atitude é mais importante?",

        alternativas: [
            {
                texto: "Utilizar a IA com responsabilidade, verificando informações e respeitando a autonomia da pessoa.",
                afirmacao: "Você concluiu que a IA pode ser uma grande aliada da inclusão quando é utilizada de maneira ética, responsável e respeitosa."
            },
            {
                texto: "Confiar completamente nas respostas da IA sem verificar nada.",
                afirmacao: "Você percebeu que a IA pode cometer erros e que suas respostas precisam ser analisadas, principalmente quando podem afetar a vida e os direitos das pessoas."
            }
        ]
    }
];


const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixaderesultados");
const textoResultado = document.querySelector(".texto-resultado");

let perguntaAtual = 0;
let resultadoFinal = [];


function mostrarPergunta() {

    if (perguntaAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    const pergunta = perguntas[perguntaAtual];

    caixaPerguntas.textContent = pergunta.enunciado;

    caixaAlternativas.innerHTML = "";

    pergunta.alternativas.forEach((alternativa) => {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.classList.add("botao-alternativa");

        botao.addEventListener("click", () => {

            resultadoFinal.push(alternativa.afirmacao);

            perguntaAtual++;

            mostrarPergunta();
        });

        caixaAlternativas.appendChild(botao);
    });
}


function mostrarResultado() {

    caixaPerguntas.style.display = "none";

    caixaAlternativas.style.display = "none";

    caixaResultado.style.display = "block";

    textoResultado.innerHTML = `
        <h2>Sua jornada pela acessibilidade com IA</h2>

        <p>
            Ao responder às perguntas, você refletiu sobre diferentes
            maneiras pelas quais a Inteligência Artificial pode contribuir
            para tornar a sociedade mais acessível e inclusiva.
        </p>

        <br>

        ${resultadoFinal.join("<br><br>")}

        <br><br>

        <p>
            A IA não deve substituir as pessoas. Ela deve ser utilizada
            como uma ferramenta para ampliar oportunidades, autonomia,
            comunicação e acesso à informação.
        </p>
    `;
}


mostrarPergunta();
