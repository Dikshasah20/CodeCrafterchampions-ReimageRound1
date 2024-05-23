{//loader Spiner <By chaitanyaSharma>
            const spinnerOverlay=document.createElement('div')   //spinner overlay create
            spinnerOverlay.classList.add('spinner-wrapper')     //spinner overlay class
            document.body.insertAdjacentElement("afterbegin", spinnerOverlay) // inert overlay after the body tag
        // _____________________________________________________________________________________________________________________________________________________________________

            const spinnerBox=document.createElement('div')    //spinner Box create
            spinnerBox.classList.add('spinner-border','text-light')       //spinner Box class
            spinnerBox.setAttribute('role','status')         //spinner Box role attribute
            spinnerOverlay.appendChild(spinnerBox)         // inert spinner box after the overlay tag


            //the loder will invesible after 1 sec
            
        window.addEventListener('load',()=>{

                setTimeout(()=>{
                    document.querySelector('.spinner-wrapper').style.opacity='0'
                    this.setTimeout(function(event){
                            document.querySelector('.spinner-wrapper').style.display='none'
                        },500)
                },1000)
            


        })
}//end the loader section


//add the video pause event
const homeVideo=document.getElementById('landingPageVideo')
console.log(homeVideo)
const pauseButton=document.getElementById('pausvideo')
console.log(pauseButton)

pauseButton.addEventListener("click", ()=> {
    if (homeVideo.paused) {
        homeVideo.play(); // If the video is paused, play it
    } else {
        homeVideo.pause(); // If the video is playing, pause it
    }
});

// gsap animation

gsap.from("#landingPageVideo",{
    opacity:0,
    delay:1,
    duration:1

})

gsap.from("#navBar",{
    y:-30,
    delay:1,
    duration:1,
    opacity:0
})

const tl=gsap.timeline()
tl.from("#ruleTheWorld",{
    y:30,
    delay:1,
    duration:1,
    opacity:0
})
gsap.from("#subHeading1,#subHeading2",{
    x:-30,
    delay:1,
    duration:1,
    opacity:0

}) 
gsap.from("#subHeading3,#subHeading4",{
    x:-30,
    delay:1,
    duration:1,
    opacity:0

}) 
gsap.from("#footer",{
    y:30,
    delay:1,
    duration:1,
    opacity:0

})

gsap.from("#scrollToExplore",{
    x:30,
    delay:1,
    duration:1,
    opacity:0
    
})
gsap.from("#pausvideo",{
    x:-30,
    delay:1,
    duration:1,
    opacity:0

})
