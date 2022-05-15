export function Alert(props) {

	return (
		<div className="bg-black/20 fixed w-full inset-0 flex justify-center items-center truncate">
			<div className="bg-white p-6 w-auto h-1/5 rounded flex flex-col justify-center items-center">
				<div className="my-5">
					<p>{props.text}</p>
				</div>
				<div>
					<button className='bg-[#0c88d8] w-32 text-white text-base font-light rounded-full h-9' onClick={() => props.closeAlert()}>Entendi</button>
				</div>
			</div>
		</div>
	)
}