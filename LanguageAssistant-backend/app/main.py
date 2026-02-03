from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI(title = "Language Assistant Api")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return{
        "message": "Api Language Assistant is ready",
        "version": "1.0.0",
        "status": "healthy"
        # "endpoints": {}
    }

@app.post("/chat")
async def chat(data):
    return {
        response: "Retorno de testes"
    }