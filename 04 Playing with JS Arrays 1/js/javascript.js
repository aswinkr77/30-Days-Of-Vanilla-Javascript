//Some datas
const inventors = [
    {firstName: "Anders", lastName: "Celsius", invention: "Centigrade Scale", inventedYear: 1742 , born: 1701, died: 1744},
    {firstName: "Peter", lastName: "Henlein", invention: "Watch", inventedYear: 1511, born: 1485, died: 1542},
    {firstName: "Guglielmo", lastName: "Marconi", invention: "Radio", inventedYear: 1901, born: 1874, died: 1937},
    {firstName: "Alexander", lastName: "Bell", invention: "Telephone", inventedYear: 1876, born: 1847, died: 1922},
    {firstName: "Benjamin", lastName: "Franklin", invention: "Electricity", inventedYear: 1752, born: 1706, died: 1790},
    {firstName: "Thomas", lastName: "Edison", invention: "Electric Light Bulb", inventedYear: 1879, born: 1847, died: 1931},
    {firstName: "Galileo", lastName: "Galilei", invention: "Thermometer", inventedYear: 1596, born: 1564, died: 1642},
    {firstName: "Samuel", lastName: "Morse", invention: "Telegraph", inventedYear: 1844, born: 1791, died: 1872},
    {firstName: "Victor", lastName: "Hess", invention: "Cosmic Rays", inventedYear: 1912, born: 1883, died: 1964},
    {firstName: "Karl", lastName: "Benz", invention: "Automobile", inventedYear: 1886, born: 1844, died: 1929},
    {firstName: "Fritz", lastName: "Pfleumer", invention: "Magnetic Tape", inventedYear: 1928, born: 1881, died: 1945},
    {firstName: "Michael", lastName: "Faraday", invention: "Transformer", inventedYear: 1831, born: 1791, died: 1867},
    {firstName: "Elisa", lastName: "Otis", invention: "Lift", inventedYear: 1857, born: 1811, died: 1861},
    {firstName: "Erwin", lastName: "Schrodinger", invention: "Wave Mechanics", inventedYear: 1926, born: 1887, died: 1961},
    {firstName: "Enrico", lastName: "Fermi", invention: "Nuclear Reactor", inventedYear: 1951, born: 1901, died: 1954},
    {firstName: "William", lastName: "Grove", invention: "Fuel Cell", inventedYear: 1838, born: 1811, died: 1896},
    {firstName: "Evangelista", lastName: "Torricelli", invention: "Barometer", inventedYear: 1643, born: 1608, died: 1647},
    {firstName: "Nicephore", lastName: "Niepce", invention: "Camera", inventedYear: 1816, born: 1765, died: 1833},
    {firstName: "Rudolf", lastName: "Diesel", invention: "Diesel Engine", inventedYear: 1890, born: 1858, died: 1913},
    {firstName: "Igor", lastName: "Sikorsky", invention: "Helicopter", inventedYear: 1939, born: 1889, died: 1972}
];

const names = [
    "Sachin, Tendulkar", "Mahatma, Gandhi", "Mahendra, Dhoni", "Barack, Obama", "Sandra, Lee",
    "Erwin, Lewis", "Victor, Hess", "Jon, Snow", "Joe, Biden", "Donald, Trump", "Mickey, Mouse",
    "Green, Park", "Abraham, Lincoln", "Bruce, Lee", "Doris, Varkey", "Nathan, Nile", "Dora, More",
    "Peter, Parker", "Brett, Lee", "Lee, Sans", "Sarah, John", "Michale, Jay", "John, Peter",
    "Jennifer, Pattinson", "Julie, Ray", "Sean, Park", "Lee, Park", "Ray, John", "Mark, Simmers",
    "Ricky, Reachers", "Jack, Right", "John, Cena", "Doris, Peter", "Mike, Santers", "Denley, Morris"
];

const fruits = ["apple", "mango", "apple", "banana", "plum", "grape", "promagranate", "promagranate",
    "apple", "grape", "berry", "plum", "plum", "plum", "orange", "grape", "banana", "berry", "apple",
    "apple", "berry", "promagrante", "guava", "orange", "apple", "banana", "apple", "plum", "berry"
];

//filter function
//filtering invention date during the 70's
const seventeen = inventors.filter(e => (e.inventedYear >= 1700 && e.inventedYear < 1800));
console.table(seventeen);

//map function
//mapping the first and last name
const name = inventors.map(e => `${e.firstName} ${e.lastName}`);
console.table(name);

//sort function
//sorting the inventors by born year
const birth = inventors.sort((born1, born2) => born1.born - born2.born);
console.table(birth);

//reduce function
//total age of all the inventors
const totalAge = inventors.reduce((total, e) => total += e.died - e.born, 0);
console.log(totalAge);

//sorting the inventors by age
const yearsLived = inventors.sort((born1, born2) => (born1.died - born1.born) - (born2.died - born2.born));
console.table(yearsLived);

//sorting the array names alphabetically
const fullName = names.map(e => {
    const splitName = e.split(", ");
    return `${splitName[0]} ${splitName[1]}`;
});

const sortedName = fullName.sort((name1, name2) =>  name1 > name2 ? 1: -1);
console.table(sortedName);

//creating an object of fruits
const fruit = fruits.reduce((obj, item) => {
    if(!obj[item])
        obj[item] = 0;
    ++obj[item];

    return obj;
}, {});
console.table(fruit);

