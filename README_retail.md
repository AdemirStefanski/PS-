# Grupo Permaneo
## Teste técnico para posições de Front-end

## Visão Geral

Você irá construir um site simples de cursos que simula um usuário já logado que comprou 3 dos 10 cursos disponíveis. O objetivo deste teste é avaliar suas habilidades em desenvolvimento frontend, incluindo roteamento, gerenciamento de estado e design de experiência do usuário, no fim deste arquivo estão à estrutura de dados e os wireframes de referência.

## Requisitos

1. **Página de Lista de Cursos**:
    
    - Exibir uma lista de 10 cursos.
    - Indicar quais cursos o usuário já comprou (3 cursos).
    - Cada curso deve ter um botão/link para "Acessar Curso".
2. **Acessando Cursos**:
    
    - Se o usuário comprou o curso, redirecioná-lo para uma "Página do Player do Curso".
    - Se o usuário não comprou o curso, redirecioná-lo para uma "Página de Detalhes do Curso".
3. **Página do Player do Curso**:
    
    - Exibir um player de vídeo.
    - Incluir opções para continuar assistindo ou reiniciar o curso.
4. **Página de Detalhes do Curso**:
    
    - Mostrar detalhes do curso, como título, descrição e preço.
    - Fornecer um CTA (Call To Action) para comprar o curso (não é necessário implementar a funcionalidade de compra).

## Detalhes Técnicos

- Use **React** para construir a aplicação, como usamos Nextjs internamente seria interessante que o projeto fosse desenvolvido da mesma forma
- Use **TypeScript** para garantir a segurança de tipos.
- Se julgar necessário utilize uma biblioteca de **gerenciamento de estado** (ex.: Redux, Context AP, Zustand, etc) para gerenciar dados do usuário e informações dos cursos.
- Garanta um design responsivo e acessível.

## Notas Adicionais

- Você é livre para usar qualquer biblioteca de UI ou framework CSS.
- Os dados para serem consumidos estão disponíveis nesse repositório no arquivo `data.json`
- Foque em um código limpo, manutenível e testável.
- Adicione comentários e documentação onde necessário.

## Submissão
Envie os dados abaixo para o recrutador que está em contato:
- Forneça um link para um repositório no GitHub com o seu código.
- Publique a aplicação em alguma plataforma como https://vercel.com/ ou qualquer outra que tiver familiaridade.
- Inclua um arquivo `README.md` no repositório explicando como rodar o projeto localmente(NPM, Docker ou afins)

## Critérios de Avaliação

- Qualidade e manutenibilidade do código.
- Uso adequado de React e TypeScript.
- Gerenciamento de estado efetivo.
- Experiência do usuário limpa e intuitiva.
- Design responsivo.
- Adesão às instruções.

## Melhorias Opcionais

- Adicione testes unitários para os principais componentes.
- Inclua animações ou transições para melhorar a experiência do usuário.
- Adicione a funcionalidade de "favoritar" um curso e os inclua em uma rota adicional de favoritos com um link para ela no header.

Estrutura de dados a ser usada:
```javascript
const cursos = [
  {
    "id": 1,
    "title": "Introdução à Programação com Python",
    "description": "Aprenda os fundamentos da programação utilizando Python, uma das linguagens mais populares e versáteis.",
    "price": 49.99,
    "created_at": "2023-01-15"
  },
  {
    "id": 2,
    "title": "Desenvolvimento Web com React",
    "description": "Construa interfaces modernas e interativas para a web utilizando React e suas melhores práticas.",
    "price": 69.99,
    "created_at": "2023-02-10"
  },
  {
    "id": 3,
    "title": "JavaScript Avançado",
    "description": "Aprofunde seus conhecimentos em JavaScript, abordando conceitos avançados e boas práticas.",
    "price": 59.99,
    "created_at": "2023-03-05"
  },
  {
    "id": 4,
    "title": "Desenvolvimento Mobile com React Native",
    "description": "Crie aplicativos móveis para Android e iOS utilizando React Native e compartilhando código entre as plataformas.",
    "price": 79.99,
    "created_at": "2023-03-20"
  },
  {
    "id": 5,
    "title": "Banco de Dados com SQL",
    "description": "Aprenda a criar, consultar e gerenciar bancos de dados utilizando SQL.",
    "price": 39.99,
    "created_at": "2023-04-01"
  },
  {
    "id": 6,
    "title": "DevOps para Desenvolvedores",
    "description": "Entenda os fundamentos de DevOps e como implementar práticas de integração e entrega contínuas.",
    "price": 89.99,
    "created_at": "2023-04-15"
  },
  {
    "id": 7,
    "title": "Desenvolvimento de APIs com Node.js",
    "description": "Construa APIs robustas e escaláveis utilizando Node.js e Express.",
    "price": 54.99,
    "created_at": "2023-05-10"
  },
  {
    "id": 8,
    "title": "Cibersegurança para Desenvolvedores",
    "description": "Aprenda práticas e conceitos essenciais de segurança cibernética para proteger suas aplicações.",
    "price": 74.99,
    "created_at": "2023-05-25"
  },
  {
    "id": 9,
    "title": "Desenvolvimento de Jogos com Unity",
    "description": "Crie jogos incríveis utilizando Unity, uma das engines mais populares do mercado.",
    "price": 99.99,
    "created_at": "2023-06-05"
  },
  {
    "id": 10,
    "title": "Machine Learning com Python",
    "description": "Introdução ao aprendizado de máquina utilizando bibliotecas como Scikit-Learn e TensorFlow.",
    "price": 109.99,
    "created_at": "2023-06-20"
  }
]

const user = {
  "id": 1,
  "name": "John Doe",
  "courses": [
    {
      "courseId": 1,
      "dateJoined": "2023-02-15"
    },
    {
      "courseId": 3,
      "dateJoined": "2023-03-10"
    },
    {
      "courseId": 5,
      "dateJoined": "2023-04-05"
    }
  ]
}
```

## Wireframes à serem utilizados como referência
![wireframe1](https://iili.io/2itC7jf.png)
![wireframe2](https://iili.io/2itCcCl.png)
![wireframe3](https://iili.io/2itCYQ4.png)

Boa sorte e bom código!
