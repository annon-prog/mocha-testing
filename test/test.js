const chai = require("chai");
const expect = chai.expect;
const practice = require("../src/index");

describe("Practice test", function () {
  describe("Fizzbuzz", function () {
    it("should return numbers divisible by either 3 or 5", function () {
      expect(practice.fizzBuzz(20)).to.deep.equal([3, 5, 6, 9, 10, 12, 18]);
      expect(practice.fizzBuzz(30)).to.deep.equal([
        3, 5, 6, 9, 10, 12, 18, 20, 21, 24, 25, 27,
      ]);
    });
  });

  describe("Double Sequence", function () {
    it("should return next element as a product of previous element by two", function () {
      expect(practice.doubleSequence(7, 3)).to.deep.equal([7, 14, 28]);
      expect(practice.doubleSequence(5, 4)).to.deep.equal([5, 10, 20, 40]);
    });

    it("should expect base to start at index zero", function () {
      expect(practice.doubleSequence(7, 3)[0]).to.equal(7);
      expect(practice.doubleSequence(5, 4)[0]).to.equal(5);
    });

    it("should return the specified length", function () {
      expect(practice.doubleSequence(7, 3)).to.have.lengthOf(3);
      expect(practice.doubleSequence(5, 4)).to.have.lengthOf(4);
    });
  });

  describe("Unique", function () {
    it("should return elements without duplicates", function () {
      expect(practice.unique([11, 7, 8, 10, 8, 7, 7])).to.deep.equal([
        11, 7, 8, 10,
      ]);
      expect(practice.unique([1, 2, 3, 2, 1, 4])).to.deep.equal([1, 2, 3, 4]);
    });
  });

  describe("Choosey Endings", function () {
    it("should return a new array of words ending in the suffix", function () {
      expect(
        practice.chooseyEndings(
          ["family", "hound", "catalyst", "fly", "timidly", "bond"],
          "ly"
        )
      ).to.deep.equal(["family", "fly", "timidly"]);
    });
  });

  describe("Summation sequence", function () {
    it("should take the summation of the previous element to form the next element", function () {
      expect(practice.summationSequence(3, 4)).to.deep.equal([3, 6, 21, 231]);
      expect(practice.summationSequence(5, 3)).to.deep.equal([5, 15, 120]);
    });

    it("should expect start to begin at index zero", function () {
      expect(practice.summationSequence(3, 4)[0]).to.equal(3);
      expect(practice.summationSequence(5, 3)[0]).to.equal(5);
    });

    it("should return the specified length", function () {
      expect(practice.summationSequence(3, 4)).to.have.lengthOf(4);
      expect(practice.summationSequence(5, 3)).to.have.lengthOf(3);
    });
  });
});
