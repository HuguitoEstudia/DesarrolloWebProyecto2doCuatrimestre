from sqlalchemy import ForeignKey, Table,Column
# from sqlalchemy.orm import
from db import Base

# tabla de asociación many-to-many
prestamo_garante = Table(
    "prestamo_garante",
    Base.metadata,
    Column("garante_id", ForeignKey("garantes.id"), primary_key=True),
    Column("prestamo_id", ForeignKey("prestamos.id"), primary_key=True)
)