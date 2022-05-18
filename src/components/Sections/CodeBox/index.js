import { useState, useEffect } from 'react';
import {
  SectionWrapper,
  SectionContainer,
  Row,
  Col1,
  Col2,
  Heading,
} from '../SectionElements';
import { TextArea, SpinnerImg, Error } from './CodeBoxElements';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import generate from '../../../api/generate';
import Button from '@mui/material/Button';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'aliceblue',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Spinner = ({ loading }) => {
  return loading ? (
    <SpinnerImg alt="spinner gif" src="https://i.imgur.com/01yMDgZ.gif" />
  ) : null;
};

const Message = ({ status, text }) => {
  return status && status !== 'loading' ? <Error>{text}</Error> : null;
};

const CodeBox = () => {
  const [expanded, setExpanded] = useState('panel1');
  const [algoInput, setAlgoInput] = useState('');
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    try {
      const response = await generate({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { algo: algoInput },
      });
      setResults((results) => [
        {
          algo: algoInput.toString(),
          response: `The time complexity of this function is ${response}`,
        },
        ...results,
      ]);
      setAlgoInput('');
      setStatus('');
    } catch (err) {
      setStatus('error');
      console.log(err);
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('LAST_10_RESULTS'));
    if (data !== null) setResults((prev) => [...prev, ...data]);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('LAST_10_RESULTS', JSON.stringify(results));
  }, [results]);

  return (
    <SectionWrapper color={'red'} background={'dark'}>
      <SectionContainer>
        <Row>
          <Col1>
            <Heading color={'light'}>Calculate Time Complexity.</Heading>
            <form onSubmit={onSubmit}>
              <TextArea
                type="text"
                name="algo"
                placeholder="Enter an algo"
                value={algoInput}
                onChange={(e) => {
                  setAlgoInput(e.target.value);
                }}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={!algoInput}
                style={{ backgroundColor: 'lightcyan', color: 'black' }}
              >
                Generate
              </Button>
              <Spinner loading={status === 'loading' && true} />
              <Message status={status} text={'Error'} />
            </form>
          </Col1>

          <Col2>
            {results.map((result) => (
              <Accordion
                key={result.algo}
                expanded={expanded === result.algo}
                onChange={handleChange(result.algo)}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>{result.algo}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      {result.algo}
                    </Typography>
                    {result.response}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
            {results.length > 0 && (
              <button onClick={() => setResults([])}>Clear</button>
            )}
          </Col2>
        </Row>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default CodeBox;
