import styled from 'styled-components';
import { theme } from '../utils';


const BaseButton = styled.button`
    font-size:1rem;
    line-height: 1rem;
    padding: .6rem 2rem;
    color:white;    
    border: none;
    border-radius: 6px; 
    min-width: 100px;
    cursor: pointer;    
`;

const Button = styled(BaseButton)`
    box-sizing: border-box;
    &:hover, &:active {         
        outline: none;
        border: ${props => 
            props.primary ? `2px solid ${theme.primaryLightColor}` : 
            props.secondary ? `2px solid ${theme.primaryColor}` :
            props.tertiary ? `2px solid ${theme.primaryColor}` :
            `none`
        } ;
        color: ${theme.textColorInverted};

        background-color: ${props =>         
            props.primary ? `${theme.primaryLightColor}` : 
            props.secondary ? `${theme.primaryColor}` :
            props.tertiary ? `${theme.primaryColor}` :
            `${theme.primaryColor}`
        } ;
    };

    &:focus {
        background-color: ${props =>         
            props.primary ? `${theme.primaryLightColor}` : 
            props.secondary ? `${theme.primaryColor}` :
            props.tertiary ? `${theme.primaryColor}` :
            `${theme.primaryColor}`
    } ;
       
        box-shadow: ${props => 
            props.primary ? `inset 0 0 0 2px ${theme.primaryLightColor}, inset 0 0 0 5px ${theme.textColorInverted};` : 
            props.secondary ? `inset 0 0 0 2px ${theme.primaryColor}, inset 0 0 0 5px ${theme.textColorInverted};` :
            props.tertiary ? `inset 0 0 0 2px ${theme.primaryColor}, inset 0 0 0 5px ${theme.textColorInverted};` :
            `none`
        } ;
        border: ${props => 
            props.primary ? `2px solid ${theme.primaryLightColor}` : 
            props.secondary ? `2px solid ${theme.primaryColor}` :
            props.tertiary ? `2px solid ${theme.primaryColor}` :
            `none`
        } ;

        color: ${ props => 
            props.primary ? `${theme.textColorInverted}` : 
            props.secondary ? `${theme.textColorInverted}` :
            props.tertiary ? `${theme.textColorInverted}` :
            `${theme.textColorInverted}`
        } ;
        outline: none;
    };

    border: ${props => 
        props.primary ? `2px solid ${theme.primaryColor}` : 
        props.secondary ? `2px solid ${theme.primaryColor}` :
        props.tertiary ? `2px solid ${theme.primaryDarkColor}` :
        `none`
    } ;

    background-color: ${props =>         
            props.primary ? `${theme.primaryColor}` : 
            props.secondary ? `${theme.textColorInverted}` :
            props.tertiary ? `${theme.primaryDarkColor}` :
            `var(--neutral-300)`
    } ;

    color: ${ props => 
            props.primary ? `${theme.textColorInverted}` : 
            props.secondary ? `${theme.primaryColor}` :
            props.tertiary ? `${theme.textColorInverted}` :
            `${theme.textColorInverted}`
    }
`;

export default Button;