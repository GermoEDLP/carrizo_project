import React, { useContext, useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebase";
import { Loading } from "../../components/parts/Loading";
import { Lista } from "../../components/odontologia/Lista";
import { OdontoForm } from "../../components/odontologia/OdontoForm";
import { ToastContext } from "../../context/ToastContext";



export const OdontoScreen = () => {

  const {setToast} = useContext(ToastContext)

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

  const addOdonto = async (form) => {
    try {
      const docRef = await addDoc(collection(db, "odontologos"), form);
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
        <button
          className="btn btn-success btn-circle float-right"
          style={{ height: "2rem !important", width: "2rem !important" }}
          onClick={()=>{setToast({style:"error",message:"Se agrego correctamente"})}}
        >
          <i className={showForm?"fas fa-chevron-left":"fas fa-minus"}></i>
        </button>
      </div>
      <div className="card-body">
        {showForm ? (
          <OdontoForm setShowForm={setShowForm} addOdonto={addOdonto}/>
        ) : odonto.length == 0 ? (
          <Loading />
        ) : (
          <Lista odonto={odonto} />
        )}
      </div>
    </div>
  );
};
