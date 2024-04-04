from flask import Flask, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)

api_url = os.getenv('API_URL') 

@app.route("/", methods=["GET"])
def main():
    response = requests.get(api_url + "paquetes")
    
    if response.status_code == 200:
        data = response.json()

        states = []

        for package in data:

            found = False

            for state in states:
                if state['state'] == package['estado']:
                    state['count'] += 1
                    found = True
                    break
            
            if not found:
                states.append({"state": package['estado'], "count": 1})

        for state in states:
            state['percentage'] = (state['count'] / len(data)) * 100

        return jsonify({
            "count": len(data), 
            "stats": states
        }), 200  
    
    else:
        return "Error obtaining data", 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")