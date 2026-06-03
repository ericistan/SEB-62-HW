# Exercise 1: List and Indexing
#
# Create a list named students containing at least three student names (strings).
# Assign the second student’s name to a variable named first_student.
# Assign the last student’s name to a variable named last_student.

def manage_students():
    # your code here
    students = ["Kenneth", "Eric", "Weng Soon", "Lincoln"]
    first_student = students[0]
    last_student = students[-1]
    # return f"Students: {students}. First student: {first_student}. Last student: {last_student}"
    return students, first_student, last_student

# Call the function and print the result
students, first_student, last_student = manage_students()
print('Exercise 1:', students, first_student, last_student)


# Exercise 2: Loop and String Concatenation
#
# Create a tuple named foods containing the same number of foods (strings) as there are names in the students list.
# Create a variable named meal and assign an empty string to it.
# Use a for loop to iterate over the strings in foods and append each string to meal.

def combine_foods():
    # your code here
    foods = ("Fish Soup", "Chicken Rice", "Wanton Noodle", "Mince Pork Congee")
    meal = ""

    for food in foods:
        meal += food + ", "

    meal = meal[:-2]

    return meal, foods

# Call the function and print the result
print('Exercise 2:', combine_foods())


# Exercise 3: Slicing Tuples
#
# Using the slice operator, assign a new tuple containing only the last two food strings in the foods to a variable named last_two_foods.

def slice_foods(foods):
    # your code here
    last_two_foods = foods[-2:]
    return last_two_foods

# Call the function and print the result
meal, foods = combine_foods()
print('Exercise 3:', slice_foods(foods))


# Exercise 4: Dictionaries and String Formatting
#
# Create a dictionary named home_town containing the keys of city, state, and population.
# Using the home_town dictionary, assign to a variable named home_town_message a string with this format: “I was born in <city>, <state> - population of <population>”

def hometown_info():
    # your code here
    home_town = {
        "city":"Singapore",
        "state":"Singapore",
        "population":6110000
    }
    home_town_message = f"I was born in {home_town["city"]}, {home_town["state"]} - population of {home_town["population"]}"
    return home_town_message, home_town

# Call the function and print the result
home_town_message, home_town = hometown_info()
print('Exercise 4:', home_town_message)


# Exercise 5: Iterating Over Dictionary Items
#
# Define an empty list named home_town_items.
# Use a for loop to iterate over the key: value pairs in the home_town dictionary and append a string with the following format to home_town_items: "<key> = <value>"

def list_home_town_items(home_town):
    # your code here
    home_town_items = []
    for key, value in home_town.items():
        home_town_items.append(f"{key} = {value}")

    return home_town_items

# Call the function and print the result
print('Exercise 5:', list_home_town_items(home_town))


# Exercise 6: Celebrate Students
#
# Using the list of students and a list comprehension, assign to a variable named awesome_students a new list containing strings.
# For example: ["Tina is awesome!", "Fred is awesome!", "Wilma is awesome!"]

def create_awesome_students(students):
    # your code here
    awesome_students = []
    for student in students:
        awesome_students.append(f"{student} is awesome!")

    return awesome_students

# Call the function and print the result
print('Exercise 6:', create_awesome_students(students))