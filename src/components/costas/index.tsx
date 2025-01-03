import { useState } from 'react';
import costas1 from '@/assets/costas1.gif';
import costas2 from '@/assets/costas2.gif';
import costas3 from '@/assets/costas3.gif';

export function Costas() {
  const treinosCostas = [
    {
      id: 0,
      title: 'Pulley costas',
      gif: costas1,
      series: "4X12",
      description: 'Descrição breve do exercício Pulley Costas.',
    },
    {
      id: 1,
      title: 'Remada baixa',
      gif: costas2,
      series: "4X12",
      description: 'Descrição breve do exercício Remada Baixa.',
    },
    {
      id: 2,
      title: 'Remada curvada',
      gif: costas3,
      series: "4X12",
      description: `A remada curvada é um dos exercícios de costas mais completos porque trabalha intensamente o latíssimo do dorso, que é o principal músculo envolvido, mas também recruta trapézio, romboides e até os eretores da espinha para estabilização.

É um movimento que exige coordenação e força, já que você mantém o tronco inclinado enquanto puxa a barra, o que obriga praticamente toda a musculatura das costas a se envolver para estabilizar e executar a ação.

Para fazer corretamente, posicione os pés na largura dos ombros, segure a barra com uma pegada pronada e incline o tronco para frente, mantendo a coluna neutra.`,
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <p className="p-2 text-2xl font-bold text-center">Treino de Costas</p>

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
