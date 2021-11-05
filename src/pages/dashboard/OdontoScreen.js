import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebase";
import { Loading } from "../../components/parts/Loading";
import { Lista } from "../../components/odontologia/Lista";
import { OdontoForm } from "../../components/odontologia/OdontoForm";

export const OdontoScreen = () => {
  const [odonto, setOdonto] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const loadData = async () => {
    setOdonto([]);
    const respuesta = await getDocs(collection(db, "odontologos"));
    respuesta.forEach((doc) => {
      const newOdonto = doc.data();
      setOdonto((odonto) => [...odonto, { ...newOdonto, id: doc.id }]);
    });
  };

  const addOdonto = async () => {
    try {
      const docRef = await addDoc(collection(db, "odontologos"), {
        centro: "La Rivera2",
        cuil: "1234562346",
        direccion: "520 n 20",
        email: "german@gmail.com",
        nombre: "Jose Perez",
        telefono: { celular: "123345", extra: "1242456", fijo: "41241424" },
      });
      loadData();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5
          className="m-0 font-weight-bold text-primary"
          style={{
            display: "inline",
            verticalAlign: "-webkit-baseline-middle",
          }}
        >
          Odontologos
        </h5>
        <button
          className="btn btn-info btn-circle float-right"
          style={{ height: "2rem !important", width: "2rem !important" }}
          onClick={()=>setShowForm((showForm)=>!showForm)}
        >
          <i className={showForm?"fas fa-chevron-left":"fas fa-plus"}></i>
        </button>
      </div>
      <div className="card-body">
        {showForm ? (
          <OdontoForm setShowForm={setShowForm}/>
        ) : odonto.length == 0 ? (
          <Loading />
        ) : (
          <Lista odonto={odonto} />
        )}
      </div>
    </div>
  );
};
