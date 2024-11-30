import uuid
from flask import Blueprint, request, jsonify
from service import create_user, deactivate_car, register_car, validate_login

user = Blueprint('user', __name__)
car = Blueprint('car', __name__)

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

# Endpoint de Registro de Carro
@car.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    required_fields = ['brand', 'model', 'license_plate', 'owner_name', 'owner_cpf', 'owner_email', 'owner_phone']
    for field in required_fields:
        if field not in data:
            return jsonify({'message': f'{field} é obrigatório!'}), 400

    ticket_id = str(uuid.uuid4())
    payment_receipt_id = str(uuid.uuid4())

    brand = data['brand']
    model = data['model']
    license_plate = data['license_plate']
    owner_name = data['owner_name']
    owner_cpf = data['owner_cpf']
    owner_email = data['owner_email']
    owner_phone = data['owner_phone']

    success, message = register_car(ticket_id, brand, model, license_plate, owner_name, owner_cpf, owner_email, owner_phone)

    if not success:
        return jsonify({'message': message}), 400

    return jsonify({
        'message': message,
        'payment_receipt_id': payment_receipt_id
    }), 201

# Endpoint de "dar baixa" no carro
@car.route('/update', methods=['PUT'])
def update():
    data = request.get_json()

    if not data.get('ticket_id'):
        return jsonify({'message': 'ticket_id é obrigatório!'}), 400

    ticket_id = data['ticket_id']

    success, message = deactivate_car(ticket_id)

    if not success:
        return jsonify({'message': message}), 400

    return jsonify({'message': message}), 200