import styled from "styled-components"
import { theme } from "../../../global/theme" 

export const Container = styled.div`
  width: 50%;
  background-color: white;
  font-family: 'Lato', sans-serif;

  article {
    position: relative;
  }

  h2{
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: ${theme.colors.font.gray100};
  }

  p {
    margin: 0;
  }

  section.wine_image_sect {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  section.wine_info_sect {
    a {
      position: static;
    }
    a::before{
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      top: 0;
      left: 0;
      content: "";
    }

    div:nth-of-type(1) {
      p {
        display: inline;
        text-decoration: line-through;
      }

      span {
        background-color: ${theme.colors.orange};
        color: white
      }
    }

    div:nth-of-type(2){
      display: flex;
      
      p {
        font-size: 10px;
        font-weight: 300;
        flex-grow: 0.3;
      }
      
      span {
        flex-grow: 4;
        color: ${theme.colors.brand1};
      }
    }

    div:nth-of-type(3){
      font-size: 10px;
      font-weight: 300;
      color: ${theme.colors.font.gray60};
    }
  }
`