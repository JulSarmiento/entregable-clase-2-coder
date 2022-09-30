
class User {
  /**
   * 
   * @param {string} name 
   * @param {string} lastname 
   * @param {array} books 
   * @param {array} pets 
   */
  constructor(name, lastname, books = [], pets = []){
    this.name = name;
    this.lastname = lastname;
    this.books = books;
    this.pets = pets;
  }

  /**
   * 
   * @returns string
   */
  getFullName() {
    return `${this.name} ${this.lastname}`;
  }

  /**
   * 
   * @param {string} petName 
   */
  addPet(petName) {
    this.pets.push(petName);
  }

  /**
   * 
   * @returns number
   */
  countPets() {
    return this.pets.length;
  }

  /**
   * 
   * @param {string} bookName 
   * @param {string} bookAuthor 
   */
  addBook(bookName, bookAuthor){
    this.books.push({name : bookName, author: bookAuthor});
  }

  /**
   * 
   * @returns string array
   */
  getBookNames(){
    return this.books.map(book => book.name);
  }
}

const julie = new User('Julieth', 'Sarmiento', [{name: 'La Larga Marcha', author :'Richard Backman'}, {name: 'Ojos de Fuego', author :'Stephen King'}], ["Odashi", "Mazuzoe", "Vader"]);

julie.addPet('Bruce Willis');
julie.addBook("Cujo", "Stephen King");

console.log(julie.getFullName());
console.log(julie.getBookNames())
console.log(julie.countPets());