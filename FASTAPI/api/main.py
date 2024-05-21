# # from flask import Flask
# # from api.controllers.example_controller import example_bp

# # app = Flask(__name__)
# # app.register_blueprint(example_bp)

# # if __name__ == "__main__":
# #     app.run()
# # from fastapi import FastAPI, HTTPException
# # from pymongo import MongoClient
# # from pydantic import BaseModel
# # from fastapi.middleware.cors import CORSMiddleware

# # app = FastAPI()
# # # CORS configuration
# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=["*"],
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )

# # # Create a MongoDB client
# # client = MongoClient("mongodb://localhost:27017")

# # # Connect to the database
# # db = client["ragini"]

# # # Define a model for the login data
# # class LoginData(BaseModel):
   
# #     email: str
# #     password: str
   

# # # Create a route to handle the login request and perform authentication against the MongoDB database
# # @app.post("/login")
# # def login(login_data: LoginData):
# #     # Get the users collection from the database
# #     users_collection = db["users"]

# #     # Find the user by username
# #     user = users_collection.find_one({"email": login_data.email})

# #     # Check if the user exists and the password matches
# #     if  user and user["password"] == login_data.password:
# #         return {"message": "Login successful"}
# #     else:
# #         raise HTTPException(status_code=401, detail="Invalid username or password")

# #     # Insert the document into the collection
# #     users_collection.insert_one(login_data.dict())

# #     return {"message": "Login data stored successfully"}


# # # Exception handler to print validation errors
# # @app.exception_handler(HTTPException)
# # async def http_exception_handler(request, exc):
# #     print(exc)

# # # Exception handler to print validation errors
# # @app.exception_handler(Exception)
# # async def generic_exception_handler(request, exc):
# #     print(exc)

    
# from fastapi import FastAPI, HTTPException
# from pymongo import MongoClient
# from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware

# app = FastAPI()

# # CORS configuration
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Create a MongoDB client
# client = MongoClient("mongodb://localhost:27017")

# # Connect to the database
# db = client["ragini"]

# # Define a model for the login data
# class LoginData(BaseModel):
#     email: str
#     password: str

# # Create a route to handle the login request and perform authentication against the MongoDB database
# @app.post("/login")
# def login(login_data: LoginData):
#     # Get the users collection from the database
#     users_collection = db["users"]

#     # Find the user by username
#     user = users_collection.find_one({"email": login_data.email})

#     # Check if the user exists and the password matches
#     if user and user["password"] == login_data.password:
#         return {"message": "Login successful"}
#     else:
#         raise HTTPException(status_code=401, detail="Invalid username or password")

#     # # Insert the document into the collection
#     # users_collection.insert_one(login_data.dict())

#     return {"message": "Login data stored successfully"}

# # Exception handler to print validation errors
# @app.exception_handler(HTTPException)
# async def http_exception_handler(request, exc):
#     print(exc)

# # Exception handler to print validation errors
# @app.exception_handler(Exception)
# async def generic_exception_handler(request, exc):
#     print(exc)


from fastapi import FastAPI, HTTPException
from pymongo import MongoClient
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create a MongoDB client
client = MongoClient("mongodb://localhost:27017")

# Connect to the database
db = client["ragini"]

# Define a model for the login data
class LoginData(BaseModel):
    email: str
    password: str

# Create a route to handle the login request and perform authentication against the MongoDB database
@app.post("/login")
def login(login_data: LoginData):
    # Get the users collection from the database
    users_collection = db["users"]

    # Find the user by username
    user = users_collection.find_one({"email": login_data.email})

    # Check if the user exists and the password matches
    if user and user["password"] == login_data.password:
        return {"message": "Login successful"}
    else:
        raise HTTPException(status_code=401, detail="Invalid username or password")

    # # Insert the document into the collection
    # users_collection.insert_one(login_data.dict())

    return {"message": "Login data stored successfully"}

# Exception handler to print validation errors
@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    print(exc)

# Exception handler to print validation errors
@app.exception_handler(Exception)
async def generic_exception_handler(request, exc):
    print(exc)
