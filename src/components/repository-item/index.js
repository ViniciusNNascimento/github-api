import React from 'react'
import * as S from './styled'

function RepositoryItem({ name, fullName, linkToRepo }) {
    return (
        <S.Wrapper>
            <S.WrapperTitle>{name}</S.WrapperTitle>
            <S.WrapperFullname>full name:</S.WrapperFullname>
            <S.WrapperLink
                href={linkToRepo}
                target='_blank'
                rel='noreferrer'
            >{fullName}</S.WrapperLink>

        </S.Wrapper>
    )
}

export default RepositoryItem;
