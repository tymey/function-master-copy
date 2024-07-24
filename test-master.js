(function(){

    QUnit.test( "Our First Test", function( assert ) {
      var value = "hello tests";
      var some_number = 484;
  
      //                     ┌ Change this to what it should be
      assert.equal( value, 'hello tests'); // value is assigned "hello tests"
      //                           ┌ Change this to what it should be
      assert.equal( some_number, 484); // some_number is assigned 484
    });
  
    QUnit.test("Functions can access/modify variables in parent scope.", function(assert){
      var outside_the_function = null; // Globally scoped

      function yay(){
        var inside_the_function = "can you see me?"; // function scoped
        outside_the_function = inside_the_function; /* outside_the_function is assigned the value assigned to inside_the_function
                                                       which will reassgin the globally scoped variable outside_the_function to 
                                                       "can you see me?" */                                        
      }
  
      yay();
  
      assert.equal(outside_the_function, "can you see me?");
    });
  
    QUnit.test("Function Parameters become scoped to the function.", function(assert){
  
      function yay(param){
        assert.equal(param, "a fine kettle of fish"); /* When function was invoked, param became 
                                                         "a fine kettle of fish */
      }
  
      yay("a fine kettle of fish");
    });
  
    QUnit.test("A functions local scope is not available in an outer scope.", function(assert){
      function yay(){
        var kix = "kid tested mother approved";
        assert.equal(kix, "kid tested mother approved"); // kix is locally scoped to yay()
      }
      yay();
      
      var has_kix;
      // NOTE:
      // "this" is a special object that by default represents the global scope.
      // variables declared globally are stored as a property on the object: this.<variable>
      // if the variable is not global then this.<variable> will be undefined
      if(this.kix !== undefined){ // kix is locally scoped to yay() so this.kix will be undefined
        has_kix = kix;
      } else {
        has_kix = "i prefer cheerios"; // Run this code
      }
      assert.equal(has_kix, "i prefer cheerios"); 
    });
  
    QUnit.test("Functions don't have access to each others scope", function(assert){
      function yay(){
        var from_yay = "i'm inside yay;"; // Locally scoped to yay()
      }
  
      function foo(){
        var in_foo = "i'm in foo"; // locally scoped to foo()
        if(this.from_yay !== undefined){ // from_yay is not globally scoped
          in_foo = this.from_yay; // this doesn't run 
        }
        assert.equal(in_foo, "i'm in foo");
        assert.equal(this.from_yay, undefined); // from_yay is not globally scoped
      }
      yay();
      foo();
    });
  
    QUnit.test("Inner scope variables override outer scope variables.", function(assert){
  
      var peanuts = 300; // globally scoped
  
      function yay(){
        var peanuts = "roasted"; // declaring peanuts to the local scope of yay()
  
        assert.equal(peanuts, "roasted");
      }
      yay();
  
      assert.equal(peanuts, 300); // globally scoped peanuts was not reassigned
    });
  
    QUnit.test("Variables created with var in a funtion are re-created each time", function(assert){
      function yay(){
        if(this.counter !== undefined){ 
          counter = counter + 1;
        } else { // counter is undefined
          var counter = 10; // Hoists the declaration of counter to the top of the scope as undefined
        }
      }
  
      yay(); // The else declares counter in the block scope of the local scope of yay()
      assert.equal(this.counter, undefined); // The redeclaration never reachs the global scope
      yay();
      assert.equal(this.counter, undefined);
      yay();
      assert.equal(this.counter, undefined);
    });
  
    QUnit.test("Inner scope can access outer scope", function(assert){
      var im_outside = "alpha"; // globally scope
      function yay(){
        var im_inside = "omega"; // locally scoped to yay()
        return im_outside + im_inside; 
      }
  
      assert.equal(yay(), "alphaomega"); // yay() accesses both variables and returns "alphaomega"
    });
  
    QUnit.test("Functions retain outer scope references between calls.", function(assert){
      var im_outside = 13; // globally scoped
      function yay(){
        im_outside += 1; // reassgins globally scoped variable im_outside
      }
  
      yay(); // Reassigns im_outside to 13 + 1 = 14
      assert.equal(im_outside, 14); // im_outside === 14
      yay(); // Reassigns im_outside to 14 + 1 = 15
      assert.equal(im_outside, 15); // im_outside === 15
    });
  
    QUnit.test("We can do goofy stuff with outer scope", function(assert){
  
      var hello = "greg"; // Globally scoped
      var name = ""; // Globally scoped
  
      function yay(){
        name += hello; // Reassigns name to "name + hello"
      }
      //                           ""
      yay(); // Reassigns name to name + "greg" = "greg"
      assert.equal(name, "greg"); // name === "greg"
      yay(); // Reassigns name to name + "greg" = "greggreg"
      assert.equal(name, "greggreg"); // name === "greggreg"
      yay(); // Reassigns name to name + "greg" = "greggreggreg"
      assert.equal(name, "greggreggreg"); // name === "greggreggreg"
    });
  
    QUnit.test("We can pass functions to other functions and then run them.", function(assert){
      var im_outter = 10; // Globally scoped
      function yay(){
        im_outter /= 5; // Reassigns im_outer to (im_outer / 5)
      }
      function something(whatever){
        im_outter *= 20; // Reassigns im_outer to (im_outer * 20)
        whatever(); // Invokes the function in the whatever parameter
      }
      something(yay); // First, im_outer is reassigned to (10 * 20) = 200
                      // Second, im_outer is reassigned to (200 / 5) = 40 because yay() is invoked
      assert.equal(im_outter, 40); // im_outer === 40
  
    });
  
    QUnit.test("We can get crazy with returns.", function(assert){
      function yay(){
        return " is dog";
      }
      function foo(whatever){
        return "hello, this" + whatever(); // Invokes whatever() which returns " is dog"
      }                                    // Returns "hello, this" + " is dog"
      assert.equal(foo(yay), "hello, this is dog");
    });
  
  })(); // IIFE - Immediately Invoked Function Expression