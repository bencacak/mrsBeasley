# Mrs. Beasley (Discord Bot)

#### This bot is my volunteer work for the /r/loseitchallenges hosted on Reddit and Discord quarterly. Functions of this bot are made to assist in the moderation of the challenge, and has already saved me more time than completing the tasks it does manually.

#### The bot is named after my cat, Mrs. Beasley, and takes after her sassy personality.
---
#### Donate Monero (XMR):
##### 424vxRh3NEAXarqhq8JBjLdGj6v2vfiWt1Hfm8rtbq9e2PFrEAc3KxUEsAqMBvyDkMdAUavRBvthRBG51MbAJQFB6QGkEgH
---
#### Donate Bitcoin (BTC):
##### bc1qfcg63c79rc6uvarzppjkllc7zkjrg9mdrctf0u
---
## User Commands:

### Unit Converter Commands

- `!convert` to make a unit conversion to a select unit
  - *Syntax:* `!convert <value> <unit abbreviation> to <new unit abbreviation>`
  - *Example:* `!convert 20 kg to g` or `!convert 55 gal to qt`

---    

    !convert 360 mi to m

    //Output: 

![a screenshot of the output](./modules/assets/convertTo.png)

<!--
---

##### Note: Auto conversions are disabled for now

Mrs. Beasley will automatically do some conversions if a message contains a value and an accepted unit as an argument.

    190 lbs

    //Output:

![An example of this function in action](./modules/assets/autoConvert.png)

- `!conversions` to pull up a unit conversion chart

---

    !conversions

    //output:

![screenshot of output](./modules/assets/conversions.JPG)
---
-->

---

- `!spell` to emojify a message

---

    !spell hello world

    //Output:

![a screenshot of the output](./modules/assets/emojify.JPG)

---

- `!eightball` to make a prediction

---

    !eightball

    //Output:

![a screenshot of the output](./modules/assets/eightballFalse.JPG)

    !eightball Will I be rich?

    //Output:

![a screenshot of the output](./modules/assets/eightball.JPG)
  
  - *Note:* Sometimes she is rude

---

- `!roll` to roll virtual dice

  - *Syntax:* `!roll [number of dice]d[number of sides]` Number of dice can be left blank and will default to one die with `!roll d[number of sides]`

  - *Example:* `!roll 3d6` for 3 d6 dice or `!roll d12` for 1 d12 die.

---

    !roll 3d6

    //Output:

![a screenshot of the output](./modules/assets/3d6.JPG)

    !roll d12

    //Output:

![a screenshot of the output](./modules/assets/d12.JPG)

---

- `!echo` to have the bot repeat a user's message. The bot will automatically delete the user's original message after 0.5s.

  - *Example:* `echo >>Hello world!` Output: `Hello world!`

---

    !echo Hello World!

    //Output:

![a screenshot of the output](./modules/assets/echoCommand.JPG)

![a screenshot of the output](./modules/assets/echoOutput.JPG)

---

- `!bingo` to add the weekly `Got Bingo` role to yourself.

---

    !bingo

    //Output:

![a screenshot of the output](./modules/assets/bingoCommand.jpg)

![a screenshot of the output](./modules/assets/bingoRole.JPG)

---

- `!choose` to make the bot decide something for you. Prompts are separated by commas.  

  - *Syntax:* `!choose [something], [something], [something]`

---

    !choose go for a swim, go for a bike ride, go for a run

    //Output:

![a screenshot of the output](./modules/assets/choose.JPG)

