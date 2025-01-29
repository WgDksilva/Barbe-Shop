import styled from "styled-components";

export const Container = styled.div`
    z-index: 99;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    gap: 40px;

    background-color: ${ (props) =>
        props.changeBackground ? '#000' : 'transparent'};
    transition: background-color 0.6s ease-in-out;

    img {
        width: 80px;
        border-radius: 100%;
    };

    @media screen and (max-width:770px){
        display: flex;
        justify-content: end;
        right: 0;
        left: 0;
        gap: 20px;
        padding: 5px;
       
        ul{
            gap: 20px;
        }

        .navigation-link{
            padding: 7px;
        }

        img{
            width: 70px;
        } 
    }

`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
    padding-left: 500px;
    
    
   
`;

export const Li = styled.li`
    font-weight: 600;
    cursor: pointer;
    font-size: 15px;
    position: relative;
    
    
    
    a {
        text-decoration: none;
        color: #ffffff;
        background:  #ff0000;
        padding: 8px 24px;
        border: 4px solid transparent;
        border-radius: 20px;
        box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);
        letter-spacing: 1px;
        transition: background-color 0.8s;
    };

    a:hover {
        color: #ffffff;
        background: #ff0000;
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
    };

    &::after {
        content: '';
        height: 2px;
        width: ${props => (props.isActive ? '100%' : 0)};
        background-color: #ffffff;
        position: absolute;
        bottom: -20px;
        transition: width 0.5s ease-in-out;
        left: 50%;
        transform: translateX(-50%);
    };
    
    &:hover::after {
        width: 100%;
    };

`;

