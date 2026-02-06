import os
from dotenv import load_dotenv
from llama_index.core import Settings
from llama_index.llms.litellm import LiteLLM
from llama_index.embeddings.huggingface import HuggingFaceEmbedding

#Load API_KEY
load_dotenv()

#Set LLM Configs
llm = LiteLLM(
    model="groq/llama-3.3-70b-versatile",
    temperature=0.2,
    max_tokens=2048,
)

#This will be referenced elsewhere in the project.
Settings.llm = llm