import React from 'react';
import { Link } from 'gatsby';
import { Button, Typography, Stack, Alert, Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type MultipleChoiceProps = {
    question: string;
    options: string[];
    correct_answer_index: number;
    nextBlog?: {
        slug: string;
        title: string;
    } | null;
};

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
    question,
    options,
    correct_answer_index,
    nextBlog
}) => {
    const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);

    const handleAnswerClick = (index: number) => {
        setSelectedAnswer(index);
    };

    const isCorrectAnswer = (index: number) => {
        return index === correct_answer_index;
    };

    const getButtonStyle = (index: number) => {
        const defaultStyle = {
            borderColor: 'secondary.main',
            backgroundColor: 'secondary.main',
            color: 'secondary.contrastText',
            borderRadius: '24px',
            py: 1,
            px: 2.5,
            minHeight: '48px',
            fontSize: '0.95rem',
            textTransform: 'none',
            '&:hover': {
                backgroundColor: '#444',
                borderColor: 'secondary.main'
            },
            '&.Mui-disabled': {
                color: 'secondary.contrastText',
                backgroundColor: 'secondary.main'
            }
        };

        if (index === selectedAnswer) {
            return {
                ...defaultStyle,
                borderColor: isCorrectAnswer(index) ? 'success.main' : 'error.main',
                backgroundColor: isCorrectAnswer(index) ? 'success.main' : 'error.main',
                '&:hover': {
                    backgroundColor: isCorrectAnswer(index) ? 'success.dark' : 'error.dark',
                    borderColor: isCorrectAnswer(index) ? 'success.main' : 'error.main'
                }
            };
        }

        return defaultStyle;
    };

    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h6" gutterBottom>
                {question}
            </Typography>

            <Stack spacing={1.5} sx={{ mt: 2 }}>
                {options.map((option: string, index: number) => (
                    <Button
                        key={index}
                        variant="outlined"
                        fullWidth
                        onClick={() => handleAnswerClick(index)}
                        disabled={selectedAnswer !== null && selectedAnswer !== index}
                        sx={{
                            justifyContent: 'flex-start',
                            textAlign: 'left',
                            ...getButtonStyle(index)
                        }}
                    >
                        {option}
                    </Button>
                ))}
            </Stack>

            {selectedAnswer !== null && (
                <Stack spacing={2} sx={{ mt: 2 }}>
                    {isCorrectAnswer(selectedAnswer) && (
                        <>
                            <Typography
                                variant="h6"
                                color="success.main"
                                sx={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    mb: 2
                                }}
                            >
                                ¡Correcto! ¡Bien hecho!
                            </Typography>
                            {nextBlog && (
                                <Link to={`/blog/${nextBlog.slug}`} rel='next'>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            marginLeft: "auto",
                                            mt: 2
                                        }}
                                        endIcon={<ArrowForwardIosIcon />}
                                    >
                                        Próximo Blog: {nextBlog.title}
                                    </Button>
                                </Link>
                            )}
                        </>
                    )}
                    {!isCorrectAnswer(selectedAnswer) && (
                        <Button
                            variant="text"
                            onClick={() => setSelectedAnswer(null)}
                            sx={{ mt: 2 }}
                        >
                            Intentar de nuevo
                        </Button>
                    )}
                </Stack>
            )}
        </Box>
    );
};

export default MultipleChoice; 