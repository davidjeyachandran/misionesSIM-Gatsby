import React from 'react'
import { SingleRevista } from '../../types/types'
import { CardMedia, Typography } from '@mui/material';
import { Link } from 'gatsby';
import { removeLeadingSlash } from '../../utils';

type RevistaCurrentProps = {
    post: SingleRevista | null;
}

const RevistaCurrent = ({ post }: RevistaCurrentProps) => {

    if (!post) return null;

    const { title, slug } = post;
    const coverImage = post.coverImage?.gatsbyImageData.images.fallback?.src || '';
    const cleanSlug = removeLeadingSlash(slug);

    return (
        <>
            <Link to={`/revistavamos/${cleanSlug}`}>
                <Typography gutterBottom variant='h6' component='div' sx={{ minHeight: 40, lineHeight: 1.2 }}>
                    {title}
                </Typography>
            </Link>

            <Link to={`/revistavamos/${cleanSlug}`}>
                <CardMedia
                    component='img'
                    height='390'
                    image={coverImage}
                    alt={title}
                />
            </Link>
        </>
    )
}

export default RevistaCurrent