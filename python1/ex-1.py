def my_name():
    x=input("Enter Name:")

    print(x)
    for i in range(len(x)):
        if i%2==0:
            print(x[i])
my_name()
