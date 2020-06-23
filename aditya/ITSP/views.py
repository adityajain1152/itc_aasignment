from django.http import Http404
from django.shortcuts import render,redirect
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *




def HomePage(request):
    all_teams = Team.objects.all()
    return render(request, 'ITSP/home.html',{'all_teams' : all_teams,})

def TeamPage(request,teamid):
    team = Team.objects.get(teamid=teamid)

    return render(request, 'ITSP/team.html',{'team' : team,})



class TeamList(APIView):

    def get(self,request):
        teams =Team.objects.all()
        serializer = TeamSerializer(teams, many=True)
        return Response(serializer.data)
    def post(self):
        pass


