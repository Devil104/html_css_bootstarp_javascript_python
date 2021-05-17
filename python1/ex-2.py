def my_self():
    x=input("enter the name")
    p=x.split()
    if p[0][-1]==p[1][-1]:
        print("true")
    else:
        print("false")


my_self()
