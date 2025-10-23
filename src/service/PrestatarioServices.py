from datetime import date
from typing import List, Optional
from model.Prestamo import Prestamo
from model.Prestatario import Prestatario
from sqlalchemy.orm import Session
from fastapi import Depends,Body
from db import get_session
from app import app

@app.post("/create_prestatario/",tags=["Prestatario"],)
def create_prestatario( 
                    nombre:str,
                    apellido:str,
                    dni:int,
                    direccion:str,
                    telefono:int,
                    estado_empleo:bool,
                    ocupacion:str,
                    ingreso_anual:float,
                    email:Optional[str]=None,
                    session: Session = Depends(get_session)):

    prestatario = Prestatario(
                            nombre=nombre,
                            apellido=apellido,
                            dni=dni,
                            direccion=direccion,
                            telefono=telefono,
                            email=email,
                            estado_empleo=estado_empleo,
                            ocupacion=ocupacion,
                            ingreso_anual=ingreso_anual
                            )
    
    session.add(prestatario)
    session.commit()


@app.post("/update_prestatario/",tags=["Prestatario"],)
def update_prestatario( 
                    item_id:int,
                    nombre:Optional[str]=None,
                    apellido:Optional[str]=None,
                    dni:Optional[int]=None,
                    direccion:Optional[str]=None,
                    telefono:Optional[int]=None,
                    estado_empleo:Optional[bool]=None,
                    ocupacion:Optional[str]=None,
                    ingreso_anual:Optional[float]=None,
                    email:Optional[str]=None,
                    session: Session = Depends(get_session)):
    
    datos = {
        "nombre":nombre,
        "apellido":apellido,
        "dni":dni,
        "direccion":direccion,
        "telefono":telefono,
        "estado_empleo":estado_empleo,
        "ocupacion":ocupacion,
        "ingreso_anual":ingreso_anual,
        "email":email
    }

    prestatario = session.query(Prestatario).filter(Prestatario.id == item_id).first()

    for campo, valor in datos.items():
        if valor != None:
            setattr(prestatario,campo,valor)
    
    session.commit()


@app.post("/delete_prestatario/",tags=["Prestatario"])
def delete_prestatario(item_id:int,session: Session = Depends(get_session)):
    response = session.query(Prestatario).filter(Prestatario.id == item_id).first()
    if response == None:
        return {"Prestatario no encontrado"}
    else:
        session.delete(response)
        session.commit()


@app.get("/find_all_prestatario/",tags=["Prestatario"])
def find_all_prestatario(session: Session = Depends(get_session)):
    return session.query(Prestatario).all()


@app.get("/find_prestatario_by_id/",tags=["Prestatario"])
def find_prestatario_by_id(item_id:int,session: Session = Depends(get_session)):
    response = session.query(Prestatario).filter(Prestatario.id == item_id).first()
    if response == None:
        return {"Prestatario no encontrado"}
    else:
        return response


@app.post("/find_prestatario_by_dni/",tags=["Prestatario"])
def find_prestatario_by_dni(item_dni:int,session: Session = Depends(get_session)):
    response = session.query(Prestatario).filter(Prestatario.dni == item_dni).first()
    if response == None:
        return {"Prestatario no encontrado"}
    else:
        return response


@app.post("/find_prestatario_by_nombre_apellido/",tags=["Prestatario"])
def find_prestatario_by_nombre_apellido(item_nombre:str,item_apellido:str,session: Session = Depends(get_session)):
    response = session.query(Prestatario).filter(
                                                Prestatario.nombre == item_nombre,
                                                Prestatario.apellido == item_apellido
                                                ).first()
    if response == None:
        return {"Prestatario no encontrado"}
    else:
        return response

@app.get("/find_prestatario_by_prestamo/",tags=["Prestatario"])
def find_prestatario_by_prestamo(prestamo_id:int,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.id == prestamo_id).first()
    if response == None:
        return {"Prestatario no encontrado"}
    else:
        return response.prestatario
