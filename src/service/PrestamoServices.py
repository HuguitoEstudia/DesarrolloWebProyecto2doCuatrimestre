from datetime import date
from typing import List, Optional
from model.Prestamo import Prestamo
from sqlalchemy.orm import Session
from fastapi import Depends,Body
from db import get_session
from app import app

@app.post("/create_prestamo/",tags=["Prestamo"],)
def create_prestamo( 
                    monto:float,
                    moneda:str,
                    tasa_interes_mensual:float,
                    cuotas_totales:int,
                    cuotas_restantes:int,
                    monto_cuota:float,
                    saldo_restante:float,
                    fecha_prestamo:str,
                    prestatario:dict,
                    garante:dict,
                    session: Session = Depends(get_session)):

    prestamo = Prestamo(
                        monto=monto,
                        moneda=moneda,
                        tasa_interes_mensual=tasa_interes_mensual,
                        cuotas_totales=cuotas_totales,
                        cuotas_restantes=cuotas_restantes,
                        monto_cuota=monto_cuota,
                        saldo_restante=saldo_restante,
                        fecha_prestamo=fecha_prestamo,
                        prestatario=prestatario,
                        garante=garante)

    session.add(prestamo)
    session.commit()
    session.refresh(prestamo)


@app.post("/delete_prestamo/",tags=["Prestamo"])
def delete_prestamo(item_id:int,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.id == item_id).first()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        session.delete(response)
        session.commit()


@app.get("/find_all_prestamo/",tags=["Prestamo"])
def find_all_prestamo(session: Session = Depends(get_session)):
    return session.query(Prestamo).all()


@app.get("/find_prestamo_by_id/",tags=["Prestamo"])
def find_prestamo_by_id(item_id:int,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.id == item_id).first()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        return response


@app.get("/find_prestamo_by_mayor_que_monto/",tags=["Prestamo"])
def find_prestamo_by_mayo_que_monto(item_monto:float,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.monto >= item_monto).all()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        return response


@app.get("/find_prestamo_by_menor_que_monto/",tags=["Prestamo"])
def find_prestamo_by_menor_que_monto(item_monto:float,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.monto <= item_monto).all()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        return response


@app.get("/find_prestamo_by_fecha_prestamo/",tags=["Prestamo"])
def find_prestamo_by_fecha_prestamo(item_fecha_prestamo:date,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.fecha_prestamo == item_fecha_prestamo).all()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        return response


@app.get("/find_prestamo_by_tasa_interes_mensual/",tags=["Prestamo"])
def find_prestamo_by_tasa_interes_mensual(item_tasa_interes_mensual:float,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.tasa_interes_mensual == item_tasa_interes_mensual).all()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        return response


@app.get("/find_prestamo_by_cuotas_totales/",tags=["Prestamo"])
def find_prestamo_by_cuotas_totales(item_cuotas_totales:int,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.cuotas_totales == item_cuotas_totales).all()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        return response


@app.get("/find_prestamo_by_cuotas_restantes/",tags=["Prestamo"])
def find_prestamo_by_cuotas_restantes(item_cuotas_restantes:int,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.cuotas_restantes == item_cuotas_restantes).all()
    if response == None:
        return {"Prestamo no encontrado"}
    else:
        return response