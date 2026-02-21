const translations = {
    ar: {
        title: "🌙 إمساكية رمضان 2026",
        welcome: "رمضان كريم — تقبل الله صيامكم وقيامكم",
        verse: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
        verseSrc: "سورة البقرة - 183",
        verseTitle: "📖 آية اليوم",
        duaTitle: "🤲 دعاء اليوم",
        timesTitle: "🕌 مواقيت صلاة اليوم",
        fajr: "الفجر", sunrise: "الشروق", dhuhr: "الظهر", asr: "العصر", maghrib: "المغرب", isha: "العشاء",
        statusSync: "تمت المزامنة بنجاح - الأوقات الآن 100% دقيقة",
        statusGPS: "يرجى تفعيل GPS",
        btnGPS: '<i class="fas fa-location-arrow"></i> تحديد موقعي وتحديث الأوقات',
        monthTitle: "📅 إمساكية رمضان 2026",
        source: "المصدر: Aladhan API (توقيت عالمي دقيق)",
        sourceUsed: "المصدر المستخدَم: Aladhan API",
        syncCity: "تم ضبط الموقع: مدينة",
        syncCountry: "، دولة",
        monthDesc: "جدول كامل بمواقيت الصلاة لـ 30 يوماً",
        selContinent: "🌍 اختر القارة", selCountry: "🏳️ اختر الدولة", selCity: "🏙️ اختر المدينة",
        tableDate: "التاريخ", tableRamadan: "رمضان", tableDay: "اليوم",
        footer: "رمضان كريم 🌙 إمساكية دقيقة بإذن الله",
        devName: "أسامة أحمد ✦", devRole: "مطور واجهات ومصمم تجربة مستخدم",
        devDesc: "يسعدني دائماً سماع آرائك واقتراحاتك لتطوير هذا المشروع. تواصل معي عبر أيٍ من المنصات التالية:",
        audioPlay: "تشغيل الصوت", audioMute: "كتم الصوت",
        langBtn: "Language / اللغة",
        loading: "جاري البحث...", success: "تم بنجاح", error: "حدث خطأ",
        gpsConnecting: "جاري الاتصال بالأقمار الصناعية...",
        gpsSearching: "جاري البحث عن موقعك بدقة...",
        gpsDetermining: "جاري التحديد...",
        gpsFound: "تم العثور عليك في:",
        gpsUpdated: "تم تحديث المواقيت بناءً على موقعك الحالي",
        errFetch: "حدث خطأ في جلب البيانات",
        fetchingCity: "جاري جلب مواقيت",
        rdTitle: "🌍 بداية رمضان حول العالم",
        rdSubtitle: "مواعيد أول يوم صيام حسب إعلان كل دولة",
        rdWedLabel: "تصوم الأربعاء",
        rdWedDate: "18 فبراير 2026",
        rdThuLabel: "تصوم الخميس",
        rdThuDate: "19 فبراير 2026",
        rdPendingLabel: "19 أو 20 فبراير",
        rdPendingDate: "تنتظر رؤية الهلال مساء الأربعاء",
        rdCountries: {
            sa: "السعودية", ae: "الإمارات", qa: "قطر", kw: "الكويت", bh: "البحرين", ye: "اليمن",
            iq: "العراق", sy: "سوريا", lb: "لبنان", ps: "فلسطين",
            sn: "السنغال", mr: "موريتانيا", ml: "مالي", bf: "بوركينا فاسو", ci: "ساحل العاج", gw: "غينيا بيساو",
            td: "تشاد", ne: "النيجر", ng: "نيجيريا", so: "الصومال", sd: "السودان", dj: "جيبوتي",
            af: "أفغانستان", az: "أذربيجان", mv: "المالديف",
            eg: "مصر", ly: "ليبيا", tn: "تونس", dz: "الجزائر", ma: "المغرب",
            jo: "الأردن", tr: "تركيا", om: "عُمان", iq: "العراق",
            ir: "إيران", pk: "باكستان", in: "الهند", bd: "بنغلاديش", lk: "سريلانكا", np: "نيبال",
            ph: "الفلبين", th: "تايلاند", id: "إندونيسيا", my: "ماليزيا", bn: "بروناي", sg: "سنغافورة", jp: "اليابان", cn: "الصين",
            gb: "بريطانيا", fr: "فرنسا", de: "ألمانيا", nl: "هولندا", be: "بلجيكا", es: "إسبانيا",
            it: "إيطاليا", se: "السويد", no: "النرويج", dk: "الدنمارك", ba: "البوسنة", al: "ألبانيا", ru: "روسيا",
            us: "أمريكا", ca: "كندا", br: "البرازيل", ar2: "الأرجنتين",
            au: "أستراليا", nz: "نيوزيلندا", gh: "غانا", cm: "الكاميرون", za: "جنوب أفريقيا"
        },
        rdRegions: {
            rgGulf: "🏖️ الخليج العربي", rgMashreq: "🕌 المشرق العربي", rgAfricaWed: "🌍 أفريقيا", rgCentralAsia: "🏔️ آسيا الوسطى",
            rgNorthAfrica: "🌍 شمال أفريقيا", rgMashreqThu: "🕌 المشرق والخليج", rgAsia: "🌏 آسيا",
            rgEurope: "🌍 أوروبا", rgEuropeThu: "🌍 أوروبا", rgAmericas: "🌎 الأمريكتان", rgAmericasWed: "🌎 أمريكا وكندا", rgOceania: "🌊 أوقيانوسيا وأفريقيا"
        },
        rdNote: "⚠️ بعض المساجد في أوروبا وأمريكا تتبع رؤية السعودية (18 فبراير)",
        rdCountText: "دولة تم تحديدها",
        rdWedCount: "24 دولة",
        rdThuCount: "45 دولة",
        rdLikely: "مرجح"
    },
    en: {
        title: "🌙 Ramadan Calendar 2026",
        welcome: "Ramadan Kareem — May Allah accept your fasting and prayers",
        verse: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
        verseSrc: "سورة البقرة - 183",
        verseTitle: "📖 Aya of the Day",
        duaTitle: "🤲 Dua of the Day",
        timesTitle: "🕌 Prayer Times Today",
        fajr: "Fajr", sunrise: "Sunrise", dhuhr: "Dhuhr", asr: "Asr", maghrib: "Maghrib", isha: "Isha",
        statusSync: "Synced Successfully - Times are now 100% accurate",
        statusGPS: "Please Enable GPS",
        btnGPS: '<i class="fas fa-location-arrow"></i> Locate Me & Update Times',
        monthTitle: "📅 Ramadan Schedule 2026",
        source: "Source: Aladhan API (Accurate global time)",
        sourceUsed: "Source Used: Aladhan API",
        syncCity: "Location Set: City",
        syncCountry: ", Country",
        monthDesc: "Complete prayer times table for 30 days",
        selContinent: "🌍 Select Continent", selCountry: "🏳️ Select Country", selCity: "🏙️ Select City",
        tableDate: "Date", tableRamadan: "Ramadan", tableDay: "Day",
        footer: "Ramadan Kareem 🌙 Accurate Times God Willing",
        devName: "Osama Ahmed ✦", devRole: "Frontend Developer & UI/UX Designer",
        devDesc: "I'm always happy to hear your feedback and suggestions. Connect with me via:",
        audioPlay: "Play Audio", audioMute: "Mute Audio",
        langBtn: "Language / اللغة",
        loading: "Searching...", success: "Success", error: "Error Occurred",
        gpsConnecting: "Connecting to satellites...",
        gpsSearching: "Searching for your location...",
        gpsDetermining: "Determining...",
        gpsFound: "You were found in:",
        gpsUpdated: "Prayer times updated based on your location",
        errFetch: "Error fetching data",
        fetchingCity: "Fetching times for",
        rdTitle: "🌍 Ramadan Start Around the World",
        rdSubtitle: "First day of fasting as announced by each country",
        rdWedLabel: "Fasting starts Wednesday",
        rdWedDate: "February 18, 2026",
        rdThuLabel: "Fasting starts Thursday",
        rdThuDate: "February 19, 2026",
        rdPendingLabel: "Feb 19 or 20",
        rdPendingDate: "Awaiting crescent sighting Wednesday evening",
        rdCountries: {
            sa: "Saudi Arabia", ae: "UAE", qa: "Qatar", kw: "Kuwait", bh: "Bahrain", ye: "Yemen",
            iq: "Iraq", sy: "Syria", lb: "Lebanon", ps: "Palestine",
            sn: "Senegal", mr: "Mauritania", ml: "Mali", bf: "Burkina Faso", ci: "Ivory Coast", gw: "Guinea-Bissau",
            td: "Chad", ne: "Niger", ng: "Nigeria", so: "Somalia", sd: "Sudan", dj: "Djibouti",
            af: "Afghanistan", az: "Azerbaijan", mv: "Maldives",
            eg: "Egypt", ly: "Libya", tn: "Tunisia", dz: "Algeria", ma: "Morocco",
            jo: "Jordan", tr: "Turkey", om: "Oman", iq: "Iraq",
            ir: "Iran", pk: "Pakistan", in: "India", bd: "Bangladesh", lk: "Sri Lanka", np: "Nepal",
            ph: "Philippines", th: "Thailand", id: "Indonesia", my: "Malaysia", bn: "Brunei", sg: "Singapore", jp: "Japan", cn: "China",
            gb: "United Kingdom", fr: "France", de: "Germany", nl: "Netherlands", be: "Belgium", es: "Spain",
            it: "Italy", se: "Sweden", no: "Norway", dk: "Denmark", ba: "Bosnia", al: "Albania", ru: "Russia",
            us: "United States", ca: "Canada", br: "Brazil", ar2: "Argentina",
            au: "Australia", nz: "New Zealand", gh: "Ghana", cm: "Cameroon", za: "South Africa"
        },
        rdRegions: {
            rgGulf: "\ud83c\udfd6\ufe0f Arabian Gulf", rgMashreq: "\ud83d\udd4c Arab Mashreq", rgAfricaWed: "\ud83c\udf0d Africa", rgCentralAsia: "\ud83c\udfd4\ufe0f Central Asia",
            rgNorthAfrica: "\ud83c\udf0d North Africa", rgMashreqThu: "\ud83d\udd4c Mashreq & Gulf", rgAsia: "\ud83c\udf0f Asia",
            rgEurope: "\ud83c\udf0d Europe", rgEuropeThu: "\ud83c\udf0d Europe", rgAmericas: "\ud83c\udf0e Americas", rgAmericasWed: "\ud83c\udf0e Americas", rgOceania: "\ud83c\udf0a Oceania & Africa"
        },
        rdNote: "\u26a0\ufe0f Some mosques in Europe & Americas follow Saudi sighting (Feb 18)",
        rdCountText: "countries identified",
        rdWedCount: "24 countries",
        rdThuCount: "45 countries",
        rdLikely: "(Likely)"
    }
};

let currentLang = 'ar';

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const t = translations[currentLang];
    const isAr = currentLang === 'ar';

 
    document.documentElement.lang = currentLang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';

    
    document.title = t.title;
    updateText('.main-title', t.title);
    updateText('.welcome-msg', t.welcome);
    updateText('.verse-text', t.verse);
    updateText('.verse-ref', t.verseSrc);
    updateText('.box-label', t.verseTitle, 0);
    updateText('.box-label', t.duaTitle, 1);
    updateText('.section-title', t.timesTitle, 0);
    updateText('.section-title', t.monthTitle, 1);
    updateText('.section-desc', t.monthDesc);

    
    const labels = document.querySelectorAll('.prayer-label');
    if (labels.length >= 6) {
        labels[0].textContent = t.fajr; labels[1].textContent = t.sunrise;
        labels[2].textContent = t.dhuhr; labels[3].textContent = t.asr;
        labels[4].textContent = t.maghrib; labels[5].textContent = t.isha;
    }

    const btn = document.querySelector('.sync-btn');
    if (btn) btn.innerHTML = t.btnGPS;

    const selCont = document.getElementById('continent').options[0];
    const selCount = document.getElementById('country').options[0];
    const selCity = document.getElementById('city').options[0];
    if (selCont) selCont.textContent = t.selContinent;
    if (selCount) selCount.textContent = t.selCountry;
    if (selCity) selCity.textContent = t.selCity;

    const ths = document.querySelectorAll('th');
    if (ths.length >= 9) {
        ths[0].textContent = t.tableDate; ths[1].textContent = t.tableRamadan; ths[2].textContent = t.tableDay;
        ths[3].textContent = t.fajr; ths[4].textContent = t.sunrise; ths[5].textContent = t.dhuhr;
        ths[6].textContent = t.asr; ths[7].textContent = t.maghrib; ths[8].textContent = t.isha;
    }

    document.querySelector('footer').textContent = t.footer;

    updateText('.dev-name', t.devName);
    updateText('.dev-role', t.devRole);
    updateText('.dev-desc', t.devDesc);

    updateText('.prayer-title', t.timesTitle);
    updateText('#status', t.statusSync);
    updateText('.source-hint', t.source); 

   
    const banners = document.querySelectorAll('.location-banner b');
    if (banners.length >= 2) {
        const bannerContainers = document.querySelectorAll('.location-banner');
        bannerContainers.forEach(b => {
            if (b.textContent.includes('تم ضبط') || b.textContent.includes('Location Set')) {
                const city = b.querySelector('b:nth-of-type(1)')?.textContent || '';
                const country = b.querySelector('b:nth-of-type(2)')?.textContent || '';
                b.innerHTML = `<i class="fas fa-check-circle" style="color:#22c55e"></i> ${t.syncCity} <b>${city}</b>${t.syncCountry} <b>${country}</b>
                                <span class="source-hint">${t.sourceUsed}</span>`;
            }
        });
    }

    const lBtn = document.getElementById('langBtn');
    if (lBtn) lBtn.textContent = isAr ? 'En' : 'Ar';

    
    updateText('#rdTitle', t.rdTitle)
    updateText('#rdSubtitle', t.rdSubtitle);
    document.querySelectorAll('.rd-wed-label').forEach(el => el.textContent = t.rdWedLabel);
    document.querySelectorAll('.rd-wed-date').forEach(el => el.textContent = t.rdWedDate);
    document.querySelectorAll('.rd-thu-label').forEach(el => el.textContent = t.rdThuLabel);
    document.querySelectorAll('.rd-thu-date').forEach(el => el.textContent = t.rdThuDate);
    document.querySelectorAll('.rd-country').forEach(el => {
        const key = el.getAttribute('data-key');
        if (t.rdCountries && t.rdCountries[key]) {
            el.textContent = t.rdCountries[key];
        }
    });
    document.querySelectorAll('.rd-region').forEach(el => {
        const key = el.getAttribute('data-key');
        if (t.rdRegions && t.rdRegions[key]) {
            el.textContent = t.rdRegions[key];
        }
    });
    const rdNoteEl = document.getElementById('rdNote');
    if (rdNoteEl && t.rdNote) rdNoteEl.textContent = t.rdNote;
    const rdCountTextEl = document.getElementById('rdCountText');
    if (rdCountTextEl) rdCountTextEl.textContent = t.rdCountText;
    const wedCountEl = document.getElementById('wedCount');
    if (wedCountEl) wedCountEl.textContent = t.rdWedCount;
    const thuCountEl = document.getElementById('thuCount');
    if (thuCountEl) thuCountEl.textContent = t.rdThuCount;
    document.querySelectorAll('.rd-likely').forEach(el => el.textContent = t.rdLikely);

    if (typeof showDailyDua === 'function') showDailyDua();
    if (typeof renderAll === 'function') renderAll();
}

function updateText(selector, text, index = 0) {
    const els = document.querySelectorAll(selector);
    if (els[index]) els[index].textContent = text;
}
