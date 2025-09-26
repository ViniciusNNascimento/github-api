import React, { useState } from 'react'
import * as S from './styled'
import useGithub from '../hooks/github-hooks'

function Header() {

    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState(undefined)

    const submitGetUser = () => {
        if (!usernameForSearch) return;

        return getUser(usernameForSearch)
    }
    return (
        <S.Wrapper>
            <input
                onChange={(event) => setUsernameForSearch(event.target.value)}
                type="text"
                placeholder='Digite o username para pesquisa...'
            />
            <button
                onClick={submitGetUser}
                type='submit'
            >
                <span>Buscar</span>
            </button>
        </S.Wrapper>
    )
}

export default Header;
