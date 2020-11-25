import './search.styles.css'

export const Search = ({placeholder, handleChange}) => { //this destructures the props, assigning them to the variables given here.
        return (
            <div>
                <input className="search" 
                        type="search" name="monsters" 
                        placeholder={placeholder} 
                        onChange={handleChange}/>
            </div>
        )
}

