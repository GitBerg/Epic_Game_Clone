import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 52px;
    background-color: #2A2A2A;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Franklin Gothic Medium';
    overflow: hidden;

    span{
        color:#B6B6B6;
        cursor: pointer;
    }
    a{
        color:#B6B6B6;
        cursor: pointer;
        font-size: 0.75rem;
        font-weight: 400;
        letter-spacing: 1px;
        text-align: center;
        position: relative;
    }
    a:hover{
        color: #EFF2FE
    }
    
    .navigation{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        #logo{
            display: flex;
            align-items: center;
            color: #EEEEEE;
            font-size: 35px;
            width: 52px;
            height: 100%;
            padding: 0 9px;
            margin-left: 7px;
        }
        #store{
            padding: 0 6px;
            height: 100%;
            display: flex;
            align-items: center;
        }

        #distribuition{
            padding:0 20px;
            height: 100%;
            display: flex;
            align-items: center;
        }
        #help{
            padding:0 5px;
            height: 100%;
            display: flex;
            align-items: center;
            
        }
        #line-v{
            width: 1px;
            height: 30px;
            background-color: #929292;
            margin: 0 28px;
            position: relative;
            bottom: 1px;
            cursor: none;
        }
        #unreal{
            padding: 0 7px;
            height: 100%;
            display: flex;
            align-items: center;
        }

        #distribuition::before, #help::before, #unreal::before{
            content: '';
            display: block;
            width: 100%;
            position: absolute;
            height: 5px;
            color: red;
            bottom: -5px;
            left: 0;
            background-color: #0078F2;
            transition: all 0.3s ease;
        }

        #distribuition:hover::before,#help:hover::before,#unreal:hover::before{
            transform: translateY(-5px);
        }

        
        #store::before{
            content: '';
            display: block;
            width: 100%;
            position: absolute;
            height: 5px;
            color: red;
            bottom: 0;
            left: 0;
            background-color: #0078F2;
        }
    }

    .connections{
        display: flex;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        #language{
            font-size: 18px;
            padding: 0 20px;
        }
        #login{
            font-size: 0.7rem;
            padding: 22px;
            height: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            span{
                font-size: 20px;
            }
        }
        #download{
            background-color: #0078F2;
            height: 100%;
            padding: 0 14px;
            display: flex;
            align-items: center;
            font-size: 0.7rem;
            color: #EFF2FE; 
       }

       #download:hover{
            background-color: #007DFC;
       }

         #login:hover{
            span{
                color: #EFF2FE
            }
        } 
        #language:hover{
            color: #EFF2FE
        }
    }
   

    


`