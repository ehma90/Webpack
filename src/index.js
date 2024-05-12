import generateJokes from "./generateJoke";
import './styles/main.scss'
import laughImgs from './assets/laughing.jpeg'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughImgs

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJokes)

generateJokes()