class math():
    pi=3.1416

    def __init__(self,radious=1):
        self.radious=radious

    def comp(self):
        return self.radious*self.radious*math.pi

x=math(4)

print(x.comp())
