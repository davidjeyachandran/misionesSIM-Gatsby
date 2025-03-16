import React from 'react';
import { Link } from 'gatsby';
import { Button, Typography, Stack, Box, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
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

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAnswer(parseInt(event.target.value, 10));
    };

    const isCorrectAnswer = (index: number) => {
        return index === correct_answer_index;
    };

    const getOptionStyle = (index: number) => {
        if (selectedAnswer === null) return {};

        if (index === selectedAnswer) {
            return {
                color: isCorrectAnswer(index) ? 'success.main' : 'error.main',
                '& .MuiFormControlLabel-label': {
                    color: isCorrectAnswer(index) ? 'success.main' : 'error.main',
                    fontWeight: 'bold'
                },
                '&.Mui-checked': {
                    color: isCorrectAnswer(index) ? 'success.main' : 'error.main',
                },
                '& .MuiSvgIcon-root': {
                    color: isCorrectAnswer(index) ? 'success.main' : 'error.main',
                }
            };
        }
        return {};
    };

    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
                Responde la pregunta:
            </Typography>
            <Typography variant="h6" gutterBottom>
                {question}
            </Typography>

            <FormControl component="fieldset" sx={{ width: '100%', mt: 2 }}>
                <RadioGroup value={selectedAnswer === null ? '' : selectedAnswer} onChange={handleAnswerChange}>
                    <Stack spacing={1.5}>
                        {options.map((option: string, index: number) => (
                            <FormControlLabel
                                key={index}
                                value={index}
                                control={
                                    <Radio
                                        sx={getOptionStyle(index)}
                                        disabled={selectedAnswer !== null && selectedAnswer !== index}
                                    />
                                }
                                label={option}
                                sx={{
                                    '&.Mui-disabled': {
                                        opacity: 0.7,
                                    }
                                }}
                            />
                        ))}
                    </Stack>
                </RadioGroup>
            </FormControl>

            <Box sx={{ height: '160px', mt: 2 }}>
                {selectedAnswer !== null && (
                    <Stack spacing={2}>
                        {isCorrectAnswer(selectedAnswer) ? (
                            <>
                                <Typography
                                    variant="h6"
                                    color="success.main"
                                    sx={{
                                        fontWeight: 'bold',
                                        mb: 2,
                                        minHeight: '32px'
                                    }}
                                >
                                    ¡Correcto! ¡Bien hecho!
                                </Typography>
                                {nextBlog && (
                                    <Link to={`/blog/${nextBlog.slug}`} rel='next'>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                marginLeft: "auto",
                                                fontSize: '1em',
                                                py: 2,
                                                textTransform: 'none'
                                            }}
                                            endIcon={<ArrowForwardIosIcon />}
                                        >
                                            Próximo Blog: {nextBlog.title}
                                        </Button>
                                    </Link>
                                )}
                            </>
                        ) : (
                            <Button
                                variant="outlined"
                                onClick={() => setSelectedAnswer(null)}
                                sx={{ mt: 2 }}
                            >
                                Intenta de nuevo
                            </Button>
                        )}
                    </Stack>
                )}
            </Box>
        </Box>
    );
};

export default MultipleChoice;