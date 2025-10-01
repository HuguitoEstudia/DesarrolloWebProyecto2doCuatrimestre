from sqlalchemy import Date, Float, Column, ForeignKey, Integer, String, Boolean
from sqlalchemy.orm import relationship
from db import Base
from model.Prestamo_Garante import prestamo_garante

class Prestamo(Base):
    __tablename__ = "prestamos"
    
    id = Column(Integer, primary_key=True)
    monto = Column(Float)
    moneda = Column(String)
    tasa_interes_mensual = Column(Float)
    cuotas_totales = Column(Integer)
    cuotas_restantes = Column(Integer)
    monto_cuota = Column(Float)
    saldo_restante = Column(Float)
    # claves foráneas a prestatario y garante (cada préstamo tiene uno de cada uno)
    prestatario_id = Column(Integer, ForeignKey("prestatarios.id"))
    garante_id = Column(Integer, ForeignKey("garantes.id"))
    # relación hacia los objetos
    prestatario = relationship("Prestatario", back_populates="prestamos")
    # relación many-to-many hacia garantes
    garante = relationship("Garante", secondary=prestamo_garante, back_populates="prestamos")
    # garante = relationship("Garante", back_populates="prestamos")