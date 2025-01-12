
import styled from "styled-components";

export const Container = styled.div`
    z-index: 99;
    position: fixed;
    top: 0;
    right: 10px;
    display: flex;
    align-items: center;
    gap: 40px;

    img {
        width: 80px;
        border-radius: 100%;
    }
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
`;

export const Li = styled.li`
    cursor: pointer;
    font-size: 20px;
    
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
    }
    a:hover {
        color: #ffffff;
        background: #ff0000;
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
    }
`;
