import React from "react";
import { Link } from 'react-router-dom'
import { AreaGame } from "./styled";

import Aos from 'aos'
import 'aos/dist/aos.css'


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

    let quizPY = {

        resp: [1, 1, 3, 3, 4],

        num: [1, 2, 3, 4, 5],

        quest: ['Qual a diferença entre lista e tuplas?', ' O que é pep 8 ?', 'Quais são módulos integrados ?', 
                'Como funciona Break, Continue, Pass ?', 'O que [::-1] faz ?'],

        alt1: ['Resumidamente, a estrutura tupla é imutável, e a lista é mutável.', 'É um conjunto de regras de como formatar o código Python',
               'Os, sys, pytube', 'Break cancela o laço, Continue e Pass não existem', 
               'Coloca última letra da string em maiúscula'],

        alt2: ['Ambas possuem utilizações análogas', 'Significa Python Edge Proposal', 'Math, statistics, random',
               'Break dá a opção de ignorar o loop, Continue cancela o laço e Pass preenche espaço', 
               'Gera números aleatórios de trás pra frente'],

        alt3: ['Tuplas são acessadas por meio da chave, e a lista pelo índice', 'É um módulo leve, simples e livre de dependências', 
               'Math, Os, sys', 'Break cancela o laço, Continue dá a opção de ignorar o laço e Pass preenche lacuna',
               'Randomiza os itens de uma lista'],

        alt4: ['A lista é acessada por meio da chave, e a tupla pelo índice', 'É um gerenciador de pacote padrão de Python', 
               'Pip, django, pytube', 'Possuem as mesmas funcionalidades que não se diferem', 'Inverte a ordem de um array ou sequência'],

    }

    if(altTec  === 'JS'){
        quest = quizJS.quest[0]
        alt1 = quizJS.alt1[0]
        alt2 = quizJS.alt2[0]
        alt3 = quizJS.alt3[0]
        alt4 = quizJS.alt4[0]
    }

    if(altTec  === 'PY'){
        quest = quizPY.quest[0]
        alt1 = quizPY.alt1[0]
        alt2 = quizPY.alt2[0]
        alt3 = quizPY.alt3[0]
        alt4 = quizPY.alt4[0]
    }

    class quests{

        autenticTec(id){
            if(altTec  === 'JS'){
                this.autenticResp(id)
                this.autenticQuests('JS')
            }

            if(altTec === 'PY'){
                this.autenticResp(id)
                this.autenticQuests('PY')
            }
        }

        autenticResp(val){
            if(altTec  === 'JS'){
                let r = quizJS.resp[num - 1]
                if(r === val){
                    correct += 1
                }
            }
            if(altTec === 'PY'){
                let r = quizPY.resp[num - 1]
                if(r === val){
                    correct += 1
                }
            } 
        }

        changeCorrect(){
            console.log('ACERTOU')
        }
            
        autenticQuests(tec){
            if(tec === 'JS'){
                if(5 === quizJS.num[num - 1]){
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

            if(tec === 'PY'){
                if(5 === quizPY.num[num - 1]){
                    return this.resultsQuiz()
                }
                quest = quizPY.quest[num]
                alt1 = quizPY.alt1[num]
                alt2 = quizPY.alt2[num]
                alt3 = quizPY.alt3[num]
                alt4 = quizPY.alt4[num]

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
                        <h2 id='quest'>{quest}</h2>
                        
                        <img src={img_what} alt='img_?'></img>
                    </header>

                    <main>
                        <section id='resp1' onClick={() => Quests.autenticTec(1)} className='alternative'>
                            <p  className='letter_alt'>A</p>
                            <p id='resp1'>{alt1}</p>


                        </section>

                        <section id='resp2' onClick={() => Quests.autenticTec(2)} className='alternative'>
                            <p className='letter_alt'>B</p>
                            <p id='resp2'>{alt2}</p>

                           
                        </section>

                        <section id='resp3' onClick={() => Quests.autenticTec(3)} className='alternative'>
                            <p className='letter_alt'>C</p>
                            <p id='resp3'>{alt3}</p>

                         
                        </section>

                        <section id='resp4' onClick={() => Quests.autenticTec(4)} className='alternative'>
                            <p id='numb4' className='letter_alt'>D</p>
                            <p id='resp4'>{alt4}</p>

                           
                        </section>

                        
                        <Link to='/dev-quiz' target='_self'><section id='back5' className='alternative'>
                            <p  id='back5'>ESTER EGG KK :)</p>
                        </section></Link>
                    </main>
                </div>
            </AreaGame>
    )
}