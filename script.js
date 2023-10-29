let movies = [{
        name: "URI",
        des: "Uri: The Surgical Strike is a significant film in the context of Indian cinema and is often regarded as a tribute to the Indian armed forces. It is known for its high-octane action sequences and its portrayal of the complexities of military operations",
        image: "Images/slide1.jpg"
    },
    {
        name: "The Departed",
        des: "The Departed is celebrated for its intense, suspenseful storytelling and is often regarded as a modern classic in the crime thriller genre. It's known for its intricate plot, memorable characters, and the tension that builds throughout the film, making it a must-watch for fans of crime cinema",
        image: "Images/slide2.jpg"
    },
    {
        name: "1917",
        des: "1917 is a visually striking and emotionally resonant war film that immerses viewers in the harrowing realities of trench warfare during World War I. Its unique cinematography and storytelling approach set it apart as a remarkable cinematic achievement",
        image: "Images/slide3.jpg"
    },
    {
        name: "The Napolean",
        des: "A look at the military commander's origins and his swift, ruthless climb to emperor, viewed through the prism of his addictive and often volatile relationship with his wife and one true love, Josephine",
        image: "Images/slide4.jpg"
    },
    {
        name: "Jumanji",
        des: "Jumanji: The Next Level is a 2019 American fantasy adventure comedy film directed by Jake Kasdan. It's the sequel to the 2017 film Jumanji: Welcome to the Jungle and the third installment in the Jumanji film franchise",
        image: "Images/slide5.jpg"
    }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
};

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);


const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});


let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth - 200;
    });

    preBtns[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + 200;
    });
});