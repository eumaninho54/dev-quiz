import React, { useEffect} from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { AreaGame } from "./styled";



// eslint-disable-next-line import/no-anonymous-default-export
export default (func=0) => {
    var verification = verifTec()
    if(func===1){
        return verification
    }

    useEffect(()=>{
        Aos.init({ duration: 1400})
    }, [])

    function verifTec(){
        let verifJS = document.querySelector('input#option-1')
        let verifPY = document.querySelector('input#option-2')

        try{
            if(verifJS.checked){
                return 'JS'
            }
            if(verifPY.checked){
                return 'PY'
            }
        }catch{}
    }


    return(
            <AreaGame>
                    <main data-aos='zoom-out'>
                        <section>
                            <h1>Olá, bem vindo ao meu jogo</h1>
                            <h2>Dev Quiz</h2>
                            <p>Serão 10 perguntas e no final totalizará seu resultado, escolha 
                            sua tecnologia e clique em jogar</p>
                        </section>


                        <section>
                            <div id='button'>
                                <span>
                                    <button onClick={verifTec} id='jogar'><Link to="/dev-quiz/game">Jogar</Link></button>
                                </span>
                            </div>

                            <div class="wrapper">
                                <input type="radio" name="select" id="option-1" defaultChecked/>
                                <input type="radio" name="select" id="option-2"/>

                                <label for="option-1" class="option option-1">
                                    <div class="dot"></div>
                                    <span>JavaScript</span>
                                    </label>

                                <label for="option-2" class="option option-2">
                                    <div class="dot"></div>
                                    <span>Python</span>
                                </label>
                            </div>

                        </section>

                    </main>
            </AreaGame>

    )
}
