from django.urls import re_path, path
from .views import FileUploadView

urlpatterns = [
    re_path(r'^upload/(?P<filename>[^/]+)$', FileUploadView.as_view(), name="fileuploadview")
]