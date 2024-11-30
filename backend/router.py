import uuid
from flask import Blueprint, request, jsonify
from service import create_user, deactivate_car, get_all_cars, get_car_details, register_car, validate_login

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
@user.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    if not data.get('brand') or not data.get('model') or not data.get('license_plate') or \
       not data.get('owner_name') or not data.get('owner_cpf') or not data.get('owner_email'):
        return jsonify({'message': 'Todos os campos são obrigatórios!'}), 400

    ticket_id = str(uuid.uuid4())
    
    success, message = register_car(
        ticket_id=ticket_id,
        brand=data['brand'],
        model=data['model'],
        license_plate=data['license_plate'],
        owner_name=data['owner_name'],
        owner_cpf=data['owner_cpf'],
        owner_email=data['owner_email'],
        owner_phone=data.get('owner_phone', '')
    )

    if not success:
        return jsonify({'message': message}), 500

    return jsonify({'message': 'Carro registrado com sucesso!', 'ticket_id': ticket_id}), 201

# Endpoint de retornar detalhes do carro
@car.route('/details', methods=['GET'])
def car_details():
    id = request.args.get('id', type=int)

    if id is not None:
        success, message, car_details = get_car_details(id)
        if not success:
            return jsonify({'message': message}), 404
        return jsonify(car_details), 200

    # Busca todos os carros se o ID não for fornecido
    success, message, cars = get_all_cars()
    if not success:
        return jsonify({'message': message}), 404
    return jsonify(cars), 200

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
