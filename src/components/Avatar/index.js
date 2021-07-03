import Image from 'next/image'
import avatarImage from '../../../public/assets/img/profile-photo-harry.jpg'

import * as S from './styled'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <Image
        src={avatarImage}
        alt="Uma foto minha vestido com o uniforme da Grifinória do Harry Potter"
        layout="responsive"
        objectFit="cover"
        placeholder="blur"
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
