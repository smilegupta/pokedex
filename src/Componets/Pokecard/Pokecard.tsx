import "./Pokecard.css"

const Pokecard = (props: any) => {
    return (
        <div className="pokecard">
            <p>
                {props.name}
            </p>
        </div>
    )
}

export default Pokecard
