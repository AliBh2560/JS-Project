//dear programer who is reading this right now when i was writing this part only me and god 
//know how is this shit is working now only god know so dont waste ur time here :)

const BOOKS = [
    {
        id: 1,
        title: "خواجه تاجدار",
        author: "ژان گور",
        published_date: 2007,
        language: "persian",
        genre: "تاریخ",
        imgSrc: "1.jpg"
    },
    {
        id: 2,
        title: "ضیافت",
        author: "افلاطون",
        published_date: 385,
        language: "greek",
        genre: "فلسفه",
        imgSrc: "2.jpg"
    },
    {
        id: 3,
        title: "منطق الطیر",
        author: "عطار",
        published_date: 1177,
        language: "persian",
        genre: "شعر",
        imgSrc: "3.jpg"
    },
    {
        id: 4,
        title: "مثنوی معنوی",
        author: "مولوی",
        published_date: 1258,
        language: "persian",
        genre: "شعر",
        imgSrc: "4.jpg"
    },
    {
        id: 5,
        title: "دیوان حافظ",
        author: "حافظ",
        published_date: 1200,
        language: "persian",
        genre: "شعر",
        imgSrc: "5.jpg"
    },
    {
        id: 6,
        title: "رومیو و جولیت",
        author: "ویلیام شکسپیر",
        published_date: 1595,
        language: "english",
        genre: "عاشقانه",
        imgSrc: "6.jpg"
    },
    {
        id: 7,
        title: "ویس و رامین",
        author: "فخرالدین اسعد گرگانی",
        published_date: 1054,
        language: "persian",
        genre: "عاشقانه",
        imgSrc: "7.jpg"
    },
    {
        id: 8,
        title: "گلستان",
        author: "سعدی",
        published_date: 1258,
        language: "persian",
        genre: "شعر",
        imgSrc: "8.jpg"
    },
    {
        id: 9,
        title: "بوستان",
        author: "سعدی",
        published_date: 1257,
        language: "persian",
        genre: "شعر",
        imgSrc: "9.jpg"
    },
    {
        id: 10,
        title: "گلشن راز",
        author: "شیخ محمود شبستری",
        published_date: 1311,
        language: "persian",
        genre: "شعر",
        imgSrc: "10.jpg"
    },
    {
        id: 11,
        title: "لیلی و مجنون",
        author: "نظامی",
        published_date: 1188,
        language: "persian",
        genre: "عاشقانه",
        imgSrc: "11.jpg"
    },
    {
        id: 12,
        title: "شاهنامه",
        author: "فردوسی",
        published_date: 1010,
        language: "persian",
        genre: "شعر",
        imgSrc: "12.jpg"
    },
    {
        id: 13,
        title: "ایلیاد",
        author: "هومر",
        published_date: 762,
        language: "greek",
        genre: "شعر",
        imgSrc: "13.jpg"
    },
    {
        id: 14,
        title: "اودیسه",
        author: "هومر",
        published_date: 725,
        language: "greek",
        genre: "شعر",
        imgSrc: "14.jpg"
    },
    {
        id: 15,
        title: "هملت",
        author: "ویلیام شکسپیر",
        published_date: 1609,
        language: "greek",
        genre: "درام",
        imgSrc: "15.jpg"
    },
    {
        id: 16,
        title: "دن کیشوت",
        author: "میگل دسروانتس",
        published_date: 1605,
        language: "spanish",
        genre: "درام",
        imgSrc: "16.jpg"
    }
]




let container = document.querySelector('.container');
let count = document.querySelector('.count');
let shop = document.getElementById('shop');
let home = document.getElementById('home');
let lis = document.querySelectorAll('li');


let selectetBook = []
let temp = []
let firstPage = []
let secondPage = []
let thirdPage = []
let forthPage = []


function RENDER(inp) {
    container.innerHTML = inp.map((book, index) => {
    return `


        <div class="card" id ="${index}">
     

            
            <div class="container__left">

                <i class="addShop fa-solid fa-bookmark" ></i>

                <img class="container__left__img" src="./assets/image/${book.imgSrc}" alt="">

            </div>


            <div class="content">

                <h1 class="border">title: ${book.title}</h1>

                <p class="border">author: ${book.author}</p>

                <p class="border">language: ${book.language}</p>

                <p class="border">genre: ${book.genre}</p>

                <p class="border">relese date: ${book.published_date}</p>
                
            </div>

        </div>
         `


    }).join('')





    let bookmark = document.querySelectorAll('.addShop');


    for (const card of bookmark) {
        card.addEventListener('click', shopAdd)
    }



    shop.addEventListener('click', shopCard)



}









function shopAdd() {

    this.classList.toggle('animate')

    if (this.style.color == 'gold') {

        this.style.color = 'black'
        count.textContent--
        temp.length--


    } else {
        this.style.color = 'gold'
        temp.push(this.parentElement)

        count.textContent = temp.length

        selectetBook.push(BOOKS[this.parentElement.parentElement.getAttribute('id')])

    }


}






function shopCard() {





    RENDER(selectetBook)





}



for (let i = 0; i < 4; i++) {
    firstPage.push(BOOKS[i])

}
for (let i = 4; i < 8; i++) {
    secondPage.push(BOOKS[i])

}
for (let i = 8; i < 12; i++) {
    thirdPage.push(BOOKS[i])

}
for (let i = 12; i < 16; i++) {
    forthPage.push(BOOKS[i])

}
RENDER(firstPage)
function page() {


    if (this.textContent == '1') {

        RENDER(firstPage)

    } else if (this.textContent == '2') {
        RENDER(secondPage)


    } else if (this.textContent == '3') {
        RENDER(thirdPage)


    } else if (this.textContent == '4') {
        RENDER(forthPage)
    }
}



for (const li of lis) {
    li.addEventListener('click', page)
}