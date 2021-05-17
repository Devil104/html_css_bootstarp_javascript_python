def my_name(name):
    print("this is my name")

    def new_name():
        print("look,iamin another function")
        name()
        print("hahha")

    return new_name
@my_name
def decor():
    print("i am in decorator")
decor()
