import styled from 'styled-components'


export const AreaGame = styled.div`
    margin:70px auto 0px auto;
    font-size: 22px;
    max-width: 800px;
    margin: auto;
    color: black;
    padding-top: 70px;

    a{
        text-decoration: none;
        color: #808080; 
    }

    main{
        background-color: #EBF1FF;
        padding: 10%;
        border-radius: 5px 5px;
        
        h1{
            text-align: center;
            margin-bottom: 0;
        }     

        h2{
            margin-top: 0;
            text-align: center;
            font-size: 50px;
        }

        p{
            text-align: center;
        }
    }

    section{
        text-align: center;
    }

    .wrapper{
        display: inline-flex;
        height: 50px;
        width: 150px;
        align-items: center;
        text-align: center;

        
    }
    .wrapper .option{
        background: #fff;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 0 10px;
        border-radius: 5px;
        cursor: pointer;
        padding: 0 10px;
        border: 2px solid lightgrey;
        transition: all 0.3s ease;
        box-shadow: 5px 5px 30px rgba(0,0,0,0.2);
        text-align: center;
    }
    .wrapper .option .dot{
        height: 20px;
        width: 20px;
        background: #d9d9d9;
        border-radius: 50%;
        position: relative;
        box-shadow: 5px 5px 30px rgba(0,0,0,0.2)
    }
    .wrapper .option .dot::before{
        position: absolute;
        content: "";
        top: 4px;
        left: 4px;
        width: 12px;
        height: 12px;
        background: #0069d9;
        border-radius: 50%;
        opacity: 0;
        transform: scale(1.5);
        transition: all 0.3s ease;
        
    }
    input[type="radio"]{
        display: none;
    }
    #option-1:checked:checked ~ .option-1, #option-2:checked:checked ~ .option-2{
        border-color: #0069d9;
        background: #0069d9;
    }
    #option-1:checked:checked ~ .option-1 .dot, #option-2:checked:checked ~ .option-2 .dot{
        background: #fff;
    }
    #option-1:checked:checked ~ .option-1 .dot::before, #option-2:checked:checked ~ .option-2 .dot::before{
        opacity: 1;
        transform: scale(1);
    }
    .wrapper .option span{
        font-size: 20px;
        color: #808080;
    }
    #option-1:checked:checked ~ .option-1 span, #option-2:checked:checked ~ .option-2 span{
        color: #fff;
}

    #jogar{
        background: #fff;
        height: 100%;
        width: 100px;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 0 10px;
        border-radius: 5px;
        cursor: pointer;
        padding: 0 10px;
        border: 2px solid lightgrey;
        transition: all 0.3s ease;
        box-shadow: 5px 5px 30px rgba(0,0,0,0.2);

        color: #808080;

        &:hover{
            transform: scale(1.1);
        }

        &:active{
            transform: scale(1);
        }
    }

`