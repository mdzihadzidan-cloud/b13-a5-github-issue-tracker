// মেইন সেকশন
// মেইন সেকশন

let Allissus = []

const CardContainer = document.getElementById("CardContainer");
const Issues50= document.getElementById("Issues50");
const loding = document.getElementById("loding");

function showLoding (){
  loding.classList.remove("hidden")
  CardContainer.innerHTML = "";
}

function hidingLoding (){
  loding.classList.add("hidden");
}


async function loadCard(){
  
      showLoding ()
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json();
    hidingLoding ()
    Allissus= data.data;
    displayCard(Allissus)
}



function displayCard(Card){
    CardContainer.innerHTML = "";
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

                cards.addEventListener("click", function() {
                opentreedetailsmodal(SingleCard.id);
                  });

                // ওপেন ক্লোজ এর উপরে বোয়াডার এর কালার দেওয়া

             if(SingleCard.status === "open"){
            cards.classList.add("border-t-4", "border-indigo-600")
             }else{
            cards.classList.add("border-t-4", "border-pink-400")
             }

            //  মডাল 
            // SingleCard.addEventListener("click",function(){
            //     console.log("Hello ZIHAD")
            // })

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


// মডাল
// মডাল

const treedetailsmodal = document.getElementById("tree-details-modal")

function opentreedetailsmodal(id){
    ModalCard(id)
    treedetailsmodal.showModal();
}


// মডাল এর API এর ফাংশন

async function ModalCard(id){
    //  showLoding ()
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    const data = await res.json();
    // hidingLoding ()

    const issue = data.data;

    displayModalCard(issue)
}






function displayModalCard(issue){

    const modalBox = document.querySelector("#tree-details-modal .modal-box")

    modalBox.innerHTML = `
    <h1 class="text-[#1F2937] text-[24px] font-bold mb-4">${issue.title}</h1>
    
    <div class="flex gap-2 mb-4">
      <p class="bg-[#00A96E] w-[56px] h-[24px] text-[12px] text-white text-center rounded-full flex items-center justify-center">
      ${issue.status}
      </p>

      <p class="text-[12px] text-[#64748B]">
      Opened by ${issue.author} • ${issue.createdAt}
      </p>
    </div>
    
    <p class="text-[16px] text-[#64748B] mb-6">
    ${issue.description}
    </p>
    
    <div class="bg-[#F8FAFC] p-4 rounded-md flex justify-between mb-6">

      <div>
        <p class="text-[16px] text-[#64748B]">Assignee:</p>
        <p class="text-[16px] font-semibold text-[#1F2937]">
        ${issue.assignee || "Not assigned"}
        </p>
      </div>

      <div>
        <p class="text-[16px] text-[#64748B]">Priority:</p>
        <p class="bg-red-500 text-white px-2 rounded">
        ${issue.priority}
        </p>
      </div>

    </div>
    
    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-primary">Close</button>
      </form>
    </div>
    `
}



// সার্চ বার
// সার্চ বার
// সার্চ বার




// const NewIssuebtn = document.getElementById("NewIssuebtn").addEventListener("click",function(){

              
// })

// const Search= document.getElementById("Search");

// async function SearchNewIssuebtn(){

//     const searchText = document.getElementById("Search").value;
//     const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`)
//     const data = await res.json();   

//     const issue = data.data;
//     console.log(issue)

//     // SearchNewIssuebtn()
// }




// সার্চ বার
// সার্চ বার

const Search = document.getElementById("Search");


Search.addEventListener("keyup", function () {
  SearchIssue();
});


async function SearchIssue() {
   showLoding ()

  const searchText = Search.value;


  if (searchText === "") {
    displayCard(Allissus);
    Issues50.innerText = Allissus.length + " Issues";
    return;
  }

  try {

    const res = await fetch(
      `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`
    );

    const data = await res.json();

    const issues = data.data;

  
    displayCard(issues);

    Issues50.innerText = issues.length + " Issues";

  } catch (error) {

    console.log("Search error:", error);

  }
hidingLoding ()
}




































// মডাল
// মডাল


// async function ModalCard(){
//     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}")
//     const data = await res.json();
//     // Allissus= data.data;
//     // displayCard(Allissus)
//     console.log(data)
//     displayModalCard(data)
// }

// function displayModalCard(modal){
//     console.log(modal);
//     modal.forEach(ModalCard => {
//         console.log(ModalCard)
//         const cards = document.createElement("div")
//         // cards.className = " bg-base-100 shadow-sm p-1 gap-3 w-[256px] h-[253px] p-3 space-y-4 "
//         cards.innerHTML=`<div class=" w-[700px]  bg-white p-12 rounded-md space-y-3">
//     <h1 class="text-[#1F2937] text-[24px] font-bold">Fix broken image uploads</h1>
//     <div class="flex gap-2">
//         <p class="bg-[#00A96E] border-red-500 text-[#EF4444] w-[56px] h-[24px] text-[12px] text-[#FFFFFF] text-center rounded-full flex items-center justify-center gap-1">Opened</p>
//         <p class="text-[12px] text-[#64748B]"> <span > . </span> Opened by Fahim Ahmed <span> . </span> 22/02/2026 </p>
//     </div>
//       <div class="flex mt-2 space-x-1">
//                          <p class="bg-red-100 border-red-500 text-[#EF4444] w-[56px] h-[24px] text-[12px] text-center rounded-full flex items-center justify-center gap-1"><span class="w-[12px] h-[12px] flex justify-center items-center"><img src="./assets/BugDroid.png" alt=""></span><span>BUG</span></p>
//                          <p class="bg-[#fde68a67] border-red-500 text-[#D97706] w-[112px] h-[24px] text-[12px] text-center rounded-full flex items-center justify-center gap-1 "><span><img src="./assets/Vector.png" alt=""></span><span>HELP WANTED</span></p>
//                     </div>
//                     <p class="text-[16px] text-[#64748B]">The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.</p>

//                     <!-- শেষ ডিব -->
//                     <div class="bg-[#F8FAFC] p-4 rounded-md flex justify-start gap-32">
//                         <div class="space-y-1">
//                             <p class="text-[16px] text-[#64748B] ">Assignee:</p>
//                             <p class="text-[16px] font-semibold text-[#1F2937]">Fahim Ahmed</p>
//                         </div>
//                         <div class="space-y-1">
//                             <p class="text-[16px] text-[#64748B] ">Priority:</p>
//                              <p class="bg-[#EF4444] border-red-500 text-[#EF4444] w-[56px] h-[24px] text-[12px] text-[#FFFFFF] text-center rounded-full flex items-center justify-center gap-1">HIGH</p>
                            
//                         </div>

//                     </div>

    

    
//         <!-- if there is a button in form, it will close the modal -->
//          <br>
//        <div class="flex justify-end">
//         <button class="btn btn-primary ">Closd</button>
//        </div>
//       <!-- </form> -->
//     </div> `

                // ওপেন ক্লোজ এর উপরে বোয়াডার এর কালার দেওয়া

    //          if(SingleCard.status === "open"){
    //         cards.classList.add("border-t-4", "border-indigo-600")
    //          }else{
    //         cards.classList.add("border-t-4", "border-pink-400")
    //          }

    //         //  মডাল 
    //         // SingleCard.addEventListener("click",function(){
    //         //     console.log("Hello ZIHAD")
    //         // })

    // CardContainer.appendChild(cards);
//     })
// }