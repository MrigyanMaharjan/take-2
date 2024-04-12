from . import views
from django.urls import path , include

from django.conf import settings  

from django.conf.urls.static import static 
from .views import index, CreatePostView 

urlpatterns = [

    path('',index.as_view()),
    path("post/", CreatePostView.as_view(), name="add_post"),

]
if settings.DEBUG:  
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)