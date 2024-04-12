from django.shortcuts import render
from django.views.generic import ListView, CreateView  
from django.urls import reverse_lazy 

from .models import Post


from .forms import PostForm  
from .models import Post

class index(ListView):
    model = Post
    template_name = "home.html"

class CreatePostView(CreateView): 
    model = Post
    form_class = PostForm
    template_name = "post.html"
    success_url = reverse_lazy("home")