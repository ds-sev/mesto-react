function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main className="content">
      <section className="profile wrapper">
        <div className="profile__photo-container"
             onClick={onEditAvatar}>
          <div className="profile__photo" />
          <div className="profile__photo-hover" />
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__button-edit button"
                    onClick={onEditProfile}
                    type="button"
                    aria-label="Редактирование профиля"></button>
          </div>
          <p className="profile__about">Исследователь океана</p>
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
