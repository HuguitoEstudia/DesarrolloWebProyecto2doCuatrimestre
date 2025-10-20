from db import Base,engine
from model import Garante,Persona,Prestamo_Garante,Prestamo,Prestatario
import uvicorn
from fastapi import FastAPI

app = FastAPI()

Base.metadata.create_all(engine)

if __name__ == "__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)

import service.PrestatarioServices
import service.GaranteServices
import service.PrestamoServices