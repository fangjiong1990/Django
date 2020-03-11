from django.contrib import admin
from django.urls import path
from Blog import views, testdb

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', views.hello),
    path('seach_post/', views.seach_post),
    path('seach_get/', views.seach_get),

    path('appdata/', testdb.addData),
    path('selectdata/', testdb.selectDate),
    path('updatedata/', testdb.updateDate),
    path('deletedata/', testdb.deleteData),
]
