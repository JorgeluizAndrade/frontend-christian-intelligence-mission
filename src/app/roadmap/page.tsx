import Header from "@/components/landing/header"
import Timeline from "@/components/roadmap/timeline"

const topics = 
  [
    {
      "id": 1,
      "nome": "Quem é Jesus?",
      "descTopic": "Explorando quem é Jesus Cristo, sua identidade como Filho de Deus e a revelação bíblica sobre Ele.",
      "topicoPai": null,
      "filhos": [
        {
          "id": 2,
          "nome": "Entendendo o amor de Deus",
          "descTopic": "Reflexões sobre a natureza do amor de Deus e como Ele se revela em nossa vida.",
          "topicoPai": { "id": 1, "nome": "Quem é Jesus?" },
          "filhos": [],
          "conteudos": [
            {
              "id": 201,
              "nomeConteudo": "1 João",
              "autor": "Bíblia",
              "descConteudo": "Carta de João mostrando a essência do amor de Deus.",
              "link": "https://www.bible.com/pt/bible/129/1JN.1.NVI"
            },
            {
              "id": 202,
              "nomeConteudo": "Love Jesus More Than You Love Anything",
              "autor": "John Piper - Desiring God",
              "descConteudo": "Mensagem sobre amar Jesus acima de todas as coisas.",
              "link": "https://youtu.be/n9QP-cqwyAw?si=3ycqkw8Va61AJ5ug"
            },
            {
              "id": 203,
              "nomeConteudo": "Amor",
              "autor": "BibleProject - Português",
              "descConteudo": "Explicação visual sobre o conceito bíblico do amor.",
              "link": "https://youtu.be/SOe8Rfjxq7A?si=yU0Vn17iSrfvCazH"
            }
          ]
        },
        {
          "id": 3,
          "nome": "Amor de Deus manifestado na cruz",
          "descTopic": "Como o sacrifício de Cristo na cruz revela plenamente o amor de Deus.",
          "topicoPai": { "id": 1, "nome": "Quem é Jesus?" },
          "filhos": [],
          "conteudos": [
            {
              "id": 301,
              "nomeConteudo": "A CRUZ DE CRISTO, O MAIOR DRAMA",
              "autor": "Hernandes Dias Lopes",
              "descConteudo": "Pregação sobre a cruz como expressão máxima do amor de Deus.",
              "link": "https://youtu.be/WK_RAS_DxvI?si=5JyiAk_nNafak1Ti"
            }
          ]
        },
        {
          "id": 4,
          "nome": "A ressurreição de Cristo",
          "descTopic": "O triunfo de Cristo sobre a morte e sua vitória eterna.",
          "topicoPai": { "id": 1, "nome": "Quem é Jesus?" },
          "filhos": [],
          "conteudos": [
            {
              "id": 401,
              "nomeConteudo": "Escola de Evangelismo | A Ressurreição de Cristo",
              "autor": "Guilherme Galino",
              "descConteudo": "Reflexão sobre a importância da ressurreição de Cristo.",
              "link": "https://www.youtube.com/live/BWDn_ulWhKE?si=fmICiiPsgtmVQlP0"
            }
          ]
        },
        {
          "id": 5,
          "nome": "A Divindade de Jesus",
          "descTopic": "Explorando as evidências bíblicas e teológicas da divindade de Jesus Cristo, e o que isso significa para a fé cristã.",
          "topicoPai": { "id": 1, "nome": "Quem é Jesus?" },
          "filhos": [],
          "conteudos": [
            {
              "id": 501,
              "nomeConteudo": "A DIVINDADE DE CRISTO - Hernandes Dias Lopes",
              "autor": "Hernandes Dias Lopes",
              "descConteudo": "Uma pregação aprofundada sobre os atributos divinos de Jesus e as provas de sua divindade nas Escrituras.",
              "link": "https://www.youtube.com/watch?v=WGsKm3BrXZk"
            },
            {
              "id": 502,
              "nomeConteudo": "JESUS É DEUS - Hernandes Dias Lopes",
              "autor": "Hernandes Dias Lopes",
              "descConteudo": "Mensagem que afirma a divindade de Jesus, explicando por que Ele é adorado como Deus.",
              "link": "https://www.youtube.com/watch?v=jXgu1MRXrLA"
            },
            {
              "id": 503,
              "nomeConteudo": "A Divindade de Jesus: O Que Significa?",
              "autor": "Estudos da Bíblia",
              "descConteudo": "Artigo que detalha o significado da divindade de Jesus, com base em textos bíblicos.",
              "link": "https://www.estudosdabiblia.net/jbd985.htm"
            }
          ]
        },
        {
          "id": 6,
          "nome": "A Humanidade de Jesus",
          "descTopic": "Um olhar sobre a natureza humana de Jesus, suas emoções, limitações e como Ele se compadeceu da condição humana.",
          "topicoPai": { "id": 1, "nome": "Quem é Jesus?" },
          "filhos": [],
          "conteudos": [
            {
              "id": 601,
              "nomeConteudo": "A DIVINDADE E A HUMANIDADE DE CRISTO - Hernandes Dias Lopes",
              "autor": "Hernandes Dias Lopes",
              "descConteudo": "Estudo que equilibra as duas naturezas de Cristo, mostrando como Ele era plenamente Deus e plenamente homem.",
              "link": "https://www.youtube.com/watch?v=xSfIa6gRorU"
            },
            {
              "id": 602,
              "nomeConteudo": "Por que a humanidade de Jesus é tão importante?",
              "autor": "GotQuestions.org",
              "descConteudo": "Artigo que explica a importância da humanidade de Jesus para a salvação e a nossa identificação com Ele.",
              "link": "https://www.gotquestions.org/Portugues/humanidade-Jesus.html"
            }
          ]
        },
        {
          "id": 7,
          "nome": "Os Ensinamentos de Jesus",
          "descTopic": "Explorando as principais mensagens, parábolas e sermões de Jesus, e como aplicá-los em nossa vida.",
          "topicoPai": { "id": 1, "nome": "Quem é Jesus?" },
          "filhos": [],
          "conteudos": [
            {
              "id": 701,
              "nomeConteudo": "Mateus 1-13",
              "autor": "BibleProject - Português",
              "descConteudo": "Visão geral do Evangelho de Mateus, com foco no Sermão do Monte e nos ensinamentos de Jesus sobre o Reino de Deus.",
              "link": "https://www.youtube.com/watch?v=VskOdIySJQI"
            },
            {
              "id": 702,
              "nomeConteudo": "Filho do Homem",
              "autor": "BibleProject - Português",
              "descConteudo": "Vídeo que explica o significado do título 'Filho do Homem', frequentemente usado por Jesus para se referir a si mesmo e à sua missão.",
              "link": "https://www.youtube.com/watch?v=eY1bi66vouc"
            }
          ]
        },
        {
          "id": 8,
          "nome": "A Missão de Jesus: Salvação e Redenção",
          "descTopic": "Entendendo o propósito central da vinda de Jesus: oferecer salvação e redenção para a humanidade.",
          "topicoPai": { "id": 1, "nome": "Quem é Jesus?" },
          "filhos": [],
          "conteudos": [
            {
              "id": 801,
              "nomeConteudo": "JESUS: Senhor e Salvador",
              "autor": "Verbo da Vida",
              "descConteudo": "Artigo que explica os títulos de Jesus como Salvador e Redentor, e como Ele nos salva do pecado e da morte.",
              "link": "https://verbodavida.org.br/blog/eliezer-rodrigues/jesus-senhor-e-salvador"
            },
            {
              "id": 802,
              "nomeConteudo": "Colossenses",
              "autor": "BibleProject - Português",
              "descConteudo": "Animação que resume a carta de Paulo aos Colossenses, destacando a supremacia de Cristo e a redenção que Ele oferece.",
              "link": "https://www.youtube.com/watch?v=25udRufsBzE"
            }
          ]
        }
      ],
      "conteudos": [
        {
          "id": 101,
          "nomeConteudo": "Leitura Bíblica | João 1 - Você sabe quem é Jesus?",
          "autor": "Guilherme Galino",
          "descConteudo": "Estudo introdutório sobre a identidade de Jesus no Evangelho de João.",
          "link": "https://www.youtube.com/live/jzcwldFTbI0?si=NJZhnahe2qUXGPQq"
        },
        {
          "id": 102,
          "nomeConteudo": "João 1 - O que significa Jesus ser a 'Palavra de Deus'",
          "autor": "BibleProject - Português",
          "descConteudo": "Vídeo explicando o significado de Jesus como Logos.",
          "link": "https://www.youtube.com/watch?v=9KWpvbztvB4"
        }
      ],
    },
    {
      "id": 9,
      "nome": "Salvação",
      "descTopic": "Explorando o plano de Deus para a salvação da humanidade, o que significa ser salvo e como podemos receber esse presente.",
      "topicoPai": null,
      "filhos": [
        {
          "id": 10,
          "nome": "O Que é a Salvação?",
          "descTopic": "Compreendendo o significado bíblico da salvação: sermos resgatados do pecado e da morte para uma nova vida com Deus.",
          "topicoPai": { "id": 9, "nome": "Salvação" },
          "filhos": [],
          "conteudos": [
            {
              "id": 1001,
              "nomeConteudo": "Graça",
              "autor": "BibleProject - Português",
              "descConteudo": "Entenda sobre a graça de Deus.",
              "link": "https://youtu.be/Mgf8zfoy6Jc?si=T0vsNjcM4OfP6ieS"
            },
            {
              "id": 1002,
              "nomeConteudo": "O que é a salvação? O que é a doutrina cristã da salvação?",
              "autor": "GotQuestions.org",
              "descConteudo": "Artigo detalhado explicando o conceito de salvação, de que somos salvos e por que precisamos dela.",
              "link": "https://www.gotquestions.org/Portugues/doutrina-salvacao.html"
            }
          ]
        },
        {
          "id": 11,
          "nome": "Salvação pela Graça Mediante a Fé",
          "descTopic": "A doutrina central da salvação como um dom gratuito de Deus (graça), recebido unicamente pela fé em Jesus Cristo, e não por obras.",
          "topicoPai": { "id": 9, "nome": "Salvação" },
          "filhos": [],
          "conteudos": [
            {
              "id": 1101,
              "nomeConteudo": "A Salvação é Pela Graça - Hernandes Dias Lopes",
              "autor": "Hernandes Dias Lopes",
              "descConteudo": "Pregação baseada em Efésios 2, explicando que a salvação não pode ser conquistada por nossos esforços, mas é um presente da graça de Deus.",
              "link": "https://youtube.com/shorts/djCe3QjJ1-E?si=PhWNldzqkScMfkHs"
            },
            {
              "id": 1102,
              "nomeConteudo": "Fé",
              "autor": "Desenhando a Bíblia",
              "descConteudo": "A fé e sua importância.",
              "link": "https://youtu.be/8d4BUHtrnAQ?si=WH1P_w7Jj3TnGfQz"
            }
          ]
        },
        {
          "id": 12,
          "nome": "Arrependimento e Nova Vida",
          "descTopic": "O papel do arrependimento na salvação e o conceito de 'nascer de novo', que marca o início de uma jornada de transformação com Cristo.",
          "topicoPai": { "id": 9, "nome": "Salvação" },
          "filhos": [],
          "conteudos": [
            {
              "id": 1201,
              "nomeConteudo": "O QUE É O VERDADEIRO ARREPENDIMENTO?",
              "autor": "Teologia Ilustrada",
              "descConteudo": "Vídeo que aprofunda o conceito de arrependimento (metanoia) como uma mudança de mente que leva a uma transformação de vida.",
              "link": "https://youtu.be/QNWKN87wkOI?si=w_FWvXPFc-QLodco"
            },
            {
              "id": 1202,
              "nomeConteudo": "O que significa nascer de novo?",
              "autor": "Respostas Bíblicas",
              "descConteudo": "Artigo explicando o diálogo de Jesus com Nicodemos em João 3 sobre a necessidade do novo nascimento espiritual para ver o Reino de Deus.",
              "link": "https://www.respostas.com.br/como-nascer-de-novo/"
            }
          ]
        }
      ],
      "conteudos": [
        {
          "id": 901,
          "nomeConteudo": "O Evangelho do Reino",
          "autor": "BibleProject - Português",
          "descConteudo": "Vídeo que resume a mensagem central de Jesus e dos apóstolos, que é a boa notícia (evangelho) sobre a chegada do Reino de Deus.",
          "link": "https://youtu.be/DoQlphslHd0?si=837sfzMLCqYnKM-_"
        },
        {
          "id": 902,
          "nomeConteudo": "Plano de Salvação - Como ser salvo",
          "autor": "Respostas Bíblicas",
          "descConteudo": "Um guia simples e direto sobre os passos para a salvação, ideal para quem busca entender como se conectar com Deus.",
          "link": "https://www.respostas.com.br/plano-de-salvacao/"
        }
      ]
    }
  ]
  


// function generateMockTopics(count: number) {
//   const topicsteste = []

//   for (let i = 1; i <= count; i++) {
//     const topic = {
//       id: i,
//       nome: `Tópico ${i}`,
//       descTopic: `Descrição do tópico ${i}`,
//       topicoPai: i % 10 === 0 ? { id: 1, nome: "Programação" } : null,

//       filhos: Array.from({ length: i % 3 === 0 ? 2 : 0 }, (_, j) => ({
//         id: count + i + j,
//         nome: `Subtópico ${i}.${j + 1}`,
//         descTopic: `Descrição do subtópico ${i}.${j + 1}`,
//         livros: Array.from({ length: 2 }, (_, k) => ({
//           id: count * 10 + i * 10 + j * 2 + k,
//           nomeLivro: `Livro ${i}.${j + 1}.${k + 1}`,
//           autor: `Autor ${i}.${j + 1}.${k + 1}`,
//           descLivro: `Descrição do livro ${i}.${j + 1}.${k + 1}`,
//           link: `https://livro${i}${j}${k}.com`,
//         })),
//       })),
//       conteudos: Array.from({ length: 2 }, (_, l) => ({
//         id: count * 20 + i * 5 + l,
//         nomeLivro: `Livro ${i}.${l + 1}`,
//         autor: `Autor ${i}.${l + 1}`,
//         descLivro: `Descrição do livro ${i}.${l + 1}`,
//         link: `https://livro${i}${l}.com`,
//       })),
//     }

//     topicsteste.push(topicsteste)
//   }

//   return topicsteste;
// }

// export const mockTopics = generateMockTopics(100)

// export const mockFindTopicById = (id: number) => {
//   return mockTopics.flatMap((topic) => [topic, ...topic.filhos]).find((topic) => topic.id === id)
// }

export default function Roadmap() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Header />
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Roadmap</h1>
            <div className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 mb-2">
              Missão Inteligência Cristã
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Aqui você vai encontrar todos os nossos tópicos para estudo organizados em uma timeline interativa!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Timeline topics={topics} />
      </div>
    </main>
  )
}
