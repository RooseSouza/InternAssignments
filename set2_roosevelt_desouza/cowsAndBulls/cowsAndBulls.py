import random

def generate_number():
    return str(random.randint(1000, 9999))


def count_cows_and_bulls(num, guess):
    cows = sum(s == g for s, g in zip(num, guess))

    # For bulls, count matching digits ignoring positions used for cows
    bulls = 0
    num_remaining = []
    guess_remaining = []

    # Remove cows for next comparison
    for s, g in zip(num, guess):
        if s != g:
            num_remaining.append(s)
            guess_remaining.append(g)

    # Count bulls (digits present but in wrong position)
    for g in guess_remaining:
        if g in num_remaining:
            bulls += 1
            num_remaining.remove(g)  # remove one occurrence

    return cows, bulls


def is_valid_guess(guess):
    return guess.isdigit() and len(guess) == 4


def play_game():
    num = generate_number()
    attempts = 0

    print("Welcome to the Cows and Bulls Game!")
    print("There's a random 4 digit number which has been generated. Try to guess it!")
    print("Cows = correct digit and  correct position")
    print("Bulls = correct digit but wrong position")
    print("---------------------------------------------------")

    while True:
        guess = input("Enter your 4-digit guess: ").strip()

        if not is_valid_guess(guess):
            print("Invalid input! Please enter a 4 digit number.\n")
            continue

        attempts += 1
        cows, bulls = count_cows_and_bulls(num, guess)
        print(f"Result: {cows} Cows, {bulls} Bulls")

        if cows == 4:
            print(f"\n🎉 Congratulations! You guessed it right.")
            print(f"The number was {num}.")
            print(f"Total guesses: {attempts}")
            break


if __name__ == "__main__":
    play_game()
