const continents = ['Africa', 'America', 'Asia', 'Europe', 'Australia'];
const helloContinents = Array.from(continents, c => `Hello ${c}!`);
const message = helloContinents.join(' ');

const element = (
    <div id='Outer div'>
        <h1>{message}</h1>
    </div>
);
ReactDOM.render(element, document.getElementById('contents'));