import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100px;
    background-color: #121212;
    display: flex;
    justify-content: center;
    
    .content{
        width: 75%;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .input{
            position: relative;
            #search{
            background-color: #202020;
            outline: none;
            border: none;
            padding: 13px 0px;
            border-radius: 22px;
            padding-left: 40px;
            width: 230px;
            transform: translateX(-2px);
            color: #EEEEF5;
        }
            #search::-webkit-search-cancel-button{
                display: none;
            }
            #search::placeholder{
            color: #979E97;
            font-weight: 600;
        }
            #search:focus{
                background-color: #2A2A2A;
            }

            #icon-search{
            color: #979E97;
            position: absolute;
            font-size: 14px;
            left: 11px;
            top: 14px;
            transform: rotate(-5deg);
        }
        }

        .navigation{
            font-family: 'Franklin Gothic Medium';
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 32px;
            padding-left: 30px;
            transform: translateY(1px);
            span{
                color:#B6B6B6;
                font-size: 1.1rem;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            span:hover{
                color:#F5F5F5;
            }
            .active{
                pointer-events: none;
                color:#F5F5F5;
            }
        }
    }
`