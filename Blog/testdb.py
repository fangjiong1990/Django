from django.http import HttpResponse
from Blog.models import Test

#新增数据
def addData(request):
    test1 = Test(name='runoob')
    test1.save()
    return HttpResponse("<p>数据添加成功！</p>")

#查询数据
def selectDate(request):
    # 初始化
    response = ""

    # 通过objects这个模型管理器的all()获得所有数据行
    list = Test.objects.all()

    # filter相当于SQL中的WHERE，可设置条件过滤结果
    # response2 = Test.objects.filter(id=1)

    # 获取单个对象
    # response3 = Test.objects.get(id=1)

    # list = Test.objects.filter(id=1).order_by("id")

    # 输出所有数据
    for i in list:
        response += i.name + " "
    return HttpResponse("<p>" + response + "</p>")

# 更新数据
def updateDate(request):

    # 修改其中一个id=1的name字段
    test1 = Test.objects.get(id=1)
    test1.name = 'runoob'
    test1.save()

    # 另外一种方式
    # Test.objects.filter(id=1).update(name='Google')

    # 修改所有的列
    # Test.objects.all().update(name='Google')

    return HttpResponse("<p>修改成功</p>")

# 删除数据
def deleteData(request):

    test1 = Test.objects.get(id=1)
    test1.delete()

    # 另外一种方式
    # Test.objects.filter(id=1).delete()

    # 删除所有数据
    # Test.objects.all().delete()


    return HttpResponse("<p>删除成功</p>")