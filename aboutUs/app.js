// let Director = require('./Director.js') // not working for some reason?

// can remove this once modcule using require is working
class Director {
  constructor(name, title, phone, email, photo) {
    this.name = name;
    this.title = title;
    this.phone = phone;
    this.email = email;
    this.photo = photo;
  }
  // add method to automatically push new directors into director array
}

const babette = new Director('Babette Cohn', 'Director of Education & Programming', '301-593-3410 x106', 'bcohn@shaaretefila.org', './images/babette-cohn.jpg')
const shana = new Director('Shana Rosenblatt', 'Executive Director', '301-593-3410 x101', 'srosenblatt@shaaretefila.org', './images/shana-rosenblatt.jpg')
const hazzan = new Director('Hazzan Adina Klein Ackerman', 'Cantor', ' ', 'caackerman@shaaretefila.org', './images/hazzan-ackerman.jpg')
const beth = new Director('Beth Adler', 'Early Childhood Center Director', '301-593-3410 x105', 'badler@shaaretefila.org','./Images/beth-adler.jpg')


const directors = []
directors.push(babette)
directors.push(shana)
directors.push(hazzan)
directors.push(beth)



directors.forEach((elem) => {
  const card = document.createElement('div')
  card.setAttribute('class', 'card')
  
  
  let img = document.createElement('img')
  img.setAttribute('class', 'card-img-top')
  img.src = `${elem.photo}`

  let cardBody = document.createElement('div')
  cardBody.setAttribute('class', 'card-body')

  let h5 = document.createElement('h5')
  h5.setAttribute('class', 'card-title')
  h5.innerHTML = elem.name;

  let p = document.createElement('p')
  p.setAttribute('class', 'card-text')
  p.innerHTML = `
  <b>${elem.title}</b><br>
  ${elem.phone}<br>
  <a href="mailto:${elem.email}">${elem.email}</a>
  `
  document.querySelector('#cardWrap').append(card)
  card.append(img)
  card.append(cardBody)
  cardBody.appendChild(h5)
  cardBody.appendChild(p)

})
