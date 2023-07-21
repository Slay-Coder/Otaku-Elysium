const quote=document.getElementById("quote");
const character=document.getElementById("character");
const anime=document.getElementById("anime");
const api_url="https://animechan.xyz/api/random"
async function getquote(url){
    const response=await fetch(url);
    var data = await response.json();
    quote.innerHTML=data.quote;
    character.innerHTML="Character:    "+data.character;
    anime.innerHTML="Anime:    "+data.anime;
}
getquote(api_url);  