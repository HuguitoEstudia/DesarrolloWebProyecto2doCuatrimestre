from db import Base,engine
from model import Garante,Persona,Prestamo,Prestatario
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configura CORS para permitir requests desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],  # Solo permite requests desde este origen específico
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Permite estos métodos HTTP
    allow_headers=["*"],  # Permite cualquier header
)

Base.metadata.create_all(engine)

if __name__ == "__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)

import service.PrestatarioServices
import service.GaranteServices
import service.PrestamoServices