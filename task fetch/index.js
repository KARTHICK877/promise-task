

var container=document.createElement("div")
container.className="container"

var col=document.createElement("div")
col.className="col-sm-12"

var heading=document.createElement("h1")
heading.innerHTML="emoji name"
document.body.append(heading)

var input = document.createElement("input");
input.setAttribute("type", "number");
input.setAttribute("id", "number");
input.setAttribute("placeholder","Search any Number for random emoji namev get...")

var button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary");
button.innerHTML = "Search";
button.addEventListener("click", foo);

let active = document.createElement("div");
active.setAttribute("id", "active");

container.append(col)
col.append(heading,input,button,active)
document.body.append(container)


async function foo(){
try {
    var res=document.getElementById("number").value
    console.log(res)
    let url=`https://emojihub.yurace.pro/api/random/?number=${res}`
    let res1 = await fetch(url);
    let res2 = await res1.json();
    active.innerHTML=`"👇 HERE IS YOUR emoji name 👇"<br>emoji name!!=${res2.name}<br>category effect=
    ${res2.category} <br> group of emoji=${res2.group}`
} catch (error) {
    console.log(error)
}

}
alert("use only number number")