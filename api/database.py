import psycopg2
import os

class DB:
    def __init__(self):
        db_name = os.getenv('DB_NAME')
        db_user = os.getenv('DB_USER')
        db_password = os.getenv('DB_PASSWORD')
        db_type = os.getenv('DB_TYPE')
        db_host = os.getenv('DB_HOST')
        db_port = os.getenv('DB_PORT')
        
        self.db_url = ''

        #  Docker
        if db_type == '0':
            self.db_url = f"postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}"
        #  Local
        elif db_type == '1':
            self.db_url = f'user={db_user} password={db_password} host={db_host} port={db_port} dbname={db_name}'
            
        self.conn = psycopg2.connect(self.db_url)
        self.cur = self.conn.cursor()

        self.create_tables()

    def close(self):
        
        self.cur.close()
        
        self.conn.close()
    
    def create_tables(self):
        
        self.cur.execute("""
            CREATE TABLE IF NOT EXISTS packages (
                id SERIAL PRIMARY KEY,
                estado VARCHAR(255)
            )
        """)
        
        self.conn.commit()

    def get_packages(self):
        
        self.cur.execute("SELECT * FROM packages ORDER BY id ASC")
        
        data = []
        
        for row in self.cur.fetchall():
            data.append({'id': row[0], 'estado': row[1]})
        
        return data

    def insert_package(self, estado: str):
        
        self.cur.execute(f"INSERT INTO packages (estado) VALUES ('{estado}')")
        
        self.conn.commit()

    def get_package(self, id: int):
        
        self.cur.execute(f"SELECT * FROM packages WHERE id = '{id}'")
        
        row = self.cur.fetchone()

        if row is None:
            return None
        
        data = []
        
        data.append({'id': row[0], 'estado': row[1]})
        
        return data
    
    def update_package(self, id: int, estado: str):
        
        self.cur.execute("UPDATE packages SET estado = %s WHERE id = %s", (estado, id))
        
        self.conn.commit()