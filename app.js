// 1a. Create a function component using an arrow function expression called GrinchXmas that returns the following string "Cheer up, dude. It's Christmas."
const GrinchXmas = () => {
    return "Cheer up, dude, it's Christmas.";
}
// 1b. Below the GrinchXmas function component, use the ReactDOM Render method to render/display the GrinchXmas function component in the div with the id of "root" in the HTML file (HINT: Remember the ReactDOM Render method takes two parameters. Also, you will need to use a DOM selector to select the div with the id of "root". If this is done correctly you should see the GrinchXmas message display in Chrome)
// ReactDOM.render(
//     <GrinchXmas/>,
//     document.getElementById(`root`)
// );
// 2a. Below the ReactDOM Render method, create another function component using an arrow function expression called GrinchMusic that returns the following text inside of an h1 element "Blast this Christmas music! It's joyful and triumphant."
const GrinchMusic = () => {
    return <h1>Blast this Christmas music! It's joyful and triumphant.</h1>
}
// 2b. Below the GrinchMusic function component, use the ReactDOM Render method again to render/display the GrinchMusic function component in the div with the id of "root" in the HTML file (NOTE: Since only one React component can be rendered/displayed in an HTML element, the message from the GrinchXmas component will be replaced by the message in the GrinchMusic component. You can comment out the first ReactDOM Render method if you would like, but it is not necessary)
ReactDOM.render(
    <GrinchMusic />,
    document.getElementById(`root`)
);
// 3a. Create another function component using an arrow function expression called GrinchIdiot that returns the following text inside of two separate h2 elements. First h2 element text: "I'm an idiot!". Second h2 element text: "You're an idiot!". (HINT: Remember only one parent/top element can be returned from a component)

const GrinchIdiot = () => {
    return (<div>
        <h2>I'm an idiot!</h2>
        <h2>You're an idiot!</h2>
    </div>);
}
// 3b. Below the GrinchIdiot function component, use the ReactDOM Render method again to render/display the GrinchIdiot function component in the div with the id of "root" in the HTML file
ReactDOM.render(
    <GrinchIdiot />,
    document.getElementById(`root`)
);
// 4a. Create another function component using an arrow function expression called GrinchSchedule that returns the following text inside of 6 separate unordered list item elements as well as the final text inside of a paragraph tag (NOTE: Remember you can use the emmet autocomplete to type out/create elements faster than typing them all out)…
// First list item element text: "4:00, wallow in self-pity."
// Second list item element text: "4:30, stare into the abyss."
// Third list item element text: "5:00, solve world hunger, tell no one."
// Fourth list item element text: "5:30, jazzercize."
// Fifth list item element text: "6:30, dinner with me. I can't cancel that again."
// Sixth list item element text: "7:00, wrestle with my self-loathing."
// Paragraph element text: "I'm booked. Of course, if I bump the loathing to 9, I could still be done in time to lay in bed, stare at the ceiling and slip slowly into madness."
const GrinchSchedule = () => {
    return (<div>
        <ul>
            <li>4:00, wallow in self-pity.</li>
            <li>4:30, stare into the abyss.</li>
            <li>5:00, solve world hunger, tell no one.</li>
            <li>5:30, jazzercize.</li>
            <li>6:30, dinner with me. I can't cancel that again.</li>
            <li>7:00, wrestle with my self-loathing.</li>
        </ul>
        <p>I'm booked. Of course, if I bump the loathing to 9, I could still be done in time to lay in bed, stare at the ceiling and slip slowly into madness.</p>
    </div>);
}
// 4b. Below the GrinchSchedule function component, use the ReactDOM Render method again to render/display the GrinchSchedule function component in the div with the id of "root" in the HTML file
ReactDOM.render(
    <GrinchSchedule />,
    document.getElementById(`root`)
    );
    // 5a. Create a function component using an arrow function expression called GrinchPoster that returns an img (Image) element using the following image: https://img01.mgo-images.com/image/thumbnail/v2/content/1MV1ca3f097dd209568db5d4a36e429dbda.jpeg (HINT: Remember this is a special way/syntax for writing self closing elements/tags in JSX)
    const GrinchPoster=()=>{
    return <img src="https://img01.mgo-images.com/image/thumbnail/v2/content/1MV1ca3f097dd209568db5d4a36e429dbda.jpeg" alt="Grinch Poster"/>;
}
// 5b. Below the GrinchPoster function component, use the ReactDOM Render method again to render/display the GrinchPoster function component in the div with the id of "root" in the HTML file
ReactDOM.render(
    <GrinchPoster/>,
    document.getElementById(`root`)
);
// 6a. Below the ReactDOM Render method, create another function component using an arrow function expression called GrinchVmail.
const GrinchVmail=()=>{
    // 6b. Inside the function component create a const variable called "u" and set the value to the following string: "YOU".
    const u = "YOU";
    // 6c. Below the "u" variable, use the return keyword and parentheses so the function component returns the following text inside of an h1 element as well as an h3 element. However, you need to plug in the "u" variable for each place there is a "YOU" (NOTE: The "you'd" is not included in this since it is not capitalized).
    // h1 element text: "IF YOU UTTER SO MUCH AS ONE SYLLABLE, I'LL HUNT YOU DOWN AND GUT YOU LIKE A FISH!"
    // h3 element text: "If you'd like to fax me, press the star key."
    return (<div>
        <h1>IF {u} UTTER SO MUCH AS ONE SYLLABLE, I'LL HUNT {u} DOWN AND GUT {u} LIKE A FISH!</h1>
        <h3>If you'd like to fax me, press the star key.</h3>
    </div>);
}
    // 6d. Below the GrinchVmail function component, use the ReactDOM Render method again to render/display the GrinchVmail function component in the div with the id of "root" in the HTML file
ReactDOM.render(
    <GrinchVmail/>,
    document.getElementById(`root`)
);
// 7a. Below the ReactDOM Render method, create another function component using an arrow function expression called GrinchAll that returns all of the function components that have been created so far in this exercise
const GrinchAll=()=>{
    return (
        <div>
            <GrinchXmas/>,
            <GrinchMusic/>,
            <GrinchIdiot/>,
            <GrinchSchedule/>,
            <GrinchPoster/>,
            <GrinchVmail/>
        </div>
    );
}
// 7b. Below the GrinchAll function component, use the ReactDOM Render method again to render/display the GrinchAll function component in the div with the id of "root" in the HTML file
ReactDOM.render(<GrinchAll/>, document.getElementById(`root`));
// BONUS
// 8a. Below the ReactDOM Render method, create another function component using an arrow function expression called DiceRoll.
const DiceRoll=()=>{
    // 8b. Inside the function component use Math.random to return a random number between 1 and 6 and set it to const variable called "die1"
    const die1=Math.floor(6*Math.random())+1;
    // 8c. Below the die1 variable, use Math.random again to return a random number between 1 and 6 and set it to const variable called "die2"
    const die2=Math.floor(6*Math.random())+1;
    // 8d. Below the die2 variable, have the DiceRoll function component return an h1 element. Inside the h1 element use a TERNARY that…
    // Sets the text for the h1 to "SNAKE EYES" if both die1 and die2 are equal to 1 
    // Or
    // If either die1 or die2 is NOT equal to 1 sets the text for the h1 to the values for each die like shown in this example: 2 & 5.
    return (<h1>{(die1==1&&die2==1)?`SNAKE EYES`:`${die1} & ${die2}`}</h1>);
}
// 8e. Below the DiceRoll function component, use the ReactDOM Render method again to render/display the DiceRoll function component in the div with the id of "root" in the HTML file
ReactDOM.render(<DiceRoll/>, document.getElementById(`root`));