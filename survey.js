const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  rl.name = answer;

  rl.question('What\'s an activity you like doing? ', (answer) => {
    rl.activity = answer;
    
    rl.question('What do you listen to while doing that? ', (answer) => {
      rl.music = answer;

      rl.question('Which meal is your favorite (eg: dinner, brunch, etc.) ', (answer) => {
        rl.meal = answer;

        rl.question('What\'s your favorite thing to eat for that meal? ', (answer) => {
          rl.food = answer;

          rl.question('Which sport is your absolute favorite? ', (answer) => {
            rl.sport = answer;

            rl.question('What is you superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              rl.superpower = answer;

              console.log(`${rl.name} loves listening to ${rl.music} while ${rl.activity}, devouring ${rl.food} for ${rl.meal}, prefers ${rl.sport} over any other sport and is amazing at ${rl.superpower}.`);

              rl.close();
            });

          });

        });

      });
    
    });

  });

});





rl.question('What\'s an activity you like doing? ', (answer) => {
  rl.activity = answer;

  rl.close();
});

