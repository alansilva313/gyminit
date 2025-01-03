

import costas1 from '@/assets/costas1.gif'
import costas2 from '@/assets/costas2.gif'

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

    ]


    return (
        <div>
          
          {treinosCostas.map((item: any) => (
            <div key={item.id} className='flex flex-col gap-4'>

                <img src={item.gif} alt="" className='w-[250px]'/>
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