from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict
from app.models.ChatMessage import ChatMessage, ChatPayload
import uvicorn
# uvicorn app.main:app --reload
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
async def chat(payload: ChatPayload):
    last_message = payload.messages[-1].text

    return {
        "response": f"Recebi: {last_message}",
        "history_size": len(payload.messages)
    }