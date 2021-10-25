import React from "react";
import { AreaHeader } from "./styled";
import { Link } from 'react-router-dom'

import imgLogoManin from '../../imgs/LogoManin.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return(
        <AreaHeader>
                <nav>
                    <a href='https://github.com/ymaninho54' target='_blank' rel='noreferrer'>Github</a>
                    <Link  to="/dev-quiz" target='_self' className='margin_left'>Home</Link>
                    <a className='margin_left' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/angelo-menti-663040210/'>LinkedIn</a>
                </nav>
        </AreaHeader>
    )
}