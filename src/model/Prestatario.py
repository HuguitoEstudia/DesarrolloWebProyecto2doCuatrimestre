from sqlalchemy import Date, Float, Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from model.Persona import Persona

class Prestatario(Persona):

    __tablename__ = "prestatarios"

    # id = Column(Integer, primary_key=True)
    estado_empleo = Column(Boolean,nullable=False)
    ocupacion = Column(String,nullable=False)
    ingreso_anual = Column(Float,nullable=False)
    fecha_alta = Column(Date,nullable=False)
    prestamos = relationship("Prestamo", back_populates="prestatario", cascade="all, delete-orphan")