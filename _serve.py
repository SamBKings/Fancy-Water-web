import os, sys
os.chdir('/Users/sambr-fw/Documents/FWebsite')
sys.argv = ['_serve.py', '3000']
import http.server
http.server.test(HandlerClass=http.server.SimpleHTTPRequestHandler, port=3000, bind='')
