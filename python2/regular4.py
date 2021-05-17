import re

def multi_one(patterns,phase):
    for pat in patterns:
        print("searching for the patterns {}".format(pat))
        print(re.findall(pat,phase))
        print('/n')

tast_phase="hey,look.i got this man!His number is 01534830574."
test_patterns=[r'\d+']

multi_one(test_patterns,tast_phase)
