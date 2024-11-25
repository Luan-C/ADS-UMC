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
    
