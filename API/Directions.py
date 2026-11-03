from flask import Flask,jsonify,request
from flask_cors import CORS,cross_origin
import BackEnd.Funtions as Callmethod
import Backend.Globalinfo.ResponseMessages as mensajitos 

#Instancia
app=Flask (__name__)
CORS(app)
