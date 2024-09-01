// const doSomething = ()=>{
//     alert("Doing somethig");
// };
// h2.addEventListener("click",doSomething,false);
// h2.removeEventListener("click",doSomething,false);

// h2.addEventListener("click" , (event)=>{
//     console.log(event.target);
//     event.target.textContent = "Hello"

// });

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState = Completed");
    initApp();
  }
});
let initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener("click", (event) => {
    view.classList.toggle("purple");
    view.classList.toggle("darkblue");
  });
  div.addEventListener("click", (event) => {
    div.classList.toggle("blue");
    div.classList.toggle("black");
  });
  h2.addEventListener("click", (event) => {
    const myText = event.target.textContent;
      myText === "My 2nd View"?event.target.textContent ="Cliked":
      event.target.textContent = "My 2nd View";

  });
  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
  event.target.classList.add("height100");

  });
  nav.addEventListener("mouseout",(event)=>{
    event.target.classList.remove("height100");
  });
};