from datetime import date
from typing import List, Optional
from model.Prestatario import Prestatario
from sqlalchemy.orm import Session
from fastapi import Depends,Body
from db import get_session
from framework import app

@app.post("/create_prestatario/",tags=["Prestatario"],)
def create(nombre:str=Body(...),
           apellido:str=Body(...),
           dni:int=Body(...),
           direccion:str=Body(...),
           telefono:int=Body(...),
           email:Optional[str]=Body(None),
           fecha_alta:date=Body(...),
           estado_empleo:bool=Body(...),
           ocupacion:str=Body(...),
           ingreso_anual:int=Body(...),
           prestamos:Optional[List[dict]] = Body(None),
           session: Session = Depends(get_session)):
    
    prestatario = Prestatario(nombre=nombre,
                              apellido=apellido,
                              dni=dni,
                              direccion=direccion,
                              telefono=telefono,
                              email=email,
                              fecha_alta=fecha_alta,
                              estado_empleo=estado_empleo,
                              ocupacion=ocupacion,
                              ingreso_anual=ingreso_anual,
                              prestamos=prestamos)
    
    session.add(prestatario)
    session.commit()
    session.refresh(prestatario)

@app.get("/get_all_prestatarios/",tags=["Prestatario"])
def get_all(session: Session = Depends(get_session)):
    return session.query(Prestatario).all()

@app.get("/get_prestatario_by_id/{item_id}",tags=["Prestatario"])
def get_by_id(item_id:int,session: Session = Depends(get_session)):
    response = session.get(Prestatario,item_id)
    if response == None:
        return {"Prestatario no encontrada"}
    else:
        return response


@app.post("/delete_prestatario_by_id/{item_id}",tags=["Prestatario"])
def delete_by_id(item_id:int,session: Session = Depends(get_session)):
    response = session.get(Prestatario,item_id)
    if response == None:
        return {"Prestatario no encontrada"}
    else:
        session.delete(response)
        session.commit()