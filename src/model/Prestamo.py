from sqlalchemy import Date, Float, Column, ForeignKey, Integer, String, Boolean
from sqlalchemy.orm import relationship
from db import Base
from pydantic import BaseModel

class Prestamo(Base):
    __tablename__ = "prestamos"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    monto = Column(Float,nullable=False)
    moneda = Column(String,nullable=False)
    tasa_interes = Column(Float,nullable=False)
    cuotas_totales = Column(Integer,nullable=False)
    cuotas_restantes = Column(Integer,nullable=False)
    monto_cuota = Column(Float,nullable=False)
    monto_restante = Column(Float,nullable=False)
    fecha_prestamo = Column(String,nullable=False)

    # Claves foráneas
    prestatario_id = Column(Integer, ForeignKey('prestatarios.id'), nullable=False)
    garante_id = Column(Integer, ForeignKey('garantes.id'), nullable=False)
    
    # Relaciones muchos a uno
    prestatario = relationship('Prestatario', back_populates='prestamos')
    garante = relationship('Garante', back_populates='prestamos')

class PrestamoCreate(BaseModel):
    monto: float
    moneda: str
    tasa_interes: float
    cuotas_totales: int
    # cuotas_restantes: int
    # monto_cuota: float
    # monto_restante: float
    fecha_prestamo: str
    prestatario_id:int
    garante_id: int
    
class PrestamoUpdate(BaseModel):
    monto: float
    moneda: str
    tasa_interes: float
    cuotas_totales: int
    cuotas_restantes: int
    monto_cuota: float
    monto_restante: float
    fecha_prestamo: str
    prestatario_id:int
    garante_id: int