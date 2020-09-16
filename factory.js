// Category Factory

app.factory('Category', ($http)=>{
  var factory = {}
  var category = ["Electronic", "Grocery", "Books", "Toys", "Beauty Products"]
  
  // Get Category
  factory.read = ()=>{
    return category
  }
  
  factory.create = (categoryName)=>{
    category.push(categoryName)
  }
  
  return factory;
})
