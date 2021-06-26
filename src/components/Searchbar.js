import { useState } from 'react'

const Searchbar = () => {

    const [searchTeam, setSearchTeam] = useState('')
    const onSearchHandler = (e) => {
        e.preventDefault()
        console.log('searching for team' + searchTeam)
    }

    return (
        <div className="searchbar">
            <form className="searchbar__form">
                <input
                    type="text"
                    placeholder="Search for tv show"
                    value={searchTeam}
                    onChange={(e) => setSearchTeam(e.target.value)}
                />
                <button className="btn btn-block" onClick={onSearchHandler}>
                    SEARCH
                </button>
            </form>
        </div>
    )
}

export default Searchbar
