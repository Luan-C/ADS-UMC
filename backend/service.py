import bcrypt
from connect import db_connection
from psycopg2 import Error


def create_user(name, email, password):
    try:
        connection = db_connection()
        cursor = connection.cursor()

        # Verifica se usuário já existe
        cursor.execute('SELECT * FROM users WHERE email = %s', (email,))
        existing_user = cursor.fetchone()

        if existing_user:
            cursor.close()
            connection.close()
            return False, 'Usuário já existe!'

        # Criptografa a senha com bcrypt
        hashed_password = bcrypt.hashpw(
            password.encode('utf-8'), bcrypt.gensalt())

        # Insere o usuário no banco de dados com a senha hasheada
        cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)",
                       (name, email, hashed_password.decode('utf-8')))
        connection.commit()

        cursor.close()
        connection.close()

        print("Usuário criado com sucesso!")
        return True, 'Usuário criado com sucesso!'

    except Error as e:
        print(f"Erro ao conectar ao banco de dados: {e}")
        return False, 'Erro ao criar usuário. Tente novamente.'


def validate_login(email, password):
    try:
        connection = db_connection()
        cursor = connection.cursor()

        cursor.execute('SELECT * FROM users WHERE email = %s', (email,))
        user = cursor.fetchone()

        if not user:
            cursor.close()
            connection.close()
            return False, 'Usuário não encontrado!'

        # Verifica se a senha fornecida corresponde à senha criptografada
        hashed_password = user[3]

        if not bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8')):
            cursor.close()
            connection.close()
            return False, 'Senha incorreta!'

        cursor.close()
        connection.close()

        return True, 'Login bem-sucedido!'

    except Error as e:
        print(f"Erro ao conectar ao banco de dados: {e}")
        return False, 'Erro ao fazer login. Tente novamente.'


def register_car(ticket_id, brand, model, license_plate, owner_name, owner_cpf, owner_email, owner_phone):
    """Registra um carro no banco de dados após validação"""
    try:
        valid, message = validate_car_data(
            brand, model, license_plate, owner_name, owner_cpf, owner_email, owner_phone)
        if not valid:
            return False, message

        connection = db_connection()
        cursor = connection.cursor()

        cursor.execute(
            'SELECT * FROM cars WHERE license_plate = %s OR owner_cpf = %s', (license_plate, owner_cpf))
        existing_car = cursor.fetchone()

        if existing_car:
            cursor.close()
            connection.close()
            return False, 'Carro ou proprietário já registrado!'

        cursor.execute("""
            INSERT INTO cars (ticket_id, brand, model, license_plate, owner_name, owner_cpf, owner_email, owner_phone)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, (ticket_id, brand, model, license_plate, owner_name, owner_cpf, owner_email, owner_phone))
        connection.commit()

        cursor.close()
        connection.close()

        return True, 'Carro registrado com sucesso!'

    except Exception as e:
        print(f"Erro ao conectar ao banco de dados: {e}")
        return False, 'Erro ao registrar carro. Tente novamente.'


def validate_car_data(brand, model, license_plate, owner_name, owner_cpf, owner_email, owner_phone):
    """Valida os dados do carro antes de registrar"""
    if not brand or not model or not license_plate or not owner_name or not owner_cpf or not owner_email or not owner_phone:
        return False, 'Todos os campos são obrigatórios!'

    return True, ''


def get_car_details(id):
    try:
        connection = db_connection()
        cursor = connection.cursor()

        cursor.execute('SELECT * FROM cars WHERE id = %s', (id,))
        car = cursor.fetchone()

        if not car:
            return False, 'Carro não encontrado!', None

        column_names = [desc[0] for desc in cursor.description]
        car_details = dict(zip(column_names, car))

        cursor.close()
        connection.close()

        return True, '', car_details

    except Exception as e:
        print(f"Erro ao recuperar os detalhes do carro: {e}")
        return False, 'Erro ao recuperar os dados do carro. Tente novamente.', None


def get_all_cars():
    try:
        connection = db_connection()
        cursor = connection.cursor()

        cursor.execute('SELECT * FROM cars')
        cars = cursor.fetchall()

        if not cars:
            return False, 'Nenhum carro encontrado.', None

        # Obtém os nomes das colunas para transformar em dicionários
        column_names = [desc[0] for desc in cursor.description]
        cars_list = [dict(zip(column_names, car)) for car in cars]

        cursor.close()
        connection.close()

        return True, '', cars_list

    except Exception as e:
        print(f"Erro ao recuperar todos os carros: {e}")
        return False, 'Erro ao recuperar os carros. Tente novamente.', None


def deactivate_car(ticket_id):
    try:
        connection = db_connection()
        cursor = connection.cursor()

        cursor.execute("""
            UPDATE cars
            SET status = 'inactive'
            WHERE ticket_id = %s AND status = 'active';
        """, (ticket_id,))

        if cursor.rowcount == 0:
            connection.commit()
            cursor.close()
            connection.close()
            return False, "Veículo não encontrado ou já está inativo."

        connection.commit()
        cursor.close()
        connection.close()
        return True, "Veículo marcado como inativo com sucesso!"
    except Exception as e:
        print(f"Erro ao dar baixa no veículo: {e}")
        return False, "Erro ao atualizar o status do veículo."
