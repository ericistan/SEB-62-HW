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
    return f"Students: {students}. First student: {first_student}. Last student: {last_student}"

# Call the function and print the result
print('Exercise 1:', manage_students())


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

    return f"meal = {meal}."

# Call the function and print the result
print('Exercise 2:', combine_foods())