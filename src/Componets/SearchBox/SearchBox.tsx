import "./Searchbox.css";

interface SearchboxProps {
    onInputChange: (inputValue: string) => void;
}

const Searchbox = ({ onInputChange }: SearchboxProps) => {
    return (
        <input
            className="search"
            onChange={(e) => {
                onInputChange(e.target.value);
            }}
            type="search"
            placeholder="Search Pokemons"
        />
    );
};

export default Searchbox;
