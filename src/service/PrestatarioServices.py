from datetime import date
from typing import List, Optional
from model.Prestamo import Prestamo
from model.Prestatario import Prestatario, PrestatarioCreate
from sqlalchemy.orm import Session
from fastapi import Depends,Body
from db import get_session
from app import app


@app.post("/create_prestatario/",tags=["Prestatario"],)
def create_prestatario( 
                    prestatario: PrestatarioCreate,
                    session: Session = Depends(get_session)):

    nuevo_prestatario = Prestatario(
                            nombre=prestatario.nombre,
                            apellido=prestatario.apellido,
                            dni=prestatario.dni,
                            direccion=prestatario.direccion,
                            telefono=prestatario.telefono,
                            email=prestatario.email,
                            estado_empleo=prestatario.estado_empleo,
                            ocupacion=prestatario.ocupacion,
                            ingreso_anual=prestatario.ingreso_anual
                            )
    
    session.add(nuevo_prestatario)
    session.commit()
    return {True}


@app.put("/update_prestatario/",tags=["Prestatario"],)
def update_prestatario( 
                    item_id:int,
                    prestatarioUpdate: PrestatarioCreate,
                    session: Session = Depends(get_session)):

    prestatario = session.query(Prestatario).filter(Prestatario.id == item_id).first()

    if prestatario == None:
        return {False}
    else:
        prestatario.nombre = prestatarioUpdate.nombre # type: ignore
        prestatario.apellido = prestatarioUpdate.apellido # type: ignore
        prestatario.dni = prestatarioUpdate.dni # type: ignore
        prestatario.direccion = prestatarioUpdate.direccion # type: ignore
        prestatario.telefono = prestatarioUpdate.telefono # type: ignore
        prestatario.email = prestatarioUpdate.email # type: ignore
        prestatario.estado_empleo = prestatarioUpdate.estado_empleo # type: ignore
        prestatario.ocupacion = prestatarioUpdate.ocupacion # type: ignore
        prestatario.ingreso_anual = prestatarioUpdate.ingreso_anual # type: ignore
        
        session.commit()

        return {"Prestatario actualizado correctamente"}


@app.delete("/delete_prestatario/",tags=["Prestatario"])
def delete_prestatario(item_id:int,session: Session = Depends(get_session)):
    response = session.query(Prestatario).filter(Prestatario.id == item_id).first()
    if response == None:
        return {"Prestatario no encontrado"}
    else:
        session.delete(response)
        session.commit()
        return {"Prestatario eliminado correctamente"}


@app.get("/find_all_prestatario/",tags=["Prestatario"])
def find_all_prestatario(session: Session = Depends(get_session)):
    # diccionario
    response = session.query(Prestatario).all()
    if response == []:
        return {None}
    else:
        return response


@app.get("/find_prestatario_by_id/",tags=["Prestatario"])
def find_prestatario_by_id(item_id:int,session: Session = Depends(get_session)):
    response = session.query(Prestatario).filter(Prestatario.id == item_id).first()
    return response
    # if response == None:
    #     return {"Prestatario no encontrado"}
    # else:
    #     # diccionario
    #     return response


@app.get("/find_prestatario_by_dni/",tags=["Prestatario"])
def find_prestatario_by_dni(item_dni:int,session: Session = Depends(get_session)):
    response = session.query(Prestatario).filter(Prestatario.dni == item_dni).first()
    return response
    # if response == None:
    #     return {"Prestatario no encontrado"}
    # else:
    #     # diccionario
    #     return response


@app.get("/find_prestatario_by_nombre_apellido/",tags=["Prestatario"])
def find_prestatario_by_nombre_apellido(item_nombre:str,item_apellido:str,session: Session = Depends(get_session)):
    response = session.query(Prestatario).filter(
                                                Prestatario.nombre == item_nombre,
                                                Prestatario.apellido == item_apellido
                                                ).all()
    if response == []:
        return {None}
    # else:
    #     # lista
    #     return response

@app.get("/find_prestatario_by_prestamo/",tags=["Prestatario"])
def find_prestatario_by_prestamo(prestamo_id:int,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.id == prestamo_id).first()
    if response == None:
        return {response}
    else:
        # diccionario
        return response.prestatario
