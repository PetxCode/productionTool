import React from 'react'
import { styled } from 'styled-components'


interface iData {
    text?: string;
    color?: string;
    icon?: string;
}

const SocialButton: React.FC<iData> = ({ text, color, icon }) => {
    return (
        <div>
            <Main>
                <Icon c={color}>{icon}</Icon>
                <Text>{text}</Text>
            </Main>
        </div>
    )
}

export default SocialButton

const Text = styled.div``

const Icon = styled.div<{ c?: string }>`
font-size: 30px;
font-weight: 700;
margin-right: 5px;
color: ${({ c }) => c};
/* color: "#fb8585"; */
`

const Main = styled.div`
width: 150px;
height: 39px;
display:flex;
justify-content: center;
align-items: center;

border: 1px solid silver;
border-radius: 3px;
margin: 10px 5px;
`