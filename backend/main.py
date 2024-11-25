from connect import db_connection, close_connection


def main():
    connection = db_connection()
    if connection:
        close_connection(connection)


if __name__ == "__main__":
    main()
