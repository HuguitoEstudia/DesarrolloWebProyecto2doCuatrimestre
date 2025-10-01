from model.Prestatario import Prestatario
from sqlalchemy.orm import Session
from fastapi import Depends
from db import get_session
from framework import app

@app.post("/create_prestatario/",tags=["Prestatario"],)
def create(nombre:str="",apellido:str="",edad:int=0,dni:int=1234567,session: Session = Depends(get_session)):
    
    prestatario = Prestatario(nombre=nombre,
                              apellido=apellido,
                              edad=edad,
                              dni=dni)
    
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