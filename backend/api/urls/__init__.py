from .account import urlpatterns as account_urls
from .auth import urlpatterns as auth_urls

urlpatterns = [] + account_urls + auth_urls
