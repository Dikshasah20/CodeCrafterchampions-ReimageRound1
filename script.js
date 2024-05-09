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
                },10)
            


        })
}//end the loader section
    