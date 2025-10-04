from sqlalchemy import Date, Float, Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from model.Persona import Persona
# from model.Prestamo import Prestamo
from model.Prestamo_Garante import prestamo_garante

class Garante(Persona):

    __tablename__ = "garantes"
    
    id = Column(Integer, primary_key=True)
    relacion_con_prestatario = Column(String,nullable=False)
    ingreso_anual = Column(Float,nullable=False)
    garantia_descripcion = Column(String,nullable=True)
    garantia_valor = Column(Float,nullable=True)
    # relación many-to-many hacia prestamo
    prestamos = relationship("Prestamo", secondary=prestamo_garante, back_populates="garante")
    # prestamo = relationship("Prestamo", back_populates="garante", cascade="all, delete-orphan")