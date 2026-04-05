from flask import Flask, request

app = Flask(__name__)

@app.route('/apply', methods=['POST'])
def apply():
    data = request.json
    return {"message": "Application received"}

app.run()