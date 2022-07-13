/*  eslint-disable */
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button, Input, Select, FormControl, TextareaAutosize } from "@material-ui/core";
import { useProps, useLab } from "../hooks";

import styles from '../styles/form.module.css'
import { useEffect, useState } from "react";

interface FormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

type FormValues = {
  nome: string,
  dataInicial: Date,
  dataFinal: Date,
  infosPropriedade: {
      id: number,
      nome: string
  },
  cnpj: string,
  laboratorio: {
      id: number,
      nome: string
  },
  observacoes: string
}

const Formulario:React.FC<FormProps> = ()=>{
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => {console.log(data)}

  const { props, handlePropsChange } = useProps()
  const { lab, handleLabChange } = useLab()

  const [data, setData] = useState({
    prop: [],
    lab: []
  })

  const { control } = useForm({
    defaultValues: {
      name: '',
      dataInicial: '',
      dataFinal: '',
      properties: {},
      lab: {},
      observacoes: '',
      save: {}
    }
  });

  const fetchDados = async ()=>{
    const teste = await fetch('http://localhost:5000/empresas').then((response)=>{
      return response.json()
    })
    const teste2 = await fetch('http://localhost:5000/laboratorios').then((response)=>{
      return response.json()
    })
    setData({
      prop: teste,
      lab: teste2
    })
  }

  useEffect(()=>{
    fetchDados()
  }, [])
  
  return (
    <FormControl className={styles.form} fullWidth={true} onSubmit={handleSubmit(onSubmit)}>
      <section className={styles.formHeader}>
        <h2>Teste front-end</h2>
        <Controller
          name="save"
          control={control}
          render={() => <Button className={styles.btnSave} type="submit"> Salvar </Button>}
        />
      </section>
      <section className={styles.firstContent}>
      <Controller
          name="name"
          control={control}
          render={() => <Input className={styles.inpName} placeholder="Nome" {...register("nome")} />}
        />
       
      <Controller
        name="dataInicial"
        control={control}
        render={() => <Input className={styles.inpDate} type="date" {...register("dataInicial", { required: true})} />}
      />
      {errors.dataInicial && <span>This field is required</span>}
       <Controller
        name="dataFinal"
        control={control}
        render={() => <Input className={styles.inpDate} type="date" {...register("dataFinal", { required: true})} />}
      />
       {errors.dataFinal && <span>Esse campo é obrigatório</span>}
      </section>
      <section className={styles.secondContent}>
        <Controller
          name="properties"
          control={control}
          render={() => 
            <Select className={styles.inpSelect} renderValue={()=> props} onChange={handlePropsChange} label="cnpj">
              {data.prop.map((obj: any)=>(
                <>
                  <option value={1}>{obj.nome}</option>
                  <span>{obj.cnpj}</span>
                  <hr />
                </>
              ))}
            </Select>
          }
        />
        <Controller
          name="lab"
          control={control}
          render={() => 
            <Select className={styles.inpSelect} renderValue={()=>lab} onChange={handleLabChange}>
              {data.lab.map((obj: any)=>(
                <>
                  <option value={1}>{obj.nome}</option>
                  <hr />
                </>
              ))}
            </Select>
          }
        />
      </section>
      <Controller
        name="observacoes"
        control={control}
        render={() => <TextareaAutosize className={styles.txtAObs}  minRows={6} placeholder="Observações" {...register("observacoes")} />}
      />
    </FormControl>
  );
}

export default Formulario;