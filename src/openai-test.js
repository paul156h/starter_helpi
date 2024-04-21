import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{role: "system", content: "You are a helpful assistant."},{role: "user", content: "Who is the 42nd president of America?"}],
    model: "gpt-4-turbo",
  })

  console.log(completion.choices[0]);
}
main();

/*
const openai = new OpenAI();

const response = await openai.chat.completions.create({
  model: "gpt-4-turbo",
  stream: true,
  messages: [{"role": "system", "content": "You are a helpful assistant."},
  {"role": "user", "content": "Who won the world series in 2020?"},
  {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
  {"role": "user", "content": "Where was it played?"}],
});

console.log(response.messages.content)



async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-4-turbo",
  });

  console.log(completion.choices[0]);
}

main();
*/