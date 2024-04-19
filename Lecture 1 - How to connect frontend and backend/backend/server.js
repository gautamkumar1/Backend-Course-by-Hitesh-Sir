import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/api/jokes', (req, res) => {
    res.send([
        {
            id: 1,
            title: "Math Joke",
            content: "Why was the math book sad? Because it had too many problems."
          },
          {
            id: 2,
            title: "Dad Joke",
            content: "Why don't skeletons fight each other? They don't have the guts."
          },
          {
            id: 3,
            title: "Food Joke",
            content: "I told my wife she was drawing her eyebrows too high. She looked surprised."
          },
          {
            id: 4,
            title: "Technology Joke",
            content: "Why was the computer cold? It left its Windows open."
          },
          {
            id: 5,
            title: "Animal Joke",
            content: "Why did the scarecrow win an award? Because he was outstanding in his field."
          }
    ])
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
