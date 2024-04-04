from flask import Flask, jsonify, request
from database import DB

app = Flask(__name__)

db = DB()

@app.route('/paquetes', methods=['GET'])
def get_paquetes():

    packages = db.get_packages()
    
    return jsonify(packages)

@app.route('/paquete', methods=['POST'])
def registrar_paquete():

    db.insert_package('registrado')

    return jsonify({'mensaje': 'Paquete registrado con éxito'}), 201

@app.route('/paquete/<id>', methods=['GET'])
def obtener_estado_paquete(id):
    
    package = db.get_package(id)
    
    if package:
        return jsonify(package)
    
    else:
        return jsonify({'mensaje': 'Paquete no encontrado'}), 404
    
@app.route('/paquete/<id>', methods=['PUT'])
def actualizar_estado_paquete(id):

    data = request.get_json()

    if data.get('estado'):
        
        package = db.get_package(id)

        if package:
            db.update_package(id, data['estado'])

            return jsonify({'mensaje': 'Estado actualizado'})
        
        else:
            return jsonify({'mensaje': 'Paquete no encontrado'}), 404

    return jsonify({'mensaje': 'Estado no brindado'}), 404
    
if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
