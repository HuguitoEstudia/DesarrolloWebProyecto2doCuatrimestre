from datetime import date
from typing import List, Optional
from model.Garante import Garante
from sqlalchemy.orm import Session
from fastapi import Depends,Body
from db import get_session
from app import app

@app.post("/create_garante/",tags=["Garante"],)
def create_garante( 
                    nombre:str,
                    apellido:str,
                    dni:int,
                    direccion:str,
                    telefono:int,
                    ingreso_anual:float,
                    garante_descripcion:Optional[str]=None,
                    # prestamos:Optional[List[dict]] = [],
                    email:Optional[str]=None,
                    session: Session = Depends(get_session)):

    garante = Garante(  
                    nombre=nombre,
                    apellido=apellido,
                    dni=dni,
                    direccion=direccion,
                    telefono=telefono,
                    email=email,
                    ingreso_anual=ingreso_anual,
                    garante_descripcion=garante_descripcion,
                    # prestamos=prestamos
                    )
    
    session.add(garante)
    session.commit()
    session.refresh(garante)


@app.post("/delete_garante/",tags=["Garante"])
def delete_garante(item_id:int,session: Session = Depends(get_session)):
    response = session.query(Garante).filter(Garante.id == item_id).first()
    if response == None:
        return {"Garante no encontrado"}
    else:
        session.delete(response)
        session.commit()


@app.get("/find_all_garante/",tags=["Garante"])
def find_all_garante(session: Session = Depends(get_session)):
    return session.query(Garante).all()


@app.get("/find_garante_by_id/",tags=["Garante"])
def find_garante_by_id(item_id:int,session: Session = Depends(get_session)):
    response = session.query(Garante).filter(Garante.id == item_id).first()
    if response == None:
        return {"Garante no encontrado"}
    else:
        return response


@app.post("/find_garante_by_dni/",tags=["Garante"])
def find_garante_by_dni(item_dni:int,session: Session = Depends(get_session)):
    response = session.query(Garante).filter(Garante.dni == item_dni).first()
    if response == None:
        return {"Garante no encontrado"}
    else:
        return response


@app.post("/find_garante_by_nombre_apellido/",tags=["Garante"])
def find_pgarante_by_nombre_apellido(item_nombre:str,item_apellido:str,session: Session = Depends(get_session)):
    response = session.query(Garante).filter(
                                                Garante.nombre == item_nombre,
                                                Garante.apellido == item_apellido
                                                ).first()
    if response == None:
        return {"Garante no encontrado"}
    else:
        return response


