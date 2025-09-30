from sqlalchemy import Date, Float, Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from .Persona import Persona
from .Prestamo import Prestamo

class Prestatario(Persona):

    __tablename__ = "prestatarios"

    id = Column(Integer, primary_key=True)
    fecha_alta = Column(Date)
    estado_empleo = Column(Boolean)
    ocupacion = Column(String)
    ingreso_anual = Column(Float)
    prestamos = relationship("Prestamo", back_populates="prestatario", cascade="all, delete-orphan")