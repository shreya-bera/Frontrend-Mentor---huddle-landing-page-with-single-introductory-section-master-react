/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from "@emotion/react";
import Typography from '@mui/material/Typography'; 
import Logo from "../images/logo.svg"

export default function Header() {
    const styles={
        root: css`
            padding: 3rem;
            @media (max-width: 376px) {
                padding: 2rem; 
            }
        `,
        typo:{
            fontFamily: `'Poppins', sans-serif`,
            fontWeight: 600,
            color: "#fff"
        },
        img: css`
            width: 11rem;
            @media (max-width: 376px) {
                width: 9rem;
            }
        `
    }
  return (
    <div css={styles.root}> 
        <img src={Logo} alt="Huddle Img" css={styles.img}/>
     </div>
  )
}
