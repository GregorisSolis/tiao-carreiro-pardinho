import logoImage from '../assests/logo.png'


export function Nav(props){
    return(
        <div className="bg-[#fff] opacity-1 w-full h-20 flex justify-between items-center px-4 shadow-lg shadow-[#777]">
            <img className='w-1/5' src={logoImage} alt="logo de tiao carreiro & pardinho" />
            <p className='text-4xl font-light text-gray-700'>{props.title}</p>
        </div>
    )
}