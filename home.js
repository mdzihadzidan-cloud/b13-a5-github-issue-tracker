// মেইন সেকশন
// মেইন সেকশন

let Allissus = []

const CardContainer = document.getElementById("CardContainer");
const Issues50= document.getElementById("Issues50");

async function loadCard(){
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json();
    Allissus= data.data;
    displayCard(Allissus)
}


function displayCard(Card){
    console.log(Card);
    Card.forEach(SingleCard => {
        console.log(SingleCard)
        const cards = document.createElement("div")
        cards.className = " bg-base-100 shadow-sm p-1 gap-3 w-[256px] h-[253px] p-3 space-y-4 "
        cards.innerHTML=`<div class="flex justify-between items-center gap-24 ">
                    <img src="./assets/Open-Status.png" alt="">
                    <p class="bg-red-100 border-red-500 text-red-400 w-[80px] h-[24px] text-center rounded-full">${SingleCard.priority
}</p>
                </div>
                <div>
                    <h2 class="text-[#1F2937] line-clamp-1">${SingleCard.title}</h2>
                    <p class="line-clamp-2 text-[12px] text-[#64748B]">${SingleCard.description}</p>
                    
                    <div class="flex mt-2 space-x-1">
                         <p class="bg-red-100 border-red-500 text-[#EF4444] w-[56px] h-[24px] text-[12px] text-center rounded-full flex items-center justify-center gap-1"><span class="w-[12px] h-[12px] flex justify-center items-center"><img src="./assets/BugDroid.png" alt=""></span><span>BUG</span></p>
                         <p class="bg-[#fde68a67] border-red-500 text-[#D97706] w-[112px] h-[24px] text-[12px] text-center rounded-full flex items-center justify-center gap-1 "><span><img src="./assets/Vector.png" alt=""></span><span>HELP WANTED</span></p>
                    </div>
                    <br>
                    <hr class="border-base-300">
                    <div class="mt-3">
                        <p class="text-[#64748B] text-[12px]">${SingleCard.author}</p>
                        <p class="text-[#64748B] text-[12px]">${SingleCard.createdAt}</p>

                    </div>
                </div> `

             if(SingleCard.status === "open"){
            cards.classList.add("border-t-4", "border-indigo-600")
             }else{
            cards.classList.add("border-t-4", "border-pink-400")
             }

    CardContainer.appendChild(cards);
    })
}
loadCard()


// বাটন এর ফাংশন
// বাটন এর ফাংশন
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")


// বাটন1
// বাটন1

btn1.addEventListener("click",function(){
    btn1.classList.remove("btn", "btn-white", "w-[120px]", "h-[40px]")
    btn1.classList.add("btn", "btn-primary", "w-[120px]", "h-[40px]")

   btn2.classList.remove("btn", "btn-primary", "w-[120px]", "h-[40px]")
   btn2.classList.add("btn", "btn-white", "w-[120px]", "h-[40px]")

   btn3.classList.remove("btn", "btn-primary", "w-[120px]", "h-[40px]")
   btn3.classList.add("btn", "btn-white", "w-[120px]", "h-[40px]")


   CardContainer.innerHTML= " ";
    displayCard(Allissus);

    Issues50.innerText = "50 Issues"


})


// বাটন2
// বাটন2

btn2.addEventListener("click",function(){
    btn2.classList.remove("btn", "btn-white", "w-[120px]", "h-[40px]")
    btn2.classList.add("btn", "btn-primary", "w-[120px]", "h-[40px]")

   btn1.classList.remove("btn", "btn-primary", "w-[120px]", "h-[40px]")
   btn1.classList.add("btn", "btn-white", "w-[120px]", "h-[40px]")

   btn3.classList.remove("btn", "btn-primary", "w-[120px]", "h-[40px]")
   btn3.classList.add("btn", "btn-white", "w-[120px]", "h-[40px]")

//    let Allissus=[]

   const openCards = Allissus.filter(item => item.status === "open")

    CardContainer.innerHTML= " ";
  displayCard(openCards);


  Issues50.innerText = "44 Issues"

})

// বাটন3
// বাটন3


btn3.addEventListener("click",function(){
    btn3.classList.remove("btn", "btn-white", "w-[120px]", "h-[40px]")
    btn3.classList.add("btn", "btn-primary", "w-[120px]", "h-[40px]")

    btn1.classList.remove("btn", "btn-primary", "w-[120px]", "h-[40px]")
   btn1.classList.add("btn", "btn-white", "w-[120px]", "h-[40px]")

   btn2.classList.remove("btn", "btn-primary", "w-[120px]", "h-[40px]")
   btn2.classList.add("btn", "btn-white", "w-[120px]", "h-[40px]")


   
   const closeCards = Allissus.filter(item => item.status === "closed")

    CardContainer.innerHTML= " ";
  displayCard(closeCards);

  Issues50.innerText = "6 Issues"
})