const quotes = [
    {
        quote: "I’ve done a lot of work to get where I’m at, but I have to keep working.",
        author: "Wiz Khalifa",
    }, {
        quote: "Live your life, live it right. Be different, do different things.",
        author: "Kendrick Lamar",
    }, {
        quote: "Never assume you know what’s going on in someone’s life unless you heard it straight from the source.",
        author: "Chris Brown",

    }, {
        quote: "I know what my identity is.",
        author: "Travis Scott",

    }, {
        quote: "You can't buy vision, and you can't buy aesthetic.",
        author: "Travis Scott",

    }, {
        quote: "How many people you bless is how you measure success.",
        author: "Rick Ross",

    }, {
        quote: "Jealousy is just love and hate at the same time.",
        author: "Drake",

    }, {
        quote: "For every dark night, there’s a brighter day.",
        author: "Tupac Shakur",

    }, {
        quote: "Nothing in life is promised except death.",
        author: "Kanye West",

    }, {
        quote: "If it’s in your gut, your soul, there’s nothing, no worldly possession that should come between you and your expression.",
        author: "Kanye West",

    }, {
        quote: "I feel that I'm very blessed. But with great blessings come great responsibility.",
        author: "kanye west",
    }, {
        quote: "We change people through conversation, not through censorship.",
        author: "Jay-Z",
    }
]
const qut = document.querySelector("#quote");
const author = document.querySelector("#author");
const rand = Math.floor(Math.random() * quotes.length);
qut.innerHTML = `${quotes[rand].quote}`;
author.innerHTML = `${quotes[rand].author}`;
