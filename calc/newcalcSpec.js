describe("Extra calculator functions", function() {
    describe("Area function", function() {
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
    });
    
    describe("Square Root function", function() {
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
    });
    
    describe("Square function", function() {
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
        it("should return 4 as the square of 2", function() {
            expect(squareMe(2)).toBe(4);
        });
    });


    describe("Cube Me", function(){
        it("should return 8 as the cubic of 2", function(){
            expect(cubeMe(2)).toBe(8);
        });
   
      it("Arguments must both be numbers", function() {
          expect(cubeMe(2)).toBe(8);  
       });
    });
    
     describe("Area Of Triangle", function(){
        it("should return 16 as area of triangle", function(){
            expect(areaoftriangle(2)).toBe(8);
        });
   
      it("Arguments must both be numbers", function() {
          expect(araeoftriangle(2)).toBe(8);  
       });
    })
})
    
