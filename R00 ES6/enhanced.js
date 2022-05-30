var name = 'javascript course';
var price = 1000;
var attribute = 'author'

var course = {
    name,
    price,
    [attribute] : 'AuthorName', //define key for object
    // getName: function(){
    //     return this.name;
    // }
    getName() {
        return name;
    }
}
console.log(course)