from django.db import models


class Chat(models.Model):
    question = models.TextField()

    answer = models.TextField()

    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question


from django.db import models

# Create your models here.
