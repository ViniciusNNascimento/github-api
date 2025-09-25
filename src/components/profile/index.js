import React from 'react'
import * as S from './styled';

function Profile() {
    return (
        <S.Wrapper>

            <S.WrapperImg src="https://avatars.githubusercontent.com/u/145020844?v=4" alt="Profile" />

            <S.WrapperInfoUser>
                <div>
                    <h1>Vinicius Nascimento</h1>
                    <S.WrapperUserName>
                        <h3>Username: </h3>
                        <a
                            href='https://viniciusnnascimento.github.io/portifolio/'
                            target='_blank'
                            rel='noreferrer'>Vinicius</a>
                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Starreds</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>5</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper >
    )
}

export default Profile
