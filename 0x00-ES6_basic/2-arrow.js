export default function getNeighborhoodsList() {
  // this refers to the current object we are working with
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    // this.addNeighborhood: 'this' makes sure 'this' inside the arrow function refers to
    // same objectas 'this outside the arrow function
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
