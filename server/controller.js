const quoteDatabase = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Fortune says: You will not die alone, but the people you die with will be absolute strangers.", "Fortune says: Favor the bold.", "Fortune says: Your winning numbers are 420, 1337, and 0", "Fortune says: Man who runs behind a car gets exhausted.", "Fortune says: Billy, your wife is cheating on you."]

        let randIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randIndex];

        res.status(200).send(randomFortune);
    },

    postQuote: (req, res) => {
        quoteDatabase.push(req.body.quote)
        res.status(200).send(quoteDatabase);
    },

    deleteQuotes: (req, res) => {
        quoteDatabase.splice(0, 1);
        res.status(200).send(quoteDatabase);
    }
}
