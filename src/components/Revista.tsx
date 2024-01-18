import React, { useState } from 'react';
import { Typography, Grid, Button, Box, Modal } from '@mui/material';
import RelatedBlogs from './RelatedBlogs';
import { SingleBlog, SingleRevista } from '../types/types';
import RevistaCard from './RevistaCard';
import PreviousNext from './PreviousNext';


interface RevistaProps {
    post: SingleRevista;
    blogPosts: SingleBlog[];
    previous: any;
    next: any;
}

const styleModal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: '0 auto',
    width: '90%',
    height: '90%',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 0,
    textAlign: 'center'
};

const Revista: React.FC<RevistaProps> = ({ post, previous, next, blogPosts }): React.ReactNode => {

    const { rawDate, fecha, title, coverImage, inDesignID, } = post;
    const downloadLink = post.revistaPDF?.file.url;
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Typography component='h1' variant='h3' sx={{ mb: 0 }}>{title}</Typography>
            <time dateTime={rawDate}>{fecha}</time>

            <Grid container spacing={10}>
                <Grid item xs={12} md={4}>

                    <Button
                        component='a'
                        href={downloadLink}
                        target='_blank'
                        color="primary"
                        variant='contained' fullWidth
                        sx={{
                            my: 3, p: 1, '&:hover': {
                                color: 'white',
                            }
                        }}>
                        <strong>Descarga Revista</strong>
                    </Button>

                    <RevistaCard title={title} img={coverImage} slug='' date={fecha} />

                    {inDesignID &&
                        (<Button
                            fullWidth
                            sx={{ my: 2 }}
                            variant='outlined'
                            onClick={handleOpen}>
                            Leer Revista online
                        </Button>)}


                    <div dangerouslySetInnerHTML={{ __html: post.body?.childMarkdownRemark?.html }} />
                    <PreviousNext sectionUrl='/revistavamos' previous={previous} next={next} />

                    {/* show only for desktop */}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={styleModal}>
                            {inDesignID && <iframe src={inDesignID} width="100%" height="90%" allowFullScreen></iframe>}
                            <Button sx={{ margin: '0 auto', textAlign: 'center' }} onClick={handleClose}>Cerrar</Button>
                        </Box>
                    </Modal>

                </Grid>

                <Grid item xs={12} md={8} sx={{ mt: 3 }}>
                    <RelatedBlogs blogPosts={blogPosts} />
                </Grid>

            </Grid>
        </div>
    );
};

export default Revista;
