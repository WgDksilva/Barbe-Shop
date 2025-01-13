import styled from "styled-components";

export const Container = styled.div`
    z-index: 99;
    position: fixed;
    bottom: 10px;
    right: 10px;
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

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
    
    p {
        color: #ffffff;
        opacity: 0.3;
        transition: all 0.4s;
    };
    p:hover {
        opacity: 1;
        transform: translateY(-10px);
        cursor: pointer;
    };
`;

export const Li = styled.li`
    img{
        width: 50px;
        height: 50px;
        border-radius: 40%;
        opacity: 0.3;
        transition: all 0.4s;
    };
    img:hover {
        opacity: 1;
        transform: translateY(-10px);
    };
`;

