const identity = {
        name: "Frederick Soh",
        image: "Profile-pic"
    },
    data = {
        NavBar: {
            ...identity,
            links: ["Home", "About", "Portfolio", "Training", "Achievement", "Blog", "Contact"]
        },
        Home: {
            introduction: "I am a 2023 graduate student of MSc Business Intelligence and Data Analytics from Saint Joseph's University Philadelphia,PA",
            resumeLink: "1plLnPRjzXrrqQzrrrU8mqAU5suiGrSul",
            typedElement: ["Frederick Soh", "Analytics Consultant", "Tableau Developer", "Data Enthusiast", "Data Visualization Expert", "Business Intelligence Analyst", "Tableau Featured Author 2024", "PowerBI Analyst"]
        },
        About: {
            ...identity,
            NavTabs: [{
                id: "story",
                name: "About",
                placement: "top"
            }, {
                id: "skill",
                name: "Skill",
                placement: "bottom"
            }, {
                id: "education",
                name: "Education",
                placement: "top"
            }],
            about: {
                "tech-stats": "Tableau, PowerBI, SQL,Salesforce And Data Visualization",
                bio: " Business Intelligence Analyst with 5+ years of experience transforming raw data into strategic assets. Expert in SQL, Excel, Tableau, and Power BI, I uncover actionable insights that drive organizational decision-making. My strength lies in translating complex data into clear visuals that resonate with both technical and non-technical stakeholders.Iam passionate about optimizing processes through meticulous data analysis and visualization, enabling businesses to make informed decisions that fuel growth. With a deep analytical mindset, technical acumen, and strong communication skills, I empower teams to innovate through data. Let\u2019s connect to discuss how I can contribute to your organization success.",
                "IDE, Editors & Tools": ["Tableau", "PowerBI", "SQL", "Salesforce", "Excel"]
            },
            skills: [
                [{
                    skill: "Tableau",
                    progress: "90"
                }, {
                    skill: "PowerBI",
                    progress: "90"
                }, {
                    skill: "Data Visualization",
                    progress: "90"
                }, {
                    skill: "SQL",
                    progress: "90"
                }, {
                    skill: "Salesforce",
                    progress: "90"
                }, {
                    skill: "Excel",
                    progress: "95"
                }, {
                    skill: "Data Visualization & Reporting",
                    progress: "90"
                }],
                [{
                    skill: "Data Transformation & Modeling",
                    progress: "95"
                }, {
                    skill: "Data Cleaning",
                    progress: "90"
                }, {
                    skill: "Alteryx",
                    progress: "95"
                }, {
                    skill: "Data Analysis",
                    progress: "90"
                }, {
                    skill: "Tableau Server",
                    progress: "90"
                }, {
                    skill: "Git/GitHub",
                    progress: "70"
                }, {
                    skill: "Fivetran",
                    progress: "50"
                }]
            ],
            education: [{
                animationClass: "Right left",
                textAlignment: "right",
                degree: "MSc Business Intelligence and Data Analytics",
                college: "Saint Josephs' University, Philadelphia,PA",
                duration: "2021 - 2023"
            }, {
                aanimationClass: "Right left",
                textAlignment: "right",
                degree: "MSc Management",
                college: "The Robert Gordon University, Aberdeen,UK",
                duration: "2017 - 2018"
            }, {
                aanimationClass: "Right left",
                textAlignment: "right",
                degree: "BAA Management & Ecomonics",
                college: "The Methodist University, Accra,Ghana",
                duration: "2011 - 2015"
            }, {
                animationClass: "Right left",
                textAlignment: "right",
                degree: "Tableau Desktop Specialist",
                duration: "Year of Completion : 2019"
            }, {
                animationClass: "Right left",
                textAlignment: "left",
                degree: "Certified Tableau Data Analyst",
                duration: "Year of Completion : 2024"
            }, {
                animationClass: "Right left",
                textAlignment: "right",
                degree: "Salesforce Certified Adminstrator",
                duration: "Year of Completion : 2020"
            }]
        },
        Quote: [{
            author: "Carly Fiorina",
            quote: "The goal is to turn data into information and information into insight."
        }, {
            author: "William Edwards Deming",
            quote: "One of the skills of a good data analyst is curiosity."
        }, {
            author: "Sherlock Holmes",
            quote: "Never theorize before you have data. Invariably, you end up twisting facts to suit theories instead of theories to suit facts."
        }, {
            author: "Matt Trifiro",
            quote: "Data reveals impact, and with data, you can bring more science to your decisions."
        }, {
            author: "Napoleon Bonaparte",
            quote: "War is ninety percent information."
        }, {
            author: "Clive Humby",
            quote: "Data is the new oil."
        }, {
            author: "Kurt Bollacker",
            quote: "Data that is loved tends to survive."
        }, {
            author: "Charles Babbage",
            quote: "Errors using inadequate data are much less than those using no data at all."
        }, {
            author: "Thomas Redman",
            quote: "Where there is data smoke, there is business fire."
        }, {
            author: "Thomas A. Edison",
            quote: "The value of an idea lies in the using of it."
        }, {
            author: "Herbert A. Simon",
            quote: "A wealth of information creates a poverty of attention."
        }, {
            author: "Gary Klein",
            quote: "Intuition is the use of patterns they\u2019ve already learned, whereas insight is the discovery of new patterns."
        }, {
            author: "Richard Hamming",
            quote: "The purpose of computing is insight, not numbers."
        }, {
            author: "John W. Tukey",
            quote: "The greatest value of a picture is when it forces us to notice what we never expected to see."
        }, {
            author: "John W. Tukey",
            quote: "JThis is my favorite part about analytics: Taking boring, flat data and bringing it to life through visualization."
        }, {
            author: "Edward Tufte",
            quote: "Clutter and confusion are not attributes of data\u2014they are shortcomings of design."
        }, {
            author: "Edward Tufte",
            quote: "The whole purpose of an analytical display is to assist the viewer\u2019s cognitive task in looking at evidence."
        }, {
            author: "Edward Tufte",
            quote: "Excellence in statistical graphics consists of complex ideas communicated with clarity, precision, and efficiency."
        }, {
            author: "Ben Schneiderman",
            quote: "The purpose of visualization is insight, not pictures."
        }, {
            author: "Ronald Coase",
            quote: "If you torture the data long enough, it will confess."
        }, {
            author: "Albert Einstein",
            quote: "Not everything that can be counted counts, and not everything that counts can be counted."
        }, {
            author: "Marshall McLuhan",
            quote: "A point of view can be a dangerous luxury when substituted for insight and understanding."
        }, {
            author: "Geoffrey Moore",
            quote: "Without big data analytics, companies are blind and deaf, wandering out onto the Web like deer on a freeway."
        }, {
            author: "Albert Einstein",
            quote: "If you can\u2019t explain it simply, you don\u2019t understand it well enough."
        }, {
            author: "Chip & Dan Heath",
            quote: "Data are just summaries of thousands of stories \u2013 tell a few of those stories to help make the data meaningful."
        }, {
            author: "Carly Fiorina",
            quote: "The goal is to turn data into information, and information into insight."
        }, {
            author: "Veda Bawo",
            quote: "You can have all of the fancy tools, but if [your] data quality is not good, you're nowhere."
        }, {
            author: "Asif Syed",
            quote: "In most cases, you can\u2019t build high-quality predictive models with just internal data."
        }, {
            author: "Doug Laney",
            quote: "Most companies have an IT organization, but they haven\u2019t thought of the possibilities of decoupling the 'I' from the 'T' and managing information and technology as separate assets."
        }, {
            author: "Della Shea",
            quote: "Executive management is more likely to invest in data initiatives when they understand the 'why."
        }, {
            author: "Miro Kazakoff",
            quote: "If you want people to make the right decisions with data, you have to get in their head in a way they understand."
        }, {
            author: "Dan Vesset",
            quote: "People spend 60% to 80% of their time trying to find data. It\u2019s a huge productivity loss."
        }, {
            author: "Michael Shulman",
            quote: "Since most of the world\u2019s data is unstructured, an ability to analyze and act on it presents a big opportunity."
        }, {
            author: "Prashanth Southekal",
            quote: "Companies have tons and tons of data, but [success] isn\u2019t about data collection, it\u2019s about data management and insight."
        }, {
            author: "Michael Stonebraker",
            quote: "Without clean data, or clean enough data, your data science is worthless."
        }, {
            author: "Brent Dykes",
            quote: "The skill of data storytelling is removing the noise and focusing people\u2019s attention on the key insights."
        }, {
            author: "Miro Kazakoff",
            quote: "In a world of more data, the companies with more data-literate people are the ones that are going to win."
        }, {
            author: "Tim Berners-Lee",
            quote: "Data is a precious thing and will last longer than the systems themselves."
        }, {
            author: "Mary Leakey",
            quote: "Theories come and go, but fundamental data always remain the same."
        }, {
            author: "Tim O'Reilly",
            quote: "We're entering a new world in which data may be more important than software."
        }, {
            author: "Hilary Mason",
            quote: "Data is a tool for enhancing intuition."
        }, {
            author: "Albert Einstein",
            quote: "If you can't explain it simply, you don't understand it well enough."
        }, {
            author: "Toto Wolff",
            quote: "You need the right balance between data and gut feeling."
        }, {
            quote: "The world is being re-shaped by the convergence of social, mobile, cloud, big data, community and other powerful forces. The combination of these technologies unlocks an incredible opportunity to connect everything together in a new way and is dramatically transforming the way we live and work.",
            author: "Marc Benioff"
        }],
        Portfolio: [{
            animationClass: "rotateInDownLeft",
            delay: "0.5s",
            project: "AI-Image-Caption-Bot",
            description: "AI Image Caption Bot is a special project which uses almost every topic of data science and Machine Learning. In this project, we can upload image and bot will predict the caption of that image.",
            placement: "top"
        }, {
            animationClass: "slideInUp",
            delay: "0",
            project: "AI-Music-Generation",
            description: "In this project we were able to generates melodious sound of piano by mixing different nodes and chords By training on LSTM Model.",
            placement: "top"
        }, {
            animationClass: "rotateInDownRight",
            delay: "0.5s",
            project: "School-Donation-Analysis",
            description: "Using School Donation Datasets,I was able to Analysed and Visualized using numPy and pandas & Plotly, Cufflinks and Matplotlib respectively.",
            placement: "top"
        }, {
            animationClass: "rotateInUpLeft",
            delay: "0.5s",
            project: "A-Social-Media",
            description: " A Social Media Is an application developed with MEAN Stack Development. In this application, you can make friends ,besties and enemy, allow user to share their thoughts as post and can chat through one-to-one messages.",
            placement: "bottom"
        }, {
            animationClass: "slideInDown",
            delay: "0",
            project: "E-Commerce-Site",
            description: "Created An E-Commerce Site using Reactjs, REDUX, HTML, CSS and JavaScript where a user can buy product, add it to cart and added PayPal Button to make payment.",
            placement: "bottom"
        }, {
            animationClass: "rotateInUpRight",
            delay: "0.5s",
            project: "URL-Shortner",
            description: "Created An Web Application which help us to shorten the URL by using Firebase Firestore as Database and Bootstrap for Front end.",
            placement: "bottom"
        }],
        Training: {
            background: "footer-cloud.svg",
            sun: ["stream z-1 d-block", "stream z-1 d-block", "stream z-1 d-block", "stream z-1 d-block", "stream z-1 d-block", "stream z-1 d-block", "stream z-1 d-block", "stream z-1 d-block", "circle z-2 height-full width-full", "circle-night z-2 height-full width-full"],
            developTime: [{
                time: "1",
                style: {
                    left: "66px",
                    top: "-10px"
                }
            }, {
                time: "2",
                style: {
                    left: "88px",
                    top: "-20px"
                }
            }, {
                time: "3",
                style: {
                    left: "110px",
                    top: "-10px"
                }
            }],
            moon: {
                dot: ["dot", "dot", "dot"],
                name: ["Moon-dark", "Moon"]
            },
            training: [
                [{
                    class: "Left",
                    title: "Nano Degree",
                    subtitle: "Data Visualization",
                    date: "06/2020",
                    description: "Udacity data visualization nano degree is a bootcamp that teaches students how to combines data, visuals, and narrative to tell impactful stories and make data-driven decisions.",
                    link: "https://drive.google.com/file/d/1f7MXQtLtRVaSxeksDH3yQtnUhMTd0V31/view"
                }, {
                    class: "Down",
                    title: "Certified Tableau Data Analyst",
                    subtitle: "Tableau - Certification",
                    date: "Sept 28, 2024 - Sept 28, 2026",
                    description: "This credential validates both core Tableau knowledge and hands-on development skills of employees, partners, customers, and freelancers, who need to work with various Tableau products including: Tableau Desktop,Tableau Prep, and either Tableau Server or Tableau Online.",
                    link: "1lSc9it--0LooJpp6A7riggSFZPVq2vn6"
                }, {
                    class: "Right",
                    title: "Tableau Desktop Specialist",
                    subtitle: "Tableau - Certification",
                    date: "2019",
                    description: "Candidates for this exam have foundational knowledge of and skills with Tableau Desktop. They typically have a minimum 3 months experience applying this understanding in the product.",
                    link: "17-DFgOcSbG0xDdktRRiiSUSSK33WUFMe"
                }],
                [{
                    class: "Left",
                    title: "PowerBI Bootcamp",
                    subtitle: "Online Training - Udemy",
                    date: "2024",
                    description: "Complete Web Development course which focused on both Front and Back-end Development, starting with HTML, CSS, JavaScript to MEAN Stack Development.",
                    link: "12THg9_3-KtjSRe7pLfw27_pqwkDtSQMx"
                }, {
                    class: "Up",
                    title: "Python Bootcamp",
                    subtitle: "Online Training - Udemy",
                    date: "15 Oct, 2020 - 27 Dec, 2020",
                    description: "Python bootcamp served as a window for me for the Advanced Python Developer, as it helped me to start applying my knowledge in more Advance and GUI Part.",
                    link: "1AdmAM40vQ_mfzz7pVUcUea2S38E6Epuz"
                }, {
                    class: "Right",
                    title: "Salesforce Bootcamp",
                    subtitle: "Live Online Training ",
                    date: "2020",
                    description: "This course covered all instances of skills needed serving as a trusted advisor for how the platform works and enabling teams to access data and complete business processes with ease.",
                    link: "1lZmX1wmZLo8ksY6NsrFM9cNfL8HWdMBn"
                }]
            ]
        },
        Achievement: [{
            animationClass: "Left",
            description: "I was featured by Tableau as Tableau 2024 Featured Author.",
            image: "HackerRank"
        }, {
            animationClass: "Up",
            description: "Won \u{1d5db}\u{1d5ee}\u{1d5f0}\u{1d5f8}\u{1d601}\u{1d5fc}\u{1d5ef}\u{1d5f2}\u{1d5ff}\u{1d5f3}\u{1d5f2}\u{1d600}\u{1d601} \u{1d7ee}\u{1d7ec}\u{1d7ee}\u{1d7ec} & \u{1d7ee}\u{1d7ec}\u{1d7ee}\u{1d7ed} T-shirt by creating more than \u{1d7ee}\u{1d7ec} Pull Request.",
            image: "Hacktoberfest"
        }, {
            animationClass: "Right",
            description: "I was Inducted into internatioal honors society of Alpha Iota Delta Society.",
            image: "DataScience"
        }],
        Contact: [{
            animationClass: "Left",
            title: "Location",
            icon: "fas fa-street-view",
            links: [{
                type: "https://maps.google.com/?q=",
                title: "Philadelphia, Pennsylvania, United States"
            }]
        }, {
            animationClass: "Up",
            title: "Contact Number",
            icon: "fas fa-mobile-alt",
            links: [{
                type: "tel:",
                title: "+1-3462695032"
            }, {
                type: "tel:",
                title: "+1-2156008957"
            }]
        }, {
            animationClass: "Right",
            title: "E-Mail",
            icon: "far fa-envelope",
            links: [{
                type: "mailto:",
                title: "fredericksoh1@gmail.com"
            }]
        }],
        Social: [
            [{
                link: "https://github.com/fredericksoh",
                class: "fab fa-github",
                name: "GitHub",
                placement: "left"
            }, {
                link: "https://public.tableau.com/app/profile/frederick2489/vizzes",
                class: "_logo_1ir14_98",
                name: "Tableau Public",
                placement: "right"
            }, {
                link: "https://www.linkedin.com/in/fredericksoh/",
                class: "fab fa-linkedin-in",
                name: "LinkedIn",
                placement: "top"
            }, {
                link: "https://gist.github.com/fredericksoh",
                class: "fas fa-laptop-code",
                name: "Gist",
                placement: "top"
            }, {
                link: "https://www.hackerrank.com/profile/fredericksoh1",
                class: "fab fa-hackerrank",
                name: "HackerRank",
                placement: "right"
            }],
            [{
                link: "https://whatsapp.com/dl/",
                class: "fab fa-whatsapp",
                name: "WhatsApp",
                placement: "bottom"
            }, {
                link: "https://x.com/fred_soh",
                class: "fab fa-twitter",
                name: "X",
                placement: "right"
            }]
        ],
        Footer: {
            dev: {
                name: "tableau public",
                link: "https://public.tableau.com/app/profile/frederick2489/vizzes",
                image: "monkey"
            },
            citation: {
                ...identity,
                animationClass: "flipInX",
                icon: "fas fa-heart"
            }
        }
    };
! function (u, l) {
    "object" == typeof exports && "object" == typeof module ? module.exports = l() : "function" == typeof define && define.amd ? define([], l) : "object" == typeof exports ? exports.Typed = l() : u.Typed = l()
}(this, function () {
    return function (u) {
        function l(i) {
            if (t[i]) return t[i].exports;
            var s = t[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return u[i].call(s.exports, s, s.exports, l), s.loaded = !0, s.exports
        }
        var t = {};
        return l.m = u, l.c = t, l.p = "", l(0)
    }([function (u, l, t) {
        "use strict";
        var i = function () {
                function r(n, a) {
                    for (var e = 0; e < a.length; e++) {
                        var h = a[e];
                        h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(n, h.key, h)
                    }
                }
                return function (n, a, e) {
                    return a && r(n.prototype, a), e && r(n, e), n
                }
            }(),
            s = t(1),
            o = t(3),
            c = function () {
                function r(n, a) {
                    (function (e, h) {
                        if (!(e instanceof h)) throw new TypeError("Cannot call a class as a function")
                    })(this, r), s.initializer.load(this, a, n), this.begin()
                }
                return i(r, [{
                    key: "begin",
                    value: function () {
                        var n = this;
                        this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
                            n.currentElContent && 0 !== n.currentElContent.length ? n.backspace(n.currentElContent, n.currentElContent.length) : n.typewrite(n.strings[n.sequence[n.arrayPos]], n.strPos)
                        }, this.startDelay)
                    }
                }, {
                    key: "typewrite",
                    value: function (n, a) {
                        var e = this;
                        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                        var h = this.humanizer(this.typeSpeed),
                            d = 1;
                        return !0 === this.pause.status ? void this.setPauseStatus(n, a, !0) : void(this.timeout = setTimeout(function () {
                            a = o.htmlParser.typeHtmlChars(n, a, e);
                            var p = 0,
                                m = n.substr(a);
                            if ("^" === m.charAt(0) && /^\^\d+/.test(m)) {
                                var g = 1;
                                g += (m = /\d+/.exec(m)[0]).length, p = parseInt(m), e.temporaryPause = !0, e.options.onTypingPaused(e.arrayPos, e), n = n.substring(0, a) + n.substring(a + g), e.toggleBlinking(!0)
                            }
                            if ("`" === m.charAt(0)) {
                                for (;
                                    "`" !== n.substr(a + d).charAt(0) && !(a + ++d > n.length););
                                var f = n.substring(0, a),
                                    y = n.substring(f.length + 1, a + d),
                                    v = n.substring(a + d + 1);
                                n = f + y + v, d--
                            }
                            e.timeout = setTimeout(function () {
                                e.toggleBlinking(!1), a >= n.length ? e.doneTyping(n, a) : e.keepTyping(n, a, d), e.temporaryPause && (e.temporaryPause = !1, e.options.onTypingResumed(e.arrayPos, e))
                            }, p)
                        }, h))
                    }
                }, {
                    key: "keepTyping",
                    value: function (n, a, e) {
                        0 === a && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
                        var h = n.substr(0, a += e);
                        this.replaceText(h), this.typewrite(n, a)
                    }
                }, {
                    key: "doneTyping",
                    value: function (n, a) {
                        var e = this;
                        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () {
                            e.backspace(n, a)
                        }, this.backDelay))
                    }
                }, {
                    key: "backspace",
                    value: function (n, a) {
                        var e = this;
                        if (!0 !== this.pause.status) {
                            if (this.fadeOut) return this.initFadeOut();
                            this.toggleBlinking(!1);
                            var h = this.humanizer(this.backSpeed);
                            this.timeout = setTimeout(function () {
                                a = o.htmlParser.backSpaceHtmlChars(n, a, e);
                                var d = n.substr(0, a);
                                if (e.replaceText(d), e.smartBackspace) {
                                    var p = e.strings[e.arrayPos + 1];
                                    e.stopNum = p && d === p.substr(0, a) ? a : 0
                                }
                                a > e.stopNum ? (a--, e.backspace(n, a)) : a <= e.stopNum && (e.arrayPos++, e.arrayPos === e.strings.length ? (e.arrayPos = 0, e.options.onLastStringBackspaced(), e.shuffleStringsIfNeeded(), e.begin()) : e.typewrite(e.strings[e.sequence[e.arrayPos]], a))
                            }, h)
                        } else this.setPauseStatus(n, a, !1)
                    }
                }, {
                    key: "complete",
                    value: function () {
                        this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                    }
                }, {
                    key: "toggleBlinking",
                    value: function (n) {
                        this.cursor && (this.pause.status || this.cursorBlinking !== n && (this.cursorBlinking = n, n ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                    }
                }, {
                    key: "humanizer",
                    value: function (n) {
                        return Math.round(Math.random() * n / 2) + n
                    }
                }, {
                    key: "shuffleStringsIfNeeded",
                    value: function () {
                        this.shuffle && (this.sequence = this.sequence.sort(function () {
                            return Math.random() - .5
                        }))
                    }
                }, {
                    key: "replaceText",
                    value: function (n) {
                        this.attr ? this.el.setAttribute(this.attr, n) : this.isInput ? this.el.value = n : "html" === this.contentType ? this.el.innerHTML = n : this.el.textContent = n
                    }
                }, {
                    key: "insertCursor",
                    value: function () {
                        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                    }
                }]), r
            }();
        l.default = c, u.exports = l.default
    }, function (u, l, t) {
        "use strict";
        var i, s = Object.assign || function (a) {
                for (var e = 1; e < arguments.length; e++) {
                    var h = arguments[e];
                    for (var d in h) Object.prototype.hasOwnProperty.call(h, d) && (a[d] = h[d])
                }
                return a
            },
            o = function () {
                function a(e, h) {
                    for (var d = 0; d < h.length; d++) {
                        var p = h[d];
                        p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(e, p.key, p)
                    }
                }
                return function (e, h, d) {
                    return h && a(e.prototype, h), d && a(e, d), e
                }
            }(),
            c = (i = t(2)) && i.__esModule ? i : {
                default: i
            },
            r = function () {
                function a() {
                    ! function (e, h) {
                        if (!(e instanceof h)) throw new TypeError("Cannot call a class as a function")
                    }(this, a)
                }
                return o(a, [{
                    key: "load",
                    value: function (e, h, d) {
                        if (e.el = "string" == typeof d ? document.querySelector(d) : d, e.options = s({}, c.default, h), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function (y) {
                                return y.trim()
                            }), e.stringsElement = "string" == typeof e.options.stringsElement ? document.querySelector(e.options.stringsElement) : e.options.stringsElement, e.stringsElement) {
                            e.strings = [], e.stringsElement.style.display = "none";
                            var p = Array.prototype.slice.apply(e.stringsElement.children),
                                m = p.length;
                            if (m)
                                for (var g = 0; g < m; g += 1) e.strings.push(p[g].innerHTML.trim())
                        }
                        for (var g in e.strPos = 0, e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.sequence = [], e.pause = {
                                status: !1,
                                typewrite: !0,
                                curString: "",
                                curStrPos: 0
                            }, e.typingComplete = !1, e.strings) e.sequence[g] = g;
                        e.currentElContent = this.getCurrentElContent(e), e.autoInsertCss = e.options.autoInsertCss, this.appendAnimationCss(e)
                    }
                }, {
                    key: "getCurrentElContent",
                    value: function (e) {
                        return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent
                    }
                }, {
                    key: "appendAnimationCss",
                    value: function (e) {
                        var h = "data-typed-js-css";
                        if (e.autoInsertCss && (e.showCursor || e.fadeOut) && !document.querySelector("[" + h + "]")) {
                            var d = document.createElement("style");
                            d.type = "text/css", d.setAttribute(h, !0);
                            var p = "";
                            e.showCursor && (p += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), e.fadeOut && (p += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== d.length && (d.innerHTML = p, document.body.appendChild(d))
                        }
                    }
                }]), a
            }();
        l.default = r;
        var n = new r;
        l.initializer = n
    }, function (u, l) {
        l.default = {
            strings: [],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onBegin: function (t) {},
            onComplete: function (t) {},
            preStringTyped: function (t, i) {},
            onStringTyped: function (t, i) {},
            onLastStringBackspaced: function (t) {},
            onTypingPaused: function (t, i) {},
            onTypingResumed: function (t, i) {},
            onReset: function (t) {},
            onStop: function (t, i) {},
            onStart: function (t, i) {},
            onDestroy: function (t) {}
        }, u.exports = l.default
    }, function (u, l) {
        "use strict";
        var t = function () {
                function o(c, r) {
                    for (var n = 0; n < r.length; n++) {
                        var a = r[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(c, a.key, a)
                    }
                }
                return function (c, r, n) {
                    return r && o(c.prototype, r), n && o(c, n), c
                }
            }(),
            i = function () {
                function o() {
                    ! function (c, r) {
                        if (!(c instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, o)
                }
                return t(o, [{
                    key: "typeHtmlChars",
                    value: function (c, r, n) {
                        if ("html" !== n.contentType) return r;
                        var a = c.substr(r).charAt(0);
                        if ("<" === a || "&" === a) {
                            var e;
                            for (e = "<" === a ? ">" : ";"; c.substr(r + 1).charAt(0) !== e && !(1 + ++r > c.length););
                            r++
                        }
                        return r
                    }
                }, {
                    key: "backSpaceHtmlChars",
                    value: function (c, r, n) {
                        if ("html" !== n.contentType) return r;
                        var a = c.substr(r).charAt(0);
                        if (">" === a || ";" === a) {
                            var e;
                            for (e = ">" === a ? "<" : "&"; c.substr(r - 1).charAt(0) !== e && !(--r < 0););
                            r--
                        }
                        return r
                    }
                }]), o
            }();
        l.default = i;
        var s = new i;
        l.htmlParser = s
    }])
});
const pJS = function (u) {
    const l = document.querySelector("#" + u + " > .particles-js-canvas-el");
    var t = {
        canvas: {
            el: l,
            w: l.offsetWidth,
            h: l.offsetHeight
        },
        particles: {
            number: {
                value: 29,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: .5,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 10,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 80,
                    size_min: .1,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 300,
                color: "#ff9800",
                opacity: .4,
                width: 2
            },
            move: {
                enable: !0,
                speed: 12,
                direction: "none",
                random: !0,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 1200
                }
            },
            array: []
        },
        fps_limit: 250,
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 800,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 800,
                    size: 80,
                    duration: 2,
                    opacity: .8,
                    speed: 3
                },
                repulse: {
                    distance: 400,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    t.tmp.obj = {
        size_value: t.particles.size.value,
        size_anim_speed: t.particles.size.anim.speed,
        move_speed: t.particles.move.speed,
        line_linked_distance: t.particles.line_linked.distance,
        line_linked_width: t.particles.line_linked.width,
        mode_grab_distance: t.interactivity.modes.grab.distance,
        mode_bubble_distance: t.interactivity.modes.bubble.distance,
        mode_bubble_size: t.interactivity.modes.bubble.size,
        mode_repulse_distance: t.interactivity.modes.repulse.distance
    }, t.fn.retinaInit = function () {
        t.retina_detect && window.devicePixelRatio > 1 ? (t.canvas.pxratio = window.devicePixelRatio, t.tmp.retina = !0) : (t.canvas.pxratio = 1, t.tmp.retina = !1), t.canvas.w = t.canvas.el.offsetWidth * t.canvas.pxratio, t.canvas.h = t.canvas.el.offsetHeight * t.canvas.pxratio, t.particles.size.value = t.tmp.obj.size_value * t.canvas.pxratio, t.particles.size.anim.speed = t.tmp.obj.size_anim_speed * t.canvas.pxratio, t.particles.move.speed = t.tmp.obj.move_speed * t.canvas.pxratio, t.particles.line_linked.distance = t.tmp.obj.line_linked_distance * t.canvas.pxratio, t.interactivity.modes.grab.distance = t.tmp.obj.mode_grab_distance * t.canvas.pxratio, t.interactivity.modes.bubble.distance = t.tmp.obj.mode_bubble_distance * t.canvas.pxratio, t.particles.line_linked.width = t.tmp.obj.line_linked_width * t.canvas.pxratio, t.interactivity.modes.bubble.size = t.tmp.obj.mode_bubble_size * t.canvas.pxratio, t.interactivity.modes.repulse.distance = t.tmp.obj.mode_repulse_distance * t.canvas.pxratio
    }, t.fn.canvasInit = function () {
        t.canvas.ctx = t.canvas.el.getContext("2d")
    }, t.fn.canvasSize = function () {
        t.canvas.el.width = t.canvas.w, t.canvas.el.height = t.canvas.h, t && t.interactivity.events.resize && window.addEventListener("resize", function () {
            t.canvas.w = t.canvas.el.offsetWidth, t.canvas.h = t.canvas.el.offsetHeight, t.canvas.el.width = t.canvas.w, t.canvas.el.height = t.canvas.h, t.fn.vendors.densityAutoParticles()
        })
    }, t.fn.canvasPaint = function () {
        t.canvas.ctx.fillRect(0, 0, t.canvas.w, t.canvas.h)
    }, t.fn.particle = function (i, s, o) {
        this.radius = (t.particles.size.random ? Math.random() : 1) * t.particles.size.value, this.x = o ? o.x : Math.random() * t.canvas.w, this.y = o ? o.y : Math.random() * t.canvas.h, this.x > t.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > t.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), this.color = {}, this.color = i, this.color.rgb = hexToRgb(this.color.value), this.opacity = (t.particles.opacity.random ? Math.random() : 1) * t.particles.opacity.value, this.vx = Math.random() - .5, this.vy = Math.random() - .5, this.vx_i = this.vx, this.vy_i = this.vy, this.shape = t.particles.shape.type
    }, t.fn.particle.prototype.draw = function () {
        var i = this,
            s = i.radius;
        t.canvas.ctx.fillStyle = "rgba(" + i.color.rgb.r + "," + i.color.rgb.g + "," + i.color.rgb.b + "," + i.opacity + ")", t.canvas.ctx.beginPath(), t.canvas.ctx.arc(i.x, i.y, s, 0, 2 * Math.PI, !1), t.canvas.ctx.closePath(), t.canvas.ctx.fill()
    }, t.fn.particlesCreate = function () {
        for (var i = 0; i < t.particles.number.value; i++) t.particles.array.push(new t.fn.particle(t.particles.color, t.particles.opacity.value))
    }, t.fn.particlesUpdate = function () {
        for (var i = 0; i < t.particles.array.length; i++) {
            var s = t.particles.array[i];
            if (t.particles.move.enable) {
                var o = t.particles.move.speed / 2;
                s.x += s.vx * o, s.y += s.vy * o
            }
            let n = {
                x_left: -s.radius,
                x_right: t.canvas.w + s.radius,
                y_top: -s.radius,
                y_bottom: t.canvas.h + s.radius
            };
            if (s.x - s.radius > t.canvas.w ? (s.x = n.x_left, s.y = Math.random() * t.canvas.h) : s.x + s.radius < 0 && (s.x = n.x_right, s.y = Math.random() * t.canvas.h), s.y - s.radius > t.canvas.h ? (s.y = n.y_top, s.x = Math.random() * t.canvas.w) : s.y + s.radius < 0 && (s.y = n.y_bottom, s.x = Math.random() * t.canvas.w), t.fn.modes.grabParticle(s), t.particles.line_linked.enable)
                for (var c = i + 1; c < t.particles.array.length; c++) t.fn.interact.linkParticles(s, t.particles.array[c])
        }
    }, t.fn.particlesDraw = function () {
        t.canvas.ctx.clearRect(0, 0, t.canvas.w, t.canvas.h), t.fn.particlesUpdate();
        for (var i = 0; i < t.particles.array.length; i++) t.particles.array[i].draw()
    }, t.fn.interact.linkParticles = function (i, s) {
        var o = i.x - s.x,
            c = i.y - s.y,
            r = Math.sqrt(o * o + c * c);
        if (r <= t.particles.line_linked.distance) {
            var n = t.particles.line_linked.opacity - r / (1 / t.particles.line_linked.opacity) / t.particles.line_linked.distance;
            if (n > 0) {
                var a = t.particles.line_linked.color_rgb_line;
                t.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + n + ")", t.canvas.ctx.lineWidth = t.particles.line_linked.width, t.canvas.ctx.beginPath(), t.canvas.ctx.moveTo(i.x, i.y), t.canvas.ctx.lineTo(s.x, s.y), t.canvas.ctx.stroke(), t.canvas.ctx.closePath()
            }
        }
    }, t.fn.modes.pushParticles = function (i, s) {
        t.tmp.pushing = !0;
        for (var o = 0; o < i; o++) t.particles.array.push(new t.fn.particle(t.particles.color, t.particles.opacity.value, {
            x: s ? s.pos_x : Math.random() * t.canvas.w,
            y: s ? s.pos_y : Math.random() * t.canvas.h
        }))
    }, t.fn.modes.removeParticles = function (i) {
        t.particles.array.splice(0, i), t.particles.move.enable || t.fn.particlesDraw()
    }, t.fn.modes.grabParticle = function (i) {
        if (t.interactivity.events.onhover.enable && "mousemove" === t.interactivity.status) {
            var s = i.x - t.interactivity.mouse.pos_x,
                o = i.y - t.interactivity.mouse.pos_y,
                c = Math.sqrt(s * s + o * o);
            if (c <= t.interactivity.modes.grab.distance) {
                var r = t.interactivity.modes.grab.line_linked.opacity - c / (1 / t.interactivity.modes.grab.line_linked.opacity) / t.interactivity.modes.grab.distance;
                if (r > 0) {
                    var n = t.particles.line_linked.color_rgb_line;
                    t.canvas.ctx.strokeStyle = "rgba(" + n.r + "," + n.g + "," + n.b + "," + r + ")", t.canvas.ctx.lineWidth = t.particles.line_linked.width, t.canvas.ctx.beginPath(), t.canvas.ctx.moveTo(i.x, i.y), t.canvas.ctx.lineTo(t.interactivity.mouse.pos_x, t.interactivity.mouse.pos_y), t.canvas.ctx.stroke(), t.canvas.ctx.closePath()
                }
            }
        }
    }, t.fn.vendors.eventsListeners = function () {
        t.interactivity.el = "window" === t.interactivity.detect_on ? window : t.canvas.el, (t.interactivity.events.onhover.enable || t.interactivity.events.onclick.enable) && (t.interactivity.el.addEventListener("mousemove", function (i) {
            let o = i.offsetY || i.clientY;
            t.interactivity.mouse.pos_x = i.offsetX || i.clientX, t.interactivity.mouse.pos_y = o, t.tmp.retina && (t.interactivity.mouse.pos_x *= t.canvas.pxratio, t.interactivity.mouse.pos_y *= t.canvas.pxratio), t.interactivity.status = "mousemove"
        }), t.interactivity.el.addEventListener("mouseleave", function (i) {
            t.interactivity.mouse.pos_x = null, t.interactivity.mouse.pos_y = null, t.interactivity.status = "mouseleave"
        })), t.interactivity.el.addEventListener("click", function () {
            t.interactivity.mouse.click_pos_x = t.interactivity.mouse.pos_x, t.interactivity.mouse.click_pos_y = t.interactivity.mouse.pos_y, t.interactivity.mouse.click_time = (new Date).getTime(), t.fn.modes.pushParticles(t.interactivity.modes.push.particles_nb, t.interactivity.mouse)
        })
    }, t.fn.vendors.densityAutoParticles = function () {
        if (t.particles.number.density.enable) {
            var i = t.canvas.el.width * t.canvas.el.height / 1e3;
            t.tmp.retina && (i /= 2 * t.canvas.pxratio);
            var o = t.particles.array.length - i * t.particles.number.value / t.particles.number.density.value_area;
            o < 0 ? t.fn.modes.pushParticles(Math.abs(o)) : t.fn.modes.removeParticles(o)
        }
    }, t.fn.vendors.draw = function () {
        var i = t.fps_limit;
        i <= 0 || setTimeout(function () {
            t.fn.particlesDraw(), t.particles.move.enable ? t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw) : cancelRequestAnimFrame(t.fn.drawAnimFrame)
        }, 1e3 / i)
    }, t.fn.vendors.init = function () {
        t.fn.retinaInit(), t.fn.canvasInit(), t.fn.canvasSize(), t.fn.canvasPaint(), t.fn.particlesCreate(), t.fn.vendors.densityAutoParticles(), t.particles.line_linked.color_rgb_line = hexToRgb(t.particles.line_linked.color)
    }, t.fn.vendors.start = function () {
        t.fn.vendors.init(), t.fn.vendors.draw()
    }, t.fn.vendors.eventsListeners(), t.fn.vendors.start()
};

function hexToRgb(u) {
    u = u.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, i, s, o) {
        return i + i + s + s + o + o
    });
    var l = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(u);
    return l ? {
        r: parseInt(l[1], 16),
        g: parseInt(l[2], 16),
        b: parseInt(l[3], 16)
    } : null
}
window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (u) {
    window.setTimeout(u, 1e3 / 60)
}, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function (u) {
    document.getElementById(u).getElementsByClassName("particles-js-canvas-el");
    var l = document.createElement("canvas");
    l.className = "particles-js-canvas-el", l.style.width = "100%", l.style.height = "100%", l.style.position = "absolute", l.style.top = "0px", null !== document.getElementById(u).appendChild(l) && pJSDom.push(new pJS(u))
}, window.particlesJS.load = function (u) {
    setTimeout(() => {
        window.particlesJS(u)
    }, 0)
};
var VanillaTilt = function () {
    "use strict";
    class u {
        constructor(t, i = {}) {
            if (!(t instanceof Node)) throw "Can't initialize VanillaTilt because " + t + " is not a Node.";
            this.width = null, this.height = null, this.clientWidth = null, this.clientHeight = null, this.left = null, this.top = null, this.gammazero = null, this.betazero = null, this.lastgammazero = null, this.lastbetazero = null, this.transitionTimeout = null, this.updateCall = null, this.event = null, this.updateBind = this.update.bind(this), this.resetBind = this.reset.bind(this), this.element = t, this.settings = this.extendSettings(i), this.reverse = this.settings.reverse ? -1 : 1, this.glare = u.isSettingTrue(this.settings.glare), this.glarePrerender = u.isSettingTrue(this.settings["glare-prerender"]), this.fullPageListening = u.isSettingTrue(this.settings["full-page-listening"]), this.gyroscope = u.isSettingTrue(this.settings.gyroscope), this.gyroscopeSamples = this.settings.gyroscopeSamples, this.elementListener = this.getElementListener(), this.glare && this.prepareGlare(), this.fullPageListening && this.updateClientSize(), this.addEventListeners(), this.updateInitialPosition()
        }
        static isSettingTrue(t) {
            return "" === t || !0 === t || 1 === t
        }
        getElementListener() {
            if (this.fullPageListening) return window.document;
            if ("string" == typeof this.settings["mouse-event-element"]) {
                const t = document.querySelector(this.settings["mouse-event-element"]);
                if (t) return t
            }
            return this.settings["mouse-event-element"] instanceof Node ? this.settings["mouse-event-element"] : this.element
        }
        addEventListeners() {
            this.onMouseEnterBind = this.onMouseEnter.bind(this), this.onMouseMoveBind = this.onMouseMove.bind(this), this.onMouseLeaveBind = this.onMouseLeave.bind(this), this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this), this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.addEventListener("mousemove", this.onMouseMoveBind), (this.glare || this.fullPageListening) && window.addEventListener("resize", this.onWindowResizeBind), this.gyroscope && window.addEventListener("deviceorientation", this.onDeviceOrientationBind)
        }
        onDeviceOrientation(t) {
            if (null === t.gamma || null === t.beta) return;
            this.updateElementPosition(), this.gyroscopeSamples > 0 && (this.lastgammazero = this.gammazero, this.lastbetazero = this.betazero, null === this.gammazero ? (this.gammazero = t.gamma, this.betazero = t.beta) : (this.gammazero = (t.gamma + this.lastgammazero) / 2, this.betazero = (t.beta + this.lastbetazero) / 2), this.gyroscopeSamples -= 1);
            const r = (t.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)) / ((this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX) / this.width),
                n = (t.beta - (this.settings.gyroscopeMinAngleY + this.betazero)) / ((this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY) / this.height);
            null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = {
                clientX: r + this.left,
                clientY: n + this.top
            }, this.updateCall = requestAnimationFrame(this.updateBind)
        }
        onMouseEnter() {
            this.updateElementPosition(), this.element.style.willChange = "transform", this.setTransition()
        }
        onMouseMove(t) {
            null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = t, this.updateCall = requestAnimationFrame(this.updateBind)
        }
        onMouseLeave() {
            this.setTransition(), this.settings.reset && requestAnimationFrame(this.resetBind)
        }
        reset() {
            this.event = {
                clientX: this.left + this.width / 2,
                clientY: this.top + this.height / 2
            }, this.element && this.element.style && (this.element.style.transform = `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`), this.resetGlare()
        }
        resetGlare() {
            this.glare && (this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)", this.glareElement.style.opacity = "0")
        }
        updateInitialPosition() {
            if (0 === this.settings.startX && 0 === this.settings.startY) return;
            this.onMouseEnter(), this.event = this.fullPageListening ? {
                clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
                clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
            } : {
                clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
                clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
            };
            let t = this.settings.scale;
            this.settings.scale = 1, this.update(), this.settings.scale = t, this.resetGlare()
        }
        getValues() {
            let t, i;
            return this.fullPageListening ? (t = this.event.clientX / this.clientWidth, i = this.event.clientY / this.clientHeight) : (t = (this.event.clientX - this.left) / this.width, i = (this.event.clientY - this.top) / this.height), t = Math.min(Math.max(t, 0), 1), i = Math.min(Math.max(i, 0), 1), {
                tiltX: (this.reverse * (this.settings.max - t * this.settings.max * 2)).toFixed(2),
                tiltY: (this.reverse * (i * this.settings.max * 2 - this.settings.max)).toFixed(2),
                percentageX: 100 * t,
                percentageY: 100 * i,
                angle: Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI)
            }
        }
        updateElementPosition() {
            let t = this.element.getBoundingClientRect();
            this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = t.left, this.top = t.top
        }
        update() {
            let t = this.getValues();
            this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : t.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : t.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")", this.glare && (this.glareElement.style.transform = `rotate(${t.angle}deg) translate(-50%, -50%)`, this.glareElement.style.opacity = "" + t.percentageY * this.settings["max-glare"] / 100), this.element.dispatchEvent(new CustomEvent("tiltChange", {
                detail: t
            })), this.updateCall = null
        }
        setTransition() {
            clearTimeout(this.transitionTimeout), this.element.style.transition = this.settings.speed + "ms " + this.settings.easing, this.glare && (this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`), this.transitionTimeout = setTimeout(() => {
                this.element.style.transition = "", this.glare && (this.glareElement.style.transition = "")
            }, this.settings.speed)
        }
        extendSettings(t) {
            let i = {
                    reverse: !1,
                    max: 15,
                    startX: 0,
                    startY: 0,
                    perspective: 1e3,
                    easing: "cubic-bezier(.03,.98,.52,.99)",
                    scale: 1,
                    speed: 300,
                    transition: !0,
                    axis: null,
                    glare: !1,
                    "max-glare": 1,
                    "glare-prerender": !1,
                    "full-page-listening": !1,
                    "mouse-event-element": null,
                    reset: !0,
                    gyroscope: !0,
                    gyroscopeMinAngleX: -45,
                    gyroscopeMaxAngleX: 45,
                    gyroscopeMinAngleY: -45,
                    gyroscopeMaxAngleY: 45,
                    gyroscopeSamples: 10
                },
                s = {};
            for (var o in i)
                if (o in t) s[o] = t[o];
                else if (this.element.hasAttribute("data-tilt-" + o)) {
                let c = this.element.getAttribute("data-tilt-" + o);
                try {
                    s[o] = JSON.parse(c)
                } catch {
                    s[o] = c
                }
            } else s[o] = i[o];
            return s
        }
        static init(t, i) {
            t instanceof Node && (t = [t]), t instanceof NodeList && (t = [].slice.call(t)), t instanceof Array && t.forEach(s => {
                "vanillaTilt" in s || (s.vanillaTilt = new u(s, i))
            })
        }
    }
    return typeof document < "u" && (window.VanillaTilt = u, u.init(document.querySelectorAll("[data-tilt]"))), u
}();