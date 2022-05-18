import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req) {
  const completion = await openai.createCompletion("text-curie-001", {
    prompt: generatePrompt(req.body.algo),
    temperature: 0.6,
  });
  return completion.data.choices[0].text;
}

function generatePrompt(algo) {
  return `${algo} \n\nThe time complexity of this function is`
}
