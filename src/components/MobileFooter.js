import { Box, Button, Link, Paper, Stack } from '@mui/material';
import React from 'react'
import { BsGlobe } from 'react-icons/bs';
import { justifyCenter } from 'themes/commonStyles';

const footerLinks = [
    { id: 1, text: "Privacy", url: "#" },
    { id: 2, text: "Terms", url: "#" },
    { id: 3, text: "Sitemap", url: "#" },
  ];

const MobileFooter = () => {
  return (
    <Box sx={{borderTop: '1px solid #CCC', mt: 3, pt: 2, width: '100%',}}>
        <Paper>
            <Button>
                <Box sx={{...justifyCenter, mr: 1}}>
                    <BsGlobe size={24} />
                </Box>
                English (CA)
            </Button>
            <Button>$ CAD</Button>
        </Paper>
        <Stack sx={{mt: 2}}>
            <Paper >
                <Link href="#">2023 Airbnb Copyright</Link>
            </Paper>
        </Stack>
        <Stack sx={{mt: 2}}>
            {
                footerLinks.map(link=>{
                    return (
                        <Paper key={link.id}>
                            <Link href={link.url}>{link.text}</Link>
                        </Paper>
                    )
                })
            }
        </Stack>
    </Box>
  )
}

export default MobileFooter