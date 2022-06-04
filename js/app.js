document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

// Section-11: Clients Review Section
let allClients = document.getElementsByClassName("client");
let title = document.getElementById("title");
let description = document.getElementById("description");
let ClientsReview = [
  {
    title: "It was a great experience",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Provident accusamus adipisci fugit impedit optio dicta ex
    velit laudantium ad, voluptatibus nemo minima, eos eaque autem
    labore vel tempore eveniet consequuntur commodi nobis
    repellat, explicabo ipsum facilis! Illo nisi illum commodi,
    natus nesciunt dolor harum placeat nihil aut temporibus nam
    eveniet hic! Mollitia cumque distinctio, facere assumenda
    sequi sint eveniet, ratione, porro voluptas similique cum
    corporis?`,
    ratings: 3,
  },
  {
    title: "Thanks for this great service",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Iure, necessitatibus facere maxime, consequuntur tempore,
    doloremque modi quod debitis perspiciatis eos omnis harum
    culpa eaque suscipit optio ea dolor nihil corporis. Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Ex
    obcaecati explicabo doloribus deserunt labore recusandae est
    dicta quod, vel nesciunt in nisi aspernatur assumenda deleniti
    molestiae? Vitae inventore eum dolore?`,
    ratings: 3,
  },
  {
    title: "You all are awesome thanks alot",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Aliquam fugit, modi rem corporis velit molestias ut sapiente
    corrupti ipsam ducimus quibusdam animi est, amet voluptatum ex
    dolor eveniet molestiae aut blanditiis debitis! Rerum
    reprehenderit atque neque deleniti illum nostrum dolore
    aliquid veniam, ex commodi beatae error quas accusantium ipsa
    incidunt, veritatis accusamus non animi eos pariatur harum
    vitae?`,
    ratings: 3,
  },
];
allClients[0].style.backgroundColor = "#63b0df";
console.log("Developed By: Shahadat Hossain");

function onChangeClientInfo(pos) {
  for (let i = 0; i < allClients.length; i++) {
    if (pos === i) {
      // allClients[pos].style.backgroundColor = "#119EE6";
      allClients[pos].style.backgroundColor = "#63b0df";
      title.innerHTML = ClientsReview[i].title;
      description.innerHTML = ClientsReview[i].description;
    } else {
      allClients[i].style.backgroundColor = "#fff";
    }
  }
}

for (let i = 0; i < allClients.length; i++) {
  allClients[i].addEventListener("click", () => {
    onChangeClientInfo(i);
  });
}

// Section- Project Part Counter generator
// Selector
const counters = document.querySelectorAll(".counter");
// Main function
for (let n of counters) {
  const updateCount = () => {
    const target = +n.getAttribute("data-target");
    const count = +n.innerText;
    const speed = 5000; // change animation speed here
    const inc = target / speed;
    if (count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  };
  updateCount();
}
// End Section- Project Part Counter generator
 