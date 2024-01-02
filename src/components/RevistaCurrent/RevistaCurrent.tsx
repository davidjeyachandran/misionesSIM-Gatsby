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
        <Box width={300}>
            <Link to={`/revistavamos/${cleanSlug}`}>
                <Typography gutterBottom variant='h4' component='div' sx={{ minHeight: 40, lineHeight: 1.2 }}>
                    {title}
                </Typography>
            </Link>

            <RevistaCard height={440} title={title} img={coverImage} slug={slug} date={fecha} />
        </Box>
    )
}

export default RevistaCurrent