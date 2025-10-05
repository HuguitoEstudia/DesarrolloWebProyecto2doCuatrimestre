from sqlalchemy import Date, Float, Column, ForeignKey, Integer, String, Boolean
from sqlalchemy.orm import relationship
from db import Base
from model.Prestamo_Garante import prestamo_garante

class Prestamo(Base):
    __tablename__ = "prestamos"
    
    id = Column(Integer, primary_key=True)
    monto = Column(Float,nullable=False)
    moneda = Column(String,nullable=False)
    tasa_interes_mensual = Column(Float,nullable=False)
    cuotas_totales = Column(Integer,nullable=False)
    cuotas_restantes = Column(Integer,nullable=False)
    monto_cuota = Column(Float,nullable=False)
    saldo_restante = Column(Float,nullable=False)
    # claves foráneas a prestatario y garante (cada préstamo tiene uno de cada uno)
    prestatario_id = Column(Integer, ForeignKey("prestatarios.id"))
    garante_id = Column(Integer, ForeignKey("garantes.id"))
    # relación hacia los objetos
    prestatario = relationship("Prestatario", back_populates="prestamos")
    # relación many-to-many hacia garantes
    garante = relationship("Garante", secondary=prestamo_garante, back_populates="prestamos")
    # garante = relationship("Garante", back_populates="prestamos")