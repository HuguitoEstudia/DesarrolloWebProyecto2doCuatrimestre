from datetime import date
from typing import List, Optional
from model.Garante import Garante, GaranteCreate
from sqlalchemy.orm import Session
from fastapi import Depends,Body
from db import get_session
from app import app
from model.Prestamo import Prestamo


@app.post("/create_garante/",tags=["Garante"],)
def create_garante( 
                    garante: GaranteCreate,
                    session: Session = Depends(get_session)):

    nuevo_garante = Garante(
                            nombre=garante.nombre,
                            apellido=garante.apellido,
                            dni=garante.dni,
                            direccion=garante.direccion,
                            telefono=garante.telefono,
                            email=garante.email,
                            ingreso_anual=garante.ingreso_anual,
                            garante_descripcion=garante.garante_descripcion
                            )
    
    session.add(nuevo_garante)
    session.commit()
    return {"Garante creado correctamente"}


@app.put("/update_garante/",tags=["Garante"],)
def update_garante( 
                    item_id:int,
                    garanteUpdate: GaranteCreate,
                    session: Session = Depends(get_session)):

    garante = session.query(Garante).filter(Garante.id == item_id).first()

    if garante == None:
        return {"Garante no encontrado"}
    else:
        garante.nombre = garanteUpdate.nombre # type: ignore
        garante.apellido = garanteUpdate.apellido # type: ignore
        garante.dni = garanteUpdate.dni # type: ignore
        garante.direccion = garanteUpdate.direccion # type: ignore
        garante.telefono = garanteUpdate.telefono # type: ignore
        garante.email = garanteUpdate.email # type: ignore
        garante.ingreso_anual = garanteUpdate.ingreso_anual # type: ignore
        garante.garante_descripcion = garanteUpdate.garante_descripcion # type: ignore
        
        session.commit()

        return {"Garante actualizado correctamente"}


@app.delete("/delete_garante/",tags=["Garante"])
def delete_garante(item_id:int,session: Session = Depends(get_session)):
    response = session.query(Garante).filter(Garante.id == item_id).first()
    if response == None:
        return {"Garante no encontrado"}
    else:
        session.delete(response)
        session.commit()
        return {"Garante eliminado correctamente"}


@app.get("/find_all_garante/",tags=["Garante"])
def find_all_garante(session: Session = Depends(get_session)):
    # lista de diccionarios
    return session.query(Garante).all()


@app.get("/find_garante_by_id/",tags=["Garante"])
def find_garante_by_id(item_id:int,session: Session = Depends(get_session)):
    response = session.query(Garante).filter(Garante.id == item_id).first()
    return response
    # if response == None:
    #     return {"Garante no encontrado"}
    # else:
    #     # diccionario
    #     return response


@app.get("/find_garante_by_dni/",tags=["Garante"])
def find_garante_by_dni(item_dni:int,session: Session = Depends(get_session)):
    response = session.query(Garante).filter(Garante.dni == item_dni).first()
    return response
    # if response == None:
    #     return {"Garante no encontrado"}
    # else:
    #     # diccionario
    #     return response


@app.get("/find_garante_by_nombre_apellido/",tags=["Garante"])
def find_pgarante_by_nombre_apellido(item_nombre:str,item_apellido:str,session: Session = Depends(get_session)):
    response = session.query(Garante).filter(
                                                Garante.nombre == item_nombre,
                                                Garante.apellido == item_apellido
                                                ).all()
    return response
    # if response == None:
    #     return {"Garante no encontrado"}
    # else:
    #     # lista
    #     return response

@app.get("/find_garante_by_prestamo/",tags=["Garante"])
def find_garante_by_prestamo(prestamo_id:int,session: Session = Depends(get_session)):
    response = session.query(Prestamo).filter(Prestamo.id == prestamo_id).first()
    return response
    # if response == None:
    #     return {"Garante no encontrado"}
    # else:
    #     # diccionario
    #     return response.garante
