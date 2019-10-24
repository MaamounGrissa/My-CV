window.addEventListener('load', () => {

    const nav = document.querySelectorAll('ul li a');
    nav.forEach((i) => {

        i.addEventListener('click', function () {

            switch (i.textContent) {

                case "EN":
                    document.location.reload();
                    break;
                case "FR":
                    leftToRight();

                    document.getElementById("AN").style.color = "#cb2027";
                    document.getElementById("FR").style.color = "green";
                    document.getElementById("RU").style.color = "#cb2027";
                    document.getElementById("AR").style.color = "#cb2027";

                    document.getElementById("name").textContent = "Maamoun Grissa";
                    document.getElementById("job").textContent = "développeur web";

                    document.getElementById("tel").textContent = "M : +7 966 343 90 50";
                    document.getElementById("email").textContent = "E : grissa.maamoun@gmail.com";
                    document.getElementById("adresse").textContent = "A : Moscou,métro Ryazansky prospekt";

                    document.getElementById("social").textContent = "Social";
                    document.getElementById("num").textContent = "+7 966 343 90 50";

                    document.getElementById("education").textContent = "Éducation";
                    document.getElementById("item1").innerHTML =
                        "<h3>Multimédia & Développement Web</h3><p>Institut Supérieur des Etudes Technologiques de Sousse, Tunisie</p><p>2007 - 2011</p>";
                    document.getElementById("item2").innerHTML =
                        "<h3>Cisco home & small business networking</h3><p>Institut Supérieur des Etudes Technologiques de Sousse, Tunisie</p><p>2008 - 2009</p>";

                    document.getElementById("skills").textContent = "Compétences";

                    document.getElementById("aboutMe").textContent = "À propos de moi";
                    document.getElementById("iam").textContent = "J'ai 31 ans, marié, je vis à Moscou, j'ai un permis de séjour temporaire en Russie, j'ai un permis de conduire de catégorie B, expérience de conduite de 8 ans. Je suis responsable, ponctuel, sociable.";
                    document.getElementById("hobbies").innerHTML = "<strong>Loisirs : </strong>Sports, musique, cinéma.";
                    document.getElementById("la").innerHTML = "<strong>Langues :</strong>";
                    document.getElementById("arabic").textContent = "Arabe";
                    document.getElementById("frensh").textContent = "Français";
                    document.getElementById("english").textContent = "Anglais";
                    document.getElementById("russian").textContent = "Russe";

                    document.getElementById("experiences").textContent = "Expériences";
                    document.getElementById("exp").innerHTML =
                        "<div class='sotovic company'>" +
                        "<p><strong>2019 - 2019 :</strong> Informaticien au sein de ‘Sotovic’, Moscou, Russie.</p>" +
                        "<p>Mission : Gestion et maintenance des équipements informatiques, réseau local et caméras de surveillance. </p>" +
                        "</div><div class='elksar company'>" +
                        "<p><strong>2013 - 2018 :</strong> Responsable informatique au sein de ‘Hôtel LTI El Ksar’, Sousse, Tunisia.</p>" +
                        "<p>Mission : Gestion et maintenance de parc informatique, téléphonie, caméras de surveillance, système ERP et responsable audiovisuelles.</p>" +
                        "</div><div><p><strong>2012 - 2013 :</strong> Gérant au sein de ‘Mokaccino’(Restaurant), Sousse, Tunisie.</p>" +
                        "</div><div class='steq company'><p><strong>2011 - 2012 :</strong> Développeur au sein de ‘Tunisian Company of Equipment’, Tunis, Tunisie.</p>" +
                        "<p>Mission : Développement des applications bureaux en FoxPro.</p>" +
                        "</div><div><p><strong>2011 :</strong> Projet de fin d'étude.</p>" +
                        "<p>Project : Projet : Développement d’un jeu vidéo 3D en C++ (OpenGL, OpenAL).</p></div>";

                    document.getElementById("git").innerHTML = "Rejoindre s'il vous plaît mon github pour voir tous mes projets <br><br>"
                    document.getElementById("references").textContent = "Exemples de travail";
                    document.getElementById("ref-text").textContent = "Sites Web créés avec Wordpress";
                    break;
                case "RU":
                    leftToRight();

                    document.getElementById("AN").style.color = "#cb2027";
                    document.getElementById("FR").style.color = "#cb2027";
                    document.getElementById("RU").style.color = "green";
                    document.getElementById("AR").style.color = "#cb2027";

                    document.getElementById("name").textContent = "Маамун Грисса";
                    document.getElementById("job").textContent = "программист";

                    document.getElementById("tel").textContent = "M : +7 966 343 90 50";
                    document.getElementById("email").textContent = "E : grissa.maamoun@gmail.com";
                    document.getElementById("adresse").textContent = "A : Москва,ЮВАО,район Рязанский";

                    document.getElementById("social").textContent = "Контакты";
                    document.getElementById("num").textContent = "+7 966 343 90 50";

                    document.getElementById("education").textContent = "образование";
                    document.getElementById("item1").innerHTML =
                        "<h3>Мультимедиа и веб-разработка</h3><p>Институт Технологческих Исследований в городе Сус в Тунисе</p><p>2007 - 2011</p>";
                    document.getElementById("item2").innerHTML =
                        "<h3>Cisco home & small business networking</h3><p>Институт Технологческих Исследований в городе Сус в Тунисе</p><p>2008 - 2009</p>";

                    document.getElementById("skills").textContent = "навыки";

                    document.getElementById("aboutMe").textContent = "обо мне";
                    document.getElementById("iam").textContent = "Мне 31 год, женат, постоянно проживаю в Москве более 1 года, имею разрешение на временное проживание в России, водительские права категории В, стаж вождения 8 лет. Я ответственный, пунктуальный, общительный.";
                    document.getElementById("hobbies").innerHTML = "<strong>Хобби : </strong>спорт, музыка, кино.";
                    document.getElementById("la").innerHTML = "<strong>Языки :</strong>";
                    document.getElementById("arabic").textContent = "Арабский";
                    document.getElementById("frensh").textContent = "Французский";
                    document.getElementById("english").textContent = "Английский";
                    document.getElementById("russian").textContent = "Русский";

                    document.getElementById("experiences").textContent = "опыт";
                    document.getElementById("exp").innerHTML =
                        "<div class='sotovic company'>" +
                        "<p><strong>2019 - 2019 :</strong> Системный администратор в компании «Сотовик», Москва, Россия.</p>" +
                        "<p>Обязанности : управление и обслуживание IT-оборудования, локальной сети и камер наблюдения.</p>" +
                        "</div><div class='elksar company'>" +
                        "<p><strong>2013 - 2018 :</strong> IT менеджер в «LTI El Ksar Hotel 4*», Сус, Тунис.</p>" +
                        "<p>Обязанности : управление и обслуживание IT оборудования, локальных сетей, Wi-Fi , телефония, камеры видеонаблюдения, система ERP и аудиовизуальный менеджер.</p>" +
                        "</div><div><p><strong>2012 - 2013 :</strong> Администратор в ресторане «Mokaccino», Сус, Тунис.</p>" +
                        "</div><div class='steq company'><p><strong>2011 - 2012 :</strong> Разработчик в компании «Tunisian Company of Equipment», г. Тунис, Тунис.</p>" +
                        "<p>управление : разработка настольных приложений с использованием FoxPro.</p>" +
                        "</div><div><p><strong>2011 :</strong> Дипломная работа.</p>" +
                        "<p>Проект : разработка 3D видеоигры с использованием C ++ (OpenGL, OpenAL).</p></div>";

                    document.getElementById("git").innerHTML = "Присоединяйтесь, пожалуйста, мой GitHub, чтобы увидеть все мои проекты <br><br>"
                    document.getElementById("references").textContent = "Примеры работ";
                    document.getElementById("ref-text").textContent = "Сайты, созданные на Wordpress";
                    break;
                case "AR":
                    rightToLeft();
                    document.getElementById("AN").style.color = "#cb2027";
                    document.getElementById("FR").style.color = "#cb2027";
                    document.getElementById("RU").style.color = "#cb2027";
                    document.getElementById("AR").style.color = "green";

                    document.getElementById("name").textContent = "المـأمـون قـريــسة";
                    document.getElementById("job").textContent = "مــــبــــرمــــج";

                    document.getElementById("tel").innerHTML = "<span>الهاتف:<span><span> 50 90 343 966 7+</span>";
                    document.getElementById("email").innerHTML = "<span>البريد الالكتروني:<span><span> grissa.maamoun@gmail.com</span>";
                    document.getElementById("adresse").textContent = "العنوان : منطقة ريازانسكي، موسكو، روسيا";

                    document.getElementById("social").textContent = "التواصل الاجتماعي";
                    document.getElementById("num").textContent = "50 90 343 966 7+";

                    document.getElementById("education").textContent = "الشهادات";
                    document.getElementById("item1").innerHTML =
                        "<h3>الاجازة التطبيقة في تكنولوجيا الاعلامية اختصاص تطوير الويب</h3><p>المعهد العالي للدراسات التكنولوجية بسوسة، تونس 2007-2011</p>";
                    document.getElementById("item2").innerHTML =
                        "<h3>سيسكو شبكات المنازل والشركات الصغيرة</h3><p> المعهد العالي للدراسات التكنولوجية بسوسة، تونس 2008-2009</p>";

                    document.getElementById("skills").textContent = "المهارات";

                    document.getElementById("aboutMe").textContent = "مقدمة";
                    document.getElementById("iam").textContent = "عمري 31 سنة، متزوج وأعيش بالعاصمة الروسية موسكو، حيث أمتلك بطاقة إقامة مؤقتة، كما أمتلك رخصة قيادة من فئة ب مع خبرة 8 سنوات في القيادة. مسؤول، دقيق المواعيد و اجتماعي.";
                    document.getElementById("hobbies").innerHTML = "<strong>الهوايات : </strong>الرياضة والموسيقى والسينما.";
                    document.getElementById("la").innerHTML = "<strong>اللغات :</strong>";

                    document.getElementById("arabic").textContent = "العربية";
                    document.getElementById("frensh").textContent = "الفرنسية";
                    document.getElementById("english").textContent = "الإنجليزية";
                    document.getElementById("russian").textContent = "الروسية";

                    document.getElementById("experiences").textContent = "الخبرات";
                    document.getElementById("exp").innerHTML =
                        "<div class='sotovic company' style='padding-left: 18%; padding-right: 0; background-position: left center;'>" +
                        "<p><strong>2019 - 2019 :</strong> مسؤول عن الأنظمة الإعلامية بشركة 'سوتوفيك' موسكو، روسيا.</p>" +
                        "<p>المهام : إدارة وصيانة أجهزة الكمبيوتر و شبكات الاتصال المحلية وكاميرات المراقبة.</p>" +
                        "</div><div class='elksar company' style='padding-left: 18%; padding-right: 0; background-position: left center;'>" +
                        "<p><strong>2013 - 2018 :</strong> مدير قسم الإعلامية بنزل ‘القصر‘ بسوسة، تونس.</p>" +
                        "<p>المهام : إدارة وصيانة أجهزة الكمبيوتر و شبكات الاتصال المحلية و اللاسلكية و أنظمة الهواتف و كاميرات المراقبة، و مسؤول عن نظام المعلومات و مسؤول عن كل ماهو سمعي بصري.</p>" +
                        "</div><div><p><strong>2012 - 2013 :</strong> مدير مطعم ‘موكاتشينو‘ بسوسة، تونس.</p>" +
                        "</div><div class='steq company' style='padding-left: 18%; padding-right: 0; background-position: left center;'><p><strong>2011 - 2012 :</strong> مبرمج بالشركة التونسية لمعدات السيارات بالعاصمة تونس، تونس. </p>" +
                        "<p> المهام : برمجة تطبيقات بلغة <span style='direction: ltr;'> FoxPro.</span></p>" +
                        "</div><div><p><strong>2011 :</strong> مشروع نهاية الدراسات العليا.</p>" +
                        "<p>المشروع : برجمة لعبة بتقنية <span style='direction: ltr;'> 3D</span> بلغة <span style='direction: ltr;'> C ++, OpenGL, OpenAL.</span></p></div>";

                    document.getElementById("myGitHub").textContent = "جيت هاب"
                    document.getElementById("git").innerHTML = " يمكنك تصفح جميع مشاريعي المنجزة في حسابي الخاص بجيت هاب<br><br>"
                    document.getElementById("references").textContent = "أمثلة عن الأعمال";
                    document.getElementById("ref-text").innerHTML = " مواقع انترنات منجزة بـ <span style='direction: ltr;'> CMS Worpress</span>";

                    break;
                default:
                    document.location.reload();
            }

        });

    });

    function leftToRight() {
        'use strict';
        var selectors = document.querySelectorAll("*[style]"), i;
        for (i = 0; i < selectors.length; i++) {
            selectors[i].removeAttribute("style");
        }
        document.getElementById("topHeader").innerHTML = // change classement photo name
            '<div class="photo"><img src="https://i.imgur.com/U6q7bsS.png" alt="Maamoun Grissa"></div>' +
            '<div class="name"><h1 id="name">Maamoun Grissa</h1>' +
            '<div class="flex" style="justify-content: center"><hr id="hr">' +
            '<span id="job">Web Developer</span></div></div>';
    }

    function rightToLeft() {
        'use strict';
        document.body.style.direction = "rtl";
        document.getElementsByClassName("bande-red")[0].style.cssFloat = "right";
        document.getElementsByClassName("bande-red")[0].style.borderRadius = "0 5px 0 5px";
        document.getElementsByClassName("bande-white")[0].style.cssFloat = "left";
        document.getElementsByClassName("bande-white")[0].style.borderRadius = "5px 0 5px 0";
        document.getElementsByClassName("bande-white")[0].style.direction = "ltr";

        document.getElementById("topHeader").innerHTML =
            '<div class="name"><h1 id="name">Maamoun Grissa</h1>' +
            '<div class="flex" style="justify-content: center"><hr id="hr">' +
            '<span id="job">Web Developer</span></div></div>' +
            '<div class="photo"><img src="https://i.imgur.com/U6q7bsS.png" alt="Maamoun Grissa"></div>';

        document.getElementsByClassName("photo")[0].style.cssFloat = "right";
        document.getElementsByTagName("img")[0].style.cssFloat = "left";
        document.getElementsByClassName("name")[0].style.cssFloat = "left";
        document.getElementById("name").style.letterSpacing = "0";
        document.getElementById("job").style.letterSpacing = "0";
        document.getElementsByTagName("aside")[0].style.cssFloat = "right";
        document.getElementsByTagName("article")[0].style.cssFloat = "left";
        document.getElementsByTagName("article")[0].style.borderRadius = "0 5px 0 0";
        document.getElementById("adressBlock").style.paddingRight = "7%";
        document.getElementById("adressBlock").style.paddingLeft = "0";
        document.getElementById("adressBlock").style.borderRadius = "5px 0 0 5px";
        document.getElementById("tel").style.textAlign = "right";
        document.getElementById("email").style.textAlign = "right";
        document.getElementById("adresse").style.textAlign = "right";
        var block = document.getElementsByClassName("block");
        for (var i = 0; i < block.length; i++) {
            block[i].style.paddingLeft = "0";
            block[i].style.paddingRight = "15%";
        }
        document.getElementById("social").style.marginRight = "3%";
        document.getElementById("num").style.direction = "ltr";
        document.getElementById("num").style.textAlign = "right";
        document.getElementById("num").style.paddingRight = "3%";
        document.getElementById("education").style.marginRight = "3%";
        document.getElementById("skills").style.marginRight = "3%";
        var progr = document.getElementsByTagName("progress");
        for (var i = 0; i < progr.length; i++) {
            progr[i].style.marginLeft = "0";
            progr[i].style.marginRight = "10%";
        }
        var hr = document.getElementsByClassName("hr");
        for (var i = 0; i < hr.length; i++) {
            hr[i].getElementsByTagName("span")[0].style.cssFloat = "right";
        }
        document.getElementById("aboutMe").style.marginRight = "3%";
        var countLang = document.getElementsByClassName("lang");
        for (var i = 0; i < countLang.length; i++) {
            countLang[i].getElementsByTagName("p")[0].style.width = "5%";
        }
        document.getElementById("experiences").style.marginRight = "3%";
        document.getElementById("myGitHub").style.marginRight = "3%";
        document.getElementById("references").style.marginRight = "3%";
        document.getElementsByTagName("footer")[0].style.direction = "ltr";
    }
});