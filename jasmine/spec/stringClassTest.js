describe("String class", function() {
  describe("hasVowels function", function() {
    it("should return true if string contains vowels", function () {
      expect("gyp i".hasVowels()).toBe(true);
      expect("hyp".hasVowels()).toBe(false);
    });
  });

  describe("toUpper function", function () {
    it("should convert strings to upper case", function () {
      expect("gallop".toUpper()).toBe("GALLOP");
      expect("hI".toUpper()).toBe("HI");
    });
  });

  describe("toLower function", function () {
    it("should convert strings to lower case", function () {
      expect("gAlLOP".toLower()).toBe("gallop");
      expect("hI".toLower()).toBe("hi");
    });
  });

  describe("ucFirst function", function () {
    var result = "thank you".ucFirst();
    it("should be type of string", function() {
      expect(result).toEqual(jasmine.any(String));
    });

    it("should convert only first character of string to upper case", function () {
      expect("galLop".ucFirst()).toBe("GalLop");
      expect("hI".ucFirst()).toBe("HI");
    });
  });

  describe("isQuestion function", function () {
    it("should return true if string is a question", function () {
      expect("are you okay?".isQuestion()).toBe(true);
      expect("are? you".isQuestion()).toBe(false);
      expect("I said no".isQuestion()).toBe(false);
    });
  });

  describe("words function", function () {
    var result = "hi there".words();
    it("should be instance of Array", function() {
      expect(result instanceof Array).toBe(true);
    });

    it("should return a list of the words in the string", function () {
      expect("Let us test this".words()).toEqual(["Let", "us", "test", "this"]);
      expect("1 2 3 lets go".words()).toEqual(["1", "2", "3", "lets", "go"]);
    });
  });

  describe("wordCount function", function () {
    var result = "hi there".wordCount();
    it("should be type of Number", function() {
      expect(result).toEqual(jasmine.any(Number));
    });
    it("should return the number of words in the string", function () {
      expect("Let us test this".wordCount()).toEqual(4);
      expect("1 2 3 lets go".wordCount()).toEqual(5);
    });
  });

  describe("toCurrency function", function () {
    var result = "1111.1".toCurrency();
    it("should be type of string", function() {
      expect(result).toEqual(jasmine.any(String));
    });
    it("should return the number of words in the string", function () {
      expect("11111.1".toCurrency()).toMatch("11,111.1");
      expect("1444.5".toCurrency()).toMatch("1,444.5");
    });
  });

  describe("fromCurrency function", function () {
    var result = "1,111.1".fromCurrency();
    it("should be type of Number", function() {
      expect(result).toEqual(jasmine.any(Number));
    });

    it("should return the number of words in the string", function () {
      expect("$1,220.3".fromCurrency()).toEqual(1220.3);
      expect("11,111.1".fromCurrency()).toEqual(11111.1);
    });
  });
});