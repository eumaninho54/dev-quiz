import React from "react";
import { AreaHeader } from "./styled";
import { BrowserRouter } from 'react-router-dom'

import imgLogoManin from '../../imgs/LogoManin.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return(
        <BrowserRouter>
            <AreaHeader>
                    <nav>
                        <a href='a'>Github</a>
                        <a className='margin_left' href='d'>Home</a>
                        <a className='margin_left' href='x'>LinkedIn</a>
                    </nav>
            </AreaHeader>
        </BrowserRouter>
    )
}