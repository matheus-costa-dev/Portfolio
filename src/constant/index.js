import { getRepos } from "./repo.js"

export const NAVBAR_CONTENT = {
  logo: "MC",
  links: {
    linkedin: "https://www.linkedin.com/in/matheus-pc/",
    github: "https://github.com/matheus-costa-dev",
    instagram: "https://www.instagram.com/costa_matheus000/",
    twitter: "https://x.com/mathe_16"
  }

}

export const HERO_CONTENT = {
  name: "Matheus Pereira Costa",
  title: "Data scientist Full Stack",
  brief: "Profissional com experiência em ciência de dados e desenvolvimento full stack, especializado em análise estatística, visualização de dados, automação de processos e criação de soluções integradas."
}

export const ABOUT_ME = `Em 2017, concluí o curso de inglês avançado, ampliando minhas habilidades de comunicação e aprendizado contínuo. Nos anos seguintes, mergulhei no mundo da tecnologia e análise de dados, desenvolvendo um olhar crítico para transformar informações em insights estratégicos.

Em 2023, formei-me em Administração pela Universidade Federal Fluminense (UFF), consolidando meu conhecimento em gestão e análise de negócios. Paralelamente, aprofundei minha experiência em desenvolvimento web e mobile, dominando tecnologias como Python, R, Node.js, HTML, CSS, Excel e Power BI.

Ao longo da minha trajetória, tenho aplicado estatística e programação para otimizar processos e apoiar a tomada de decisão. Minha paixão por tecnologia e dados me motiva a buscar soluções inovadoras, transformando desafios em oportunidades estratégicas.`

export const EXPERIENCES_CONTENT = [
  {
    company: "Freelancer",
    role: "Desenvolvedor Full Stack",
    year: "2023 - Atualmente",
    description: `Atuo como desenvolvedor Full Stack, combinando análise de dados e
desenvolvimento web para criar soluções completas e eficientes. Tenho
experiência em R e Python para análise de dados, utilizando Quarto para gerar
relatórios dinâmicos e interativos que facilitam a interpretação de informações
complexas.
No desenvolvimento web, trabalho com Node.js e React para criar aplicativos e
sites modernos e responsivos. Integro essas soluções com bancos de dados
como MySQL, PostgreSQL e Firebase, garantindo desempenho,
escalabilidade e segurança no armazenamento e gerenciamento de dados.`
  },
  {
    company: "ANCINE",
    role: "Estagiário de ciência de dados",
    year: "2021 - 2023",
    description: `Desenvolvimento de relatórios técnicos utilizando linguagens de programação, o que permitiu a automação de
processos e a apresentação de informações com maior precisão e eficiência.
Além disso, realizei análises de dados por meio de cálculos estatísticos
avançados, fornecendo embasamento sólido para a extração de insights e
a elaboração de estratégias organizacionais. Também atuei na criação de
gráficos e dashboards interativos, focados em proporcionar uma visualização
clara e eficiente dos dados, auxiliando na tomada de decisões estratégica.`
  },
  {
    company: "Universidade Federal Fluminense",
    role: "Estagiário de Administração",
    year: "2019 - 2020",
    description: `Realizei as atividades de: apoio técnico aos docentes, organização das salas
e marcações de reservas, atuei na parte arquivista também, separando entre
arquivos correntes, intermediários e finais (Guarda permanente e eliminação),
ajudei a realizar ao inventário da instituição, além de realizar expedições de
documentos para fora da unidade e responder e-mails.`
  },
  {
    company: "Hospital Getúlio Vargas Filho",
    role: "Assistente administrativo de RH",
    year: "2019 - 2021",
    description: `Realização de operações de atendimento aos funcionários, garantindo
suporte eficiente e fornecendo orientações necessárias para as demandas do
dia a dia. Atuação ativa nos processos seletivos, contribuindo para a
identificação e recrutamento dos melhores talentos disponíveis. Responsável
pelo cadastro de novos colaboradores no sistema de ponto biométrico,
assegurando o controle preciso de frequência. Além disso, inclui a coleta de
assinaturas em documentos essenciais e o arquivamento sistemático de toda
a documentação, garantindo a organização, a preservação dos registros e a
fácil acessibilidade no futuro`
  },
]


// export const PROJECTS_CONTENT = await getRepos("matheus-costa-dev")
export const PROJECTS_CONTENT = [
  {
    "name": "authPage",
    "description": "Aplicação de controle de acesso de usuários registrados",
    "url": "https://github.com/matheus-costa-dev/authPage",
    "langs": {
      "JavaScript": 0.987,
      "HTML": 0.012,
      "CSS": 0.001
    },
    "created": "2025-03-04T02:40:14.000Z",
    "updated": "2025-03-14T20:34:47.000Z",
    "homepage": "https://auth-page-gilt.vercel.app"
  },
  {
    "name": "churraspy",
    "description": "Aplicação que  visa calcular o que será necessário para realizar um churrasco. Os dados dos alimentos e bebidas são oriundos de um webscrapping feito no site do supermercado princesa e armazenado  no banco de dados",
    "url": "https://github.com/matheus-costa-dev/churraspy",
    "langs": {
      "Python": 0.442,
      "HTML": 0.347,
      "CSS": 0.122,
      "JavaScript": 0.089
    },
    "created": "2025-02-10T14:49:35.000Z",
    "updated": "2025-03-18T13:23:01.000Z",
    "homepage": "https://matheuspc.pythonanywhere.com/"
  },
  {
    "name": "Gerenciador-Tarefas",
    "description": "É uma aplicação simples construída com React para ajudar você a gerenciar suas tarefas diárias. Com ela, você pode adicionar, remover e marcar tarefas como concluídas de maneira prática e eficiente.",
    "url": "https://github.com/matheus-costa-dev/Gerenciador-Tarefas",
    "langs": {
      "JavaScript": 0.968,
      "HTML": 0.029,
      "CSS": 0.003
    },
    "created": "2025-03-02T23:45:54.000Z",
    "updated": "2025-03-14T13:43:05.000Z",
    "homepage": "https://gerenciador-tarefas-inky.vercel.app"
  },
  {
    "name": "One-Oracle",
    "description": "Um projeto o qual contêm todos os aprendizados do programa One da Oracle",
    "url": "https://github.com/matheus-costa-dev/One-Oracle",
    "langs": {
      "HTML": 0.372,
      "JavaScript": 0.33,
      "CSS": 0.298
    },
    "created": "2025-02-17T14:19:50.000Z",
    "updated": "2025-03-01T19:50:44.000Z",
    "homepage": "https://matheus-costa-dev.github.io/One-Oracle/"
  },
  {
    "name": "Portfolio",
    "description": "Uma aplicação web sobre meu portfolio com todas as tecnologias e técnicas mais recentes que aprendi",
    "url": "https://github.com/matheus-costa-dev/Portfolio",
    "langs": {
      "JavaScript": 0.97,
      "CSS": 0.016,
      "HTML": 0.014
    },
    "created": "2025-03-19T02:16:09.000Z",
    "updated": "2025-03-19T02:21:48.000Z",
    "homepage": null
  },
  {
    "name": "TCC",
    "description": "Tranalho de conclusão de curso aplicando a moderna teoria de portfolio no mercado de criptmoedas",
    "url": "https://github.com/matheus-costa-dev/TCC",
    "langs": {
      "R": 0.639,
      "TeX": 0.361
    },
    "created": "2025-02-16T23:56:20.000Z",
    "updated": "2025-03-08T01:48:25.000Z",
    "homepage": ""
  }
]


export const CONTACT_CONTENT = {
  Address: "Rua Waldir Tavares",
  city: "Itaipuaçu - Maricá",
  state: "Rio de Janeiro",
  country: "Brasil",
  Phone: "21964807239",
  email: "dev.matheuspc@gmail.com"
}