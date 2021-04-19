const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  

  //Test 7
  it("constructor sets position and default values for mode and generatorWatts", function() {
    let rover = new Rover(64863); 
    expect(rover.position).toEqual(64863); 
    expect(rover.generatorWatts).toEqual(110);
  });

  // Test 8
  it("response returned by receiveMessage contains name of message", function() {
    let rover = new Rover(64863);
    let message = new Message('New Message');
    let messageResults = rover.receiveMessage(message);
    let messageName = messageResults['name'];
    expect(messageName).toEqual('New Message');
  });

  // 7 tests here!

});
