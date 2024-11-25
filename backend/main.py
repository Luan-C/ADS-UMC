from flask import Flask
from router import user, car

app = Flask(__name__)

app.register_blueprint(user)
app.register_blueprint(car)

if __name__ == "__main__":
    app.run(debug=True)
