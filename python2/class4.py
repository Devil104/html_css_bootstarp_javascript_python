class pe():

    def __init__(self,title,name,page):
        self.title=title
        self.name=name
        self.page=page

    def __str__(self):
        return "title:{},name:{},page:{}".format(self.title,self.name,self.page)

x=pe("advancer","harry potter","300")
print(x)
