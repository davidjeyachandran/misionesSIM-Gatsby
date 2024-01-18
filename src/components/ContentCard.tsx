import React, { ReactNode } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

interface ContentCardProps {
    slug: string;
    title: string;
    subTitle?: string;
    children: ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = ({ slug, title, subTitle, children }) => {

    return (
        <>
            <Card>
                <Link to={slug}>
                    <Typography gutterBottom variant='h4' component='h3' sx={{ minHeight: 40, lineHeight: 1.2 }}>
                        {title}
                    </Typography>
                    <CardMedia>
                        {children}
                    </CardMedia>
                    <CardContent>

                        {subTitle && <Typography variant='body2' color='text.secondary'>
                            {subTitle}
                        </Typography>}
                    </CardContent>
                </Link>
            </Card>
        </>
    );
};

export default ContentCard;
