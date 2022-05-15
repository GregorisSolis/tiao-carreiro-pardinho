import { useState } from 'react'
import { useNavigate } from 'react-router';

import { Nav } from '../components/Nav'
import { api } from '../services/api'
import { Alert } from '../components/Alert'


export function FormAddAlbum() {

	const [name, setName] = useState('')
	const [year, setYear] = useState(0)
	const [isVisible, setIsVisible] = useState(false)
	const [textAlert, setTextAlert] = useState('')
	let navigate = useNavigate();


	//this function is responsible for creating a new album
	const addNewAlbum = e => {
		e.preventDefault()

		if (!name || !year) {
			setIsVisible(true)
			setTextAlert('Você deve preencher todos os campos.')
		} else {
			try {
				api.post('/album', { name, year })
					.then(resp => {
						setIsVisible(true)
						setTextAlert('Album cadastrado com sucesso.')
						navigate('/')
					})
					.catch(err => {
						setIsVisible(true)
						setTextAlert('Erro ao cadastrado o novo album.')
					})
			}
			catch (e) {
				setIsVisible(true)
				setTextAlert('Erro ao cadastrado o novo album.')
			}
		}
	}


	return (
		<>
			{isVisible ? <Alert text={textAlert} closeAlert={() => setIsVisible(false)} /> : null}

			<div className="w-full h-screen flex justify-center lg:mt-6 sm:mt-0">
				<div className="lg:w-2/4 sm:w-[95%] lg:h-3/4 sm:h-full text-black">

					<Nav title="Novo album" />

					<div className="bg-[#ffffffa6] h-full flex items-center justify-center">
						<form onSubmit={addNewAlbum} className="w-10/12 flex justify-center">

							<div className="w-11/12">

								<div className="my-6">
									<span className='text-[#575757]'>Digite o nome do album</span>
									<input
										className="w-full rounded-full h-9 text-[#575757] outline-none px-6" type="text"
										onChange={e => setName(e.target.value)}
									/>
								</div>

								<div className="my-6">
									<span className='text-[#575757]'>Digite o ano do album</span>
									<input
										className="w-full rounded-full h-9 text-[#575757] outline-none px-6" type="text"
										onChange={e => setYear(e.target.value)}
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