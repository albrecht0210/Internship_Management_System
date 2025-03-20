from rest_framework.routers import DefaultRouter
from ..views import AccountViewSet

router = DefaultRouter()
router.register(r'accounts', AccountViewSet, basename='Account')

urlpatterns = [] + router.urls
