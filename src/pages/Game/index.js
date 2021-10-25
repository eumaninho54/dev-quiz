import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { AreaGame } from "./styled";

import Aos from 'aos'
import 'aos/dist/aos.css'

import img_correct from '../../imgs/pngwing.com.png'
import img_wrong from '../../imgs/pngwing_x_00000.png'

import img_what from '../../imgs/circle_point_00000.png'


import Home from "../Home";



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    let testando = Home(1)

    let quizJS = {
        num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

        quest: ['Especifique =, ==, === respectivamente', 'Que tipos de dados são suportados em JS?',
                'Existe diferença entre null e undefined?', 'Em JS, o que é NaN?',
                'Qual será o resultado do problema: 2+5+"3" ?, e "2"+5+3 ?',
                ''],

        alt1: ['Atribuição e igualdade, === não existe', 'Int, string, booleano e float',
               'Undefined é utilizado quando uma variável não teve valor atribuído, null representa a ausência intencional de um valor de objeto',
               'Representa um valor nulo', 'NaN, NaN'],

        alt2: ['Atribuição, igualdade, valor e tipo respectivamente', 'Int, float, booleano e complexo',
               'Null é utilizado quando uma variável não teve valor atribuído, Undefined representa a ausência intencional de um valor de objeto',
               'Representa um tipo de valor numérico', '253, 28'],

        alt3: ['Igualdade, atribuição, == e === são iguais', 'Número, string, indeterminado, nulo e booleano',
               'Sintaticamente não há diferença entre os dois tipos', 
               'Representa que o valor não é uma string', '253, 253'],

        alt4: ['Atribuição, igualdade, == e === são iguais', 'String, char, número, int e float',
               'Undefined representa uma ausência de valor, Null é recebido quando não teve valor atribuído',
               'Representa que o valor não é um número', '73, 253']
    }

    return(
        <BrowserRouter>
            <AreaGame>
                <div data-aos='zoom-out' id='text'>
                    <header>
                        <h1>1-</h1>
                        <h2>Especifique = , == , === respectivamente</h2>
                        
                        <img src={img_what} alt='img_?'></img>
                    </header>

                    <main>
                        <section className='alternative'>
                            <p className='letter_alt'>A</p>
                            <p>Atribuição e igualdade, === não existe</p>

                            <img className='img_respost' src={img_correct} alt='correct_img'></img>
                        </section>

                        <section className='alternative'>
                            <p className='letter_alt'>B</p>
                            <p>Atribuição, igualdade, valor e tipo respectivamente</p>

                            <img className='img_respost' src={img_correct} alt='correct_img'></img>
                        </section>

                        <section className='alternative'>
                            <p className='letter_alt'>C</p>
                            <p>Igualdade, atribuição, == e === são iguais</p>

                            <img className='img_respost' src={img_correct} alt='correct_img'></img>
                        </section>

                        <section className='alternative'>
                            <p className='letter_alt'>D</p>
                            <p>Atribuição, igualdade, == e === são iguais</p>

                            <img className='img_respost' src={img_correct} alt='correct_img'></img>
                        </section>
                    </main>
                </div>
            </AreaGame>
        
        </BrowserRouter>
    )
}