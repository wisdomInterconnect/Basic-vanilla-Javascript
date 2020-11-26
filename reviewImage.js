//local reviews Data
const reviews = [
    {
        id: 1,
        name: 'Okon Ifiok',
        job: 'Frontend web Developer',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/v1606348517/56213843_448535879021865_7224836943266516642_n_xhzsrb.jpg',
        text: `A front end developer with extensive experience and knowledge which includes corporate I.T training as well as technical roles in programming networking administration. Day to day goals is to inspire eco system and societies to love technology and achieve their goals by providing relevant up to date and innovative problem solving skills
Ability to listen and address society needs in a calm, professional and timely manner. My strong desire is to learn the newest technology and offer solutions to problems by staying current in the hardware and software world.`,
    },
    {
        id: 2,
        name: 'Wisdom interconnect',
        job: 'Software Developer',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1606348660/51786683_1142146915968262_1808372894531584000_n_kcoxrd.jpg',
        text: `Wisdom Interconnect is a professional tech. Company which provide solutions in websites design, Hosting & Domain Registration, Digital marketing services.`,
    },
    {
        id: 3,
        name: 'Okon Friday',
        job: 'Computer Scientist',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1606427800/Okon_ifiok_jtfhtk.jpg',
        text: `A young dynamic and stunning experience with extensive knowledge which includes college teaching and corporate I.T training as well as technical roles in programming networking administration. Day to day goals is to inspire students and societies to love technology and achieve their goals by providing relevant up to date and innovative learning opportunities.`,
    },
      {
        id: 3,
        name: 'Rt.Hon Okon Ifiok',
        job: 'Speaker of Votesa',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1606428029/56553797_317032192323480_5008483250057086522_n_gjeaiy.jpg',
        text: `With high sense of duty and responsibility we the student Representatives council write, under the strangest of circumstance you have become amazing young man. You are thoughtful, smart, full of passion and wealth of ideas. You have made the council a spotlight of change and a height for building future leaders.
We wish you a spirit sung and graceful hapi birthday. Rt. Honorable speaker`,
    },
]
//select images
const img = document.getElementById('person-img');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem)
})

//showPerson
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent= item.text
}
// show next button
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem=0
    }
    showPerson(currentItem)
})
//show prev button
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem= reviews.length-1
    }
    showPerson(currentItem)
})
//show random
randomBtn.addEventListener('click', function () {
    let ranNum=currentItem
    ranNum = Math.floor(Math.random() * reviews.length);
    showPerson(ranNum)
})
// function showRandom(person) 