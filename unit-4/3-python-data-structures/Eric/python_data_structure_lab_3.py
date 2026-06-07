# Exercise 1: List and Indexing
#
# Create a list named students containing at least three student names (strings).
# Assign the second student’s name to a variable named first_student.
# Assign the last student’s name to a variable named last_student.

def manage_students():
    # your code here
    student_names = ["Lincoln", "Leslie", "Kenneth"]
    first_student =student_names[1]
    last_student = student_names[2]

    return first_student, last_student

# Call the function and print the result
print('Exercise 1:', manage_students())

# Exercise 2: Loop and String Concatenation
#
# Create a tuple named foods containing the same number of foods (strings) as there are names in the students list. / Tuple cannot be changed
# Create a variable named meal and assign an empty string to it.
# Use a for loop to iterate over the strings in foods and append each string to meal.

def combine_foods():
    # your code here
    foods = ("Chicken Rice", "Nasi Lemak", "Roti Prata")
    meal = ""
    for food in foods:
        meal += food + " "
    return meal

# Call the function and print the result
print('Exercise 2:', combine_foods())

# Exercise 3: Slicing Tuples
#
# Using the slice operator, assign a new tuple containing only the last two food strings in the foods to a variable named last_two_foods.

def slice_foods():
    # your code here
    foods = ("Chicken Rice", "Nasi Lemak", "Roti Prata")
    last_two_foods = foods[-2:]

    return last_two_foods

# Call the function and print the result
print('Exercise 3:', slice_foods())

# Exercise 4: Dictionaries and String Formatting
#
# Create a dictionary named home_town containing the keys of city, state, and population.
# Using the home_town dictionary, assign to a variable named home_town_message a string with this format: “I was born in <city>, <state> - population of <population>”

def hometown_info():
    # your code here
    home_town = {
        "city": "Singapore",
        "state": "Woodlands",
        "population": 6110000
    }

    home_town_message = f"I was born in {home_town['city']}, {home_town['state']} - population of {home_town['population']}"

    return home_town_message

# Call the function and print the result
print('Exercise 4:', hometown_info())

# Exercise 5: Iterating Over Dictionary Items
#
# Define an empty list named home_town_items.
# Use a for loop to iterate over the key: value pairs in the home_town dictionary and append a string with the following format to home_town_items: "<key> = <value>"

def list_home_town_items():
    # your code here
    home_town = {
        "city": "Singapore",
        "state": "Woodlands",
        "population": 6110000
    }

    home_town_items = []

    for key, value in home_town.items():
        home_town_items.append(f"{key} = {value}")

    return home_town_items

# Call the function and print the result
print('Exercise 5:', list_home_town_items())


# Exercise 6: Celebrate Students
#
# Using the list of students and a list comprehension, assign to a variable named awesome_students a new list containing strings.
# For example: ["Tina is awesome!", "Fred is awesome!", "Wilma is awesome!"]

def create_awesome_students():
    # your code here
    students = ["Lincoln", "Leslie", "Kenneth"]

    awesome_students = [f"{student} damn awesome sia!" for student in students]

    return awesome_students

# Call the function and print the result
print('Exercise 6:', create_awesome_students())

# Exercise 7: Filter Foods
#
# Assign to a variable named foods_with_an_a the result of list comprehension that filters the foods tuple to only include food strings that contain the letter 'a'.
# For example, if foods is a tuple of ('Taco', 'Burrito', 'Sandwich'), foods_with_an_a would be a list equal to ['Taco', 'Sandwich']

def filter_foods_with_a():
    # your code here
    foods = ("Chicken Rice", "Nasi Lemak", "Roti Prata")

    filter_a = [item for item in foods if "a" in item.lower()]

    return filter_a

# Call the function and print the result
print('Exercise 7:', filter_foods_with_a())