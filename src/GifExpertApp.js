import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories,setCategories] = useState(['Goku']); // useState devuelve una constante con el valor asignado.
                                                                                            // setCategories nor sirve para actulizar ese valor asignado.
    return(
        <>
            <div className="container">
                <h2>Search your Gif</h2>
                < AddCategory setCategories={ setCategories } />       {/*  Se llama al componente AddCategory y se le envía la función setCategories */}
                <hr />

                <ol>
                    {
                        categories.map(category => (
                            <GifGrid key={category} category={category} />
                        ))
                    }
                </ol>
            </div>

            <footer>
                <h2>Andres Guanipa - 2021</h2>
            </footer>
        </>
    );

}