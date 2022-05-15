import { Link } from 'react-router-dom'
import { ButtonDelete } from './ButtonDelete'

export function Album(props) {

    const tracksList = props.tracks
    const album_id = props.id
    const reloadDiscografia = props.reloadDiscografia

    return (
        <div className="mb-8">

            <p className="font-bold">
                Album: {props.nameAlbum}, {props.yearAlbum}
                <ButtonDelete type="album" id={album_id} reload={() => reloadDiscografia()} />
            </p>

            <div className="flex w-full text-[#3E3E3E]">
                <div className="flex w-11/12">
                    <p className="w-12">Nº</p>
                    <p className="w-3/6">Faixa</p>
                </div>
                <div className="w-16 flex">
                    <p className="justify-start">Duração</p>
                </div>
            </div>

            {tracksList.map((track) => (
                <div className="flex w-full text-[#3E3E3E] my-1" key={track.id}>
                    <div className="flex w-11/12">
                        <p className="w-12">{track.number}</p>
                        <p className="w-3/6">{track.title}</p>
                    </div>
                    <div className="w-9 flex justify-start">
                        <p className="">{track.duration}</p>
                    </div>
                    <ButtonDelete type="track" id={track.id} reload={() => reloadDiscografia()} />
                </div>
            ))}

            <div className="w-full text-center my-4">
                <Link className="bg-[#fff]/50 hover:bg-[#fff] transition p-1 rounded text-[#575757] text-sm" to={`/nova-faixa/${album_id}`}>Nova faixa</Link>
            </div>

        </div>
    )
} 