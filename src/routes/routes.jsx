import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout'
import Detail from '../containers/Detail'
import MovieDetail from '../containers/MovieDetail'
import SeriesDetail from '../containers/SeriesDetail'

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<Detail />} />
        <Route path="/movieDetail/:id" element={<MovieDetail />} />
        <Route path="/seriesDetail/:id" element={<SeriesDetail />} />
      </Route>
    </Routes>
  )
}

export default Router
