import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Link as LinkR} from 'react-router-dom';

export const SContainer = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(1, 147, 86, 1) 0%,
        rgba(10, 201, 122, 1) 100%
    );
`;

export const SFormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const SIcon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const SFormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const SForm = styled.div`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const SFormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const SFormLabel = styled.label`
    margin-bottom: 10px;
    font-size: 14px;
    color: #fff;
`;

export const SFormInput = styled.input`
    padding: 16px 16px;
    margin-botttom: 32px;
    border: none;
    border-radius: 4px;
`;

export const SFormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 14px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
`;

export const SText = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
`;
export const SNavBtn = styled.nav`
    display: flex;
    align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`;

export const SNavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;