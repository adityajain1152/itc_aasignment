from django.db import models


class Team (models.Model):

    team_name= models.CharField(max_length=100)
    teamid = models.CharField(max_length= 30)
    team_mem1 = models.CharField(max_length=100)
    team_mem2 = models.CharField(max_length=100)
    team_mem3 = models.CharField(max_length=100)
    team_mem4 = models.CharField(max_length=100)


    def __str__(self):
        return self.team_name