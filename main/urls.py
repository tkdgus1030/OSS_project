from django.conf.urls import url, include
from django.contrib.auth import views
from django.views.generic import RedirectView

# from tokenbank import settings
from main.views import *
# from prototype.main import views

app_name = 'main'
urlpatterns = [
    # prototype
    # url(r'^$', views.index, name='index'),
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^signIn/$', SignInView.as_view(), name='sign_in'),
    url(r'^signUp/$', SignUpView.as_view(), name='sign_up'),
    url(r'^groupList/$', GroupListView.as_view(), name='group_list'),
    url(r'^historyList/$', HistoryListView.as_view(), name='history'),
    url(r'^historyDetail/$', HistoryDetailView.as_view(), name='history_detail'),
    url(r'^Calculate/$', CalculateView.as_view(), name='calculate'),
    url(r'^TempCalculate/$', TempCalculateView.as_view(), name='temp_calculate'),
    url(r'^TempPeople/$', TempPeopleView.as_view(), name='temp_people'),

]
