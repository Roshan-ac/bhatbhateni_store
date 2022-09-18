import requests
import json



url = 'http://localhost:3000/api/addProducts'

f = open('json.json')
jsondata=json.load(f)


requests.post(url,json=jsondata)
