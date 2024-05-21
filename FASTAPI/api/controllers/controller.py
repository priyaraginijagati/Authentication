from flask import Blueprint, jsonify

example_bp = Blueprint("example", __name__)

@example_bp.route("/example", methods=["GET"])
def get_example_data():
    data = {"message": "Hello from the backend!"}
    return jsonify(data)
