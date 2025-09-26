import React from 'react'
import * as S from './styled'
import RepositoryItem from '../repository-item'

function Repositories() {
    return (

        <S.WrapperTabs
            selectedTabClassName='is-selected'
            selectedTabPanelClassName='is-selected'
        >
            <S.WrapperTabList>
                <S.WrapperTab>
                    Repositories
                </S.WrapperTab>
                <S.WrapperTab>
                    Starred
                </S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="airbnb-replica"
                    linkToRepo='https://github.com/ViniciusNNascimento/airbnb-replica'

                    fullName='ViniciusNNascimento/airbnb-replica'
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name='animations'
                    linkToRepo='https://github.com/ViniciusNNascimento/animations'
                    fullName='ViniciusNNascimento/animations'
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>

    )
}

export default Repositories
