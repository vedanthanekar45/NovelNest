from django.urls import path
from . import views

urlpatterns = [

    path('search/', views.search, name="search"),
    path('bookinfo/<str:book_id>/', views.get_book_details, name="bookinfo"),

    # search url path
    path('search/', views.search, name="search"),

    # book data related paths
    path('log_book/', views.log_book, name="log_book"),
    path('get_user_books/', views.get_user_books, name="get_user_books"),
    path('count_book_logs/', views.count_book_logs, name="count_book_logs"),
    path('get_book_data/', views.get_book_details, name="get_book_details"),
    path('check_book_read/', views.check_book_read, name="check_book_read"),

    # user shelf related paths
    path('get_user_shelves', views.get_user_shelves, name="get_user_shelves"),
    path('create_shelf/', views.create_shelf, name="create_shelf"),
    path('add_book_to_shelf/', views.add_book_to_shelf, name="add_book_to_shelf"),
]