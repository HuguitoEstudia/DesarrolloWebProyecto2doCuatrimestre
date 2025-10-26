from sqlalchemy import Date, Float, Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from model.Persona import Persona, PersonaCreate

class Garante(Persona):

    __tablename__ = "garantes"
    
    ingreso_anual = Column(Float,nullable=False)
    garante_descripcion = Column(String,nullable=False)

    # relación hacia prestamo
    prestamos = relationship("Prestamo", back_populates="garante", cascade="all, delete-orphan")

class GaranteCreate(PersonaCreate):
    ingreso_anual: float
    garante_descripcion: str