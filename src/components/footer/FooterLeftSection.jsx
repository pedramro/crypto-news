import { Box, Button, InputBase, TextField, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core';
import { useState } from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    formWrapper: {
        display: 'flex',
        gap: '5px',
        marginTop: '10px',
    },
    text: {
        fontSize: '13px',
        color: 'rgba(255, 255, 255, 0.60)'
    },
    textField: {
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.70)',
        borderRadius: '5px',
    },
    btn: {
        height: theme.spacing(5),
        backgroundColor: 'rgba(24, 205, 75, 0.75)',
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
        cursor: 'Pointer',
        transition: 'all 0.2s',
        '&:active': {
            backgroundColor: 'rgba(13, 149, 51, 0.75)'
        }
    },
    social: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '10px'
    },
    socialLink: {
        color: 'white',
        cursor: 'Pointer',
        textDecoration: 'none',
        transition: 'all 0.3s',
        '&:hover': {
            color: 'rgba(235, 144, 0, 1)',
        }
    }
}))

function FooterLeftSection() {
    const classes = useStyle()
    const [error, setError] = useState(false)
    const [helperText, setHelperText] = useState(null)
    const [inputColor, setInputColor] = useState('primary')

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    function onSubmit(e) {
        e.preventDefault()
        const inputValue = document.querySelector('#textField')
        if (regex.test(inputValue.value)){
            setError(false)
            setInputColor('primary')
            setHelperText('Thanks for subscribe!')
            inputValue.value = '' 
        } else {
            setError(true)
            setInputColor('secondary')
            setHelperText('Not valid!')
        }
        setTimeout(() => {
            setHelperText('')
        }, 1500)
    }

    return (
        <Box>
            <Box>
                <Typography variant="h6">STAY CONNECTED</Typography>
            </Box>
            <Box>
                <Typography variant="body2" className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus reprehenderit magni laborum nesciunt necessitatibus.</Typography>
            </Box>
            <Box>
                <form className={classes.formWrapper} onSubmit={onSubmit}>
                    <TextField inputProps={{ className: classes.textField }} color={inputColor} size='small' variant='outlined' id='textField' error={error} helperText={helperText} label='Email' />
                    <button className={classes.btn}>SUBSCRIBE</button>
                </form>
            </Box>
            <Box className={classes.social}>
                <a href="https://instagram.com" className={classes.socialLink} target='_blank'>
                    <InstagramIcon /> 
                </a>
                <a href="https://twitter.com" className={classes.socialLink} target='_blank'>
                    <TwitterIcon />
                </a>
                <a href="https://facebook.com" className={classes.socialLink} target='_blank'>
                    <FacebookIcon />
                </a>
                <a href="https://linkedin.com" className={classes.socialLink} target='_blank'>
                    <LinkedInIcon />
                </a>
            </Box>
        </Box>
    )
}

export default FooterLeftSection;