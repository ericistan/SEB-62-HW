# # Exercise 1: Vowel or Consonant
# #
# # Write a Python function named `check_letter` that determines if a given letter
# # is a vowel or a consonant.
# #
# # Requirements:
# # - The function should prompt the user to enter a letter (a-z or A-Z) and determine its type.
# # - It should handle both uppercase and lowercase letters.
# # - If the letter is a vowel (a, e, i, o, u), print: "The letter x is a vowel."
# # - If the letter is a consonant, print: "The letter x is a consonant."
# # - Replace 'x' with the actual letter entered by the user.
# #
# # Hints:
# # - Use the `input()` function to capture user input.
# # - Utilize the `in` operator to check for vowels.
# # - Ensure to provide feedback for non-alphabetical or invalid entries.
#
# def check_letter():
#     # Your control flow logic goes here
#     letter = None
#     while letter is None:
#             letter = str(input('enter a letter from a-z: '))
#             if len(letter) != 1 or not letter.isalpha():
#                 print('Invalid input, please input a single alphabet')
#                 continue
#             if letter.lower() in 'aeiou':
#                 print('The letter ',letter,'is a vowel')
#             else:
#                 print('The letter', letter, 'is a consonant')
#
# # Call the function
# check_letter()

# # Exercise 2: Old enough to vote?
# #
# # Write a Python function named `check_voting_eligibility` that determines if a user is old enough to vote.
# # Fill in the logic to perform the eligibility check inside the function.
# #
# # Function Details:
# # - Prompt the user to input their age: "Please enter your age: "
# # - Validate the input to ensure the age is a possible value (no negative numbers).
# # - Determine if the user is eligible to vote. Set a variable for the voting age.
# # - Print a message indicating whether the user is eligible to vote based on the entered age.
# #
# # Hints:
# # - Use the `input()` function to capture the user's age.
# # - Use `int()` to convert the input to an integer. Ensure to handle any conversion errors gracefully.
# # - Use a conditional statement to check if the age meets the minimum voting age requirement.
#
# def check_voting_eligibility():
#     # Your control flow logic goes here
#     age = None
#     while age is None:
#         try:
#             age = int(input('Please enter your age: '))
#             if age < 0:
#                 print('invalid input, age must not be negative')
#                 continue
#             if 0 <= age < 18:
#                 print('You have yet to reach eligible voting age')
#             else:
#                 print('Eligible to vote')
#         except ValueError as err:
#             print('invalid input, it cannot be alphabet or special characters')
#
#
# # Call the function
# check_voting_eligibility()


# # Exercise 3: Calculate Dog Years
# #
# # Write a Python function named `calculate_dog_years` that calculates a dog's age in dog years.
# # Fill in the logic to perform the calculation inside the function.
# #
# # Function Details:
# # - Prompt the user to enter a dog's age: "Input a dog's age: "
# # - Calculate the dog's age in dog years:
# #      - The first two years of the dog's life count as 10 dog years each.
# #      - Each subsequent year counts as 7 dog years.
# # - Print the calculated age: "The dog's age in dog years is xx."
# # - Replace 'xx' with the calculated dog years.
# #
# # Hints:
# # - Use the `input()` function to capture user input.
# # - Convert the string input to an integer using `int()`.
# # - Apply conditional logic to perform the correct age calculation based on the dog's age.
#
# def calculate_dog_years():
#     # Your control flow logic goes here
#     years = None
#     while years is None:
#         try:
#             years = int(input("Input a dog's age: "))
#             if years < 0:
#                 print('Invalid input, age cannot be negative')
#                 continue
#             if years in [0,1,2]:
#                 dog_years = years * 10
#                 print(f"The dog's age {years} in dog years is {dog_years}")
#             else:
#                 dog_years = (years - 2) * 7 + 20
#                 print(f"The dog's age {years} in dog years is {dog_years}")
#         except ValueError as err:
#                 print('invalid input, it cannot be alphabet or special characters')
#
# # Call the function
# calculate_dog_years()

# # Exercise 4: Weather Advice
# #
# # Write a Python script named `weather_advice` that provides clothing advice based on weather conditions.
# #
# # Requirements:
# # - The script should prompt the user to enter if it is cold (yes/no).
# # - Then, ask if it is raining (yes/no).
# # - Use logical operators to determine clothing advice:
# #   - If it is cold AND raining, print "Wear a waterproof coat."
# #   - If it is cold BUT NOT raining, print "Wear a warm coat."
# #   - If it is NOT cold but raining, print "Carry an umbrella."
# #   - If it is NOT cold AND NOT raining, print "Wear light clothing."
# #
# # Hints:
# # - Use logical operators (`AND`, `OR`, `NOT`) in your if statements to handle multiple conditions.
#
# def weather_advice():
#     # Your control flow logic goes here
#     cold = None
#     raining = None
#     while cold is None and raining is None:
#         cold = str(input("Is it cold? yes or no? ")).lower()
#         raining = str(input('Is it raining? yes or no? ')).lower()
#         if cold == 'yes' and raining == 'yes':
#             print('Wear a waterproof coat')
#         elif cold == 'yes' and raining == 'no':
#             print('Wear a warm coat')
#         elif cold == 'no' and raining == 'yes':
#             print('Carry an umbrella')
#         elif cold == 'no' and raining == 'no':
#             print('Wear light clothing')
#         else:
#             print('INVALID INPUT')
#
# # Call the function
# weather_advice()

# # Exercise 5: What's the Season?
# #
# # Write a Python function named `determine_season` that figures out the season based on the entered date.
# #
# # Requirements:
# # - The function should first prompt the user to enter the month (as three characters): "Enter the month of the year (Jan - Dec):"
# # - Then, the function should prompt the user to enter the day of the month: "Enter the day of the month:"
# # - Determine the current season based on the date:
# #      - Dec 21 - Mar 19: Winter
# #      - Mar 20 - Jun 20: Spring
# #      - Jun 21 - Sep 21: Summer
# #      - Sep 22 - Dec 20: Fall
# # - Print the season for the entered date in the format: "<Mmm> <dd> is in <season>."
# #
# # Hints:
# # - Use 'in' to check if a string is in a list or tuple.
# # - Adjust the season based on the day of the month when needed.
# # - Ensure to validate input formats and handle unexpected inputs gracefully.
#
# def determine_season():
#     # Your control flow logic goes here
#     month = None
#     day = None
#     while month is None and day is None:
#         month = str(input('Enter the month of the year (Jan to Dec): '))
#         if month not in ['Jan','Mar','May','Jul','Aug','Oct','Dec', 'Apr','Jun','Sep','Nov','Feb']:
#             print('INVALID month input')
#             return
#         try:
#             day = int(input('Enter the day of the month: '))
#             if day <= 0:
#                 print('day cannot be zero or negative')
#                 return
#             elif month in ['Jan','Mar','May','Jul','Aug','Oct','Dec'] and day > 31:
#                 print(f'INVALID, {month} only has up to 31 days')
#                 return
#             elif month in ['Apr','Jun','Sep','Nov'] and day > 30:
#                 print(f'INVALID, {month} only has up to 30 days')
#                 return
#             elif month == 'Feb' and day > 30:
#                 print(f'INVALID, {month} only has up to 29 days')
#                 return
#         except ValueError as err:
#             print('INVALID, day must be number')
#             return
#
#         season = ""
#         if month in ('Jan', 'Feb'):
#             season = 'Winter'
#         elif month == 'Dec' and day >= 21:
#             season = 'Winter'
#         elif month == 'Apr' or 'May':
#             season = 'Spring'
#         elif month == 'Mar' and day >= 20:
#             season = 'Spring'
#         elif month == 'Jul' or 'Aug':
#             season = 'Summer'
#         elif month == 'Jun' and day >= 21:
#             season = 'Summer'
#         elif month == 'Oct' or 'Nov':
#             season = 'Fall'
#         elif month == 'Sep' and day >= 22:
#             season = 'Fall'
#
#         print(f'{month} {day} is in {season}.')
#
# # Call the function
# determine_season()

# # Exercise 6: Number Guessing Game
# #
# # Write a Python function named `guess_number` that allows a user to guess a predetermined number within a range.
# #
# # Requirements:
# # - Set a fixed number as the target for guessing (e.g., 42).
# # - Prompt the user to guess a number within a range (e.g., 1 to 100).
# # - Allow the user to guess up to five times.
# # - After each guess, use conditional statements with AND, OR, and NOT to give the user hints like:
# #   - "Guess is too low" or "Guess is too high."
# #   - "Last chance!" when they are on their fifth guess.
# # - Print "Congratulations, you guessed correctly!" if they guess the number.
# # - Print "Sorry, you failed to guess the number in five attempts." if they do not succeed.
# #
# # Hints:
# # - Use a for loop with a range to limit guesses to five.
# # - Use logical AND, OR, and NOT to check conditions and provide appropriate feedback.
#
# def guess_number():
#     # Your control flow logic goes here
#     again = 1
#     minimal = 1
#     maximal = 100
#     fixed = 42
#     guess = 0
#
#     for again in range (1,7):
#         if again == 5:
#             print('Last Chance!!')
#
#         if again == 6:
#             print(f'Sorry, you failed to guess the number in five attempts. The number is {fixed}')
#             return
#
#         while True:
            # give user chance if input is invalid (not counted)
#             try:
#                 guess = int(input(f'This is your guess {again}/5. Guess a number from {minimal} to {maximal}: '))
#
#                 if guess < minimal or guess > maximal:
#                     print(f'INVALID! Your guess {guess} is not in range from {minimal} to {maximal}, please try again')
#                     continue
#
#                 break
#
#             except ValueError as err:
#                 print('INVALID, input is not an integer, please try again')
#
#         if guess == fixed:
#                 print(f'Congratulations, you guessed correctly!')
#                 return
#         elif guess > fixed:
#                 maximal = guess
#                 again += 1
#                 print(f'Your guess {guess} is too high')
#         elif guess < fixed:
#                 minimal = guess
#                 again += 1
#                 print(f'Your guess {guess} is too low')
#
# # Call the function
# guess_number()
