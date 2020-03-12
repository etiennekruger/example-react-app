export default class Client {
  constructor(token) {
    this.token = token;
  }

  getItems() {
    console.log(`Calling getItem() using token "${this.token}".`);
    return [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" }
    ];
  }
}
