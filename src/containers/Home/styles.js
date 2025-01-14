import styled from 'styled-components';

export const Background = styled.div`
    background-image: url( ${(props) => props.img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

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
        
      

        &::after{
            width: 100%;
            height: 100%;
        };
    };
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`;

export const Info = styled.div`
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    margin-top: auto;

    img {
        width: 250px;
    };

    h1 {
        font-size: 25px;
        color: #ffffff;
        letter-spacing: 1px;
        opacity: 0.8; 
    };

    p {
        font-size: 23px;
        font-weight: 500;
        color: #ffffff;
        opacity: 0.5;  
    };

    .horario {
        font-size: 23px;
        font-weight: 500;
        color: #ff0000;
        opacity: 0.9;
        margin-bottom: 70px;
    };

    @media screen and (max-width:770px){
        margin: 0;
        padding: 5px;
        position: relative;
        /*top: 40px;*/
       
        img{
           width: 160px;
        };

        .horario, h1, p {
            opacity: 0.7;
            margin: 0;
            text-align: center;
            font-size: 20px;
            position: relative;
            top: 50px; 
        };
    };
`;

export const Button = styled.div`
    z-index: 99;
    position: fixed;
    bottom: 30px;
    left: 130px;

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

   
`;

export const Poster = styled.div`
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    margin-right: auto;
  
    img {
        width: 300px;
        border-radius: 100%;
        margin-left: 300px;
        margin-bottom: 200px;
    };

    @media screen and (max-width:770px){
        width: 0;
        padding: 0;
        display: none; 
    };
`;



