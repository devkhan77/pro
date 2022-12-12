function init() {

  var name = 'Mozilla'; // name is a local variable created by init
  console.log(name);
  console.log(z);
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
    var z = "zebra"
  }
  displayName();
}
init();
