import React, {Quest} from "react";
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
    let altTec = Home(1)
    console.log(altTec)
    let num = 1
    let correct = 0
    let quest = ''
    let alt1 = ''
    let alt2 = ''
    let alt3 = ''
    let alt4 = ''

    let quizJS = {

        resp: [2, 3, 2, 4, 4],

        num: [1, 2, 3, 4, 5],

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

    class quests{

        autenticTec(id){
            if(altTec  === 'JS'){
                console.log(id)
                this.autenticResp(id)
                this.autenticQuests('JS')
                
                /*if PYTHON*/
            }
        }

        autenticResp(val){
            let r = quizJS.resp[num - 1]
            if(r === val){
                console.log('ACERTOU')
                correct += 1
            }
        }

        changeCorrect(){
            console.log('ACERTOU')
        }
            
        autenticQuests(tec){
            if(tec === 'JS'){
                if(5 === quizJS.num[num - 1]){
                    console.log(quizJS.num[num])
                    console.log('parei')
                    return this.resultsQuiz()
                }
                quest = quizJS.quest[num]
                alt1 = quizJS.alt1[num]
                alt2 = quizJS.alt2[num]
                alt3 = quizJS.alt3[num]
                alt4 = quizJS.alt4[num]

                this.numAdd()
                this.changeVal()
            }
        }

        changeVal(){
            let num_1 = document.querySelector('h1#num')
            num_1.innerHTML = String(num) + '-'
            let quest_1 = document.querySelector('h2#quest')
            quest_1.innerHTML = quest
            let alt1_1 = document.querySelector('p#resp1')
            alt1_1.innerHTML = alt1
            let alt2_1 = document.querySelector('p#resp2')
            alt2_1.innerHTML = alt2
            let alt3_1 = document.querySelector('p#resp3')
            alt3_1.innerHTML = alt3
            let alt4_1 = document.querySelector('p#resp4')
            alt4_1.innerHTML = alt4
        }

        numAdd(){
            num += 1
        }

        backMenu(){

        }


        resultsQuiz(){
            let num_1 = document.querySelector('h1#num')
            num_1.innerHTML = ''
            let quest_1 = document.querySelector('h2#quest')
            quest_1.innerHTML = 'Obrigado por jogar, seu resultado a baixo:'

            let alt1_1 = document.querySelector('section#resp1')
            alt1_1.style.display = 'none'

            let alt2_1 = document.querySelector('section#resp2')
            alt2_1.style.display = 'none'

            let alt3_1 = document.querySelector('section#resp3')
            alt3_1.style.display = 'none'

            let alt4_1 = document.querySelector('section#resp4')
            alt4_1.style.display = 'none'


            let back5 = document.querySelector('p#back5')
            
            let bot5 = document.querySelector('section#back5')
            bot5.style.display = 'flex'

            if(correct <= 1 && correct >= 0){
                let acert = 100 * (correct / 5)
                back5.innerHTML = `-- ${acert}% de acerto, o importante é tentar.<br>Toque para voltar`
                bot5.style.background = '#C4051B'
            }
            
            if(correct >= 2 && correct <= 4){
                let acert = 100 * (correct / 5)
                back5.innerHTML = `-- ${acert}% de acerto, quase lá.<br>Toque para voltar`
                bot5.style.background = '#FF7709'
            }

            if(correct === 5){
                let acert = 100 * (correct / 5)
                back5.innerHTML = `-- ${acert}% de acerto, parabéns padrinho.<br>Toque para voltar`
                bot5.style.background = '#31BC2F'
            }
        
           
        }
    }

    var Quests = new quests()


    return(
            <AreaGame>
                <div data-aos='zoom-out' id='text'>
                    <header>
                        <h1 id='num'>1-</h1>
                        <h2 id='quest'>Especifique =, ==, === respectivamente</h2>
                        
                        <img src={img_what} alt='img_?'></img>
                    </header>

                    <main>
                        <section id='resp1' onClick={() => Quests.autenticTec(1)} className='alternative'>
                            <p  className='letter_alt'>A</p>
                            <p id='resp1'>Atribuição e igualdade, === não existe</p>

                            <img className='img_respost' src={img_correct} alt='correct_img'></img>
                        </section>

                        <section id='resp2' onClick={() => Quests.autenticTec(2)} className='alternative'>
                            <p className='letter_alt'>B</p>
                            <p id='resp2'>Atribuição, igualdade, valor e tipo respectivamente</p>

                            <img className='img_respost' src={img_correct} alt='correct_img'></img>
                        </section>

                        <section id='resp3' onClick={() => Quests.autenticTec(3)} className='alternative'>
                            <p className='letter_alt'>C</p>
                            <p id='resp3'>Igualdade, atribuição, == e === são iguais</p>

                            <img className='img_respost' src={img_correct} alt='correct_img'></img>
                        </section>

                        <section id='resp4' onClick={() => Quests.autenticTec(4)} className='alternative'>
                            <p id='numb4' className='letter_alt'>D</p>
                            <p id='resp4'>Atribuição, igualdade, == e === são iguais</p>

                            <img className='img_respost' src={img_correct} alt='correct_img'></img>
                        </section>

                        
                        <Link to='/dev-quiz' target='_self'><section id='back5' className='alternative'>
                            <p id='back5'>ESTER EGG KK :)</p>
                        </section></Link>
                    </main>
                </div>
            </AreaGame>
    )
}