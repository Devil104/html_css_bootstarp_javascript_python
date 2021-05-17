import re
patterns=['item1','item2']
test="this is fucking genious item1"
for pattern in patterns:
    print("this is: ",pattern)

    if re.search(pattern,test):
        print("done")

    else:
        print("no")
