// function openFeatures() {
//     var allElems = document.querySelectorAll('.elem')
//     var fullElemPage = document.querySelectorAll('.fullElem')
//     var fullElemPageBackBtn = document.querySelectorAll('.fullElem .back')

//     allElems.forEach(function (elem) {
//         elem.addEventListener('click', function () {
//             fullElemPage[elem.id].style.display = 'block'
//         })
//     })

//     fullElemPageBackBtn.forEach(function (back) {
//         back.addEventListener('click', function () {
//             fullElemPage[back.id].style.display = 'none'
//         })
//     })
// }

// openFeatures()


// //page reload na ho after saving a task in todo list


// function todoList() {

//     var currentTask = []

//     if (localStorage.getItem('currentTask')) {
//         currentTask = JSON.parse(localStorage.getItem('currentTask'))
//     } else {
//         console.log('Task list is Empty');
//     }



//     function renderTask() {

//         var allTask = document.querySelector('.allTask')

//         var sum = ''

//         currentTask.forEach(function (elem, idx) {
//             sum = sum + `<div class="task">
//         <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
//         <button id=${idx}>Mark as Completed</button>
//         </div>`
//         })

//         allTask.innerHTML = sum

//         localStorage.setItem('currentTask', JSON.stringify(currentTask))

//         document.querySelectorAll('.task button').forEach(function (btn) {
//             btn.addEventListener('click', function () {
//                 currentTask.splice(btn.id, 1)       //splice is used to delete the task 
//                 renderTask()
//             })
//         })
//     }
//     renderTask()

//     let form = document.querySelector('.addTask form')
//     let taskInput = document.querySelector('.addTask form #task-input')
//     let taskDetailsInput = document.querySelector('.addTask form textarea')
//     let taskCheckbox = document.querySelector('.addTask form #check')

//     form.addEventListener('submit', function (e) {
//         e.preventDefault()
//         currentTask.push(
//             {
//                 task: taskInput.value,
//                 details: taskDetailsInput.value,
//                 imp: taskCheckbox.checked
//             }
//         )
//         renderTask()

//         taskCheckbox.checked = false
//         taskInput.value = ''
//         taskDetailsInput.value = ''
//     })
// }
// todoList()


// function dailyPlanner() {
//     var dayPlanner = document.querySelector('.day-planner')

//     var dayPlanData = JSON.parse(localStorage.getItem('dayPlanData')) || {}

//     var hours = Array.from({ length: 18 }, (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`)


//     var wholeDaySum = ''
//     hours.forEach(function (elem, idx) {

//         var savedData = dayPlanData[idx] || ''

//         wholeDaySum = wholeDaySum + `<div class="day-planner-time">
//     <p>${elem}</p>
//     <input id=${idx} type="text" placeholder="..." value=${savedData}>
// </div>`
//     })

//     dayPlanner.innerHTML = wholeDaySum


//     var dayPlannerInput = document.querySelectorAll('.day-planner input')

//     dayPlannerInput.forEach(function (elem) {
//         elem.addEventListener('input', function () {
//             console.log('hello');
//             dayPlanData[elem.id] = elem.value

//             localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData))
//         })
//     })
// }

// dailyPlanner()



// //motivation
// function motivationalQuote() {
//     const motivationQuoteContent = document.querySelector('.motivation-2 h1');
//     const motivationAuthor = document.querySelector('.motivation-3 h2');
//     const newQuoteBtn = document.querySelector('#new-quote-btn');

//     async function fetchQuote() {
//         let response = await fetch("quotes.json");
//         let data = await response.json();

//         let randomIndex = Math.floor(Math.random() * data.length);

//         motivationQuoteContent.textContent = data[randomIndex].text;
//         motivationAuthor.textContent = data[randomIndex].author
//             ? `— ${data[randomIndex].author}`
//             : "— Unknown";
//     }

//     // load first quote
//     fetchQuote();

//     // 👇 LOAD NEW QUOTE ON BUTTON CLICK
//     newQuoteBtn.addEventListener('click', fetchQuote);
// }

// motivationalQuote();



// function pomodoroTimer() {


//     let timer = document.querySelector('.pomo-timer h1')
//     var startBtn = document.querySelector('.pomo-timer .start-timer')
//     var pauseBtn = document.querySelector('.pomo-timer .pause-timer')
//     var resetBtn = document.querySelector('.pomo-timer .reset-timer')
//     var session = document.querySelector('.pomodoro-fullpage .session')
//     var isWorkSession = true

//     let totalSeconds = 25 * 60
//     let timerInterval = null

//     function updateTimer() {
//         let minutes = Math.floor(totalSeconds / 60)
//         let seconds = totalSeconds % 60

//         timer.innerHTML = `${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')}`
//     }

//     function startTimer() {
//         clearInterval(timerInterval)

//         if (isWorkSession) {

//             timerInterval = setInterval(function () {
//                 if (totalSeconds > 0) {
//                     totalSeconds--
//                     updateTimer()
//                 } else {
//                     isWorkSession = false
//                     clearInterval(timerInterval)
//                     timer.innerHTML = '05:00'
//                     session.innerHTML = 'Take a Break'
//                     session.style.backgroundColor = 'var(--blue)'
//                     totalSeconds = 5 * 60
//                 }
//             }, 10)
//         } else {


//             timerInterval = setInterval(function () {
//                 if (totalSeconds > 0) {
//                     totalSeconds--
//                     updateTimer()
//                 } else {
//                     isWorkSession = true
//                     clearInterval(timerInterval)
//                     timer.innerHTML = '25:00'
//                     session.innerHTML = 'Work Session'
//                     session.style.backgroundColor = 'var(--green)'
//                     totalSeconds = 25 * 60
//                 }
//             }, 10)
//         }

//     }

//     function pauseTimer() {
//         clearInterval(timerInterval)
//     }
//     function resetTimer() {
//         totalSeconds = 25 * 60
//         clearInterval(timerInterval)
//         updateTimer()

//     }
//     startBtn.addEventListener('click', startTimer)
//     pauseBtn.addEventListener('click', pauseTimer)
//     resetBtn.addEventListener('click', resetTimer)



// }

// pomodoroTimer()


// function weatherFunctionality() {

//     // ===== CONFIG =====
//      var apiKey = "8b7ce9619269c7f86392a6e7d89eb9e4";
//     var city = "Delhi";

//     // ===== ELEMENTS =====
//     var header1Time = document.querySelector('.header1 h1');
//     var header1Date = document.querySelector('.header1 h2');

//     var header2Temp = document.querySelector('.header2 h2');
//     var header2Condition = document.querySelector('.header2 h4');
//     var precipitation = document.querySelector('.header2 .precipitation');
//     var humidity = document.querySelector('.header2 .humidity');
//     var wind = document.querySelector('.header2 .wind');


//     /* ================= WEATHER ================= */

//     async function weatherAPICall() {

//         try {

//             let url =
//                 `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//             let response = await fetch(url);

//             if (!response.ok) {
//                 throw new Error("Weather API Failed");
//             }

//             let data = await response.json();

//             console.log("Weather Data:", data);


//             header2Temp.innerHTML =
//                 `${Math.round(data.main.temp)}°C`;

//             header2Condition.innerHTML =
//                 data.weather[0].description.toUpperCase();

//             wind.innerHTML =
//                 `Wind: ${(data.wind.speed * 3.6).toFixed(1)} km/h`;

//             humidity.innerHTML =
//                 `Humidity: ${data.main.humidity}%`;

//             precipitation.innerHTML =
//                 `Feels like: ${Math.round(data.main.feels_like)}°C`;

//         } catch (err) {

//             console.error("Weather Error:", err);

//             header2Condition.innerHTML = "Weather unavailable";
//         }
//     }


//     // Load weather first time
//     weatherAPICall();

//     // Refresh every 15 min
//     setInterval(weatherAPICall, 900000);



//     /* ================= TIME & DATE ================= */

//     function timeDate() {

//         const days = [
//             'Sunday', 'Monday', 'Tuesday',
//             'Wednesday', 'Thursday', 'Friday', 'Saturday'
//         ];

//         const months = [
//             "January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//         ];

//         var now = new Date();

//         var day = days[now.getDay()];
//         var month = months[now.getMonth()];
//         var date = now.getDate();
//         var year = now.getFullYear();

//         var hours = now.getHours();
//         var minutes = now.getMinutes();
//         var seconds = now.getSeconds();


//         header1Date.innerHTML =
//             `${date} ${month}, ${year}`;


//         let period = hours >= 12 ? "PM" : "AM";

//         hours = hours % 12 || 12;


//         header1Time.innerHTML =
//             `${day}, ` +
//             `${String(hours).padStart(2, '0')}:` +
//             `${String(minutes).padStart(2, '0')}:` +
//             `${String(seconds).padStart(2, '0')} ` +
//             period;
//     }


//     // Start clock
//     timeDate();
//     setInterval(timeDate, 1000);
// }


// // Run after page loads
// window.addEventListener("load", weatherFunctionality);
//     /* ================= TIME & DATE ================= */

//     function timeDate() {

//         const totalDaysOfWeek = [
//             'Sunday', 'Monday', 'Tuesday',
//             'Wednesday', 'Thursday', 'Friday', 'Saturday'
//         ];

//         const monthNames = [
//             "January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//         ];

//         var date = new Date();

//         var dayOfWeek = totalDaysOfWeek[date.getDay()];

//         var hours = date.getHours();
//         var minutes = date.getMinutes();
//         var seconds = date.getSeconds();

//         var tarik = date.getDate();
//         var month = monthNames[date.getMonth()];
//         var year = date.getFullYear();


//         header1Date.innerHTML = `${tarik} ${month}, ${year}`;


//         let period = hours >= 12 ? "PM" : "AM";

//         hours = hours % 12 || 12; // convert to 12-hour format


//         header1Time.innerHTML =
//             `${dayOfWeek}, ` +
//             `${String(hours).padStart(2, '0')}:` +
//             `${String(minutes).padStart(2, '0')}:` +
//             `${String(seconds).padStart(2, '0')} ` +
//             period;
//     }


//     // Start clock
//     timeDate();

//     setInterval(timeDate, 1000);




// // Run after page loads
// window.addEventListener("load", weatherFunctionality);


// function changeTheme() {

//     var theme = document.querySelector('.theme')
//     var rootElement = document.documentElement

//     var flag = 0
//     theme.addEventListener('click', function () {

//         if (flag == 0) {
//             rootElement.style.setProperty('--pri', '#F8F4E1')
//             rootElement.style.setProperty('--sec', '#222831')
//             rootElement.style.setProperty('--tri1', '#948979')
//             rootElement.style.setProperty('--tri2', '#393E46')
//             flag = 1
//         } else if (flag == 1) {
//             rootElement.style.setProperty('--pri', '#F1EFEC')
//             rootElement.style.setProperty('--sec', '#030303')
//             rootElement.style.setProperty('--tri1', '#D4C9BE')
//             rootElement.style.setProperty('--tri2', '#123458')
//             flag = 2
//         } else if (flag == 2) {
//             rootElement.style.setProperty('--pri', '#F8F4E1')
//             rootElement.style.setProperty('--sec', '#381c0a')
//             rootElement.style.setProperty('--tri1', '#FEBA17')
//             rootElement.style.setProperty('--tri2', '#74512D')
//             flag = 0
//         }

//     })


// }

// changeTheme()
// openFeatures();        // page open/close logic

// todoList();
// dailyPlanner();
// motivationalQuote();
// pomodoroTimer();
// weatherFunctionality();
// changeTheme();
// dailyGoals();

// /* ===========================
//    DAILY GOALS FEATURE
//    =========================== */

// /* ===========================
//    DAILY GOALS FEATURE
// =========================== */

// function dailyGoals() {

//     const goalInput = document.querySelector('#goal-input');
//     const addGoalBtn = document.querySelector('#add-goal-btn');
//     const goalsContainer = document.querySelector('.goals-items');

//     if (!goalInput || !addGoalBtn || !goalsContainer) {
//         console.warn('Daily Goals: Elements not found');
//         return;
//     }

//     // Load from localStorage
//     let goals = JSON.parse(localStorage.getItem('dailyGoals')) || [];

//     // Render goals
//     function renderGoals() {

//         goalsContainer.innerHTML = '';

//         goals.forEach((goal, index) => {

//             const div = document.createElement('div');
//             div.className = 'goal-item';

//             if (goal.completed) {
//                 div.classList.add('completed');
//             }

//             div.innerHTML = `
//                 <span>${goal.text}</span>
//                 <button class="complete-btn">
//                     ${goal.completed ? 'Completed' : 'Mark Complete'}
//                 </button>
//                 <button class="delete-btn">❌</button>
//             `;

//             // Complete button
//             div.querySelector('.complete-btn').addEventListener('click', () => {

//                 goals[index].completed = true;
//                 saveAndRender();

//             });

//             // Delete button
//             div.querySelector('.delete-btn').addEventListener('click', () => {

//                 goals.splice(index, 1);
//                 saveAndRender();

//             });

//             goalsContainer.appendChild(div);
//         });
//     }

//     // Save + Render
//     function saveAndRender() {
//         localStorage.setItem('dailyGoals', JSON.stringify(goals));
//         renderGoals();
//     }

//     // Add new goal
//     addGoalBtn.addEventListener('click', () => {

//         const text = goalInput.value.trim();

//         if (text === '') return;

//         goals.push({
//             text: text,
//             completed: false
//         });

//         goalInput.value = '';

//         saveAndRender();
//     });

//     // First render
//     renderGoals();
// }


// dailyGoals();



/* ===========================
   FEATURES OPEN / CLOSE
=========================== */

function openFeatures() {
    var allElems = document.querySelectorAll('.elem');
    var fullElemPage = document.querySelectorAll('.fullElem');
    var fullElemPageBackBtn = document.querySelectorAll('.fullElem .back');

    allElems.forEach(function (elem) {
        elem.addEventListener('click', function () {
            fullElemPage[elem.id].style.display = 'block';
        });
    });

    fullElemPageBackBtn.forEach(function (back) {
        back.addEventListener('click', function () {
            fullElemPage[back.id].style.display = 'none';
        });
    });
}


/* ===========================
   TODO LIST
=========================== */

function todoList() {

    var currentTask = JSON.parse(localStorage.getItem('currentTask')) || [];

    function renderTask() {

        var allTask = document.querySelector('.allTask');
        var sum = '';

        currentTask.forEach(function (elem, idx) {
            sum += `
            <div class="task">
                <h5>${elem.task}</h5>
                <button id="${idx}">Done</button>
            </div>`;
        });

        allTask.innerHTML = sum;

        localStorage.setItem('currentTask', JSON.stringify(currentTask));

        document.querySelectorAll('.task button').forEach(function (btn) {
            btn.addEventListener('click', function () {
                currentTask.splice(btn.id, 1);
                renderTask();
            });
        });
    }

    renderTask();

    let form = document.querySelector('.addTask form');
    let taskInput = document.querySelector('#task-input');

    form.addEventListener('submit', function (e) {

        e.preventDefault();

        if (taskInput.value.trim() === '') return;

        currentTask.push({
            task: taskInput.value
        });

        taskInput.value = '';
        renderTask();
    });
}


/* ===========================
   DAILY PLANNER
=========================== */

function dailyPlanner() {

    var dayPlanner = document.querySelector('.day-planner');

    var dayPlanData = JSON.parse(localStorage.getItem('dayPlanData')) || {};

    var hours = Array.from({ length: 18 }, (_, i) => `${6 + i}:00 - ${7 + i}:00`);

    var html = '';

    hours.forEach(function (time, i) {

        html += `
        <div class="day-planner-time">
            <p>${time}</p>
            <input id="${i}" value="${dayPlanData[i] || ''}">
        </div>`;
    });

    dayPlanner.innerHTML = html;

    document.querySelectorAll('.day-planner input').forEach(function (inp) {

        inp.addEventListener('input', function () {

            dayPlanData[inp.id] = inp.value;

            localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData));
        });
    });
}


/* ===========================
   MOTIVATION
=========================== */

function motivationalQuote() {

    const quote = document.querySelector('.motivation-2 h1');
    const author = document.querySelector('.motivation-3 h2');
    const btn = document.querySelector('#new-quote-btn');

    async function fetchQuote() {

        let res = await fetch("quotes.json");
        let data = await res.json();

        let i = Math.floor(Math.random() * data.length);

        quote.textContent = data[i].text;
        author.textContent = data[i].author || "Unknown";
    }

    fetchQuote();
    btn.addEventListener('click', fetchQuote);
}


/* ===========================
   POMODORO
=========================== */

function pomodoroTimer() {

    let timer = document.querySelector('.pomo-timer h1');

    let start = document.querySelector('.start-timer');
    let pause = document.querySelector('.pause-timer');
    let reset = document.querySelector('.reset-timer');

    let total = 25 * 60;
    let interval = null;

    function update() {

        let m = Math.floor(total / 60);
        let s = total % 60;

        timer.innerHTML =
            `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function startTimer() {

        clearInterval(interval);

        interval = setInterval(() => {

            if (total > 0) {
                total--;
                update();
            }

        }, 1000);
    }

    start.addEventListener('click', startTimer);

    pause.addEventListener('click', () => clearInterval(interval));

    reset.addEventListener('click', () => {
        clearInterval(interval);
        total = 25 * 60;
        update();
    });
}


/* ===========================
   THEME
=========================== */

function changeTheme() {

    var btn = document.querySelector('.theme');
    var root = document.documentElement;

    let flag = 0;

    btn.addEventListener('click', function () {

        if (flag === 0) {
            root.style.setProperty('--sec', '#222831');
            flag = 1;
        }

        else if (flag === 1) {
            root.style.setProperty('--sec', '#030303');
            flag = 2;
        }

        else {
            root.style.setProperty('--sec', '#381c0a');
            flag = 0;
        }
    });
}


/* ===========================
   DAILY GOALS ✅ FIXED
=========================== */

function dailyGoals() {

    const input = document.querySelector('#goal-input');
    const btn = document.querySelector('#add-goal-btn');
    const container = document.querySelector('.goals-items');

    if (!input || !btn || !container) return;

    let goals = JSON.parse(localStorage.getItem('dailyGoals')) || [];


    function render() {

        container.innerHTML = '';

        goals.forEach((g, i) => {

            let div = document.createElement('div');
            div.className = 'goal-item';

            if (g.completed) div.classList.add('completed');

            div.innerHTML = `
                <span>${g.text}</span>
                <button class="done">✔</button>
                <button class="del">❌</button>
            `;

            div.querySelector('.done').onclick = () => {
                goals[i].completed = true;
                save();
            };

            div.querySelector('.del').onclick = () => {
                goals.splice(i, 1);
                save();
            };

            container.appendChild(div);
        });
    }


    function save() {
        localStorage.setItem('dailyGoals', JSON.stringify(goals));
        render();
    }


    btn.addEventListener('click', () => {

        if (input.value.trim() === '') return;

        goals.push({
            text: input.value,
            completed: false
        });

        input.value = '';
        save();
    });


    render();
}


/* ===========================
   START APP (IMPORTANT)
=========================== */

document.addEventListener("DOMContentLoaded", function () {

    openFeatures();
    todoList();
    dailyPlanner();
    motivationalQuote();
    pomodoroTimer();
    changeTheme();
    dailyGoals();

});
