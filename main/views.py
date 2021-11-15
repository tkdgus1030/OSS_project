from django.http import HttpResponse
from django.views.generic import TemplateView, CreateView, UpdateView, ListView, DetailView
import re
from django.shortcuts import render, redirect, get_object_or_404


class TokenbankBaseTemplateView(TemplateView):
    """base TempalateViewview"""

    template_name_base = 'main'
    template_web_root_path = 'web'
    # template_mobile_root_path = 'mobile'
    # template_mobile_root_path = 'web'
    template_mobile_root_path = 'mobile'

    def dispatch(self, request, *args, **kwargs):

        if self.is_mobile(request):
            self.template_name = '{}/{}/{}'.format(self.template_name_base, self.template_mobile_root_path, self.template_name)
        else:
            self.template_name = '{}/{}/{}'.format(self.template_name_base, self.template_web_root_path, self.template_name)

        if request.method.lower() in self.http_method_names:
            handler = getattr(self, request.method.lower(), self.http_method_not_allowed)
        else:
            handler = self.http_method_not_allowed
        return handler(request, *args, **kwargs)

    def is_mobile(self, request):

        if 'HTTP_USER_AGENT' in request.META:
            user_agent = request.META['HTTP_USER_AGENT']

            patterns = ['up.browser', 'up.link', 'mmp', 'symbian', 'smartphone', 'midp', 'wap', 'phone', 'pda',
                        'mobile', 'mini', 'palm', 'netfront', 'android', 'blackberry', 'WordPress App', 'wp-iphone',
                        'pluckItCrawler', 'tablet', 'SAMSUNG', 'Facebook App .*', 'ipad', 'iOS', '^Flipboard App .*$',
                        'Flixster App .*$', 'Flixster App', 'GT-P3100', 'Puffin/3.7', 'FBAV/.*', 'Silk/.*',
                        'Windows CE', 'SymbOS\*Opera Mobi', 'HTC', 'TBD.*', 'TERRA_101', 'DINO.*', ]

            pattern = "(%s)" % '|'.join(patterns)
            prog = re.compile(pattern, re.IGNORECASE)
            match = prog.search(user_agent)

            if match:
                return True

class IndexView(TokenbankBaseTemplateView):

    template_name = 'home.html'

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)

    def post(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)


    def get_context_data(self, request, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class SignInView(TokenbankBaseTemplateView):

    template_name = 'sign_in.html'

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)

    def post(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)


    def get_context_data(self, request, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class SignUpView(TokenbankBaseTemplateView):

    template_name = 'sign_up.html'

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)

    def post(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)


    def get_context_data(self, request, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        return context


class GroupListView(TokenbankBaseTemplateView):

    template_name = 'group_list.html'

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)

    def post(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)


    def get_context_data(self, request, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class GroupCreateView(TokenbankBaseTemplateView):

    template_name = 'group_create.html'

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)

    def post(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)


    def get_context_data(self, request, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class HistoryListView(TokenbankBaseTemplateView):

    template_name = 'history_list.html'

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)

    def post(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)


    def get_context_data(self, request, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class HistoryDetailView(TokenbankBaseTemplateView):

    template_name = 'history_detail.html'

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)

    def post(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)


    def get_context_data(self, request, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        return context


class CalculateView(TokenbankBaseTemplateView):

    template_name = 'calculate.html'

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)

    def post(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)


    def get_context_data(self, request, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class TempCalculateView(TokenbankBaseTemplateView):

    template_name = 'temp_calculate.html'

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)

    def post(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)


    def get_context_data(self, request, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class TempPeopleView(TokenbankBaseTemplateView):

    template_name = 'temp_people.html'

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)

    def post(self, request, *args, **kwargs):
        context = self.get_context_data(request, *args, **kwargs)
        return render(request=request, template_name=self.template_name, context=context)


    def get_context_data(self, request, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

