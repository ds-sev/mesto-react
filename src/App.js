import logo from './logo.svg';
import './index.css'
import logoPath from './images/logo/logo.svg'

function App() {
  return (
    <div className="App">
      <body className="body">
      <div className="page">

        <header className="header header_position">
          <img src={logoPath} alt="логотип" className="header__logo" id="start" />
        </header>
        <main className="content">

          <section className="profile wrapper">
            <div className="profile__photo-container">
              <div className="profile__photo"></div>
              <div className="profile__photo-hover"></div>
            </div>
            <div className="profile__info">
              <div className="profile__name-container">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button className="profile__button-edit button" type="button" aria-label="Редактирование профиля"></button>
              </div>
              <p className="profile__about">Исследователь океана</p>
            </div>
            <button className="profile__button-add button" type="button" aria-label="Добавить фото"></button>
          </section>

          <section className="cards wrapper" aria-label="Cards"></section>
        </main>

        <footer className="footer wrapper">
          <span className="footer__copyright">&#169; 2023 Дмитрий Литвиненко</span>
        </footer>
      </div>

      <div className="popup popup-profile-edit" id="profile-edit-popup">
        <div className="popup__container">
          <form className="edit-form" id="profile-edit-form" method="post" name="profileEditForm" noValidate>
            <button className="button_type_close button" id="profile-edit-form-button-close" type="button" aria-label="Закрыть"></button>
            <h3 className="edit-form__title">Редактировать профиль</h3>
            <fieldset className="edit-form__fields">
              <label>
                <input type="text" id="name-input" className="edit-form__field edit-form__field_get_name" placeholder="Имя" name="name" minLength="2" maxLength="40" required />
                  <span className="name-input-error edit-form__field-error"></span>
              </label>
              <label>
                <input type="text" className="edit-form__field edit-form__field_get_job" id="job-input" placeholder="Деятельность" name="job" minLength="2" maxLength="200" required />
                  <span className="job-input-error edit-form__field-error"></span>
              </label>
              <button className="edit-form__button-save button_submit button" type="submit">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup-new-card" id="add-card-popup">
        <div className="popup__container">
          <form className="edit-form" id="add-card-form" method="post" name="new card" noValidate>
            <button className="button_type_close button" id="add-card-form-button-close" type="button" aria-label="Закрыть"></button>
            <h3 className="edit-form__title">Новое место</h3>
            <fieldset className="edit-form__fields">
              <label>
                <input type="text" id="place-input" className="edit-form__field edit-form__field_get_place-name" placeholder="Название" name="name" minLength="2" maxLength="30" required />
                  <span className="edit-form__field-error place-input-error"></span>
              </label>
              <label>
                <input type="url" id="link-input" className="edit-form__field edit-form__field_get_link" placeholder="Ссылка на картинку" name="link" required />
                  <span className="edit-form__field-error link-input-error"></span>
              </label>
              <button className="edit-form__button-save button_submit button" id="create-button" type="submit">Создать
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup-del-card" id="del-card-popup">
        <div className="popup__container popup__container_small">
          <form className="edit-form" id="confirm-form" method="post" name="new card" noValidate>
            <button className="button_type_close button" id="confirm-form-button-close" type="button" aria-label="Закрыть"></button>
            <h3 className="edit-form__title edit-form__title_small-margin-bottom">Вы уверены?</h3>
            <button className="edit-form__button-save button_submit button" id="confirm-button" type="submit">Да</button>
          </form>
        </div>
      </div>

      <div className="popup popup-update-avatar" id="update-avatar-popup">
        <div className="popup__container popup__container_small">
          <form className="edit-form" id="update-avatar-form" method="post" name="update avatar" noValidate>
            <button className="button_type_close button" id="update-avatar-form-button-close" type="button" aria-label="Закрыть"></button>
            <h3 className="edit-form__title">Обновить аватар</h3>
            <fieldset className="edit-form__fields">
              <label>
                <input type="url" id="avatar-link-input" className="edit-form__field edit-form__field_get_link" placeholder="Ссылка на изображение" name="link" required />
                  <span className="edit-form__field-error avatar-link-input-error"></span>
              </label>
              <button className="edit-form__button-save button_submit button" id="save-avatar-button" type="submit">Сохранить
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup-image-view popup_theme_dark" id="image-view-popup">
        <div className="image-view">
          <figure className="figure">
            <img className="image-view__item" alt="#" src="#" />
              <figcaption className="image-view__title"></figcaption>
          </figure>
          <button className="button_type_close button" id="image-view-button-close" type="button" aria-label="Закрыть"></button>
        </div>
      </div>

      {/*<template id="card">*/}
      {/*  <div className="card">*/}
      {/*    <div className="card__photo-container" id="image-card" style="background-position: center;*/}
      {/*  background-size: cover"></div>*/}
      {/*    <button className="card__button-delete" id="card-button-delete" type="button" aria-label="Удалить карточку"></button>*/}
      {/*    <div className="card__info"><h2 className="card__title"></h2>*/}
      {/*      <div className="likes-container">*/}
      {/*        <button className="likes-container__button" id="card__button-like" type="button" aria-label="Нравится"></button>*/}
      {/*        <p className="likes-container__counter">-</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</template>*/}
      </body>
      </div>
  );
}

export default App;





