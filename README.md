# Mrs. Beasley (Discord Bot)

#### This bot is my volunteer work for the /r/loseitchallenges hosted on Reddit and Discord quarterly. Functions of this bot are made to assist in the moderation of the challenge, and has already saved me more time than completing the tasks it does manually.

#### The bot is named after my cat, Mrs. Beasley, and takes after her sassy personality.

## User Commands:

- `!convert` to make a unit conversion (kg/lbs, C/F, mi/km only)
  - *Example:* `!convert 20kg` or `!convert 55f`
---
- `!conversions` to pull up a unit conversion chart
---
- `!converttocat` to convert a message into cat language
---
- `!spell` to emojify a message
  - *Example:* `!spell hello world` Output: `HELLO WORLD` in emoji letters.
---
- `!eightball` to make a prediction
---
- `!forms` to summon challenge logs
---
- `!schedule` to summon challenge schedule
---
- `!roll` to roll virtual dice
  - *Syntax:* `!roll [number of dice]d[number of sides]` Number of dice can be left blank and will default to one die with `!roll d[number of sides]`
  - *Example:* `!roll 3d6` for 3 d6 dice or `!roll d12` for 1 d12 die.
---
- `!tdee` to calculate estimated energy expenditure. 
  - *Syntax:* `!tdee [male/female *or* m/f] [age] [height in inches--number only] [weing in pounds--number only]`
  - *Examples:* `!tdee m 23 74 195` for a 23 year old, 6'2" man who is 195 lbs. `!tdee m 41 64 131` for a 131 lb, 5'4", 41 yo women.
---
  - `!metric tdee` will do the same. Replace height in inches with height in centimeters, and weight in pounds with weight in kilograms. 
---
- `!bmi` will calculate a user's body mass index.
  - *Syntax:* `!bmi [height in inches] [weight in pounds]`
  - *Example:* `!bmi 74 195` for a 6'2", 195 lb person
  - `!metric bmi` will do the same. Replace height in inches with height in centimeters, and weight in pounds with weight in kilograms. 
---
- `echo >>` to have the bot repeat a user's message. The bot will automatically delete the user's original message after 0.5s.
  - *Example:* `echo >>Hello world!` Output: `Hello world!`
---
- `!bingo` to add the weekly `Got Bingo` role to yourself.
---
- `!choose` to make the bot decide something for you. Prompts are separated by commas.     
  - *Syntax:* `!choose [something], [something], [something]`
---
## Admin Commands
### QOTD Functions
- `$qotd` Posts the question of the day in the general chat and prompts admin to delete the question from the database after posting in the admin bot chat
---
- `$new` adds a new question from the database
---
- `$del` deletes a question from the database 
  - *Note:* Spelling, caps, spacing, and markdown features must be exact, so it is best to capy and paste from the list of questions
---
- `$list` lists all the questions in the database
