from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origin='*')

#Test Route
@app.route("/api/users", methods=['GET'])
def users():
    return jsonify(
        {
            "users": [
                'Zaid',
                'Pujitha',
                'Tanzil',
                'Abhi',
                'Banging',
                'Zhuowen'
            ]
        }
    )

if __name__ == "__main__":
    app.run(debug=True)