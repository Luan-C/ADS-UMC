
from connect import db_connection


def create_user_table():
    """Cria a tabela de usuários no banco"""
    connection = db_connection()
    if connection is None:
        print("Erro ao conectar ao banco de dados.")
        return

    try:
        cursor = connection.cursor()

        create_user_table_query = """
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
        """
        cursor.execute(create_user_table_query)
        connection.commit()
        print("Tabela 'users' criada ou já existe.")

        cursor.close()
        connection.close()
    except Exception as e:
        print(f"Erro ao criar a tabela: {e}")


create_user_table()
