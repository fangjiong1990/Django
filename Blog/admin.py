from django.contrib import admin
from Blog.models import Test, People, Car

# Register your models here.
class PeopleAdmin(admin.ModelAdmin):
    # fields = ('name', 'email')

    # 上面的栏目分为了 Main 和 Advance 两部分。classes 说明它所在的部分的 CSS 格式。这里让 Advance 部分隐藏：
    list_display = ('name', 'age', 'email', 'car')
    fieldsets = (
        ['Main',{
            'fields':('name', 'email'),
        }],
        ['Advance',{
            'classes':('collapse',), # CSS
            'fields':('age', 'car'),
        }]
    )

#注册数据模型
admin.site.register([Test,Car])
admin.site.register(People,PeopleAdmin)
