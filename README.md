# Teste Front-end Plataforma
Teste para Front end do time plataforma.

# Para rodar o projeto é necessario rodar 2 comandos, yarn server e logo em seguida yarn start

## Descrição
O teste consiste em construir um formulario simples com o seguinte [template](https://www.figma.com/proto/PXi5PcZWks8Z7veqA8WU30/Teste-Front-end).  
Criar um repositorio aberto no github e enviar o link por e-mail ao completar o teste.

## Requisitos 
- Desenvolver com html/css/vanilla ou React.
- Construção do formulario funcional.
- Seguir com fidelidade o prototipo.
- Dar um console.log dos dados de envio.
- Usar MATERIAL-UI para components default (icones/inputs/frames).
- Envio do formulario deve ter o seguinte formato:

```
{
    nome: 'Jon doe',
    dataInicial: '2022-02-02T17:41:44Z',
    dataFinal: '2022-02-02T17:41:44Z',
    infosPropriedade: {
        id: 12345,
        nome: 'Nome Exemplo da fazenda'
    },
    cnpj: 'XX. XXX. XXX/0001-XX',
    laboratorio: {
        id: 1234,
        nome: 'Laboratorio exemplo'
    },
    observacoes: 'Observacao exemplo de teste'
}
```

## Itens Opcionais
- Usar styled-componts.
- Usar uma lib de formulario (react-hook-form por exemplo).
- Mockar chamadas de dados dos inputs de select.
- Caso escolha React, usar hooks.