//This is for Website.html

let keyword = "youtube";

let linkList = Array.from(document.links);

Array.from(linkList).forEach((element)=>{if(element.href.includes(keyword)){
  console.log(element.href);
}else{console.log(false)}})

// for(let i = 0; i<linkList.length; i++){
//   if(linkList[i].href.includes(keyword)){
//     console.log(linkList[i].href);
//   }else{
//       console.log(false)
//   }
// }