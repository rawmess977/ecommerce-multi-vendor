import { allNav } from "./allNav.jsx";


export const getNav = (role) =>{
  const finalNav = [];


  for (let i = 0; i < allNav.length; i++) {
     if (role === allNav[i].role ){

       finalNav.push(allNav[i])
     }
    
  }
  console.log("final nav", finalNav)
  return finalNav;
}