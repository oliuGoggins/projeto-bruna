import React, { ChangeEvent, useState } from 'react'
import './styles/global.css'

import { useForm } from 'react-hook-form'

function App() {
 
  const [ output, setOutput ] = useState('')
  const { register, handleSubmit } = useForm()

  function returnedCard(data: any) {
    setOutput(JSON.stringify(data, null, 2))
  }  

  // DADOS CLASSIFICAÇÃO

  const classification = ['PowerCRM', 'E-mail', 'FIVE'];

  const [selectedLocal, setSelectedLocal] = useState<string>('');

  const handleLocal = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocal(event.target.value);
  };

  // DADOS SITUAÇÃO

  const situation = ['Retornada', 'Retornada/Enviado', 'Feito', 'Card Negado', 'Card Arquivado'];

  const [selectedSituation, setSelectedSituation] = useState<string>('');

  const handleSituation = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSituation(event.target.value);
  }

  // DADOS QUANTIDADE RETORNO

  const amount = [1, 2, 3];

  const [selectedReturned, setSelectedReturned] = useState<string>('');

  const handleReturned = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedReturned(event.target.value);
  }

  // DADOS ANALISTAS

  const analists = ['Nayara', 'Haryane', 'Erika', 'Anna'];

  const [selectedAnalist, setSelectedAnalist] = useState<string>('');

  const handleAnalists = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedAnalist(event.target.value);
  }

  // DADOS REGIONAL

  const enterprises = ['Matriz', 'CLT', 'JOAO PINHEIROS'];

  const [selectedFilial, setSelectedFilial] = useState<string>('');

  const handleFilial = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilial(event.target.value);
  }

  // DADOS CONSULTOR

  const salers = ['Teste1', 'Teste2', 'Teste3'];

  const [selectedSaler, setSelectedSaler] = useState<string>('');

  const handleSaler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSaler(event.target.value);
  }

  // DADOS MOTIVOS

  const reasons = ['Teste1', 'Teste2', 'Teste3']

  const [selectedReason, setSelectedReason] = useState('');

  const handleReason = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedReason(event.target.value);
  }

  return (

    <main>

      {/* CABEÇALHO */}

      <div className='flex flex-row fixed'>
          
        <nav>
          <a href=""> Home </a> | 
          <a href=""> Retornadas </a> | 
          <a href=""> Pendências </a> | 
          <a href=""> Devolutivas </a>
        </nav>

      </div>
 
      {/* FORMULÁRIO */}

      <div className='h-full bg-zinc-50 flex items-center justify-center'>

        <form 
          onSubmit={handleSubmit(returnedCard)}
          className='w-30 flex flex-col gap-4 w-full max-w-xs'
        >

          <div className='flex flex-col'>
            <label htmlFor="">Classificação</label>
            <select
              id="local"
              value={selectedLocal}
              {...register('classi')}
              onChange={handleLocal}
            >
              <option value="">-- Selecione --</option>
              {classification.map((local, index) => (
                <option 
                  key={index} 
                  value={local}
                >
                  {local}
              </option>
              ))}
              
            </select>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="">Situação</label>
            <select
              id="situation"
              value={selectedSituation}
              {...register('situ')}
              onChange={handleSituation}
            >
              <option value="">-- Selecione --</option>
              {situation.map((situation, index) => (
                <option 
                  key={index} 
                  value={situation}
                >
                  {situation}
                </option>
              ))}

            </select>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="">Quantidade de retorno</label>
            <select
              id="amount"
              value={selectedReturned}
              {...register('quant')}
              onChange={handleReturned}
            >
              <option value="">-- Selecione --</option>
              {amount.map((amount, index) => (
                <option 
                  key={index} 
                  value={amount}
                >
                  {amount}
                </option>
              ))}

            </select>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="">Data Análise</label>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="">Associado</label>
            <input
              type="text" 
              className='border border-zinc-200 shadow-sm rounded h-8 px-3'
            {...register('client')}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="">Placa/Chassi</label>
            <input
              type="text" 
              className='border border-zinc-200 shadow-sm rounded h-8 px-3'
            {...register('plate')}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="">Cadastro</label>
            <select
              id="analist"
              value={selectedAnalist}
              {...register('analist')}
              onChange={handleAnalists}
            >
              <option value="">-- Selecione --</option>
              {analists.map((analist, index) => (
                <option 
                  key={index} 
                  value={analist}
                >
                  {analist}
                </option>
              ))}
            </select>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="">Regional</label>
            <select
              id="filial"
              value={selectedFilial}
              {...register('enterprise')}
              onChange={handleFilial}
            >
              <option value="">-- Selecione --</option>
              {enterprises.map((filial, index) => (
                <option 
                  key={index}
                  value={filial}
                >
                  {filial}
                </option>
              ))}
            </select>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="">Consultor</label>
            <select
              id="saler"
              value={selectedSaler}
              {...register('saler')}
              onChange={handleSaler}
            >
              <option value="">-- Escolha --</option>
              {/* {salers.map((saler, index) => (
                <option 
                  key={index}
                  value={saler}
                >
                  {saler}
                </option>
              ))} */}
            </select>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="">Motivo</label>
            
            <select 
              id="reason"
              value={selectedReason}
              {...register('reason')}
              onChange={handleReason}
            >
              {reasons.map((reason, index) => (
                <option 
                  key={index}
                  value={reason}
                >
                  {reason}
                </option>
              ))}
            </select>

          </div>
        
          <div className='flex flex-col'>
            <label htmlFor="">Observação</label>
            <textarea 
              {...register('obs')}
              id="obs" 
              rows={5} 
              cols={50}>
            </textarea>

          </div>

          <button 
            type='submit'
            className='bg-emerald-500 rounded font-semibold text-white h-8 hover:bg-emerald-600'
          >
            Enviar
          </button>

        </form>

        <pre>{output}</pre>

      </div>

    </main>
  )
}



export default App


