import { useForm } from "react-hook-form";
import api from "../api/Axios";
import { v4 } from "uuid";

import { useState, useEffect } from "react";

const sendForm = (data: FormValues)=>{
    const dado ={
      id: v4(),
	    ...data
    } 
    api.post("http://localhost:5000/formularios", dado).catch((error)=>{
      console.error(error)
    })
}

const useHooks = ()=>{
    const { control } = useForm({
        defaultValues: {
          name: '',
          dataInicial: '',
          dataFinal: '',
          observacoes: '',
          empresa: {},
          laboratorio: {},
          save: {}
        }
      });
    const [data, setData] = useState({
        prop: [],
        lab: []
    })
    const fetchDados = async ()=>{
        const emps = await api.get('http://localhost:5000/empresas').then((response)=>{
            return response.data
        })
        const labs = await api.get('http://localhost:5000/laboratorios').then((response)=>{
            return response.data
        })
    
        setData({
            prop: emps,
            lab: labs
        })
    }
    useEffect(()=>{
        fetchDados()
    }, [])
    const onSubmit: any = (data: FormValues) => {sendForm(data)}
    return [onSubmit, data, control]
}

export default useHooks