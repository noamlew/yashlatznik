const question = document.getElementById("question");
const ctx = question.getContext("2d");
const allSet = document.getElementById("all_set");
const again = document.getElementById("again");
const yashlatznikText = document.getElementById("yashlatznik");

let answer = document.getElementsByClassName("pAnswer");
answer = Object.values(answer);

let answerBox = document.getElementsByClassName("answer");
answerBox = Object.values(answerBox);

//#region 
const backgroundAudio = new Audio();
backgroundAudio.src = "audio/Scheming Weasel Faster - Vanoss Gaming Background Music (HD).mp3";
//#endregion

const colors = [
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
];

const large = [40, 40, 60, 40, 55, 85, 75, 50, 80, 70];

const img = [
    "https://yashlatznik.co.il/wp-content/uploads/2020/06/%D7%97%D7%95%D7%9C%D7%A6%D7%AA-%D7%94%D7%93%D7%A7%D7%9C-%D7%AA%D7%A9.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwQVT3zg-hL2fXwlBs1w0Tio4w1HbmuB5vVhcE4BmAog&usqp=CAU&ec=45690269",
    "https://or-kids.co.il/wp-content/uploads/thumbs/lesson-33nnvsmkaenrcgs1rxst8g.jpg",
    "https://upload.wikimedia.org/wikipedia/he/7/75/Logo_yashlatz.png",
    "https://medias.timeout.co.il/www/uploads/2016/05/IMG_8745_t-1140x641.jpg",
    "https://edu.gov.il/sites/merkaz/SiteCollectionImages/district-units/shelach.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRev4UYnLO76Lu3AZWucfPShP_yXPePfbrcgbQtIPcTzw&usqp=CAU&ec=45690269",
    "https://etc.usf.edu/clipart/33900/33984/nclock-06-30_33984_mth.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNKJ-4jCOIPb0nafoBwT9zjp2lH-jeH4xfskt-I6k-XQ&usqp=CAU&ec=45690269", //"https://www.e-vrit.co.il/Images/Products/YeddiotMasters/haatlastoldotam_master(1).jpg",
    "https://static.wixstatic.com/media/d3de59_7400516395524cd993053c3ed8b6b9fe~mv2.jpeg/v1/fill/w_286,h_514,al_c,q_80,usm_0.66_1.00_0.01/d3de59_7400516395524cd993053c3ed8b6b9fe~mv2.webp",
];

const allQuestion = [
    `?כמה פעמים בשבוע אתה לובש חולצה של ישל"צ`,
    `?כשאומרים "הרב" מי הראשון שעולה לך לראש`,
    `?לכמה שיעורים אתה נכנס ביום`,
    `?איזה מחזור הכי תותח בהיסטוריה של ישל"צ`,
    `?מה המקום האהוב עליך בישל"צ`,
    `?מה ראשי תיבות של"ח`,
    `?מה המניין שלך`,
    `?מה יש בשש וחצי בלו"ז של הישיבה`,
    `?מי מלמד תוע"י בישיבה`,
    `?כמה אתה מדרג את ישל"צ`,
];
const allAnswer1 = [
    `אף פעם`,
    `האדמו"ר מסאטמר`,
    `הככככלל`,
    `קללל שמחזור כ"ב`,
    `מימון`,
    `שדה לאום חברה`,
    `בדרך כלל ותיקין. הכי מאוחר המניין של הישיבה`,
    `שיעור פרטי רק אני והמורה`,
    `המורה הנשקה כמובן`,
    `9-10`,
];
const allAnswer2 = [
    `פעם פעמיים בשבוע`,
    `הרב זצ"ל`,
    `תלוי במצב רוח`,
    `...בעיקרון המחזור של אבא שלי… שניה אני שואל אותו איזה מחזור זה`,
    `החדר אוכל`,
    `שיעור לא חשוב`,
    `או המניין של הישיבה או משכן שמונה`,
    `ארוחת ערב`,
    `מורה קשיש כזה`,
    `7-8`,
];
const allAnswer3 = [
    `?יש חולצות שהם לא של ישל"צ`,
    `הרב גיזבר`,
    `??מה זה שיעור`,
    `מה השאלה בכלל? ברור שנ"ו`,
    `המיטה שלי`,
    `?מי זה של"ח`,
    `הכי מוקדם 9`,
    `שנת ערב`,
    `?מה זה תוע"י`,
    `...ZZZ`,
];
const yashlatznikAnswer = [
    `אתה יכול להיות הכל: גימזוז, אישה ואולי אפילו חייזר שחדר לכדור הארץ מכוכב רחוק אבל מה שבטוח אתה לא ישלצניק! אתה בטוח שלא נכנסת לפה בטעות? אם אתה רוצה להיות ישלצניק מן השורה מחכה לך עוד דרך ארוכה מאוד.`,
    `ניכר שיש לך איזה קרוב-רחוק שלמד בישל"צ, או שאולי שמעת סיפורים על הישיבה האגדית, אולי אפילו פעם נסעת ברחוב הרב צבי יהודה ואבא שלך הצביע ואמר:"זה שם", אבל לא הייתי ממליץ לך לנסות להבחן, הרב אשחר יטיס אותך`,
    `טוב ניכר שהיית פעם בישלצ ויש סיכוי שאתה אפילו יודע להבדיל בין הרב פלבר לבין הרב ויס אולי אתה אפילו יודע מה זה סוליה אבל רואים שלא יזיק לך עוד כמה שנות התמחות בישיבה תחזור אלינו אחרי התפילה בבית הלבן בשבע וחצי`,
    `אתה ישלצניק בשסה גידים ורמח איברים. אצלך במשפחה בטח גם אמא למדה בישיבה ואולי אתה כבר תכריע- הרב ויס עם יוד אחת או שתיים? אתה בטח מאחת השושלות המפוארות של הישיבה איזה 5-6 אחים שכבר מזמן סיימו בישל"צ. אצלך בבית בטח אבא אומר ישל"ץ במלרע`,
];

let numAmswer, yashlatznik;

window.onload = setUpGame();
function setUpGame() {
    yashlatznik = 0;
    numAmswer = 0;
    setUpStyle();
    setText();
}

function setUpStyle() {
    answerBox.forEach((oneAnswer) => {
        oneAnswer.style.display = "flex";
    });
    question.style.display = "flex";
    allSet.style.height = "530px";
    allSet.style.display = "grid";
    again.style.display = "none";
    yashlatznikText.style.display = "none";
}

function setText() {
    ctx.clearRect(0, 0, question.width, question.height);

    let image = new Image();
    image.src = img[numAmswer];
    ctx.drawImage(image, 100, 0, question.width - 200, question.height);

    ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    ctx.fillRect(0, 0, question.width, question.height);

    ctx.font = `${large[numAmswer]}px Suez One`;
    ctx.fillStyle = colors[numAmswer];
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
        allQuestion[numAmswer],
        question.width / 2,
        question.height / 2
    );

    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.strokeText(
        allQuestion[numAmswer],
        question.width / 2,
        question.height / 2
    );

    ctx.font = "30px Comic Sans MS";
    ctx.fillText(`${numAmswer + 1}/10`, 40, 25);

    answer[0].innerHTML = allAnswer1[numAmswer];
    answer[1].innerHTML = allAnswer2[numAmswer];
    answer[2].innerHTML = allAnswer3[numAmswer];
}

function clickAnswer(num) {
    backgroundAudio.volume = 0.5;
    backgroundAudio.play();
    numAmswer++;
    yashlatznik += num;
    if (numAmswer < 10) {
        setText();
    } else {
        setYashlatznik();
    }
}

function setYashlatznik() {
    setStyle();
    let i;
    if (yashlatznik <= 15) {
        i = 0;
    } else if (yashlatznik <= 20) {
        i = 1;
    } else if (yashlatznik <= 25) {
        i = 2;
    } else {
        i = 3;
    }
    yashlatznikText.innerHTML = yashlatznikAnswer[i];
}

function setStyle() {
    answerBox.forEach((oneAnswer) => {
        oneAnswer.style.display = "none";
    });
    question.style.display = "none";
    allSet.style.height = "500px";
    allSet.style.display = "flex";
    again.style.display = "flex";
    yashlatznikText.style.display = "flex";
}
