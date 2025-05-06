import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root{
    width: 100vw;
    height: 100vh;
    color: white;
  }

  body{
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
    background:#060018;
  }

 
//Scrollbar
::-webkit-scrollbar-track {
background:#060018;
}


::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar:horizontal {
  display: none;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient( #060018,#1146F2,#060018);
  border-radius: 20px;
}
`;

export default GlobalStyle;
