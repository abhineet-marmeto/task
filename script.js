document.addEventListener('DOMContentLoaded', function () {
   const sectionData = {
      section: {
         showArrows: false, // Disable default arrows
         showPageDots: true,
      },
      slideData: [
         {
            title: "Modern Elegance",
            Description: "Step into the World of Style with the Latest Fashion Trends Unveiled!",
            image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/3.png?v=1705665898&width=2000",
            buttonLabel: "Click me",
            buttonLink: "#",
            style: {
               textAlignment: "center",
               contentPosition: "bottom-left"
            },
         },
         {
            title: "Women's Apparel",
            Description: "Elevate your wardrobe with our limited-time fashion offer!",
            image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/4.png?v=1705665890&width=2000",
            buttonLabel: "Click me",
            buttonLink: "#",
            style: {
               textAlignment: "left",
               contentPosition: "bottom-left"
            },
         },
         {
            title: "Trendy Classics",
            Description: "Discover Signature Look: Fashion Forward and Fabulous!",
            image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/1.png?v=1705665890&width=2000",
            buttonLabel: "Click me",
            buttonLink: "#",
            style: {
               textAlignment: "right",
               contentPosition: "middle-center"
            },
         }
      ]
   };

   // Generate slides dynamically
   const splideList = document.querySelector('.splide__list');

   sectionData.slideData.forEach(slide => {
      const li = document.createElement('li');
      li.className = `splide__slide ${slide.style.contentPosition}`;
      li.style.backgroundImage = `url(${slide.image})`;

      const contentDiv = document.createElement('div');
      contentDiv.className = `slide-content `;
      contentDiv.style.textAlign = slide.style.textAlignment;

      contentDiv.innerHTML = `
           <p id="title"><span></span>${slide.title}</p>
           <p id="description">${slide.Description}</p>
           <a href="${slide.buttonLink}" class="button">${slide.buttonLabel}</a>
       `;

      li.appendChild(contentDiv);
      splideList.appendChild(li);
   });

   // Initialize Splide carousel with custom settings
   const splide = new Splide('#carousel', {
      type: 'loop',
      perPage: 1,
      arrows: false, // Disable the default arrows
      pagination: sectionData.section.showPageDots,
      autoplay: true,
   });

   splide.mount();

   // Handle dropdown change event
   document.getElementById('position-select').addEventListener('change', function (e) {
      const selectedClass = e.target.value;

      document.querySelectorAll('.splide__slide').forEach(div => {

         div.className = `splide__slide ${selectedClass}`;
      });
   });

   // Add event listeners for custom arrows
   document.querySelector('.splide__arrow--prev').addEventListener('click', () => {
      splide.go('<');
   });

   document.querySelector('.splide__arrow--next').addEventListener('click', () => {
      splide.go('>');
   });
});
