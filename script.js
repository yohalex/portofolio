let menu = document.querySelector(".btn-menu");
const spans = document.querySelectorAll(".btn-menu>span");
const homepage = document.querySelector('.homepage')
const ruban = document.querySelector('.ruban')
const blocMenu = document.querySelector('#menu')
const blink = document.querySelector('.blink')
const hamburgerStyle = ()=>{
    if(menu.classList.contains('cross')){
        clickCrossButton()
      
    }else{
    
        clickHamburgerButton()
    
    }

}

menu.addEventListener("click", () => {
    hamburgerStyle() ; 
   
});

function clickCrossButton(){
    spans[0].style.display = "block";
    spans[1].style.position = "relative";
    spans[1].style.transform = "rotate(0deg)";
    spans[2].style.transform = "rotate(0deg)";
    spans[2].style.position = "relative";
    menu.classList.remove('cross');
    ruban.style.display="block";
    blocMenu.style.top ="-200%"
}
function clickHamburgerButton(){
    menu.classList.add('cross');
        spans[0].style.display = "none";  
        spans[1].style.transform = "rotate(30deg)";
        spans[2].style.transform = "rotate(-30deg)";
        spans[2].style.position = "absolute";
        ruban.style.display="none";
        blocMenu.style.top = "0"
}

//texte automatique 
const title = document.querySelector('.text-presentation>h3')
const myDescription = document.querySelector('.text-presentation>h3+p>.my-description')
const textOfTitle = "Salut, mon nom est Alex Stephane Yoh ."
const textOfDescription= "Je suis un Développeur d'Application Web ,spécialiste Javascript. N'hésitez pas à jeter un œil à mes derniers projets dans la section projets web ."
const buttonOfShowCv = document.querySelector('.presentation>.text-presentation>button')


const play =()=>{
    let index = 0 
    const timerTitle = setInterval(()=>{
        title.innerText =  textOfTitle.slice(0,index)
        index++ ; 

        if(index >textOfTitle.length){
            clearInterval(timerTitle)
            blink.style.display='inline'
            let index = 0 
            const timerDescription = setInterval(()=>{
                myDescription.innerText = textOfDescription.slice(0,index)
                index++;
                if(index > textOfDescription.length){
                    clearInterval(timerDescription)
                    animButton()
                }
                   
            } ,50) 
        }
    } ,50)
   
}

play()

// show button cv 
function animButton(){
    let index = 0 
    let myInterval = setInterval(()=>{
        index++ 
        switch (index){
            case 1 : 
                buttonOfShowCv.style.transform ='rotate(360deg)'
                buttonOfShowCv.style.top = "0px"
            break ;
        }

    } ,10)
}




const linksNavBar = document.querySelectorAll("#menu>h2")
const linkHome = linksNavBar[0]
const linkProjet = linksNavBar[1]
const linkContact = linksNavBar[2]
const projet = document.querySelector('.project')
const contact = document.querySelector('.contact')

function clickNavBar(linkClicked , blockOfLinkClicked , firstBlockNone ,secondBlockNone){
    linkClicked.addEventListener('click',()=>{
    blockOfLinkClicked.style.display ="flex" ; 
    firstBlockNone.style.display ="none"
    secondBlockNone.style.display ="none";
        clickCrossButton()
    })
}

clickNavBar(linkHome,homepage,contact,projet)
clickNavBar(linkProjet,projet,homepage,contact)
clickNavBar(linkContact,contact,homepage,projet)