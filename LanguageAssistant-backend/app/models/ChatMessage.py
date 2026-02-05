from pydantic import BaseModel
from typing import Literal, List
 
class ChatMessage(BaseModel):
    role: Literal["system", "user", "assistant"]
    text: str

class ChatPayload(BaseModel):
    messages: List[ChatMessage]