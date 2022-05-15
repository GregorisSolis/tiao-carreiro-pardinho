import { useState } from 'react'
import iconDelete from '../assests/lixeira.png'
import { api } from '../services/api'
import { Alert } from './Alert'

export function ButtonDelete(props) {

	const type = props.type
	const id = props.id
	const [isVisible, setIsVisible] = useState(false)
	const [textAlert, setTextAlert] = useState('')

	//this function is responsible for deleting album and track
	const remove = async () => {

		await api.delete(`/${type}/${id}`)
			.then(resp => {
				props.reload()
			})
			.catch(err => {
				setIsVisible(true)
				setTextAlert(`Erro ao deletar ${type}.`)
			})

	}

	return (
		<>
			{isVisible ? <Alert text={textAlert} closeAlert={() => setIsVisible(false)} /> : null}

			<button className="bg-[#fff]/50 w-6 hover:bg-[#fff] transition p-1 rounded text-[#575757] text-xs" onClick={() => remove()}>
				<img className="w-full" src={iconDelete} alt="icone de remover" />
			</button>
		</>
	)
}