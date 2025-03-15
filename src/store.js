import { createStore } from 'redux';

export const fetchQuote = () => ({
    type: 'FETCH_QUOTE'
})

const initialState = {
    quote: "Click the button for quotes",
    author: 'me :)',
    color: "red"
}

const quotessipnets = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "If you tell the truth, you don't have to remember anything",
        author: "Mark Twain"
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M.Baruch"
    },
    {
        quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
        author: "William W.Purkey"
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr.Seuss"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "Be the change that you wish to see in the world",
        author: "Mahatma Gandhi"
    }
]

const colors = [
    "#bebb9a",
    "#73a856",
    "#015551",
    "#FE4F2D",
    "#205781",
    "#27391C",
    "#BE5985",
    "#FFA725",
    "#211C84"
]

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_QUOTE':
            const randomIndex = Math.floor(Math.random() * quotessipnets.length);
            const randomIndex2 = Math.floor(Math.random() * colors.length);
            return  { ...state,
                quote: quotessipnets[randomIndex].quote,
                author: quotessipnets[randomIndex].author,
                color: colors[randomIndex2]
            }
        default:
            return state;
    }
}


const store = createStore(quoteReducer);

export default store;