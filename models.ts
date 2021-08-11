import * as jsonfile from "jsonfile";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  arrayDeLaData: Contact[] = [];
  load() {
    const arrayDeContacts = jsonfile.readFyleSinc("./contacts.json");
    this.arrayDeLaData = arrayDeContacts;
  }
  // lee el archivo de contacts.json y lo guarda
  // en arrayDeLaData
  getAll() {
    return this.arrayDeLaData;
  }
  addOne(contact: Contact) {
    return this.arrayDeLaData.push(contact);
  }
  save() {
    jsonfile.writeFyleSync("./contacts.json", this.arrayDeLaData);
    // esto hace que el contacts.json se actualice cada vez
    // que agregamos a algun contacto con el metodo addOne
    // ESTO REESCRIBE EL CONTACTS.JSON
  }
  getOneById(id) {
    let buscando = this.arrayDeLaData.find(function (p) {
      return p.id == id;
    });
    return buscando;
  }
}
export { ContactsCollection };
