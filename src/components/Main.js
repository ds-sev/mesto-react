import { useEffect, useState } from 'react'
import api from '../utils/api'

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  useEffect(() => {
    api.getUserInfo().then(userData => {
      setUserName(userData.name)
      setUserDescription(userData.about)
      setUserAvatar(userData.avatar)
    })
  })
  return (
    <main className="content">
      <section className="profile wrapper">
        <div className="profile__photo-container"
             onClick={onEditAvatar}>
          <div className="profile__photo"
               style={{ backgroundImage: `url(${userAvatar})` }} />
          <div className="profile__photo-hover" />
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__button-edit button"
                    onClick={onEditProfile}
                    type="button"
                    aria-label="Редактирование профиля"></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button className="profile__button-add button"
                onClick={onAddPlace}
                type="button"
                aria-label="Добавить фото"></button>
      </section>
      <section className="cards wrapper" aria-label="Cards"></section>
    </main>
  )
}

export default Main
