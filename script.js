// Mudança do background-color do header com scroll

const header = document.querySelector("header")

window.addEventListener ("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
})

// Criação dos depoimentos

const depoimentos = [
  {
    nome: "Ana Silva",
    comentario: "Excelente profissional"
  },
  {
    nome: "Carlos Oliveira",
    comentario: "Profissional muito competente e atencioso"
  },
  {
    nome: "Mariana Santos",
    comentario: "Fiquei muito satisfeita com o resultado"
  },
  {
    nome: "João Pereira",
    comentario: "Excelente atendimento e ótimo trabalho"
  },
  {
    nome: "Juliana Costa",
    comentario: "Superou todas as minhas expectativas"
  },
  {
    nome: "Rafael Almeida",
    comentario: "Profissionalismo e qualidade do início ao fim"
  },
  {
    nome: "Fernanda Souza",
    comentario: "Recomendo muito, trabalho impecável"
  },
  {
    nome: "Lucas Rodrigues",
    comentario: "Muito profissional e sempre disposto a ajudar"
  },
  {
    nome: "Camila Ferreira",
    comentario: "Adorei o resultado, ficou melhor do que imaginava"
  },
  {
    nome: "Bruno Martins",
    comentario: "Excelente experiência, recomendo sem dúvidas"
  },
  {
    nome: "Patrícia Gomes",
    comentario: "Atendimento excelente e resultado incrível"
  },
  {
    nome: "Gabriel Barbosa",
    comentario: "Muito satisfeito com o serviço prestado"
  },
  {
    nome: "Larissa Mendes",
    comentario: "Qualidade, atenção e muito profissionalismo"
  },
  {
    nome: "Thiago Ribeiro",
    comentario: "Trabalho de ótima qualidade e entrega impecável"
  },
  {
    nome: "Beatriz Carvalho",
    comentario: "Uma experiência excelente do começo ao fim"
  },
  {
    nome: "André Lima",
    comentario: "Profissional extremamente dedicado e competente"
  },
  {
    nome: "Isabela Martins",
    comentario: "Fiquei encantada com o resultado final"
  },
  {
    nome: "Diego Fernandes",
    comentario: "Serviço excelente e atendimento diferenciado"
  },
  {
    nome: "Renata Alves",
    comentario: "Super recomendo, fiquei muito satisfeita"
  },
  {
    nome: "Pedro Henrique",
    comentario: "Excelente trabalho, com muita qualidade e dedicação"
  }
];

const depoimentoContainer = document.querySelector(".depoimentos-comentarios-container");

function criarCardDepoimento(depoimento) {
  const card = document.createElement("div");
  card.className = "depoimento-card";

  const nome = document.createElement("h3");
  nome.textContent = depoimento.nome;

  const comentario = document.createElement("p");
  comentario.textContent = depoimento.comentario;

  card.appendChild(nome);
  card.appendChild(comentario)
  
  return card;
}

function criarCard(depoimento) {
  const card = criarCardDepoimento(depoimento);
  depoimentoContainer.appendChild(card);
}

depoimentos.forEach((depoimento) => {
  criarCard(depoimento);
})


function configurarAccordion() {
  const itens = document.querySelectorAll('.faq-item');
  
  itens.forEach((item) => {
    const pergunta = item.querySelector('.faq-pergunta');
    const icon = item.querySelector('.material-symbols-outlined')

    pergunta.addEventListener('click', () => {
      const estaAberto = item.classList.contains('is-open');
      item.classList.toggle('is-open')
      pergunta.setAttribute('aria-expanded', String(!estaAberto))
      icon.textContent = estaAberto ? 'add' : 'maximize'
    })
  })
}

configurarAccordion()