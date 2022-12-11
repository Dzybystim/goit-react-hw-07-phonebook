import styled from 'styled-components'

export const ContactStyled = styled.li`
display: flex;
align-items: center;
gap: 15px;
`

export const ContactStyledButton = styled.button`
display: inline-flex;
    margin: 10px;
    text-decoration: none;
    position: relative;
    font-size: 12px;
    line-height: 12px;
    padding: 6px 15px;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Roboto Condensed', Тahoma, sans-serif;
    background: buttonface;
    cursor: pointer;
    border: 2px solid #BFE2FF;

:hover,
:active,
:focus {
    color: blue;
}

:after,
:before {
    position: absolute;
    height: 2px;
    left: 50%;
    background: #337AB7;
    bottom: -6px;
    content: "";
    transition: all 280ms ease-in-out;
    width: 0;
}
:before {
    top: -6px;
}
:hover:after,
:hover:before,
:active:after,
:active:before,
:focus:after,
:focus:before {
    width: 100%;
    left: 0;
}
`