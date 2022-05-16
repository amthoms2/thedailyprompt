import { useState } from 'react';
import {
  CodeBoxWrapper,
  CodeBoxContainer,
  Row,
  Col1,
  Col2,
  Heading,
  TextArea,
} from './CodeBoxElements';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import generate from '../../api/generate';

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
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
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

const CodeBox = () => {
  const [expanded, setExpanded] = useState('panel1');
  const [algoInput, setAlgoInput] = useState('');
  const [results, setResults] = useState({});

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await generate({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { algo: algoInput },
    });
    console.log(response);
    // setResults(results.concat(response));
    setResults({
      algo: algoInput.toString(),
      response: `The time complexity of this function is ${response}`
    });
    // setAlgoInput('');
  };


  return (
    <CodeBoxWrapper>
      <CodeBoxContainer>
        <Row>
          <Col1>
            <Heading>hey</Heading>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="algo"
                placeholder="Enter an algo"
                value={algoInput}
                onChange={(e) => {
                  setAlgoInput(e.target.value);
                }}
              />
              <input type="submit" value="Generate algos" />
            </form>
            <TextArea></TextArea>
          </Col1>

          <Col2>
            {algoInput ? (
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>{algoInput}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      {results.algo}
                    </Typography>
                    {results.response}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ) : (
              <h1>function goes here</h1>
            )}
          </Col2>
        </Row>
      </CodeBoxContainer>
    </CodeBoxWrapper>
  );
};

export default CodeBox;
