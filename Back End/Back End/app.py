# Wildfire Command Center Deep API

import flask
from flask import request, jsonify
import dotenv
import sqlite3

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# testing purposes
retTest = [
    {
        "e" : "e"
    }, {
        'id': 0
    }
]

@app.route('/', methods=['GET'])
def home():
    return "<h1> Lets try this out</h1>"

@app.route('/login/<username>', methods=['GET'])
def login(username):
    return f"<h1> Hello, {username}!</h1>"

@app.route('/data/e', methods=['GET'])
def ret():
    return jsonify(retTest)

# error handlers
@app.errorhandler(404)
def pageNotFound(e):
    return "<h1>The page you were looking for was not found.</h1>", 404

app.run()