import styled from 'styled-components'

export const AreaHeader = styled.div`
    background-color: rgba(26, 29, 30, 0.90);
    padding: 8px 0px;

    top: 0;
    position: fixed;

    width: 100%;
    padding: 5px 20px;
    
    display: flex;
    justify-content: center ;
    height: 60px;


    nav{
        background-color: #1A1D1E;
        text-align: center;
        width: 260px;
        margin: auto;
        padding: 10px 0px;
        
        
        a{
            text-decoration: none;
            color: #BDB7AF ;

            &:hover{
                color: yellow;
            }
            
        }
    }

    .margin_left{
        margin-left: 10px;
    }

    h1{
        margin: 0;
        text-align: left;
    }

`