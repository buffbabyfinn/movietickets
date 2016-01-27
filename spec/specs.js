// describe('helloWorld', function(){
//   it("is going to be false", function(){
//     expect(helloWorld()).to.equal(false);
//   });
// });
describe('Ticket', function()  {
  it("creates a new ticket with the given properties", function() {
    var testTicket = new Ticket("Adult", "10am", "Psycho");
    expect(testTicket.type).to.equal("Adult");
    expect(testTicket.time).to.equal("10am");
    expect(testTicket.movie).to.equal("Psycho");
    expect(testTicket.price).to.eql([]);
  });
  it("adds the fullTicket method to all tickets", function() {
    var testTicket = new Ticket("Adult", "5pm", "Office Space");
    expect(testTicket.fullTicket()).to.equal("Adult at 5pm for Office Space");
  });
});

describe('Price', function()  {
  
  it("creates a new price with the given properties", function() {
    // var testPrice = new Price (9, 0, -2);
    // expect(testPrice.movie).to.equal(9);
    // expect(testPrice.type).to.equal(0);
    // expect(testPrice.time).to.equal(-2);
    expect(Price(9, 0, -2)).to.equal('$7.00');
  });
});
