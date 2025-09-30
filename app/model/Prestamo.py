from sqlalchemy import Date, Float, Column, ForeignKey, Integer, String, Boolean
from sqlalchemy.orm import relationship
from db import Base
from Prestamo_Garante import prestamo_garante

class Prestamo(Base):
    __tablename__ = "prestamos"
    id = Column()
    monto = Column()
    moneda = Column()
    tasa_interes_mensual = Column()
    tipo_tasa = Column()
    numero_cuotas = Column()
    cuotas_restantes = Column()
    monto_cuota = Column()
    saldo_restante = Column()
    # claves foráneas a prestatario y garante (cada préstamo tiene uno de cada uno)
    prestatario_id = Column(Integer, ForeignKey("prestatarios.id"))
    garante_id = Column(Integer, ForeignKey("garantes.id"))
    # relación hacia los objetos
    prestatario = relationship("Prestatario", back_populates="prestamos")
    # relación many-to-many hacia garantes
    garante = relationship("Garante", secondary=prestamo_garante, back_populates="prestamos")
    # garante = relationship("Garante", back_populates="prestamos")