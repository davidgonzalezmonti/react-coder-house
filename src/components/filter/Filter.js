
import './Filter.css';
import { NavLink } from 'react-router-dom';

const FilterAnime = () => {



    return(
<>
<section className='filter'>
<button><NavLink  to="/catagorias/kimetsuNoYaiba"  >Kimetsu no Yaiba</NavLink></button>
<button><NavLink  to="/catagorias/dragonBallZ"  >Dragon Ball Z</NavLink></button>
<button><NavLink  to="/catagorias/onePiece"  >One Piece</NavLink></button>
</section>

</>
    )
}

export default FilterAnime;



// const filterKimetsu = () =>{

// }

// const filterDragonBall = () =>{
    
// }

// const filterOnePiece = () =>{
    
// }

// return(
// <>
// <section className='filter'>
// <button onClick={filterKimetsu}>Kimetsu no Yaiba</button>
// <button onClick={filterDragonBall}>Dragon Ball Z</button>
// <button onClick={filterOnePiece}>One Piece</button>
// </section>