import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);  // data:images . Se cambia el nombre de data a images para que use otro nombre dentro del código

    return (

        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3> 

            {loading && <p className="animate__animated animate__flash">Loading...</p>}      {/* Operador ternario... Si loading es true ejecuta el parrafo, sino, no ejecuta nada */}

            <div className="card-grid">

                {
                    images.map(( img =>
                        < GifGridItem key={img.id} {...img} />
                    ))

                }

            </div>
        </>
    )
}
