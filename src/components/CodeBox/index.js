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
  // eslint-disable-next-line
  const [result, setResult] = useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await generate({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
      },
      body: { algo: algoInput },
    });
    console.log(response);
    setResult(response);
    setAlgoInput('');
  };

  function solveMeFirst(a, b) {
    while (a >= 1 && b <= 1000) {
      return a + b;
    }
  }

  const timeComplexity = 'O(1) because the while loop will only run once';

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
                onChange={(e) =>
                  {
                    setAlgoInput(e.target.value)

                  }}
              />
              <input type="submit" value="Generate algos" />
            </form>
            <TextArea></TextArea>
          </Col1>

          <Col2>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>Collapsible Group Item #1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    {solveMeFirst.toString()}
                  </Typography>
                  {`The time complexity of this function is ${timeComplexity}`}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>Collapsible Group Item #2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    {solveMeFirst.toString()}
                  </Typography>
                  {`The time complexity of this function is ${timeComplexity}`}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Col2>
        </Row>
      </CodeBoxContainer>
    </CodeBoxWrapper>
  );
};

export default CodeBox;
