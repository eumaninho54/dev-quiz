import styled from 'styled-components';


export const AreaGame = styled.div`
    margin:70px auto 0px auto;

    a{
        text-decoration: none;
        color: black;
    }

    div#text{
        font-size: 28px;
        max-width: 800px;
        margin: auto;
        color: black;

        header{
            background-image: linear-gradient(to right, #DE457A, #A35CFE, #3496FA);
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 5px 20px;
            justify-content: space-between;
            border-radius: 5px 5px 0px 0px;
            cursor: default;

            h1{
                color: rgb(240, 240, 240);
                
                
            }

            h2{
                margin: 0;
                padding: 3%;
                font-size: 27px;
                color: rgb(240, 240, 240);
            }
            img{
                height: 70px;
                padding-right: 3%;
                justify-content: right;
            }
        }

        main{
            background-color: #EBF1FF;
            padding: 10%;
            border-radius: 0px 0px 5px 5px;
            


            
            p{
                margin: 0;
                font-size: 19px;
            }
        }

        section#back5{
            justify-content: center;
            display: none;

            p{
                text-align: center;
            }
        }

        .alternative{
            display: flex;
            background-color: white;
            justify-content: left;
            align-items:center;
            
            margin: 0px auto 20px auto;

            border: 2px solid #C9E5FA;
            border-radius: 50px;

            min-width: 350px;
            min-height: 55px;

            transition: 0.1s;

            &:hover{
                transform: scale(1.1);
                cursor: pointer;
            }


        }

        .letter_alt{
            font-size: 18px;
            text-align: center;
            color: black;

            border: 2px solid #C9E5FA;
            border-radius: 100%;

            width: 25px;
            margin-left: 5%;
            margin-right: 5%;
            

        }

        .img_respost{
            width: 30px;
            margin-left: 9%;
            display: none;
           
        }

        
    }

    .correct{
        background-color: green;
        display: initial;
    }


`