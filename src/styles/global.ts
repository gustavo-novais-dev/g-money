import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33CC95;

    --blue-light: #6933ff;

    --text-title: #363F5F;
    --text-body: #969cb3;

    --shape: #FFFF;
}


*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Poppins';
}

html{
    @media (max-width: 1000px){
        font-size:93.75%;
    }

    @media (max-width: 720px){
        font-size:87.5%;
    }
}


body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased; //fontes detalhadas(nítidas)
}

body, input, textarea, button{
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6, strong{
    font-weight: 600;
}

button{ 
    cursor: pointer;
}

[disable]{
    opacity: 0.6;
    cursor: not-allowed;
}

`