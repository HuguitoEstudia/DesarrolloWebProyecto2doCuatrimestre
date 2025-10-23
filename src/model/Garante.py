from sqlalchemy import Date, Float, Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from model.Persona import Persona
# from model.Prestamo import Prestamo


class Garante(Persona):

    __tablename__ = "garantes"
    
    ingreso_anual = Column(Float,nullable=False)
    garante_descripcion = Column(String,nullable=True)

    # relación hacia prestamo
    prestamos = relationship("Prestamo", back_populates="garante", cascade="all, delete-orphan")