from Google import Create_Service
CLIENT_SECRET_FILE = 'client_secret.json'
API_NAME= 'calender'
API_VERSION='v3'
SCOPES = ['https://www.googleapis.com/auth/calendar']
service=Create_Service(CLIENT_SECRET_FILE,API_NAME,API_VERSION,SCOPES)
print(dir(service))