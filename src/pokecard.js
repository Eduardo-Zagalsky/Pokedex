// Shows a single Pokemon, with their name, image, and type.
const Pokecard = (props) => {
    let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`

    return (
        <div>
            <img src={img} alt={props.name}></img>
            <p><b>{props.name}</b> Type: {props.type}</p>
        </div>
    );
};

export default Pokecard;