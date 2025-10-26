from datetime import date
from typing import List, Optional
from model.Garante import Garante
from model.Prestamo import Prestamo, PrestamoCreate, PrestamoUpdate
from sqlalchemy.orm import Session
from fastapi import Depends,Body
from db import get_session
from app import app
from model.Prestatario import Prestatario


@app.post("/create_prestamo/",tags=["Prestamo"],)
def create_prestamo(
                    prestamo: PrestamoCreate,
                    session: Session = Depends(get_session)):

    nuevo_prestamo = Prestamo(
                        monto=prestamo.monto,
                        moneda=prestamo.moneda,
                        tasa_interes=prestamo.tasa_interes,
                        cuotas_totales=prestamo.cuotas_totales,
                        cuotas_restantes=prestamo.cuotas_totales,
                        monto_cuota=prestamo.monto/prestamo.cuotas_totales,
                        monto_restante=prestamo.monto,
                        fecha_prestamo=prestamo.fecha_prestamo,
                        prestatario_id=prestamo.prestatario_id,
                        garante_id=prestamo.garante_id
                        )

    session.add(nuevo_prestamo)
    session.commit()


@app.put("/update_prestamo/",tags=["Prestamo"],)
def update_prestamo( 
                    item_id:int,
                    prestamoUpdate: PrestamoUpdate,
                    session: Session = Depends(get_session)):

    prestamo = session.query(Prestamo).filter(Prestamo.id == item_id).first()

    if prestamo == None:
        return {"Prestamo no encontrado"}
    else:
        prestamo.monto=prestamoUpdate.monto # type: ignore
        prestamo.moneda=prestamoUpdate.moneda # type: ignore
        prestamo.tasa_interes=prestamoUpdate.tasa_interes # type: ignore
        prestamo.cuotas_totales=prestamoUpdate.cuotas_totales # type: ignore
        prestamo.cuotas_restantes=prestamoUpdate.cuotas_restantes # type: ignore
        prestamo.monto_cuota=prestamoUpdate.monto_cuota # type: ignore
        prestamo.monto_restante=prestamoUpdate.monto_restante # type: ignore
        prestamo.fecha_prestamo=prestamoUpdate.fecha_prestamo # type: ignore
        prestamo.prestatario_id=prestamoUpdate.prestatario_id # type: ignore
        prestamo.garante_id=prestamoUpdate.garante_id # type: ignore

        session.commit()


@app.delete("/delete_prestamo/",tags=["Prestamo"])
def delete_prestamo(item_id:int,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.id == item_id).first()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        session.delete(response)
        session.commit()


@app.get("/find_all_prestamo/",tags=["Prestamo"])
def find_all_prestamo(session: Session = Depends(get_session)):
    # lista de diccionario
    return session.query(Prestamo).all()


@app.get("/find_prestamo_by_id/",tags=["Prestamo"])
def find_prestamo_by_id(item_id:int,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.id == item_id).first()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        # diccionario
        return response


@app.get("/find_prestamo_by_mayor_que_monto/",tags=["Prestamo"])
def find_prestamo_by_mayor_que_monto(item_monto:float,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.monto >= item_monto).all()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        # lista de diccionarios
        return response


@app.get("/find_prestamo_by_menor_que_monto/",tags=["Prestamo"])
def find_prestamo_by_menor_que_monto(item_monto:float,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.monto <= item_monto).all()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        # lista de diccionarios
        return response


@app.get("/find_prestamo_by_fecha_prestamo/",tags=["Prestamo"])
def find_prestamo_by_fecha_prestamo(item_fecha_prestamo:str,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.fecha_prestamo == item_fecha_prestamo).all()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        # lista de diccionarios
        return response


@app.get("/find_prestamo_by_tasa_interes/",tags=["Prestamo"])
def find_prestamo_by_tasa_interes(item_tasa_interes:float,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.tasa_interes == item_tasa_interes).all()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        # lista de diccionarios
        return response


@app.get("/find_prestamo_by_cuotas_totales/",tags=["Prestamo"])
def find_prestamo_by_cuotas_totales(item_cuotas_totales:int,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.cuotas_totales == item_cuotas_totales).all()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        # lista de diccionarios
        return response


@app.get("/find_prestamo_by_cuotas_restantes/",tags=["Prestamo"])
def find_prestamo_by_cuotas_restantes(item_cuotas_restantes:int,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.cuotas_restantes == item_cuotas_restantes).all()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        # lista de diccionarios
        return response

@app.get("/find_prestamo_by_prestatario/",tags=["Prestamo"])
def find_prestamo_by_prestatario(item_id:int,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.prestatario_id == item_id).all()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        # lista de diccionarios
        return response

@app.get("/find_prestamo_by_garante/",tags=["Prestamo"])
def find_prestamo_by_garante(item_id:int,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.garante_id == item_id).all()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        # lista de diccionarios
        return response