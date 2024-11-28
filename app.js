var data = [
    {
        question: "Quran ki pehli wahi kis par aayi thi?",
        option1: "Jibril (AS)",
        option2: "Mika'il (AS)",
        option3: "Israfeel (AS)",
        option4: "Malak al-Maut (AS)",
        correctANS: 1,
    },
    {
        question: "Islam ka pahela masjid kaunsa hai?",
        option1: "Masjid al-Haram",
        option2: "Masjid al-Nabawi",
        option3: "Masjid al-Aqsa",
        option4: "Masjid Quba",
        correctANS: 4,
    },
    {
        question: "Haj ka farz kitne saal mein ek martaba hai?",
        option1: "Har saal",
        option2: "Har do saal",
        option3: "Har paanch saal",
        option4: "Zindagi mein ek martaba",
        correctANS: 4,
    },
    {
        question: "Islam ka kitna rukn hai?",
        option1: "3",
        option2: "4",
        option3: "5",
        option4: "6",
        correctANS: 3,
    },  
    {
        question: "Kis maamlay ko 'Zakat' kehte hain?",
        option1: "Roza rakhna",
        option2: "Namaz ada karna",
        option3: "Ghar ki safai",
        option4: "Gareebon ko maal dena",
        correctANS: 4,
    },
    {
        question: "Kaun sa din Jummah kehlata hai?",
        option1: "Pehla din",
        option2: "Dusra din",
        option3: "Teesra din",
        option4: "Choutha din",
        correctANS: 3,
    },
    {
        question: "Quran ka pehla surah kaunsa hai?",
        option1: "Surah Al-Fatiha",
        option2: "Surah Al-Baqarah",
        option3: "Surah Al-Ikhlas",
        option4: "Surah Al-Nas",
        correctANS: 1,
    },
    {
        question: "Islam mein roza kis maqsad ke liye rakha jata hai?",
        option1: "Ameer banne ke liye",
        option2: "Ilm hasil karne ke liye",
        option3: "Allah ki ibadat karne ke liye",
        option4: "Jang jeetne ke liye",
        correctANS: 3,
    },
    {
        question: "Kaun si kitab Islam ki paigham hai?",
        option1: "Bible",
        option2: "Quran",
        option3: "Gita",
        option4: "Talmud",
        correctANS: 2,
    },
    {
        question: "Masjid al-Nabawi kis sheher mein hai?",
        option1: "Makkah",
        option2: "Medina",
        option3: "Jerusalem",
        option4: "Kufa",
        correctANS: 2,
    },
];


var questionCount = document.getElementById("questionCount");
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var optionsInput = document.getElementsByName("options");
var count = 0;
var score = 0;


questionCount.innerHTML = " Question " + (count + 1) + " of " + data.length
question.innerHTML = data[count].question
option1.innerHTML = data[count].option1
option2.innerHTML = data[count].option2
option3.innerHTML = data[count].option3
option4.innerHTML = data[count].option4


function Next(){
  questionCount.innerHTML = " Question " + (count + 1) + " of " + data.length
question.innerHTML = data[count].question
option1.innerHTML = data[count].option1
option2.innerHTML = data[count].option2
option3.innerHTML = data[count].option3
option4.innerHTML = data[count].option4

}