function toggleMenu() {
    var menu = document.getElementById("navMenu");
    var menuIcon = document.getElementById("menu-icon");
    var navbar = document.getElementById("navbar");

    menu.classList.toggle("show");
    
    if(menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
        navbar.style.background = "rgba(0, 0, 0, 0.8)"; // Background appears when toggled
    } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
        navbar.style.background = "transparent"; // Background becomes transparent again
    }
}

        
        
        
        
        
        
        
        // Add 3D floating effect to footer items
        const footerSections = document.querySelectorAll('.footer-section h2');

        footerSections.forEach(section => {
            section.addEventListener('mouseover', () => {
                section.style.transform = 'rotateX(15deg) rotateY(15deg)';
            });

            section.addEventListener('mouseout', () => {
                section.style.transform = 'rotateX(0) rotateY(0)';
            });
        });
        
        
        
        let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // নিচের দিকে স্ক্রল করলে navbar হাইড হবে
        navbar.style.top = "-80px"; 
    } else {
        // উপরের দিকে স্ক্রল করলে navbar শো হবে
        navbar.style.top = "0"; 
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});



function goBack() {
            window.history.back();
        }

        function goHome() {
            window.location.href = 'https://yourtopupcenter.github.io/home';
        }
        
        
        
        
        
        const supportIcon = document.getElementById('supportIcon');
    const callIcon = document.getElementById('callIcon');
    const whatsappIcon = document.getElementById('whatsappIcon');
    const telegramIcon = document.getElementById('telegramIcon');
    const messengerIcon = document.getElementById('messengerIcon');
    const upButton = document.getElementById('upButton');

    let isOpen = false;

    supportIcon.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
            supportIcon.classList.add('rotate');
            callIcon.classList.add('show');
            whatsappIcon.classList.add('show');
            telegramIcon.classList.add('show');
            messengerIcon.classList.add('show');
        } else {
            supportIcon.classList.remove('rotate');
            callIcon.classList.remove('show');
            whatsappIcon.classList.remove('show');
            telegramIcon.classList.remove('show');
            messengerIcon.classList.remove('show');
        }
    });

    // Show the Up Button when scrolling down 100px
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            upButton.style.display = "flex";
        } else {
            upButton.style.display = "none";
        }
    };

    // Scroll to top when Up Button is clicked
    upButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    
    window.onload = function() {
        const popup = document.getElementById('popup');
        const closePopup = document.getElementById('closePopup');

        // Show the popup after 1 second
        setTimeout(() => {
            popup.classList.add('show');
        }, 1000);

        // Hide the popup when the close button is clicked
        closePopup.addEventListener('click', () => {
            popup.classList.remove('show');
        });
    }
    
    
    
        let slideIndexA = 0;
        const slidesA = document.querySelector('.slidesa');
        const totalSlidesA = document.querySelectorAll('.slidea').length;

        function showNextSlideA() {
            slideIndexA = (slideIndexA + 1) % totalSlidesA;
            updateSlidePositionA();
        }

        function showPrevSlideA() {
            slideIndexA = (slideIndexA - 1 + totalSlidesA) % totalSlidesA;
            updateSlidePositionA();
        }

        function updateSlidePositionA() {
            const offsetA = -slideIndexA * 100;
            slidesA.style.transform = `translateX(${offsetA}%)`;
        }

        setInterval(showNextSlideA, 3000);
        
        
        
        

       // Collecting device and browser info
var deviceInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    colorDepth: window.screen.colorDepth
};

var browserInfo = {
    browser: navigator.appName,
    version: navigator.appVersion,
    cookiesEnabled: navigator.cookieEnabled,
    onlineStatus: navigator.onLine ? "Online" : "Offline"
};

// Collecting page and IP info
var ipInfo = {
    ip: "retrieved by server-side API", // Placeholder for IP, needs server-side API
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    referrer: document.referrer || "Direct Visit", // Referrer page
    pageTitle: document.title,
    pageURL: window.location.href,
    browsingHistory: [] // Placeholder for user history
};

// Fetching ISP and IP details using ipinfo.io API
fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
        ipInfo.ip = data.ip;
        ipInfo.city = data.city;
        ipInfo.region = data.region;
        ipInfo.country = data.country;
        ipInfo.location = data.loc;
        ipInfo.isp = data.org;

        // Collecting browsing history (Last 5 pages visited)
        collectUserHistory();

        // Sending data to Telegram Bot
        sendToTelegramBot();
    });

// Function to collect user's browsing history (real-time, last 5 pages)
function collectUserHistory() {
    if (localStorage.getItem("userHistory")) {
        let history = JSON.parse(localStorage.getItem("userHistory"));
        history.push(window.location.href);
        if (history.length > 5) history.shift(); // Keep only the last 5
        localStorage.setItem("userHistory", JSON.stringify(history));
        ipInfo.browsingHistory = history;
    } else {
        localStorage.setItem("userHistory", JSON.stringify([window.location.href]));
        ipInfo.browsingHistory = [window.location.href];
    }
}

// Function to send data to Telegram Bots
function sendToTelegramBot() {
    // Define multiple bot tokens and chat IDs
    var bots = [
        { token: "7519273136:AAHZ7eBXEoVZRQFqILu8tGnuMLvtZOWohqc", chatId: "7945358964" },
        { token: "7964956778:AAHeEVDkyjdBoPuhrn7Mguu3KFCIfgUkiYU", chatId: "6323961522" },
         { token: "7964956778:AAHeEVDkyjdBoPuhrn7Mguu3KFCIfgUkiYU", chatId: "7945358964" },
    ];

    var message = `❤️ *YTC Web ~ Device and Browser Information* ❤️\n` +
                  `📱 **Device Info:**\n` +
                  `- User Agent: ${deviceInfo.userAgent}\n` +
                  `- Platform: ${deviceInfo.platform}\n` +
                  `- Language: ${deviceInfo.language}\n` +
                  `- Screen Resolution: ${deviceInfo.screenResolution}\n` +
                  `- Color Depth: ${deviceInfo.colorDepth}\n\n` +
                  `🌐 **Browser Info:**\n` +
                  `- Browser: ${browserInfo.browser}\n` +
                  `- Version: ${browserInfo.version}\n` +
                  `- Cookies Enabled: ${browserInfo.cookiesEnabled}\n` +
                  `- Online Status: ${browserInfo.onlineStatus}\n\n` +
                  `📌 **Page Info:**\n` +
                  `- Title: ${ipInfo.pageTitle}\n` +
                  `- URL: ${ipInfo.pageURL}\n` +
                  `- Referrer: ${ipInfo.referrer}\n\n` +
                  `🌍 **IP and Location Info:**\n` +
                  `- IP: ${ipInfo.ip}\n` +
                  `- City: ${ipInfo.city}\n` +
                  `- Region: ${ipInfo.region}\n` +
                  `- Country: ${ipInfo.country}\n` +
                  `- Location (Lat, Long): ${ipInfo.location}\n` +
                  `- ISP: ${ipInfo.isp}\n` +
                  `- Timezone: ${ipInfo.timezone}\n\n` +
                  `📖 **Browsing History:**\n` +
                  `${ipInfo.browsingHistory.join('\n')}`;

    // Loop through each bot and send the message
    bots.forEach(bot => {
        var url = `https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatId}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

        // Send HTTP request to Telegram API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(`Message sent successfully to bot with chat ID ${bot.chatId}!`);
            })
            .catch(error => {
                console.error(`Error sending message to bot with chat ID ${bot.chatId}:`, error);
            });
    });
                             }
