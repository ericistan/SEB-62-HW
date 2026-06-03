# Exercise 1: Vowel or Consonant
#
# Write a Python function named `check_letter` that determines if a given letter
# is a vowel or a consonant.
#
# Requirements:
# - The function should prompt the user to enter a letter (a-z or A-Z) and determine its type.
# - It should handle both uppercase and lowercase letters.
# - If the letter is a vowel (a, e, i, o, u), print: "The letter x is a vowel."
# - If the letter is a consonant, print: "The letter x is a consonant."
# - Replace 'x' with the actual letter entered by the user.
#
# Hints:
# - Use the `input()` function to capture user input.
# - Utilize the `in` operator to check for vowels.
# - Ensure to provide feedback for non-alphabetical or invalid entries.

def check_letter():
    # Your control flow logic goes here
    vowels = "aeiou"
    a_to_z = "abcdefghijklmnopqrstuvwxyz"
    while True:
        try:
            input_char = input("Enter a letter (a-z or A-Z): ")
            if len(input_char) != 1:
                raise ValueError()
            elif not input_char in a_to_z:
                raise ValueError()

            print("The letter x is a vowel." if input_char.lower() in vowels else "The letter x is a consonant.")
            return
        except ValueError as error:
            print("Invalid input: Expecting a letter (a-z or A-Z), try again")

# Call the function
check_letter()


# Exercise 2: Old enough to vote?
#
# Write a Python function named `check_voting_eligibility` that determines if a user is old enough to vote.
# Fill in the logic to perform the eligibility check inside the function.
#
# Function Details:
# - Prompt the user to input their age: "Please enter your age: "
# - Validate the input to ensure the age is a possible value (no negative numbers).
# - Determine if the user is eligible to vote. Set a variable for the voting age.
# - Print a message indicating whether the user is eligible to vote based on the entered age.
#
# Hints:
# - Use the `input()` function to capture the user's age.
# - Use `int()` to convert the input to an integer. Ensure to handle any conversion errors gracefully.
# - Use a conditional statement to check if the age meets the minimum voting age requirement.

def check_voting_eligibility():
    # Your control flow logic goes here
    voting_age = 18
    while True:
        try:
            user_age = input("Enter your age: ")
            print("You are eligible to vote." if int(user_age) >= voting_age else "You are not eligible to vote.")
            return
        except ValueError as error:
            print("Invalid input try again")

# Call the function
check_voting_eligibility()