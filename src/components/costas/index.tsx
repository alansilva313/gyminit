

import costas1 from '@/assets/costas1.gif'
import costas2 from '@/assets/costas2.gif'
import costas3 from '@/assets/costas3.gif'

export function Costas(){

    const treinosCostas = [
        {
            id: 0,
            title: 'Pulley costas',
            gif: costas1,
            description: ""
        },

        {
            id: 1,
            title: 'Remada baixa',
            gif: costas2,
            description: ""
        },

        {
            id: 2,
            title: 'Remada curvada',
            gif: costas3,
            description: ""
        },

    ]


    return (
        <div>

            <p className='p-2 text-2xl font-bold'>treino de costas</p>
          
          {treinosCostas.map((item: any) => (
            <div key={item.id} className='flex flex-col gap-4'>

                <img src={item.gif} alt={item.title} className='w-[250px]'/>
                <p className='font-bold'>{item.title}</p>
                <p>{item.description}</p>
                <hr />
                <br />

            </div>
          ))

          }
        </div>
    )
}