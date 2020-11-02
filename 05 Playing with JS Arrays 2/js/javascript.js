//some datas
const people = [
    { name: "Nicole", year: 2000 },
    { name: "Sean", year: 2015 },
    { name: "Mitchel", year: 1990 },
    { name: "Julie", year: 1976 },
    { name: "Jannet", year: 1988 },
    { name: "Anna", year: 1956 },
    { name: "Zira", year: 2006 },
    { name: "Coleman", year: 2010 },
    { name: "Bryan", year: 1995 },
    { name: "Levin", year: 1982 }
];

const comments = [
    { text: "This is damn gooood!", id: 547812 },
    { text: "Holy cow!!", id: 238401 },
    { text: "Wowwww!!!!", id: 329043 },
    { text: "You're looking good", id: 222142 },
    { text: "Damn!!", id: 302782 },
    { text: "Who is that?", id: 792543 },
    { text: "That feels good..", id: 989873 },
    { text: "Yummyyyyyy.....", id: 490000 },
    { text: "OMG!!", id: 582351 },
    { text: "You are the best", id: 676500 },
];

//checking if atleat anyone from the array is an adult
const isAdult = people.some(e => {
    const year = (new Date().getFullYear());

    if (year - e.year >= 18)
        return true;
});
console.log(isAdult);

//checking if everyone from the array is an adult
const everyAdult = people.every(e => {
    const year = (new Date().getFullYear());

    if (year - e.year >= 18)
        return true;
});
console.log(everyAdult);

//finding the comment by an id
const commentID = comments.find(e => e.id === 582351);
console.log(commentID["text"]);

//creating a new array from the original array by deleting a comment of a certain id
const indexID = comments.findIndex(e => e.id === 582351);
newComments = [...comments.slice(0, indexID), ...comments.slice(indexID+1)];
console.table(newComments);