import styled from "styled-components";

export const Container = styled.div`
    z-index: 99;
    position: fixed;
    bottom: 10px;
    right: 10px;

    p {
        color: #ffffff;
        margin-bottom: 10px;
        opacity: 0.3;
        transition: all 0.4s;
    };
    p:hover {
        opacity: 1;
        transform: translateY(-10px);
        cursor: pointer;
    };


    @media screen and (max-width:770px){
        right: 80px;
    };
`;

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
    padding-left: 20px;
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

