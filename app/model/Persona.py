from sqlalchemy import Date, Column, Integer, String
from db import Base

class Persona(Base):

    __abstract__ = True

    id = Column(Integer, primary_key=True)
    nombre = Column(String)
    apellido = Column(String)
    dni = Column(Integer)
    fecha_nacimiento = Column(Date)
    direccion = Column(String)
    telefono = Column(Integer)
    email = Column(String)
    