from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def hello(request):

    return render(request, "hello.html")
    # context = {}
    # context['hello'] = 'Hello World!!!'
    # return render(request, 'hello.html', context)

# 接受 POST 请求数据
def seach_post(request):
    ctx = {}
    if request.POST:
        ctx['rlt'] = request.POST['q']
    return render(request, "hello.html", ctx)

# 接受 GET 请求数据
def seach_get(request):
    if 'q' in request.GET and request.GET['q']:
        message = "你搜索的内容：" + request.GET['q']
    else:
        message = "你提交了空表单"
    return HttpResponse(message)