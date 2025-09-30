from sqlalchemy import Date, Float, Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from .Persona import Persona
from .Prestamo import Prestamo
from .Prestamo_Garante import prestamo_garante

class Garante(Persona):

    __tablename__ = "garantes"
    
    id = Column(Integer, primary_key=True)
    fecha_alta_garante = Column(Date)
    relacion_con_prestatario = Column(String)
    ingreso_anual = Column(Float)
    garantia_descripcion = Column(String)
    garantia_valor = Column(Float)
    # relación many-to-many hacia prestamo
    prestamos = relationship("Prestamo", secondary=prestamo_garante, back_populates="garante")
    # prestamo = relationship("Prestamo", back_populates="garante", cascade="all, delete-orphan")