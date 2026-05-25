import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
}

html, body, #root {
    width: 100%;
    min-height: 100vh;
}

body {
    background-color: #000000;
    overflow-x: hidden;
}
`
