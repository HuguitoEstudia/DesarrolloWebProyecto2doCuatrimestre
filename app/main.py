from app.db import Base,engine
from app.model import Garante,Persona,Prestamo_Garante,Prestamo,Prestatario
from app.framework import app
Base.metadata.create_all(engine)