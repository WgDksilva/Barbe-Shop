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
    }
    &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 500px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    }
`;

export const Info = styled.div`
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    margin-right: auto;
  
    min-height: 80vh;
    max-width: 800px;

    img {
        width: 250px;
    }

    h1 {
        color: #ffffff;
        font-size: 25px;
        letter-spacing: 1px;
        margin: 0 2px;
        opacity: 0.8;

        @media (max-width: 430px) {
            font-size: 3rem;
            text-align: center;
        }
    }

    p {
        color: #ffffff;
        font-size: 25px;
        letter-spacing: 2px;
        opacity: 0.7;

        @media (max-width: 430px) {
            width: 100%;
            font-size: 14px;
            text-align: justify;
        }
    }

    a {
        padding: 14px 28px;
        color: #ffffff;
        border-radius: 30px;
        font-size: 18px;
        margin-left: 170px;
        
    }

    @media (max-width: 430px) {
        width: 98%;
        font-size: 10px;
        padding: 15px;
    }
`;

