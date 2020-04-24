function Cat (name) {
    this.stomach = [];
    this.name = name;
}

Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}

module.exports = Cat;