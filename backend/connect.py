import psycopg2 as pg
from psycopg2 import Error
from logging import INFO, basicConfig, getLogger, log
from dotenv import load_dotenv
import os

basicConfig(level=INFO)
log = getLogger(__name__)

load_dotenv()


def db_connection():
    try:
        connect = pg.connect(
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            host=os.getenv("DB_HOST"),
            port=5432,
            database="db_car_manager"
        )
        log.info("Sucessfuly connected to the database!")
        return connect
    except Error as e:
        log.error(f"An error ocurred while connecting at db {e}")


def close_connection(connect):
    if connect:
        log.info("Closing connection...")
        connect.close()
