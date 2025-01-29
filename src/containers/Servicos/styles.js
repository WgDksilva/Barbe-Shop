import styled from 'styled-components';

export const Background = styled.div`
    background-image: url( ${(props) => props.img});
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background-position: center;
    background-size: cover;
    
    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    };
    &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0.3));
    }; 

    @media screen and (max-width:770px){
        background-position: -690px;
        &::after{
            width: 100%;
            height: 100%;
        };
    };
`;

export const Container = styled.div`
    height: 60%;

    @media screen and (max-width:770px){
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        position: static;
        margin-top: 390%;
    };
`;

export const Section = styled.div`
    z-index: 4;
    position: relative;
    
    .services-haircuts, .services-tattos, .services-beard {
       align-items: center;
    };

    .descricao{
        h2{ 
            color: #ffffff;
            font-size: 38px;
            text-transform: uppercase;
            text-align: center;
        };
        p{
            font-size: 20px;
            color: #ffffff;
            line-height: 150%; 
            text-align: center;
            max-width: 900px;
            margin-bottom: 20px;
        };
    };

    @media screen and (max-width:770px){
        top: 910px;
        .descricao{
            h2 {
                font-size: 30px;
            };
            p{
                font-size: 15px;
            };
        };
    };
`;

export const Menu = styled.div`
    display: flex;
    gap: 50px;
    max-width: 900px;

    .haircut, .tattos, .beard {
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        border-radius: 20px;
        box-shadow: 0px -1px 17px 5px rgba(255, 255, 255, 0.68);
        overflow: hidden;
        margin-bottom: 40px;

        img{
            width: 300px;
            height: 300px;
            cursor: pointer;
            transition: transform 0.2s;
        };
        img:hover{
            transform: scale(1.2);
            z-index: 1;
        };
    };
    
    .haircut-info, .tatto-info, .beard-info {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 6px;
        background-color: #ff0000;
        z-index: 99;

        button{
            font-size: 15px;
            color: #fff;
            background-color: #ff0000;
            padding: 5px;
            border-radius: 10px;
            box-shadow: 0px -1px 1px 3px rgb(255, 255, 255);
            cursor: pointer;
            transition: transform 0.2s;
        };
        button:hover{
            transform: scale(1.2);
            z-index: 1;
        };
    };
    
    @media screen and (max-width:770px){
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        margin-bottom: 80px;
    };
`;