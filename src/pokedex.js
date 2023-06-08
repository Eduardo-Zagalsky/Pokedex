import Pokecard from "./pokecard";
import pokemon from './pokemon';

const Pokedex = () => {
    return pokemon.map(p => {
        return (
            <div>
                <Pokecard name={p.name} type={p.type} id={p.id} />
            </div>)
    });
};

export default Pokedex;