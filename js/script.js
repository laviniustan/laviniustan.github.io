// let skill1= document.querySelector(".skill__info--1")
// let skill2= document.querySelector(".skill__info--2")
let skills =document.querySelectorAll(".txt");
// let titleskill1 =document.querySelector(".skill1");
// let titleskill2 =document.querySelector(".skill2")

//  titleskill1.addEventListener('click', display)
// // titleskill1.addEventListener('toggle', display)
// titleskill2.addEventListener('click', display)
let show= document.querySelectorAll('.skill')
skills.forEach(element => {
        element.addEventListener('click', display)
});

var toggleVisible = function(item){
   
show.forEach(elem=>{
    if(elem.style.display==='block'){
      return  elem.style.display='none'
    }
})
    if (item.style.display === 'none'){
        return item.style.display = 'block';
        // console.log(!item)
    }else{
        return item.style.display = 'none';
    }
};



// console.log(show)

function display (e){
    
    let elem=e.target.id
    // console.log(elem)
    let item= document.querySelector(`[data-id="${e.target.id}"]`);
    // item.style.display="block"
    // item.toggleAttribute('hidden');
    // console.log(item.style.display)
    // if (item.style.display=="none"){
    //     item.style.display="block"
    // }
    // if(item.style.display==hidden){
    //     item.style.display="none"
    // }
    // console.log(item)
    toggleVisible(item)
    
}

// ================================


let skillPerc= document.querySelectorAll('.percent')

   let markup= `<span class="da_dot"></span>`
    let markup2=`<span class="da_dot--grey"></span>`
    let j=0;
   
    let div=document.createElement('div')
    div.className+='da'
    // console.log(div)
skillPerc.forEach(element=>{

    
 
    // let dotElem= document.querySelector('.da_dot');
    // console.log(dot)
    console.log( )
    let text=element.textContent


let markup3=`<br>`


let percent=text.split('')
let arr=[]

percent.forEach(e=>arr.push(parseInt(e,10)))
let dot=document.querySelector(`.da${j}`);  
let dim=arr.length
// console.log(arr)
// console.log(dim)
for(let i=0; i<10;i++){
   
        if(i<arr[0]){
                // div..insertAdjacentHTML('beforeend')
                dot.insertAdjacentHTML('beforeend', markup);
        }else{
            dot.insertAdjacentHTML('beforeend', markup2);
        }
    
   
   
    if(i==9){
        j++;
    }
}
// dot.insertAdjacentHTML('beforeend', markup3);

})

// ===================
// firebase
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");
// var firebaseConfig = {
//     apiKey: "AIzaSyDPEaAEfzpTfG5y1kQGZzwRiBRCoIQe0VM",
//     authDomain: "contact-form-website-61649.firebaseapp.com",
//     databaseURL: "https://contact-form-website-61649.firebaseio.com",
//     projectId: "contact-form-website-61649",
//     storageBucket: "contact-form-website-61649.appspot.com",
//     messagingSenderId: "477338379489",
//     appId: "1:477338379489:web:456632581d999cf55683a0",
//     measurementId: "G-Q3DK91JG6T"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// //   firebase.analytics();
//     // initFirebase

//     // firebase.initializeApp(firebaseConfig);

// var firestore = firebase.firestore()

// const submit=document.querySelector("#submit");
// // console.log(submit)
// const name=document.querySelector('#name')
// const mail=document.querySelector('#email')
// const subject=document.querySelector('#subject')
// const text=document.querySelector('#textForum')

// const db=firestore.collection("contactData");
// console.log(name)
// submit.addEventListener('click', ()=>{
//        let userName=name.value
//        let email=mail.value
//        let sumj=subject.value
//        let txt=text.value
//        console.log(userName)

//     //    access db
//     db.doc().set({
//         name:userName,
//         mail:email,
//         subject:sumj,
//         message:txt
//     }).then(()=>{
//         console.log("Data saved")
//     }).catch((error)=>console.log(error))
// })