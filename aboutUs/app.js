// let Director = require('./Director.js') // not working for some reason?

// can remove this once modcule using require is working
class Director {
  constructor(name, title, phone, email) {
    this.name = name;
    this.title = title;
    this.phone = phone;
    this.email = email;
  }
}

const babette = new Director('Babette Cohn', 'Director of Education & Programming', '301-593-3410 x106', 'bcohn@shaaretefila.org')
const shana = new Director('Shana Rosenblatt', 'Executive Director', '301-593-3410 x101', 'srosenblatt@shaaretefila.org')
const hazzan = new Director('Hazzan Adina Klein Ackerman', 'Cantor', '301-593-3410', 'caackerman@shaaretefila.org')
const beth = new Director('Beth Adler', 'Early Childhood Center Director', '301-593-3410 x105', 'badler@shaaretefila.org')

const directors = []
directors.push(babette)
directors.push(shana)
directors.push(hazzan)
directors.push(beth)


directors.forEach((elem) => {
  console.log(`Name: ${elem.name}, Title: ${elem.title}, Phone: ${elem.phone}, Email: ${elem.email}`)
})
