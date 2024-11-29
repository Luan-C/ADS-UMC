from flask import Flask
from router import user, car
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

app.register_blueprint(user)
app.register_blueprint(car)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
