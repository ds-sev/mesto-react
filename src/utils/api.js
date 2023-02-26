/** REQUESTS TO THE SERVER **/
class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl
    this._headers = headers
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me/`, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject(`Ошибка: ${res.status}`)
        }
      })
  }

  setUserInfo(newData) {
    return fetch(`${this._baseUrl}/users/me/`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: newData.name,
        about: newData.job
      })
    })
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards/`, {
      headers: this._headers
    })
      .then(res => res.ok
        ? res.json()
        : Promise.reject(`Ошибка: ${res.status}`))
  }

  postNewCard(newCardData) {
    return fetch(`${this._baseUrl}/cards/`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: newCardData.name,
        link: newCardData.link
      })
    })
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => res.ok
        ? res.json()
        : Promise.reject())
  }

  putLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res => res.ok
        ? res.json()
        : Promise.reject())
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => res.ok
        ? res.json()
        : Promise.reject())
  }

  newAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      })
    })
      .then(res => res.ok
        ? res.json()
        : Promise.reject(`Ошибка: ${res.status}. Проверьте путь к изображению`))
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: 'c4ab66aa-531d-4641-bb6a-e0dfe4dabae8',
    'Content-Type': 'application/json'
  }
})

export default api



