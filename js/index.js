// Your code goes here

const logo = document.querySelector('.logo-heading')
logo.addEventListener('mouseover', () => {
    logo.style.color = 'green'
})

const body = document.querySelector('body')
document.addEventListener('keydown', (event) => {
    if (event.key === 'l') {
        body.style = 'background-color: blue'
    } else {
        body.style = 'background-color: white'
    }
})

const img = document.querySelector('img')
img.addEventListener('wheel', () => {
    img.style.opacity = '.15'
})

img.addEventListener('load', () => {
    logo.style.backgroundColor = "pink"
})

const nav = document.querySelector('nav')
nav.addEventListener('click', (event) => {
    event.target.style = 'background-color:coral'; 
})
const button1 = document.querySelector('.nav-link')
button1.setAttribute('href', "/index.html")
button1.addEventListener('click', (event) => {
    event.preventDefault()
    // prevent the background color from turning coral
    event.stopPropagation()
    event.target.style = 'color: blue'; 
})

window.addEventListener('resize', () => {
    img.style.opacity = 1;
})


document.addEventListener('scroll', () => {
    body.style.color = 'pink'
})

const aboutUs = button1.nextElementSibling
console.log(aboutUs)
aboutUs.addEventListener('dblclick', () =>{
    event.target.style = "color: green"
})

const blog = aboutUs.nextElementSibling
blog.addEventListener('copy', () => {
    console.log("hi")
    blog.style = 'background-color: pink; color: red'; 
})

const contact = blog.nextElementSibling
contact.addEventListener('mouseleave', () => {
    console.log("hi")
    contact.style = 'background-color: red; color: pink'; 
})