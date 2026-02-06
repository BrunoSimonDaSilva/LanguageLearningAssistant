from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict
from app.models.ChatMessage import ChatMessage, ChatPayload
from app.services.query import query_rag
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
    }

@app.post("/chat")
async def chat(payload: ChatPayload):
    last_message = payload.messages[-1].text
    current_lang = payload.currentLang

    try:
        response = query_rag(last_message, current_lang)
        print(response)
        return {
            "response": response.get("response", "")
        }
    except Exception as e:
        print(e)
    