import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    min-height: calc(43vh + 5px);
    background-color: #202020;
    display: flex;
    flex-direction: column;
    padding: 29px 69px;
    overflow: hidden;
    font-family: "Roboto";

    .top{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 28px;
        div{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .icon{
            color: #EDEDED;
            margin: 0px 4px;
            cursor: pointer;
            :hover{
                color: #0078F2;
                transition: all 0.5s ease;
            }
        }
        .btn-top{
            color: #EDEDED;
            font-size: 35px;
            margin-right: 20px;
            transform: translateY(10px);
            cursor: pointer;
            :hover{
                color: #0078F2;
                transition: all 0.5s ease;
            }
        }
    }
    .top-mid{
            padding-left: 5px;
            display: flex;
            margin-bottom: 20px;
            h3{
                color:#626565;
                font-size: 0.93rem;
                font-weight: 600;
                width: 100%;
                margin-bottom: 12px;
            }
            li{
                color: #EDEDED;
                font-size: 0.9rem;
                margin-bottom: 10px;
                font-weight: 300;
                cursor: pointer;
                &:hover{
                    color: #0078F2;
                    transition: all 0.5s ease;
                }
            }

            .columns{
                margin-right: 25px;
            }

            .columns-list{
                display: flex;
                gap: 25px;
            }
        }
    
    .line{
        width: 98%;
        height: 1px;
        background-color:#333333;
        margin-left: 5px;
        margin-bottom: 36px;
    }

    .top-bottom{
        padding-left: 5px;
        width: 50%;
        font-size: 0.7rem;
        color: #C6C1C1;
        line-height: 1.5rem;
        margin-bottom: 40px;
    }

    .bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .links{       
            display: flex;
            justify-content: space-around;
            gap: 14px;
            span{
                color: #EDEDED;
                font-size: 0.8rem;
                cursor: pointer;
                &:hover{
                color: #0078F2;
                transition: all 0.5s ease;
                }
            }
        }

        .logos{
            display: flex;
            gap: 10px;
            font-size: 32px;
            color:#BEBEBE;
            transform: translateY(-12px);
            span{
                &:hover{
                    cursor: pointer;
                    color:#f7f7f7;
                    transition: all 0.5s ease;
                }
            }
        }
    }

`
