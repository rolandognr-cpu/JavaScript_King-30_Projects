const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const userNameEl = document.querySelector(".username")


const testimonials = [
    {
        photoUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
        text: "I am beyond impressed with the reliable and high-speed internet service provided by USInternet. From streaming movies to video calls, their service never disappoints. I highly recommend USInternet for anyone looking for top-notch internet connectivity.",
        name: "James S"
    },
    {
        photoUrl: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHwyfDB8fHww",
        text: "USInternet provides exceptional internet service that is fast, reliable, and affordable. I have been a loyal customer for years and have never been disappointed with their service. Keep up the great work!",
        name: " Emily Rodriguez"
    },
    {
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
        text: "I am extremely satisfied with the fast and reliable internet service provided by USInternet. Their customer service is top-notch and the connection is always stable. I highly recommend USInternet to anyone looking for a seamless online experience.",
        name: "Nicolas Horn"
    }
]

let idx = 0

function updateTestimonial() {
    
    const {photoUrl, text, name} = testimonials[idx]

    imgEl.src = photoUrl
    textEl.textContent = text
    userNameEl.textContent = name
    idx++

    if (idx === testimonials.length) {
        idx = 0
    }

    setTimeout(()=>{
        console.log(idx)
        updateTestimonial()
    }, 5000)

}

updateTestimonial()