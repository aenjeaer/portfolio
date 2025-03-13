// ==================== Aside ====================
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection()
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => 
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++ )
                {
                    allSection[i].classList.toggle("open");
                }
            }
            
// website items 

// quiz IT
const quiz = document.getElementById('quiz');
quiz.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/Quiz/quiz.html", "_blank");
})
// quiz IT 2
const quiz2 = document.getElementById('quiz2');
quiz2.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/Quiz/quiz2/quiz2.html", "_blank");
})
// kumpulan matkul
const kumpulanmatkul = document.getElementById('materikuliah');
kumpulanmatkul.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/materikuliah/login_form.html", "_blank");
})
// login form
const loginform = document.getElementById('loginform');
loginform.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/loginform/index_loginform.html", "_blank");
})
// belajar parallex effect
const parallex = document.getElementById('parallex');
parallex.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/Home_page_parallex/index_home.html", "_blank");
})
// belajar personality
const personality_test = document.getElementById('personality_test');
personality_test.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/personality_test/index_personality.html", "_blank");
})
// hapus karakter otomatis
const text_corrector = document.getElementById('text_corrector');
text_corrector.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/text_corrector/index_autocorrect_text.html", "_blank");
})
// prediksi material otomatis
const prediksi_material = document.getElementById('website-magang');
prediksi_material.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/website-magang/prediksi-material-otomatis.html", "_blank");
})