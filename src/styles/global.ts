import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      background: linear-gradient(#710609,#290808);
      background-size:cover;
      background-repeat:no-repeat ;
      font-family: 'Inter', sans-serif ;
      color:white;
    }
`;

export default Global;