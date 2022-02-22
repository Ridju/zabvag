import io

import PyPDF2
from django.shortcuts import render
from django.http import HttpResponse
from wsgiref.util import FileWrapper
from rest_framework import views
from rest_framework.parsers import MultiPartParser, FormParser
# Create your views here.
class FileUploadView(views.APIView):
    parser_classes = (MultiPartParser, FormParser)

    def put(self, request):
        pdf_file = io.BytesIO()
        PDFWriter = PyPDF2.PdfFileWriter()
        for file in request.FILES:
            PDFReader = PyPDF2.PdfFileReader(request.FILES[file])
            for page in range(PDFReader.getNumPages()):
                PDFWriter.addPage(PDFReader.getPage((page)))
        PDFWriter.write(pdf_file)
        pdf_file.seek(0)

        response = HttpResponse(FileWrapper(pdf_file), content_type="application/pdf")
        response['Content-Disposition'] = 'attachment: filename="merged.pdf"'
        return response