import random
def get_guess():
    return list(input("Enter your guess:"))

def generate_guess():
    digits=[str(num)for num in range(10)]
    random.shuffle(digits)
    return digits[:3]

def generate_clues(code,user_guess):
    if user_guess==code:
        return "code chacked"
    clues=[]
    for ind,num in enumerate(user_guess):
        if num==code[ind]:
            clues.append("match")
        elif num in code:
            clues.append("close")

    if clues==[]:
        return ["Nope"]
    else:
        return clues
print("Welcome code Breaker!")
secret_code=generate_guess()
clue_report=[]
while clue_report!="code chacked":
    guess=get_guess()
    clue_report=generate_clues(guess,secret_code)
    print("here is the result of your guess:")
    for clue in clue_report:
        print(clue)
