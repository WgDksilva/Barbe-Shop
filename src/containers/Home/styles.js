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
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width: 1500px;
`;

export const Info = styled.div`
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    margin-right: auto;
    margin-top: auto;

    min-height: 80vh;
    max-width: 800px;

    img {
        width: 250px;
    };

    h1 {
        font-size: 25px;
        color: #ffffff;
        letter-spacing: 1px;
        margin: 0 2px;
        opacity: 0.8;

        /*
        @media (max-width: 430px) {
            font-size: 3rem;
            text-align: center;
        }
        */    
    };

    p {
        font-size: 25px;
        font-weight: 500;
        color: #ffffff;
        margin-top: 10px;
        opacity: 0.5;

        /*
        @media (max-width: 430px) {
            width: 100%;
            font-size: 14px;
            text-align: justify;
        }
        */    
    };

    .horario {
        color: red;
        opacity: 0.9;
    };

    a {
        padding: 14px 28px;
        color: #ffffff;
        border-radius: 30px;
        font-size: 18px;
        margin-left: 170px;
        
    };
    
    /*
    @media (max-width: 430px) {
        width: 98%;
        font-size: 10px;
        padding: 15px;
    };
    */
`;

export const Poster = styled.div`
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    margin-right: auto;
  
    min-height: 80vh;
    max-width: 800px;

    img {
        width: 300px;
        border-radius: 100%;
        margin-left: 300px;
        margin-bottom: 200px;
        
        /*
        padding: 80px;
        z-index: 99;
        */
      
    };

`;

export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 10px;
`;

