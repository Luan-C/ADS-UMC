from connect import db_connection


def create_car_table():
    """Cria a tabela de carros no banco"""
    connection = db_connection()
    if connection is None:
        print("Erro ao conectar ao banco de dados.")
        return

    try:
        cursor = connection.cursor()

        create_car_table_query = """
        CREATE TABLE IF NOT EXISTS cars (
            id SERIAL PRIMARY KEY,
            ticket_id UUID NOT NULL UNIQUE,
            brand VARCHAR(100) NOT NULL,
            model VARCHAR(100) NOT NULL,
            license_plate VARCHAR(20) NOT NULL UNIQUE,
            owner_name VARCHAR(100) NOT NULL,
            owner_cpf VARCHAR(11) NOT NULL UNIQUE,
            owner_email VARCHAR(100) NOT NULL,
            owner_phone VARCHAR(20),
            status VARCHAR(10) DEFAULT 'active',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        """
        cursor.execute(create_car_table_query)
        connection.commit()
        print("Tabela 'cars' criada ou já existe.")

        cursor.close()
        connection.close()
    except Exception as e:
        print(f"Erro ao criar a tabela: {e}")

create_car_table()
