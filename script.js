
function applyScrollDirection() {
    const container = document.querySelector('.container');
    const pages = document.querySelectorAll('.page');
  const numPages = pages.length;
  document.documentElement.style.setProperty('--num-pages', numPages);
    if (window.innerWidth >= 1200) {
      container.style.flexDirection = 'row';
      container.style.width = `${100 * numPages}%`;
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.scrollSnapType = 'none';
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".page", {
        xPercent: -100 * (document.querySelectorAll(".page").length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector(".container").offsetWidth
        }
      });
    } else {
        
      container.style.flexDirection = 'column';
      container.style.width = '100%';
      container.style.height = `${100 * numPages}%`;
      container.style.scrollSnapType = 'y mandatory';
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }
  window.addEventListener('resize', applyScrollDirection);

applyScrollDirection();
// gsap.from('#page1',{
//     x:100,duration:2,delay:2
// })
  