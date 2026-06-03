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
            elif not input_char.lower() in a_to_z:
                raise ValueError()

            print("The letter x is a vowel." if input_char.lower() in vowels else "The letter x is a consonant.")
            return
        except ValueError as error:
            print("Invalid input: Expecting a letter (a-z or A-Z), try again")

# Call the function
# check_letter()


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
            user_age = int(input("Enter your age: "))
            print("You are eligible to vote." if user_age >= voting_age else "You are not eligible to vote.")
            return
        except ValueError as error:
            print("Invalid input try again")

# Call the function
# check_voting_eligibility()


# Exercise 3: Calculate Dog Years
#
# Write a Python function named `calculate_dog_years` that calculates a dog's age in dog years.
# Fill in the logic to perform the calculation inside the function.
#
# Function Details:
# - Prompt the user to enter a dog's age: "Input a dog's age: "
# - Calculate the dog's age in dog years:
#      - The first two years of the dog's life count as 10 dog years each.
#      - Each subsequent year counts as 7 dog years.
# - Print the calculated age: "The dog's age in dog years is xx."
# - Replace 'xx' with the calculated dog years.
#
# Hints:
# - Use the `input()` function to capture user input.
# - Convert the string input to an integer using `int()`.
# - Apply conditional logic to perform the correct age calculation based on the dog's age.

def calculate_dog_years():
    # Your control flow logic goes here
    while True:
        try:
            dog_age = int(input("Input a dog's age: "))
            dog_years = 0
            for year in range(dog_age):
                dog_years = dog_years + 10 if year < 2 else dog_years + 7
            print(f"The dog's age in dog years is {dog_years}")
            return
        except ValueError as error:
            print("Invalid input try again")

# Call the function
# calculate_dog_years()


# Exercise 4: Weather Advice
#
# Write a Python script named `weather_advice` that provides clothing advice based on weather conditions.
#
# Requirements:
# - The script should prompt the user to enter if it is cold (yes/no).
# - Then, ask if it is raining (yes/no).
# - Use logical operators to determine clothing advice:
#   - If it is cold AND raining, print "Wear a waterproof coat."
#   - If it is cold BUT NOT raining, print "Wear a warm coat."
#   - If it is NOT cold but raining, print "Carry an umbrella."
#   - If it is NOT cold AND NOT raining, print "Wear light clothing."
#
# Hints:
# - Use logical operators (`AND`, `OR`, `NOT`) in your if statements to handle multiple conditions.

def weather_advice():
    # Your control flow logic goes here
    yes_no = ["yes", "no"]
    while True:
        try:
            is_cold = input("Is it cold? (yes/no): ")
            if not is_cold.lower() in yes_no:
                raise ValueError()

            is_raining = input("Is it raining? (yes/no): ")
            if not is_raining.lower() in yes_no:
                raise ValueError()

            if is_cold == "yes":
                print("Wear a waterproof coat." if is_raining == "yes" else "Wear a warm coat.")
            else:
                print("Carry an umbrella." if is_raining == "yes" else "Wear light clothing.")

            return
        except ValueError as error:
            print("Invalid input try again")


# Call the function
# weather_advice()


# Exercise 5: What's the Season?
#
# Write a Python function named `determine_season` that figures out the season based on the entered date.
#
# Requirements:
# - The function should first prompt the user to enter the month (as three characters): "Enter the month of the year (Jan - Dec):"
# - Then, the function should prompt the user to enter the day of the month: "Enter the day of the month:"
# - Determine the current season based on the date:
#      - Dec 21 - Mar 19: Winter
#      - Mar 20 - Jun 20: Spring
#      - Jun 21 - Sep 21: Summer
#      - Sep 22 - Dec 20: Fall
# - Print the season for the entered date in the format: "<Mmm> <dd> is in <season>."
#
# Hints:
# - Use 'in' to check if a string is in a list or tuple.
# - Adjust the season based on the day of the month when needed.
# - Ensure to validate input formats and handle unexpected inputs gracefully.

def determine_season():
    # Your control flow logic goes here
    months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    months_with_31_days = [0, 2, 4, 6, 7, 9, 11]
    while True:
        try:
            month = input("Enter the month of the year (Jan - Dec): ")
            month_check = month.lower()
            if not month_check in months:
                raise ValueError("not found in months")

            day_of_month = int(input("Enter the day of the month: "))
            if day_of_month < 0 or day_of_month > 31:
                raise ValueError()
            elif ((not months.index(month_check) in months_with_31_days) and (day_of_month > 30)) or month == months[1] and day_of_month > 29:
                raise ValueError()
            else:
                date_point = (months.index(month_check), day_of_month)
                season = ""

                if (2, 20) <= date_point < (5, 21):
                    season = "Spring"
                elif (5, 21) <= date_point < (8, 22):
                    season = "Summer"
                elif (8, 22) <= date_point < (11, 21):
                    season = "Fall"
                else:
                    season = "Winter"

            print(f"{month} {day_of_month} is in {season}")
            return
        except ValueError as error:
            print("Invalid input try again")
            print(error)

# Call the function
# determine_season()


# Exercise 6: Number Guessing Game
#
# Write a Python function named `guess_number` that allows a user to guess a predetermined number within a range.
#
# Requirements:
# - Set a fixed number as the target for guessing (e.g., 42).
# - Prompt the user to guess a number within a range (e.g., 1 to 100).
# - Allow the user to guess up to five times.
# - After each guess, use conditional statements with AND, OR, and NOT to give the user hints like:
#   - "Guess is too low" or "Guess is too high."
#   - "Last chance!" when they are on their fifth guess.
# - Print "Congratulations, you guessed correctly!" if they guess the number.
# - Print "Sorry, you failed to guess the number in five attempts." if they do not succeed.
#
# Hints:
# - Use a for loop with a range to limit guesses to five.
# - Use logical AND, OR, and NOT to check conditions and provide appropriate feedback.

def guess_number():
    # Your control flow logic goes here
    import random
    hidden_number = random.randint(1, 100)
    tries = 0

    while True:
        try:
            player_input = int(input("Guess the hidden number in five attempts! Enter a number between 1 and 100: "))
            if player_input == hidden_number:
                print("Congratulations, you guessed correctly!")
                return
            elif player_input < 0 or player_input > 100:
                print("Your input is out of range.")
            else:
                tries += 1
                if tries < 5 and player_input < hidden_number:
                    print("Guess is too low.")
                elif tries < 5 and player_input > hidden_number:
                    print("Guess is too high.")
                else:
                    print(f"Sorry, you failed to guess the number in five attempts. Hidden number is {hidden_number}.")
                    return

                if tries == 4:
                    print("Last chance!")
        except ValueError as error:
            print(error)

# Call the function
# guess_number()


# Extra function to run exercise based on user input
def choose_exercise():
    exercises = [{"str_value":"Exercise 1: Vowel or Consonant", "fn":check_letter},
                 {"str_value":"Exercise 2: Old enough to vote?", "fn":check_voting_eligibility},
                 {"str_value":"Exercise 3: Calculate Dog Years", "fn":calculate_dog_years},
                 {"str_value":"Exercise 4: Weather Advice", "fn":weather_advice},
                 {"str_value":"Exercise 5: What's the Season?", "fn":determine_season},
                 {"str_value":"Exercise 6: Number Guessing Game", "fn":guess_number}]
    while True:
        try:
            for exercise in exercises:
                print(exercise["str_value"])

            print("  ")
            choice = int(input("Enter an exercise number or -1 to stop: "))
            if choice == -1:
                return

            print("  ")
            exercises[choice - 1]["fn"]()
            print("  ")
            input("--- press enter to continue ---")
            print("  ")
        except ValueError as error:
            print("Invalid input try again.")


choose_exercise()