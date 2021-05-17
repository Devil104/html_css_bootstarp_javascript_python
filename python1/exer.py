def arraycheck():
    num = input("enter the array:")
    p=list(num)
    print(p)
    for i in range (len(p)-2):

        if p[i]=="1" and p[i+1]=="2" and p[i+2]=="3":
            print('True')
        



arraycheck()
