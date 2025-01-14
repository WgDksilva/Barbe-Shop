import styled from 'styled-components';

export const Background = styled.div`
    background-image: url( ${(props) => props.img});
    display: flex;
    align-items: center;
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
    height: 100px;
    background-color: rgba(0, 0, 0, 0.1);
    };
    &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 500px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0.21));
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
    z-index: 99;
    width: 100%;
    height: 70%;
    max-width: 1300px;
`;


export const Poster = styled.div`
    z-index: 2;
    display: flex;
    justify-content: space-around;
    gap: 600px;
    
    .logotipo2 {
        width: 280px;
        height: 170px;
    };
    .poster {
        width: 250px;
        height: 170px;
        border-radius: 100%;
        box-shadow: 0px 0px 7px 10px rgb(0  0 0 / 70%);
    };


    @media screen and (max-width:770px){
        margin: 110px 0 0 260px;
        .logotipo2 {
            display: none;
        };
        .poster {
            width: 150px;
            height: 110px;
        };
    };
`;

export const Info = styled.div`
    margin-top: 230px;
   
    h1 {
        text-align: center;
        font-size: 30px;
        font-weight: 700;
        color: #ffffff;
        letter-spacing: 1px;
        opacity: 0.6;
    };

    .chamada {
        text-align: center;
        font-size: 23px;
        font-weight: 500;
        color: #ffffff;
        letter-spacing: 1px;
        opacity: 0.6;
        padding: 0 100px; 
    };

    .horario {
        text-align: center;
        font-size: 25px;
        font-weight: 500;
        color:  #ff0000;
        letter-spacing: 1px;
    };


    @media screen and (max-width:770px){
        margin-top: 300px;
        h1 {
            font-size: 20px;
        };
        .chamada {
           display:none;
        };
        .horario {
            font-size: 16px;
        };
    };
`;

export const Button = styled.div`
    z-index: 99;
    position: fixed;
    bottom: 30px;
    left: 160px;
    
    a {
        font-size: 20px;
        font-weight: 500;
        color: #ffffff;
        background:  #ff0000;
        padding: 10px 20px;
        border: 4px solid transparent;
        border-radius: 30px;
        cursor: pointer;
        box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

        &:hover {
            box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
            background: #ff0000;
            color: #ffffff;
        };
    };


    @media screen and (max-width:770px){
        bottom: 130px;
        left: 115px;
    };
`;

