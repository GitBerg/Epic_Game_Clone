import { styled, keyframes } from "styled-components";


const fillRight = keyframes`
from{
    width: 1px;
}
to{
    transform: scaleX(100%);
}
`

const growUp = keyframes`
50%{
    transform: scale(1.1);
}
100%{
    transform: scale(1);
}
`
const getOff = keyframes`
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(-105px); 
    }
`

const getIn = keyframes`
    from{
        transform: translateX(85px);
    }
    to{
        transform: translateX(0px);
    }
`

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
    
`

const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`

export const Container = styled.main`
    width: 100%;
    height: 100%;
    background-color: #121212;
    display: flex;
    justify-content: center;
`

export const FirstSection = styled.section`
    width: 75%;
    height: 650px;
    display: flex;
    justify-content: flex-start;

    ul{
        width: 20%;
        li{
            background-color: #252525;
        }
    }

`

export const MainCard = styled.div`
    width: 80%;
    min-height: 300px;
    min-width: 550px;
    height: calc(100vw - 66.3vw);
    background-color: #121212;
    border-radius: 14px;
    display: flex;
    overflow: hidden;
    position: relative;
    font-family: 'Franklin Gothic Medium';
    cursor: pointer;

    .shadow{
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        height: 100%;
        background: linear-gradient(to right, rgba(0 0 0 / 50%), rgba(0 0 0 / 0%));
        z-index: 5;
    }

    .banner{
        width: 100%;
        height: 100%;
        position: absolute;
        .img{
        position: absolute;
        width: 100%;
        overflow: hidden;
        animation: ${getOff} 300ms ease-in 150ms, ${fadeOut} 100ms ease 200ms forwards;
        z-index: 2;
        opacity: 1;

        &.active{
            animation: ${getIn} 200ms ease-out 200ms, ${fadeIn} 100ms ease 200ms forwards;
            opacity: 0;
            z-index:1 ;
        }

        }
        .info{
            position: absolute;
            bottom: 107px;
            left: 57px;
            width: 27.5%;
            opacity: 1;
            z-index: 10;
            animation: ${getOff} 300ms ease 150ms, ${fadeOut} 200ms ease-in-out forwards;
            #subtitle{
                color: #EAF5F5;
                font-size: 0.9rem;
                line-height: 2.2rem;
            }
            #description{
                display: -webkit-box;
                color: #EAF5F5;
                font-weight: 500;
                font-size: 1.2rem;
                line-height: 1.8rem;
                -webkit-line-clamp: 4;
                overflow: hidden;
                text-overflow: ellipsis;
                direction: ltr;
                -webkit-box-orient: vertical;
                margin-bottom: 34px ;
            }
            #price{
                display: block;
                color: #EAF5F5;
                font-weight: 500;
                font-size: 1.1rem;
                margin-bottom: 8px;
            }
            &.active{
                opacity: 0;
                animation: ${getIn} 200ms ease 200ms, ${fadeIn} 100ms ease 200ms forwards;
            }
        }



        .btns{
            position: absolute;
            bottom: 54px;
            left: 55px;
            display: flex;
            align-items: center;
            gap: 8px;
            z-index: 10;
            opacity: 1;
            animation: ${getOff} 500ms ease 150ms, ${fadeOut} 150ms ease 200ms forwards;
            pointer-events: none;
            #purchase{
                color: #292929;
                background-color: #FFFFFF;
                border-radius: 4px;
                padding: 17px 20px;
                letter-spacing: 1px;
                font-size: 1rem;
            }
            #wish-list{
                color: #EAF5F5;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.77rem;
                letter-spacing: 1px;
                padding: 12px 20px;
                border-radius: 4px;
                transition: all 0.2s ease;
                #icon{
                    font-size: 1.5rem;
                    margin-right: 5px;
                    transform: translateY(2px);
                }
                &:hover{
                background-color: rgb(255 255 255 / 15%);
                }
            }

            &.active{
                opacity: 0;
                animation: ${getIn} 200ms ease 200ms, ${fadeIn} 100ms ease 200ms forwards;
                pointer-events: all;
            }
        }
    }
    
`

export const BitCard = styled.span`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Franklin Gothic Medium';
    cursor: pointer;
    width: 230px;
    padding-left: 15px;
    padding-right: 12px;
    height: 105px;
    margin-left: 32px;
    border-radius: 20px;
    transition: all 0.2s ease;
    position: relative;
    margin-bottom: 3px;
    

    img{
        object-fit: fill;
        width: 60px;
        height: 80px;
        border-radius: 6px;
        z-index: 2;
        pointer-events: none;
    }
    span{
        padding-left: 15px;
        color: #EAF5F5;
        font-size: 1.09rem;
        font-weight: 100;
        line-height: 25px;
        z-index: 2;
        pointer-events: none;
    }

    .mini-card{
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 16px;
        transform: translateX(-15px);
        transition: all 0.3s ease;
        z-index: 1;
        &:hover{
            background-color: rgb(255 255 255 / 12%);
        }
    }

    .mini-card.active{
        z-index: 1;
        background-color: #252525;
        overflow: hidden;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: rgb(255 255 255 / 10%);
            animation: ${fillRight} 9s linear;
        }
    }

    .img-card.active{
        animation: ${growUp} 0.4s ease-in-out;
    }
`;
