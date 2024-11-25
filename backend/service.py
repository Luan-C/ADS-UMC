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
