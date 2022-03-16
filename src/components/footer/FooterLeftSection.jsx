import { Box, Button, InputBase, TextField, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core';
import { useState } from "react";

const useStyle = makeStyles(theme => ({
    formWrapper: {
        display: 'flex',
        gap: '5px',
        marginTop: '10px',
    },
    textField: {
        color: 'white'
    },
    btn: {
        height: theme.spacing(5)
    }
}))

function FooterLeftSection() {
    const classes = useStyle()
    const [error, SetError] = useState(false)
    const [helperText, setHelperText] = useState(null)
    const [inputColor, setInputColor] = useState('primary')

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    function onSubmit() {
        const inputValue = document.querySelector('#textField').value
        if (inputValue === ''){
            SetError(true)
            setInputColor('secondary')
            setHelperText('Not valid!')
        } else if (regex.test(inputValue)){
            console.log('valid');
            SetError(false)
            setInputColor('success')
            setHelperText(null)
            setHelperText('Thanks for subscribe!')
        } else {
            SetError(true)
            setInputColor('secondary')
            setHelperText('Not valid!')
        }
    }

    return (
        <Box>
            <Box>
                <Typography variant="h6">STAY CONNECTED</Typography>
            </Box>
            <Box>
                <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus reprehenderit magni laborum nesciunt necessitatibus.</Typography>
            </Box>
            <Box>
                <form className={classes.formWrapper}>
                    <TextField inputProps={{ className: classes.textField }} color={inputColor} size='small' id='textField' error={error} helperText={helperText} variant="outlined" label='Email' />
                    <Button onClick={onSubmit} variant="contained" color="primary" className={classes.btn} >Subscribe</Button>
                </form>
            </Box>
        </Box>
    )
}

export default FooterLeftSection;