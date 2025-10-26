from sqlalchemy import Date, Float, Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from model.Persona import Persona, PersonaCreate

class Prestatario(Persona):

    __tablename__ = "prestatarios"

    estado_empleo = Column(Boolean,nullable=False)
    ocupacion = Column(String,nullable=False)
    ingreso_anual = Column(Float,nullable=False)
    
    # relación hacia prestamo
    prestamos = relationship("Prestamo", back_populates="prestatario", cascade="all, delete-orphan")

class PrestatarioCreate(PersonaCreate):
    estado_empleo: bool
    ocupacion: str
    ingreso_anual: float