import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Album } from '../components/Album'
import { Nav } from '../components/Nav'

import { api } from '../services/api'

export class Discografia extends Component {

    state = {
        albumList: [],
        keyword: ''
    }


    componentDidMount() {
        this.getAlbum()
    }


    //this function takes care of getting the albums
    getAlbum = async () => {

        await api.get('/album')
            .then(resp => {
                this.setState({ albumList: resp.data.data })
            })
            .catch(err => {
                console.log('Erro ao cagerrar albums.')
                console.log(err)
            })
    }


    //this function takes care of searching for an album using a keyword
    searchAlbum = async e => {
        e.preventDefault()
        let keyword = this.state.keyword

        await api.get(`/album?keyword=${keyword}`)
            .then(resp => {
                this.setState({ albumList: resp.data.data })
            })
            .catch(err => {
                console.log('Erro ao cagerrar albums.')
                console.log(err)
            })
    }


    render() {

        let { albumList } = this.state

        return (
            <div className="w-full h-screen flex justify-center lg:mt-6 sm:mt-0">
                <div className="lg:w-2/4 sm:w-[95%] lg:h-3/4 sm:h-full text-black">
                    <Nav title="Discografia" />
                    <div className="bg-[#ffffffa6] h-full">

                        <form onSubmit={this.searchAlbum} className='mx-4 py-1'>
                            <span className='text-[#575757]'>Digite uma palavra chave</span>
                            <div className='w-full flex justify-between'>
                                <input className="w-[77%] rounded-full h-9 text-[#575757] outline-none px-6" type="text" onChange={e => this.setState({ keyword: e.target.value })} />
                                <button type="submit" className='bg-[#0c88d8] w-32 text-white text-base font-light rounded-full h-9'>Procurar</button>
                            </div>
                        </form>

                        <div className="w-full text-center my-4">
                            <Link className="bg-[#fff]/50 hover:bg-[#fff] transition p-1 rounded text-[#575757]" to="/novo-album">Novo album</Link>
                        </div>

                        <div className='mx-8 mt-6 h-2/3 overflow-auto scrollbar scrollbar-thumb-zinc-400 scrollbar-track-transparent scrollbar-thin'>
                            {albumList.map((album) => (
                                <Album
                                    key={album.id}
                                    id={album.id}
                                    nameAlbum={album.name}
                                    yearAlbum={album.year}
                                    tracks={album.tracks}
                                    reloadDiscografia={() => this.getAlbum()}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}