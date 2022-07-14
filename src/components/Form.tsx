import { useForm, Controller } from "react-hook-form";
import { Button, Input, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from "@mui/material";

import styles from '../styles/form.module.css'
import useHooks from "../hooks";
import { style } from "@mui/system";

const Formulario: React.FC<FormProps> = ()=>{
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [ onSubmit, data, control ] = useHooks()
  
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <section className={styles.formHeader}>
        <h2>Teste front-end</h2>
        <Controller
          name="save"
          control={control}
          render={() => <Button className={styles.btnSave} type="submit"> Salvar </Button>}
        />
      </section>
      <section className={styles.container}>
        <section className={styles.firstContent}>
          <Controller
            name="name"
            control={control}
            render={() => <TextField id="outlined-basic" label="Nome *" variant="outlined" className={styles.inpName} placeholder="Nome" {...register("nome")} />}
          />
          <Controller
            name="dataInicial"
            control={control}
            render={() => <div className={styles.dateInicial}>
              <InputLabel htmlFor="dataInicial">Data Inicial</InputLabel>
              <Input id="dataInicial" className={styles.inpDate} type="date" {...register("dataInicial", { required: true})} />
            </div>}
          />
          <Controller
            name="dataFinal"
            control={control}
            render={() => <div className={styles.dateFinal}> 
              <InputLabel htmlFor="dataFinal">Data Final</InputLabel>
              <Input id="dataFinal" className={styles.inpDate} type="date" {...register("dataFinal", { required: true})} />
            </div>
            }
          />
        </section>
        
          <section className={styles.secondContent}>
            <Controller
              name="empresa"
              control={control}
              render={({field:{ onChange, value }}) => 
                <>                  
                  <TextField 
                    select 
                    id="outlined-basic" 
                    label="Empresa" 
                    variant="outlined" 
                    {...register("empresa")} 
                    className={styles.inpSelect} 
                    value={value||''} 
                    onChange={onChange}
                  >
                    {data.prop.map((obj: empresas, index: number)=>(
                      <MenuItem 
                        className={styles.inpSelect} 
                        value={obj.nome}
                        data-value={index}
                        >
                        {obj.nome}
                        <span>{obj.cnpj}</span>
                      </MenuItem>
                    ))}
                  </TextField>
                </>
              }
            />
            <Controller
              name="laboratorio"
              control={control}
              render={({field:{ onChange, value }}) => 
              <>
                <TextField 
                select 
                id="outlined-basic" 
                label="Laboratorios" 
                variant="outlined" 
                {...register("laboratorio")} className={styles.inpSelect} value={value||''} onChange={onChange}>
                  {data.prop.map((obj: laboratorios, index: number)=>(
                    <MenuItem 
                      className={styles.inpSelect} 
                      value={obj.nome}
                    >
                      {obj.nome}
                    </MenuItem>
                  ))}
                </TextField>
                </>
              }
            />
        </section>
        <Controller
          name="observacoes"
          control={control}
          render={() => <TextareaAutosize className={styles.txtAObs}  minRows={6} placeholder="Observações" {...register("observacoes")} />}
        />
      </section>
    </form>
  );
}

export default Formulario;