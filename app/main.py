from app.db import Base,engine
from app.model import Garante,Persona,Prestamo_Garante,Prestamo,Prestatario
Base.metadata.create_all(engine)