# Bulls and Cows

In this project i was created a game called **Bull and Cows** between computer and Player.

Rules:
  - the computer comes up with a secret number, and the other player tries to guess it. The secret number must consist of 4 digits and each digit must be unique.
For example:
  - 1123 would not be an acceptable secret number, since the number 1 occurs twice;
  - 1234 on the other hand is an acceptable value for the secret number, since each digit is unique.
After each guess, the player will get a hint to help them guess better next time around.
The hint tells the player how many bulls and how many cows there were. What are bulls and cows?
  -  If there are any matching digits and they are in their right positions, they are counted as "bulls";
  - If in different positions, they are counted as "cows".

For example, with a secret number 4271:
Player's try: 1234

Hint: 1 bull and 2 cows

How did we arrive at one bull and two cows? The bull is the number 2 as it is in the right position.
The cows are 4 and 1, as they exist in the secret number but they are not in the right position.
Do not disclose to the user which digit is a cow and which one is bull, just how many there are (if any).

In this game player able to choose a level: hard level (certain numbers of attempts) and easy level (unlimited number of attempts).
