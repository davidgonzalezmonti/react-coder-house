import './Filter.css';
import { NavLink } from 'react-router-dom';

const FilterAnime = () => {
    return (
        <>
            <section className='filter'>
                <NavLink to="/catagorias/kimetsuNoYaiba"  >Kimetsu no Yaiba</NavLink>
                <NavLink to="/catagorias/dragonBallZ"  >Dragon Ball Z</NavLink>
                <NavLink to="/catagorias/onePiece"  >One Piece</NavLink>
                <NavLink to="/catalogo"  >Todos</NavLink>
            </section>
        </>
    )
}

export default FilterAnime;