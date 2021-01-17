function checkAnswer(answer) {
  //Write your code in here

  const possibleAnswers = [
    {
      veryPositive: [
        'It is certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes - definitely.',
        'You may rely on it.'
      ],
      positive: [
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Yes.',
        'Signs point to yes.'
      ],

      negative: [
        'Reply hazy, try again.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.'
      ],

      veryNegative: [
        "Don't count on it.",
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.'
      ]
    }
  ];

  let status = '';
  possibleAnswers.forEach((array) => {
    if (array.veryPositive.includes(answer)) {
      status = 'very positive';
    }

    if (array.positive.includes(answer)) {
      status = 'positive';
    }

    if (array.negative.includes(answer)) {
      status = 'negative';
    }

    if (array.veryNegative.includes(answer)) {
      status = 'very negative';
    }
  });
  return status;
}

const status = checkAnswer('It is certain.');

console.log(status);
