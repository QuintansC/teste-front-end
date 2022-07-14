
interface FormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}
interface FormValues {
  nome: string,
  dataInicial: Date,
  dataFinal: Date,
  cnpj: string,
  empresa:{
      nome: string
  },
  laboratorio: {
      id: number,
      nome: string
  },
  observacoes: string
}
  