
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
    }

`;