# Wildfire Command Center Deep API

import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
    return "<h1> Lets try this out</h1>"

@app.route('/login/<username>', methods=['GET'])
def login(username):
    return f"<h1> Hello, {username}!</h1>"

app.run()