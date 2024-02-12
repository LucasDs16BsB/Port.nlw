const perguntas = [
    {
      pergunta: "Oc que significa a sigla DOM em JavaScript?",
      respostas: [
        "Documento de Objeto Mínimo",
        "Modelo de Objeto do Documento",
        "Documento de Operações Múltiplas",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.log()",
        "print()",
        "log.console()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var x = 10;",
        "let x = 10;",
        "const x = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um operador ternário em JavaScript?",
      respostas: [
        "Um operador que realiza três operações simultaneamente",
        "Um operador que trabalha apenas com três valores",
        "Um operador que consiste em três partes: uma expressão, uma condição e outra expressão",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "convertToInt()",
        "stringToNumber()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é closure em JavaScript?",
      respostas: [
        "Um tipo de loop",
        "Um tipo de variável",
        "Uma função aninhada que tem acesso às variáveis de sua função externa",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Não há diferença, são equivalentes",
        " '==' compara apenas valores, '===' compara valores e tipos",
        " '===' compara apenas valores, '==' compara valores e tipos",
      ],
      correta: 1
    },
    {
      pergunta: "O que é JSON em JavaScript?",
      respostas: [
        "Uma função de manipulação de objetos",
        "Uma linguagem de programação",
        "Um formato de dados leve e de fácil leitura",
      ],
      correta: 2
    },
    {
      pergunta: "Como se chama a prática de combinar dois ou mais arrays em JavaScript?",
      respostas: [
        "Concatenação",
        "Fusão",
        "Combinação",
      ],
      correta: 0
    },
    {
      pergunta: "O que é AJAX em JavaScript?",
      respostas: [
        "Uma linguagem de script",
        "Um método para realizar requisições assíncronas",
        "Uma biblioteca de gráficos",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  