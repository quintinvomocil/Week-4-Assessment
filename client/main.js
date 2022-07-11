const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const postBtn = document.getElementById("post-button")
const deleteBtn = document.getElementById("delete-button")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
};

const postQuote = () => {
    const postObj = {
        quote: inspiringQuotes.value
    }
    axios.post('http://localhost:4000/api/post/', postObj)
    .then((res => {
        alert(res.data);
    }))
};

const deleteQuotes = () => {
    axios.delete('http://localhost:4000/api/delete/')
    .then((res => {
        alert(res.data)
    }))
}






complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
postBtn.addEventListener('click', postQuote)
deleteBtn.addEventListener('click', deleteQuotes)
