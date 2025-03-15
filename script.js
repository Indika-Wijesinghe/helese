const testimonials = [
  {
    name: "Alice Johnson",
    country: "United States",
    testimonial:
      "Absolutely amazing experience! The itinerary was well-planned, and the guides were incredibly knowledgeable.",
    image: "/images/testimonials/alice-johnson.jpg",
  },
  {
    name: "Carlos Rivera",
    country: "Spain",
    testimonial:
      "This was the best trip of my life! Everything was smooth and perfectly arranged. Highly recommended!",
    image: "/images/testimonials/carlos-rivera.jpg",
  },
  {
    name: "Priya Sharma",
    country: "India",
    testimonial:
      "A truly unforgettable journey! The food, culture, and scenic beauty were beyond words.",
    image: "/images/testimonials/priya-sharma.jpg",
  },
  {
    name: "William Anderson",
    country: "Canada",
    testimonial:
      "I had a fantastic time! The customer service was excellent, and the travel experience was seamless.",
    image: "/images/testimonials/william-anderson.jpg",
  },
  {
    name: "Sophie Müller",
    country: "Germany",
    testimonial:
      "Loved every bit of the adventure! The accommodations were top-notch, and the local experiences were authentic.",
    image: "/images/testimonials/sophie-muller.jpg",
  },
  {
    name: "Luca Bianchi",
    country: "Italy",
    testimonial:
      "The perfect travel experience! I discovered hidden gems and met wonderful people along the way.",
    image: "/images/testimonials/luca-bianchi.jpg",
  },
  {
    name: "Aiko Tanaka",
    country: "Japan",
    testimonial:
      "Everything was well-organized, and I felt completely at ease throughout my journey. Amazing trip!",
    image: "/images/testimonials/aiko-tanaka.jpg",
  },
  {
    name: "Omar El-Sayed",
    country: "Egypt",
    testimonial:
      "Breathtaking landscapes and warm hospitality! I can’t wait for my next adventure with this company.",
    image: "/images/testimonials/omar-el-sayed.jpg",
  },
];

let isAnimating = false;
let currentScroll = 0;
const scrollAmount = 390;
let currentItem = 0;

function displayTestimonials(testimonials) {
  const testimonialDiv = document.getElementById("testimonial-container");

  testimonials.forEach((testimonial) => {
    const div = document.createElement("div");

    div.classList.add(
      "testimonial",
      "testimonial-card",
      "px-4",
      "py-3",
      "bg-white",
      "rounded-lg"
    );

    div.innerHTML = `
    
    <img src="public/icons/quotes-fill.svg" class="mx-auto"> 
    <p class="testimonial-text mt-5">${testimonial.testimonial}</p>
    <div class="flex items-center justify-start gap-2 mt-5">
    <h3>${testimonial.name}</h3> |
    <p class="country">${testimonial.country}</p>
    </div>
    `;
    testimonialDiv.appendChild(div);
  });
}

displayTestimonials(testimonials);

const testimonialScroll = (direction = "right") => {
  if (isAnimating) return; // Prevent multiple clicks during animation
  isAnimating = true; // Lock further clicks

  const testimonialsContainer = document.getElementById(
    "testimonial-container"
  );
  const style = window.getComputedStyle(testimonialsContainer);
  const matrix = new DOMMatrix(style.transform);
  let currentScroll = matrix.m41 || 0; // Ensure currentScroll is always a number

  const testimonialLength = testimonials.length;
  const right = document.getElementById("right");
  const left = document.getElementById("left");

  if (typeof currentItem === "undefined") {
    currentItem = 0;
  }

  // Calculate new position
  if (direction === "right") {
    currentItem = Math.min(currentItem + 1, testimonialLength - 1);
    currentScroll -= scrollAmount;
  } else {
    currentItem = Math.max(currentItem - 1, 0);
    currentScroll += scrollAmount;
  }

  right.disabled = currentItem === testimonialLength - 1;
  left.disabled = currentItem === 0;

  testimonialsContainer.style.transform = `translateX(${currentScroll}px)`;
  testimonialsContainer.style.transition = "transform 0.5s ease-in-out";

  // Unlock clicks after animation completes
  testimonialsContainer.addEventListener(
    "transitionend",
    () => {
      isAnimating = false;
    },
    { once: true }
  );
};

const gallery = document.getElementById("gallery");

Array.from({ length: 23 }, (_, i) => i).map((index) => {
  const img = document.createElement("img");

  img.classList.add("h-auto", "max-w-full", "rounded-lg");
  img.src = `public/gallery/gallery-${index + 1}.jpg`;
  img.alt = `Gallery image ${index}`;

  gallery.appendChild(img);

  gallery.appendChild(img);
});
