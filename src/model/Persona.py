from sqlalchemy import Date, Column, Integer, String
from db import Base
from pydantic import BaseModel

class Persona(Base):

    __abstract__ = True

    id = Column(Integer, primary_key=True, autoincrement=True)
    nombre = Column(String,nullable=False)
    apellido = Column(String,nullable=False)
    dni = Column(Integer,nullable=False)
    direccion = Column(String,nullable=False)
    telefono = Column(Integer,nullable=False)
    email = Column(String,nullable=False)

class PersonaCreate(BaseModel):
    nombre: str
    apellido: str
    dni: int
    direccion: str
    telefono: int
    email: str
