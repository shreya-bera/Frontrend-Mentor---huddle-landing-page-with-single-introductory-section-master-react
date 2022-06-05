/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from "@emotion/react";
import Typography from '@mui/material/Typography'; 
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from "../images/logo.svg";
import MockUp from "../images/illustration-mockups.svg";

export default function MainBody() {
    const styles={
        root: css`
            padding: 3rem;
            @media (max-width: 376px) {
                padding: 2rem; 
            }
        `,
        heading:{
            fontFamily: `'Open Sans', sans-serif`,
            fontWeight: 600,
            color: "#fff",
            pb: 2
        },
        body:{
            fontFamily: `'Open Sans', sans-serif`,
            fontWeight: 400,
            color: "#fff"
        },
        img: css`
            width: 80%;
            padding: 0 3rem;
            @media (max-width: 376px) {
                width: 82vw;
                padding: 2rem;
            }
        `,
        btn: {
			backgroundColor: "#fff",
           	color: "#674baf",
            padding: "0.8rem 3.5rem",
            textTransform: "none",
            borderRadius: "30px",
            mt:2,        
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            "&:hover": {
                backgroundColor: "#e882e8",
                color: "#fff",				
			},
		},
        btnText:{
            fontFamily: `'Poppins', sans-serif`
        },
        iconBtn:{
            border: "1px solid #fff",
            borderRadius: "100px",
            fontSize: "1.1rem",
            p:0.8,
            color:"#fff",
            cursor: "pointer",
            mr: 1.5,
            "&:hover": {
				color: "#e882e8",
                border: "1px solid #e882e8",
			},
        },
        textDiv: css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            padding-right: 4rem;
            @media (max-width: 850px) {
                ${'' /* width: 82vw; */}
                padding: 2rem;
                text-align: center
            }
        `,
        iconDiv:css`
            display: flex; 
            justify-content: end;
            @media (max-width: 850px) {
                justify-content: center;
            }
        `
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                    <img src={MockUp} alt="MockUp" css={styles.img}/>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                    <div css={styles.textDiv}>
                        <div>
                            <Typography variant="h4" component="div" gutterBottom sx={styles.heading}>
                                Build The Community Your Fans Will Love
                            </Typography> 
                            <Typography variant="body1" gutterBottom sx={styles.body}>
                                Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
                            </Typography> 
                            <Button sx={styles.btn} variant="contained"> 
                                <Typography variant="body1" sx={styles.btnText}>
                                    Register
                                </Typography>
                            </Button>
                        </div>
                        <div css={styles.iconDiv}>
                            <FacebookIcon sx={styles.iconBtn}/>                                
                            <TwitterIcon sx={styles.iconBtn}/> 
                            <InstagramIcon sx={styles.iconBtn}/>                             
                        </div>      
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
