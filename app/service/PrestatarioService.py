from model.Prestatario import Prestatario
from db import session
from framework import app

@app.post("/create_prestatario/",tags=["Prestatario"],)
def create_persona(nombre:str="",
                   apellido:str="",
                   edad:int=0,
                   dni:int=1234567):
    
    prestatario = Prestatario(nombre=nombre,
                      apellido=apellido,
                      edad=edad,
                      dni=dni)
    
    session.add(prestatario)
    session.commit()
    session.refresh(prestatario)

@app.get("/get_all_prestatarios/",tags=["Prestatario"])
def get_all_personas():
    return session.query(Prestatario).all()

@app.get("/get_prestatario_by_id/{item_id}",tags=["Prestatario"])
def get_persona_by_id(item_id:int):
    response = session.get(Prestatario,item_id)
    if response == None:
        return {"Persona no encontrada"}
    else:
        return response


@app.post("/delete_prestatario_by_id/{item_id}",tags=["Prestatario"])
def delete_persona_by_id(item_id:int):
    response = session.get(Prestatario,item_id)
    if response == None:
        return {"Persona no encontrada"}
    else:
        session.delete(response)
        session.commit()