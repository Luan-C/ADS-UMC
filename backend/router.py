from flask import Blueprint, request, jsonify
from service import create_user, validate_login

user = Blueprint('user', __name__)

# Endpoint de Signup (cadastro de usuário)
@user.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()

    if not data.get('name') or not data.get('email') or not data.get('password'):
        return jsonify({'message': 'Nome, email e senha são obrigatórios!'}), 400

    name = data['name']
    email = data['email']
    password = data['password']

    success, message = create_user(name, email, password)

    if not success:
        return jsonify({'message': message}), 400

    return jsonify({'message': message}), 201

# Endpoint de Login (validação de usuário)
@user.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    if not data.get('email') or not data.get('password'):
        return jsonify({'message': 'Email e senha são obrigatórios!'}), 400

    email = data['email']
    password = data['password']

    success, message = validate_login(email, password)

    if not success:
        return jsonify({'message': message}), 401

    return jsonify({'message': 'Login bem-sucedido!'}), 200

