from django.contrib import admin
from django.urls import path
from ITSP import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.HomePage , name='home'),
    path('team/<str:teamid>/',views.TeamPage, name='team'),
    path('teamrestapi/', views.TeamList.as_view(), name='team-api'),

]

urlpatterns = format_suffix_patterns(urlpatterns)
