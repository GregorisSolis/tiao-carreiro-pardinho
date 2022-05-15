import { useState } from 'react'
import { useNavigate, useParams } from 'react-router';

import { Nav } from '../components/Nav'
import { api } from '../services/api'
import { Alert } from '../components/Alert'

export function FormAddFaixa(props) {

	const [title, setTitle] = useState('')
	const [number, setNumber] = useState(0)
	const [duration, setDuration] = useState('')
	const [isVisible, setIsVisible] = useState(false)
	const [textAlert, setTextAlert] = useState('')
	const { album_id } = useParams()
	let navigate = useNavigate();


	//this function is responsible for creating a new track
	const setNewFaixa = e => {
		e.preventDefault()

		parseInt(duration)

		if (!title || !number || !duration) {
			setIsVisible(true)
			setTextAlert('Você deve preencher todos os campos.')
		} else {
			try {

				api.post('/track', { album_id, number, title, duration })
					.then(resp => {
						navigate('/')
					})
					.catch(err => {
						setIsVisible(true)
						setTextAlert('Erro ao cadastrar uma nova faixa.')
					})

			}
			catch (e) {
				setIsVisible(true)
				setTextAlert('Erro ao cadastrar uma nova faixa.')
			}
		}
	}

	return (
		<>
			{isVisible ? <Alert text={textAlert} closeAlert={() => setIsVisible(false)} /> : null}

			<div className="w-full h-screen flex justify-center lg:mt-6 sm:mt-0">
				<div className="lg:w-2/4 sm:w-[95%] lg:h-3/4 sm:h-full text-black">

					<Nav title="Nova faixa" />

					<div className="bg-[#ffffffa6] h-full flex items-center justify-center">
						<form onSubmit={setNewFaixa} className="w-10/12 flex justify-center">

							<div className="w-11/12">

								<div className="my-6">
									<span className='text-[#575757]'>Digite o numero da faixa</span>
									<input
										className="w-full rounded-full h-9 text-[#575757] outline-none px-6" type="text"
										onChange={e => setNumber(e.target.value)}
									/>
								</div>

								<div className="my-6">
									<span className='text-[#575757]'>Digite o nome da faixa</span>
									<input
										className="w-full rounded-full h-9 text-[#575757] outline-none px-6" type="text"
										onChange={e => setTitle(e.target.value)}
									/>
								</div>

								<div className="my-6">
									<span className='text-[#575757]'>Digite a duração</span>
									<input
										className="w-full rounded-full h-9 text-[#575757] outline-none px-6" type="text"
										onChange={e => setDuration(e.target.value)}
									/>
								</div>

								<div className="w-full flex justify-center">
									<button type="submit" className='bg-[#0c88d8] w-32 text-white text-base font-light rounded-full h-9'>Agregar</button>
								</div>

							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}