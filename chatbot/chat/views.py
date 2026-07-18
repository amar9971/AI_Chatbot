from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView

from rest_framework.response import Response

from .models import Chat

from .serializers import ChatSerializer

from .ollama import ask_ollama


class ChatAPIView(APIView):

    def post(self,request):

        question=request.data.get("message")

        answer=ask_ollama(question)

        chat=Chat.objects.create(

            question=question,

            answer=answer

        )

        serializer=ChatSerializer(chat)

        return Response(serializer.data)