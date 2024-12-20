import random

def getcvv():
    random_number = f"{random.randint(100,999)}"  
    return random_number

print(getcvv())