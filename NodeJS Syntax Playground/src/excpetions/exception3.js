class NotEnoughCoffeeError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "Not Enough Coffee Error"; // (2)
  }
}
throw new NotEnoughCoffeeError("message");
