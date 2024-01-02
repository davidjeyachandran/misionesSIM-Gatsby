import React from 'react'
import { SingleRevista } from '../../types/types'
import { Box, CardMedia, Typography } from '@mui/material';
import { Link } from 'gatsby';
import { removeLeadingSlash } from '../../utils';
import RevistaCard from '../RevistaCard';

type RevistaCurrentProps = {
    post: SingleRevista | null;
}

const RevistaCurrent = ({ post }: RevistaCurrentProps) => {

    if (!post) return null;

    const { title, slug, fecha, coverImage } = post;
    const cleanSlug = removeLeadingSlash(slug);

    return (
        <>
            <Link to={`/revistavamos/${cleanSlug}`}>
                <Typography gutterBottom component='h2' variant='h3' sx={{ minHeight: 40, lineHeight: 1.2 }}>
                    Revista Actual
                </Typography>
            </Link>
            <Box width={300}>
                <RevistaCard height={440} title={title} img={coverImage} slug={slug} date={fecha} />
            </Box>
        </>
    )
}

export default RevistaCurrent