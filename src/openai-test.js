import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{role: "system", content: "You are a helpful assistant. Your answers will be used as the results of an ideal career questionnaire"},{role: "user", content: "What careers would you recommend in the cybersecurity field?"}],
    model: "gpt-4-turbo",
  })

  console.log(completion.choices[0]);
}
main();