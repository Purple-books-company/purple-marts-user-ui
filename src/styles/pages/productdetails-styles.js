import styled from "styled-components";

export const Thumb = styled.div`
    cursor: pointer;
    margin: 10px 0;
`;

export const ThumbImg = styled.img`
    width: 10px;
    height: 10px;
    :active{
        opacity: 1;
        border: 1px solid red;
    }
`;