const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");



const emoji = [];

async function getEmoji() {
    let response = await
        fetch("https://emoji-api.com/emojis?access_key=f45d70bfa40f31a3ff4c11f7f0139d00bd0a5d9e");
    data = await response.json();

    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,

        });

    }
}
getEmoji();

console.log(emoji);

btnEl.addEventListener("click", () => {
    const randomNumber = Math.floor
        (Math.random() * emoji.length);
     
    btnEl.innerText = emoji[randomNumber].emojiName;
    emojiNameEl.innerHTML = emoji[randomNumber].emojiCode;

})