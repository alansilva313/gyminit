import { useState } from 'react';
import peito1 from '@/assets/peito1.gif';
import peito2 from '@/assets/peito2.gif';
import peito3 from '@/assets/peito3.gif';

export function Peitoral() {
  const treinosCostas = [
    {
      id: 0,
      title: 'Supino reto',
      gif: peito1,
      series: "4X12",
      description: `
      O supino inclinado com halteres é semelhante ao supino inclinado com barra, com a única diferença de que você usa um par de halteres em vez de uma barra. Isso permite uma amplitude de movimento mais livre, já que suas mãos não são mais restritas pela barra.

Como fazer

Sente-se em um banco e levante um par de halteres até a posição inicial.
Empurre os halteres para cima até estender os braços, enquanto expira.
Inspire no topo, ou enquanto abaixa os halteres com controle de volta para os seus ombros.
      
      `,
    },
    {
      id: 1,
      title: 'Supino Inclinado',
      gif: peito2,
      series: "4X12",
      description: `
      O supino inclinado é um dos melhores exercícios para o peitoral superior. Por causa da inclinação, as fibras musculares do peitoral superior estão diretamente na linha de trabalho, enfatizando esta parte do músculo em comparação com o supino reto.

Como fazer

Sente-se em um banco inclinado, retire uma barra e segure-a com os braços estendidos acima dos seus ombros.
Inspire e desça a barra até o peito.
Empurre a barra até estender os braços enquanto expira.
Não há necessidade de exagerar na inclinação no supino inclinado. Cerca de 30-40° é suficiente para focar no peito superior.
      
      `,
    },
    {
      id: 2,
      title: 'Crucifixo',
      gif: peito3,
      series: "4X12",
      description: `
      O crucifixo com halteres é outro exercício de isolamento para o peito que trabalha indiretamente os deltoides frontais, que, assim como o supino, trabalha todas as fibras musculares dos peitorais. Se quiser focar ainda mais no peito superior, você pode adicionar uma leve inclinação ao banco.

Como fazer o crucifixo com halteres (as diretivas servem para outras variações)

Deite-se em um banco e levante um par de halteres até a posição inicial.
Com os braços quase completamente estendidos, abaixe os halteres para os lados.
Quando tiver abaixado os halteres o máximo possível, inverta o movimento e retorne os halteres à posição inicial.
      `,
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <p className="p-2 text-2xl font-bold text-center">Treino de Peito</p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {treinosCostas.map((item: any) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-4 p-4 border rounded shadow-md"
          >
            <img
              src={item.gif}
              alt={item.title}
              className="w-full max-w-[250px] h-auto mx-auto"
            />
            <p className="text-lg font-bold text-center">{item.title}</p>
            <p>Series: {item.series}</p>
            <p className="text-sm text-justify">
              {expanded === item.id
                ? item.description
                : `${item.description.slice(0, 100)}...`}
            </p>
            {item.description.length > 100 && (
              <button
                onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                className="mt-2 text-blue-600 hover:underline"
              >
                {expanded === item.id ? 'Ler menos' : 'Ler mais'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
