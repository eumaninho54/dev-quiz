import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { AreaHome } from "./styled";

import img_what from '../../imgs/circle_point_00000.png'

import img_correct from '../../imgs/pngwing.com.png'
import img_wrong from '../../imgs/pngwing_x_00000.png'



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return(
        <BrowserRouter>
            <AreaHome>
                <div id='text'>
                    <header>
                        <h1>1-</h1>
                        <h2>Qual a diferença entre = , == e ===</h2>  
                        <img src={img_what} alt='img_?'></img>
                    </header>

                    <main>
                        <section className='alternative'>
                            <p className='letter_alt'>A</p>
                            <p>Alternativa A</p>

                            <img className='img_respost' src={img_correct} alt='correct_img'></img>
                        </section>

                        <section className='alternative'>
                            <p className='letter_alt'>B</p>
                            <p>Alternativa B</p>

                            <img className='img_respost' src={img_correct} alt='correct_img'></img>
                        </section>

                        <section className='alternative'>
                            <p className='letter_alt'>C</p>
                            <p>Alternativa C</p>

                            <img className='img_respost' src={img_correct} alt='correct_img'></img>
                        </section>

                        <section className='alternative'>
                            <p className='letter_alt'>D</p>
                            <p>Alternativa D</p>

                            <img className='img_respost' src={img_correct} alt='correct_img'></img>
                        </section>
                    </main>
                </div>
            </AreaHome>
        
        </BrowserRouter>
    )
}