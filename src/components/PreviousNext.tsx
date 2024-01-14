import { Link } from 'gatsby'
import React from 'react'
import { removeLeadingSlash } from '../utils'
import { Box, Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type PreviousNextProps = {
    sectionUrl: string,
    previous: {
        title: string,
        slug: string
    } | null,
    next: {
        title: string,
        slug: string
    } | null
}

const PreviousNext = ({ sectionUrl, previous, next }: PreviousNextProps) => {

    const previousLink = previous ? `${sectionUrl}/${removeLeadingSlash(previous.slug)}` : '';
    const nextLink = next ? `${sectionUrl}/${removeLeadingSlash(next.slug)}` : '';

    if (previous || next) {
        return (
            <Box display="flex"
                justifyContent="space-between">
                {previous && (
                    <Link to={previousLink} rel='previous'>
                        <Button variant="text" startIcon={<ArrowBackIosNewIcon />}>{previous.title}</Button>
                    </Link>
                )}

                {next && (
                    <Link to={nextLink} rel='next'>
                        <Button sx={{ marginLeft: "auto" }} variant="text" endIcon={<ArrowForwardIosIcon />}>{next.title}</Button>
                    </Link>
                )}
            </Box>
        )
    }

    return null;
}

export default PreviousNext