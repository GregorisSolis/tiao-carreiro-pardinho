import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Discografia } from './pages/Discografia'
import { FormAddAlbum } from './pages/FormAddAlbum'
import { FormAddFaixa } from './pages/FormAddFaixa'

export const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Discografia />} />
				<Route path="/novo-album" element={<FormAddAlbum />} />
				<Route path="/nova-faixa/:album_id" element={<FormAddFaixa />} />
			</Routes>
		</BrowserRouter>
	)
}
