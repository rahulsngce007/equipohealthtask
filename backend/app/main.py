from fastapi import FastAPI
import mysql.connector
import settings

app = FastAPI()

@app.get("/hello")
def hello():
    return {"message": "This API to check if FastAPI connection works fine. And it seems fine!"}

@app.get("/db")
def check_db():
    try:
        conn = mysql.connector.connect(
            host=settings.DB_HOST,
            port=settings.DB_PORT,
            user=settings.DB_USER,
            password=settings.DB_PASSWORD,
            database=settings.DB_NAME,
        )
        return {"status": "Checking connection to DB. That too is fine!"}
    except Exception as e:
        return {"error": str(e)}
