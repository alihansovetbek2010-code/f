// Real Kazakhstani Universities Data
const universitiesData = [
    {
        id: 1,
        name: "Al-Farabi Kazakh National University (KazNU)",
        city: "Almaty",
        type: "Public",
        rating: 4.8,
        fields: ["Engineering", "IT", "Science", "Business", "Law", "Medicine", "Arts", "Education"],
        description: "Founded in 1934, KazNU is the oldest and largest university in Kazakhstan. Named after the great philosopher Al-Farabi, it is a leading research institution with 16 faculties, 4 institutes, and over 20,000 students. The university is ranked among the top 200 universities in QS World University Rankings and is a member of the Association of Universities of Central Asia.",
        price: "800,000 - 1,200,000 KZT/year",
        languages: ["Kazakh", "Russian", "English"],
        students: 20000,
        faculties: 16,
        programs: 180,
        international: 2500,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Established in 1934 as Kazakh State University, it was renamed in honor of Al-Farabi in 1991. The university has produced numerous prominent alumni including scientists, politicians, and business leaders.",
        mission: "To provide world-class education, conduct cutting-edge research, and contribute to the development of Kazakhstan and Central Asia.",
        achievements: [
            "Ranked 165th in QS World University Rankings 2024",
            "Member of the Association of Universities of Central Asia",
            "Over 250 international partnerships",
            "State-of-the-art research laboratories",
            "Strong focus on innovation and entrepreneurship"
        ],
        leadership: "Rector: Zhanseit Tuimebayev, PhD in Physics and Mathematics",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"
    },
    {
        id: 2,
        name: "Nazarbayev University",
        city: "Astana",
        type: "Public",
        rating: 4.9,
        fields: ["Engineering", "IT", "Business", "Medicine", "Science", "Social Sciences", "Education"],
        description: "Established in 2010, Nazarbayev University is Kazakhstan's flagship research university modeled after top international institutions. It offers English-language programs and follows international academic standards. The university collaborates with leading global universities including University of Cambridge, University of Wisconsin-Madison, and Duke University.",
        price: "Free (State grants available)",
        languages: ["English", "Kazakh"],
        students: 6000,
        faculties: 7,
        programs: 45,
        international: 500,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Founded in 2010 by the first President of Kazakhstan, Nursultan Nazarbayev, as part of the country's modernization strategy. The university was designed to become a world-class research institution.",
        mission: "To become a world-class research university that contributes to the development of Kazakhstan and serves as a model for higher education in Central Asia.",
        achievements: [
            "Ranked 230th in QS World University Rankings 2024",
            "Partnerships with top 20 world universities",
            "State-of-the-art campus with modern facilities",
            "100% English-language instruction",
            "Strong research output and international recognition"
        ],
        leadership: "President: Shigeo Katsu, Former World Bank Vice President",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop"
    },
    {
        id: 3,
        name: "Kazakh National Technical University named after K.I. Satpayev (KazNRTU)",
        city: "Almaty",
        type: "Public",
        rating: 4.6,
        fields: ["Engineering", "IT", "Architecture", "Mining", "Geology", "Energy"],
        description: "Founded in 1934, KazNRTU is Kazakhstan's premier technical university specializing in engineering, mining, and technology. Named after the renowned geologist Kanysh Satpayev, the university has strong industry connections and produces highly skilled engineers for Kazakhstan's industrial sector.",
        price: "600,000 - 900,000 KZT/year",
        languages: ["Kazakh", "Russian", "English"],
        students: 15000,
        faculties: 12,
        programs: 65,
        international: 800,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Established in 1934 as the Kazakh Mining and Metallurgical Institute, it was renamed in honor of Kanysh Satpayev in 1999. The university has been instrumental in developing Kazakhstan's engineering workforce.",
        mission: "To provide high-quality technical education and conduct research that supports Kazakhstan's industrial and technological development.",
        achievements: [
            "Leading technical university in Central Asia",
            "Strong partnerships with major industrial companies",
            "Modern laboratories and research facilities",
            "High employment rate for graduates",
            "Active participation in international engineering competitions"
        ],
        leadership: "Rector: Beibit Shokparov, Doctor of Technical Sciences",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop"
    },
    {
        id: 4,
        name: "KIMEP University",
        city: "Almaty",
        type: "Private",
        rating: 4.7,
        fields: ["Business", "IT", "Law", "Economics", "Public Administration", "Journalism"],
        description: "Established in 1992, KIMEP (Kazakhstan Institute of Management, Economics and Strategic Research) is Central Asia's leading private university specializing in business and economics. It offers American-style education with English as the primary language of instruction. KIMEP is accredited by ACBSP and has partnerships with over 100 international universities.",
        price: "1,800,000 - 2,800,000 KZT/year",
        languages: ["English", "Kazakh", "Russian"],
        students: 3500,
        faculties: 5,
        programs: 30,
        international: 200,
        exchange: "Yes",
        dormitory: "Limited",
        scholarship: "Yes",
        history: "Founded in 1992 as Kazakhstan's first private university, KIMEP was established to provide Western-style business education. It has grown to become a leading institution in Central Asia.",
        mission: "To provide world-class education in business, economics, and related fields, preparing students for leadership roles in Kazakhstan and globally.",
        achievements: [
            "ACBSP accredited business programs",
            "Partnerships with 100+ international universities",
            "Strong alumni network in business and government",
            "Modern campus in the heart of Almaty",
            "High graduate employment rates"
        ],
        leadership: "President: Chan Young Bang, PhD in Economics",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop"
    },
    {
        id: 5,
        name: "Karaganda Medical University",
        city: "Karaganda",
        type: "Public",
        rating: 4.5,
        fields: ["Medicine", "Pharmacy", "Dentistry", "Public Health", "Nursing"],
        description: "Founded in 1950, Karaganda Medical University is one of Kazakhstan's leading medical institutions. The university offers comprehensive medical education with strong clinical training programs. It has partnerships with medical universities in Russia, Europe, and Asia, and produces highly qualified healthcare professionals.",
        price: "900,000 - 1,500,000 KZT/year",
        languages: ["Kazakh", "Russian", "English"],
        students: 8500,
        faculties: 6,
        programs: 25,
        international: 600,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Established in 1950 as Karaganda State Medical Institute, it became a university in 1997. The institution has trained thousands of doctors and healthcare professionals for Kazakhstan and neighboring countries.",
        mission: "To provide excellent medical education and conduct research that improves healthcare in Kazakhstan and Central Asia.",
        achievements: [
            "WHO recognized medical programs",
            "Modern clinical training facilities",
            "Partnerships with leading medical universities",
            "Strong research in public health",
            "High pass rates on medical licensing exams"
        ],
        leadership: "Rector: Raushan Dosmagambetova, Doctor of Medical Sciences",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop"
    },
    {
        id: 6,
        name: "Suleyman Demirel University (SDU)",
        city: "Almaty",
        type: "Private",
        rating: 4.4,
        fields: ["Engineering", "Business", "IT", "Law", "Education", "Arts"],
        description: "Established in 1996, SDU is a private university named after the former Turkish Prime Minister Suleyman Demirel. The university offers modern education with a focus on innovation and entrepreneurship. It has a beautiful campus and strong international connections, particularly with Turkish universities.",
        price: "1,200,000 - 2,000,000 KZT/year",
        languages: ["English", "Kazakh", "Turkish"],
        students: 4500,
        faculties: 7,
        programs: 35,
        international: 300,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Limited",
        history: "Founded in 1996 with support from Turkey, SDU was named in honor of Suleyman Demirel. The university combines Kazakh and Turkish educational traditions.",
        mission: "To provide quality education that prepares students for successful careers while fostering cultural exchange between Kazakhstan and Turkey.",
        achievements: [
            "Modern campus with excellent facilities",
            "Strong Turkish-Kazakh cultural programs",
            "Active student exchange programs",
            "Focus on innovation and entrepreneurship",
            "Growing reputation in Central Asia"
        ],
        leadership: "Rector: Meiram Begentayev, PhD",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
    },
    {
        id: 7,
        name: "L.N. Gumilyov Eurasian National University",
        city: "Astana",
        type: "Public",
        rating: 4.6,
        fields: ["Humanities", "Social Sciences", "Natural Sciences", "Engineering", "IT", "Economics"],
        description: "Founded in 1996, ENU is named after the prominent historian Lev Gumilyov. Located in the capital city Astana, it is one of Kazakhstan's leading universities with a focus on Eurasian studies, humanities, and social sciences. The university has strong research programs and international partnerships.",
        price: "700,000 - 1,100,000 KZT/year",
        languages: ["Kazakh", "Russian", "English"],
        students: 18000,
        faculties: 13,
        programs: 120,
        international: 1200,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Established in 1996 in Astana (now Nur-Sultan), ENU was created to become a leading university in the capital. Named after Lev Gumilyov, a prominent historian and ethnologist.",
        mission: "To provide comprehensive education and conduct research that contributes to understanding Eurasian culture, history, and development.",
        achievements: [
            "Leading university in the capital",
            "Strong programs in Eurasian studies",
            "Modern campus facilities",
            "Active international cooperation",
            "High research output"
        ],
        leadership: "Rector: Yerlan Sydykov, Doctor of Historical Sciences",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop"
    },
    {
        id: 8,
        name: "Kazakh National Pedagogical University named after Abai",
        city: "Almaty",
        type: "Public",
        rating: 4.5,
        fields: ["Education", "Pedagogy", "Psychology", "Arts", "Languages", "Social Sciences"],
        description: "Founded in 1928, Abai University is Kazakhstan's premier teacher training institution. Named after the great Kazakh poet and educator Abai Kunanbayev, the university specializes in preparing teachers and educators. It has a rich history and strong tradition in pedagogical education.",
        price: "500,000 - 800,000 KZT/year",
        languages: ["Kazakh", "Russian"],
        students: 12000,
        faculties: 10,
        programs: 80,
        international: 400,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Established in 1928 as the Kazakh Pedagogical Institute, it was renamed in honor of Abai Kunanbayev in 1991. The university has trained generations of teachers for Kazakhstan.",
        mission: "To prepare highly qualified teachers and educators who contribute to the development of education in Kazakhstan.",
        achievements: [
            "Leading teacher training institution",
            "Strong tradition in pedagogical education",
            "Modern teaching methods and technologies",
            "Active research in education",
            "High employment rate for graduates"
        ],
        leadership: "Rector: Darkhan Bilyalov, Doctor of Pedagogical Sciences",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"
    },
    {
        id: 9,
        name: "Kazakh National Agrarian Research University",
        city: "Almaty",
        type: "Public",
        rating: 4.3,
        fields: ["Agriculture", "Veterinary", "Food Science", "Environmental Science", "Engineering"],
        description: "Established in 1930, this is Kazakhstan's leading agricultural university. It specializes in agricultural sciences, veterinary medicine, and food technology. The university has strong connections with agricultural industries and research institutions worldwide.",
        price: "600,000 - 900,000 KZT/year",
        languages: ["Kazakh", "Russian"],
        students: 10000,
        faculties: 8,
        programs: 45,
        international: 300,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Founded in 1930 as the Kazakh Agricultural Institute, it has been instrumental in developing Kazakhstan's agricultural sector.",
        mission: "To advance agricultural education and research to support sustainable development in Kazakhstan.",
        achievements: [
            "Leading agricultural research institution",
            "Strong industry partnerships",
            "Modern agricultural facilities",
            "International research collaborations",
            "High graduate employment in agriculture sector"
        ],
        leadership: "Rector: Tlektes Yespolov, Doctor of Agricultural Sciences",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop"
    },
    {
        id: 10,
        name: "Kazakh National Conservatory named after Kurmangazy",
        city: "Almaty",
        type: "Public",
        rating: 4.6,
        fields: ["Music", "Arts", "Performing Arts", "Cultural Studies"],
        description: "Founded in 1944, this is Central Asia's premier music and arts conservatory. Named after the great Kazakh composer Kurmangazy Sagyrbayuly, it offers world-class training in music, performing arts, and cultural studies.",
        price: "700,000 - 1,000,000 KZT/year",
        languages: ["Kazakh", "Russian"],
        students: 2000,
        faculties: 4,
        programs: 30,
        international: 150,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Established in 1944, the conservatory has produced many renowned musicians and artists who have contributed to Kazakh and world culture.",
        mission: "To preserve and develop Kazakh musical traditions while embracing international artistic excellence.",
        achievements: [
            "Premier music institution in Central Asia",
            "World-renowned faculty",
            "State-of-the-art performance facilities",
            "International recognition",
            "Alumni performing globally"
        ],
        leadership: "Rector: Aiman Mussakhajayeva, Honored Artist of Kazakhstan",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
    },
    {
        id: 11,
        name: "Kazakh University of Economics, Finance and International Trade",
        city: "Astana",
        type: "Public",
        rating: 4.4,
        fields: ["Economics", "Finance", "Business", "International Trade", "Accounting"],
        description: "Established in 1963, this university specializes in economics, finance, and international trade. It is one of Kazakhstan's leading institutions for business and economic education, with strong connections to financial institutions and international trade organizations.",
        price: "800,000 - 1,200,000 KZT/year",
        languages: ["Kazakh", "Russian", "English"],
        students: 11000,
        faculties: 6,
        programs: 50,
        international: 500,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Founded in 1963 as the Institute of National Economy, it has evolved into a comprehensive university focusing on economics and finance.",
        mission: "To prepare highly qualified specialists in economics, finance, and international trade for Kazakhstan's growing economy.",
        achievements: [
            "Leading economics and finance institution",
            "Strong partnerships with financial sector",
            "Modern business education facilities",
            "High employment rate in finance sector",
            "Active international programs"
        ],
        leadership: "Rector: Yerlan Sydykov, Doctor of Economic Sciences",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    },
    {
        id: 12,
        name: "Kazakh National University of Arts",
        city: "Astana",
        type: "Public",
        rating: 4.5,
        fields: ["Fine Arts", "Design", "Architecture", "Fashion", "Media Arts"],
        description: "Founded in 2001, this is Kazakhstan's premier university for visual and applied arts. It offers comprehensive programs in fine arts, design, architecture, fashion, and media arts, preparing students for creative careers.",
        price: "900,000 - 1,300,000 KZT/year",
        languages: ["Kazakh", "Russian", "English"],
        students: 3500,
        faculties: 5,
        programs: 35,
        international: 200,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Established in 2001 to meet the growing demand for arts education in Kazakhstan. The university has quickly become a leading institution for creative arts.",
        mission: "To nurture creative talent and prepare artists and designers who contribute to Kazakhstan's cultural and creative industries.",
        achievements: [
            "Premier arts institution",
            "Modern studios and workshops",
            "International faculty and guest artists",
            "Student exhibitions and competitions",
            "Strong industry connections"
        ],
        leadership: "Rector: Aigul Nurgaliyeva, Honored Artist of Kazakhstan",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
    },
    {
        id: 13,
        name: "International IT University",
        city: "Almaty",
        type: "Private",
        rating: 4.7,
        fields: ["IT", "Computer Science", "Software Engineering", "Data Science", "Cybersecurity"],
        description: "Established in 2009, IITU is Kazakhstan's leading IT-focused university. It offers cutting-edge programs in computer science, software engineering, data science, and cybersecurity. The university has strong partnerships with major tech companies and focuses on practical, industry-relevant education.",
        price: "1,500,000 - 2,200,000 KZT/year",
        languages: ["English", "Kazakh", "Russian"],
        students: 2500,
        faculties: 3,
        programs: 20,
        international: 300,
        exchange: "Yes",
        dormitory: "Limited",
        scholarship: "Yes",
        history: "Founded in 2009 with a vision to create Kazakhstan's premier IT education institution. The university has quickly gained recognition for its innovative programs.",
        mission: "To prepare world-class IT professionals who drive innovation and digital transformation in Kazakhstan and globally.",
        achievements: [
            "Leading IT education institution",
            "Partnerships with major tech companies",
            "State-of-the-art computer labs",
            "High employment rate in tech sector",
            "Active participation in international IT competitions"
        ],
        leadership: "Rector: Damir Shynarbekov, PhD in Computer Science",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
    },
    {
        id: 14,
        name: "Kazakh National Academy of Arts named after T. Zhurgenov",
        city: "Almaty",
        type: "Public",
        rating: 4.4,
        fields: ["Theater", "Cinema", "Television", "Journalism", "Media"],
        description: "Founded in 1955, this academy is Kazakhstan's premier institution for theater, cinema, and media arts. Named after the renowned Kazakh actor Toleubek Zhurgenov, it has produced many famous actors, directors, and media professionals.",
        price: "800,000 - 1,100,000 KZT/year",
        languages: ["Kazakh", "Russian"],
        students: 1500,
        faculties: 4,
        programs: 25,
        international: 100,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Established in 1955, the academy has been the training ground for Kazakhstan's most prominent actors, directors, and media professionals.",
        mission: "To preserve and develop Kazakh theater and cinema traditions while embracing modern media technologies.",
        achievements: [
            "Premier theater and cinema institution",
            "Alumni in leading roles in Kazakh cinema",
            "Modern production facilities",
            "International film festival participation",
            "Strong connections to media industry"
        ],
        leadership: "Rector: Askar Nurgaliyev, Honored Artist of Kazakhstan",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop"
    },
    {
        id: 15,
        name: "Kazakh-British Technical University",
        city: "Almaty",
        type: "Private",
        rating: 4.6,
        fields: ["Engineering", "IT", "Business", "Management", "Finance"],
        description: "Established in 2001, KBTU is a private university offering British-style education in Kazakhstan. It combines Kazakh and British educational traditions, offering programs in engineering, IT, business, and management with strong international focus.",
        price: "1,400,000 - 2,000,000 KZT/year",
        languages: ["English", "Kazakh", "Russian"],
        students: 4000,
        faculties: 5,
        programs: 30,
        international: 250,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Limited",
        history: "Founded in 2001 as a joint Kazakh-British educational initiative, combining the best of both educational systems.",
        mission: "To provide British-quality education adapted to Kazakhstan's context, preparing globally competitive professionals.",
        achievements: [
            "British educational standards",
            "International faculty",
            "Modern campus facilities",
            "Strong industry partnerships",
            "High graduate employability"
        ],
        leadership: "Rector: Kuanyshbek Yessekeyev, PhD",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
    },
    {
        id: 16,
        name: "Karaganda State University named after E.A. Buketov",
        city: "Karaganda",
        type: "Public",
        rating: 4.4,
        fields: ["Natural Sciences", "Mathematics", "Physics", "Chemistry", "Biology", "Education"],
        description: "Founded in 1972, this university is one of Kazakhstan's leading institutions for natural sciences and education. Named after the prominent scientist E.A. Buketov, it offers strong programs in mathematics, physics, chemistry, and biology.",
        price: "600,000 - 900,000 KZT/year",
        languages: ["Kazakh", "Russian"],
        students: 13000,
        faculties: 9,
        programs: 60,
        international: 400,
        exchange: "Yes",
        dormitory: "Yes",
        scholarship: "Yes",
        history: "Established in 1972, the university has been a center of scientific excellence in Central Kazakhstan.",
        mission: "To provide high-quality education in natural sciences and prepare qualified specialists for Kazakhstan's scientific and educational sectors.",
        achievements: [
            "Strong natural sciences programs",
            "Active research in various scientific fields",
            "Modern laboratories",
            "International scientific collaborations",
            "High-quality teacher training"
        ],
        leadership: "Rector: Nurlan Dulatbekov, Doctor of Physical and Mathematical Sciences",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop"
    }
];

// Programs Data
const programsData = {
    1: [
        { name: "Computer Science (Bachelor's)", level: "bachelor", duration: "4 years", language: "English, Kazakh, Russian", description: "Comprehensive program covering software development, algorithms, data structures, artificial intelligence, and computer systems. Prepares students for careers in IT industry." },
        { name: "Mechanical Engineering (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Engineering program focusing on mechanical systems, design, manufacturing, and automation. Strong industry connections." },
        { name: "Business Administration (Master's)", level: "master", duration: "2 years", language: "English, Kazakh", description: "Advanced business management program with focus on international business, strategy, and leadership." },
        { name: "Data Science (Master's)", level: "master", duration: "2 years", language: "English", description: "Advanced program in data analytics, machine learning, and big data processing. Prepares for careers in data science." },
        { name: "Law (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Comprehensive legal education covering Kazakhstani and international law." },
        { name: "Medicine (Bachelor's)", level: "bachelor", duration: "6 years", language: "Kazakh, Russian, English", description: "Medical degree program with clinical training. Prepares students for medical practice." }
    ],
    2: [
        { name: "Computer Science (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "World-class computer science program following international standards. Strong focus on research and innovation." },
        { name: "Business Administration (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "International business program with focus on entrepreneurship and global business practices." },
        { name: "Medicine (Bachelor's)", level: "bachelor", duration: "6 years", language: "English", description: "Medical degree program with modern curriculum and clinical training. Partnership with leading medical schools." },
        { name: "Engineering (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "Engineering program with specialization in mechanical, electrical, or civil engineering." },
        { name: "Economics (Master's)", level: "master", duration: "2 years", language: "English", description: "Advanced economics program with focus on applied economics and policy analysis." }
    ],
    3: [
        { name: "Civil Engineering (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Civil engineering and construction program. Strong focus on infrastructure development and building design." },
        { name: "Electrical Engineering (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Electrical and electronic engineering program. Prepares for careers in power systems and electronics." },
        { name: "Mining Engineering (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Specialized program in mining engineering, mineral processing, and mine safety." },
        { name: "Information Technology (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian, English", description: "IT program focusing on software development, networks, and information systems." },
        { name: "Geology (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Geological sciences program with focus on mineral exploration and earth sciences." }
    ],
    4: [
        { name: "Business Administration (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "ACBSP accredited business program with focus on management, marketing, finance, and entrepreneurship." },
        { name: "Economics (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "Economics program with strong analytical focus. Prepares for careers in finance, consulting, and policy." },
        { name: "Accounting and Finance (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "Professional accounting program preparing for CPA and other certifications." },
        { name: "MBA (Master's)", level: "master", duration: "2 years", language: "English", description: "Master of Business Administration program for working professionals and recent graduates." },
        { name: "Public Administration (Master's)", level: "master", duration: "2 years", language: "English", description: "Program preparing for careers in government and public sector management." }
    ],
    5: [
        { name: "General Medicine (Bachelor's)", level: "bachelor", duration: "6 years", language: "Kazakh, Russian, English", description: "Comprehensive medical degree program with extensive clinical training. Prepares for medical practice." },
        { name: "Pharmacy (Bachelor's)", level: "bachelor", duration: "5 years", language: "Kazakh, Russian", description: "Pharmacy program covering pharmaceutical sciences, drug development, and pharmacy practice." },
        { name: "Dentistry (Bachelor's)", level: "bachelor", duration: "5 years", language: "Kazakh, Russian", description: "Dental medicine program with clinical training in all aspects of dentistry." },
        { name: "Public Health (Master's)", level: "master", duration: "2 years", language: "Kazakh, Russian", description: "Public health program focusing on epidemiology, health policy, and community health." },
        { name: "Nursing (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Nursing program preparing for professional nursing practice in various healthcare settings." }
    ],
    6: [
        { name: "Computer Engineering (Bachelor's)", level: "bachelor", duration: "4 years", language: "English, Kazakh", description: "Computer engineering program with focus on hardware and software integration." },
        { name: "Business Administration (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "Business program with Turkish-Kazakh cultural focus and international business emphasis." },
        { name: "International Relations (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "Program focusing on international relations, diplomacy, and global affairs." },
        { name: "Architecture (Bachelor's)", level: "bachelor", duration: "5 years", language: "English, Kazakh", description: "Architecture program with focus on sustainable design and modern construction." }
    ],
    7: [
        { name: "International Relations (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian, English", description: "Program focusing on Eurasian studies, international relations, and diplomacy." },
        { name: "History (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "History program with specialization in Central Asian and Eurasian history." },
        { name: "Journalism (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Journalism program preparing for careers in media and communications." },
        { name: "Economics (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Economics program with focus on economic development and policy." }
    ],
    8: [
        { name: "Pedagogy (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Teacher education program preparing for careers in primary and secondary education." },
        { name: "Psychology (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Psychology program with focus on educational and developmental psychology." },
        { name: "Kazakh Language and Literature (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh", description: "Program focusing on Kazakh language, literature, and culture." },
        { name: "Fine Arts (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Fine arts program covering painting, sculpture, and visual arts." }
    ],
    9: [ // Kazakh National Agrarian Research University
        { name: "Agronomy (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Agricultural science program focusing on crop production and soil management." },
        { name: "Veterinary Medicine (Bachelor's)", level: "bachelor", duration: "5 years", language: "Kazakh, Russian", description: "Veterinary medicine program preparing for careers in animal health." },
        { name: "Food Technology (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Food science and technology program covering food processing and safety." },
        { name: "Agricultural Engineering (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Engineering program specializing in agricultural machinery and systems." }
    ],
    10: [ // Kazakh National Conservatory
        { name: "Music Performance (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Professional music performance program with specialization in various instruments." },
        { name: "Music Composition (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Music composition and theory program for aspiring composers." },
        { name: "Conducting (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Orchestral and choral conducting program." },
        { name: "Music Education (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Music education program preparing for teaching careers." }
    ],
    11: [ // Kazakh University of Economics, Finance and International Trade
        { name: "Economics (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian, English", description: "Economics program with focus on economic theory and policy." },
        { name: "Finance (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian, English", description: "Finance program covering banking, investment, and financial management." },
        { name: "International Trade (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian, English", description: "International trade and business program." },
        { name: "Accounting (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Professional accounting program." }
    ],
    12: [ // Kazakh National University of Arts
        { name: "Fine Arts (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian, English", description: "Fine arts program covering painting, drawing, and sculpture." },
        { name: "Graphic Design (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian, English", description: "Graphic design and visual communication program." },
        { name: "Architecture (Bachelor's)", level: "bachelor", duration: "5 years", language: "Kazakh, Russian, English", description: "Architecture program with focus on sustainable design." },
        { name: "Fashion Design (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian, English", description: "Fashion design and textile program." }
    ],
    13: [ // International IT University
        { name: "Software Engineering (Bachelor's)", level: "bachelor", duration: "4 years", language: "English, Kazakh, Russian", description: "Software engineering program with focus on modern development practices." },
        { name: "Data Science (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "Data science and analytics program." },
        { name: "Cybersecurity (Bachelor's)", level: "bachelor", duration: "4 years", language: "English, Kazakh", description: "Cybersecurity and information security program." },
        { name: "Artificial Intelligence (Master's)", level: "master", duration: "2 years", language: "English", description: "Advanced AI and machine learning program." }
    ],
    14: [ // Kazakh National Academy of Arts
        { name: "Theater Arts (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Theater performance and directing program." },
        { name: "Cinema and Television (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Film and television production program." },
        { name: "Journalism (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Journalism and media communications program." },
        { name: "Acting (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Professional acting program." }
    ],
    15: [ // Kazakh-British Technical University
        { name: "Petroleum Engineering (Bachelor's)", level: "bachelor", duration: "4 years", language: "English, Kazakh", description: "Petroleum engineering program with focus on oil and gas industry." },
        { name: "Business Administration (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "Business administration program with British standards." },
        { name: "Information Systems (Bachelor's)", level: "bachelor", duration: "4 years", language: "English, Kazakh", description: "Information systems and technology program." },
        { name: "Finance and Accounting (Bachelor's)", level: "bachelor", duration: "4 years", language: "English", description: "Finance and accounting program." }
    ],
    16: [ // Karaganda State University
        { name: "Mathematics (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Mathematics program with focus on pure and applied mathematics." },
        { name: "Physics (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Physics program covering theoretical and experimental physics." },
        { name: "Chemistry (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Chemistry program with focus on organic and inorganic chemistry." },
        { name: "Biology (Bachelor's)", level: "bachelor", duration: "4 years", language: "Kazakh, Russian", description: "Biology program covering various biological sciences." }
    ]
};

// Global variables
let currentUniversityId = null;
let currentPrograms = [];

// Page Navigation Functions
function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    
    // Show selected page
        const pageMap = {
        'home': 'homePage',
        'virtual-tour': 'virtualTourPage',
        'compare': 'comparePage',
        'news': 'newsPage',
        'faq': 'faqPage',
        'register': 'registerPage',
        'pricing': 'pricingPage',
        'contact': 'contactPage',
        'university-detail': 'universityDetailPage'
    };
    
    const pageId = pageMap[pageName] || 'homePage';
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block';
        window.scrollTo(0, 0);
    }
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });
    
    // Initialize page-specific content
    if (pageName === 'home') {
        displayUniversities(universitiesData);
    } else if (pageName === 'compare') {
        setupComparePage();
    } else if (pageName === 'register') {
        setupRegistrationPage();
    } else if (pageName === 'virtual-tour') {
        setupVirtualTour();
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            if (page) {
                showPage(page);
            }
        });
    });

    // Initialize homepage
    displayUniversities(universitiesData);
    setupFilters();
    setupSearch();
    
    // Setup registration page
    setupRegistrationPage();
    
    // Setup virtual tour
    setupVirtualTour();
    
    // Check user subscription
    checkUserSubscription();
});

// Display universities
function displayUniversities(universities) {
    const grid = document.getElementById('universitiesGrid');
    const noResults = document.getElementById('noResults');
    
    if (!grid) return;

    if (universities.length === 0) {
        grid.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';
    grid.innerHTML = '';

    universities.forEach(uni => {
        const card = createUniversityCard(uni);
        grid.appendChild(card);
    });
}

// Create university card
function createUniversityCard(uni) {
    const card = document.createElement('div');
    card.className = 'university-card';
    card.onclick = () => viewUniversityDetail(uni.id);

    const fieldsHTML = uni.fields.slice(0, 3).map(field => 
        `<span class="field-tag">${field}</span>`
    ).join('');

    const stars = '★'.repeat(Math.floor(uni.rating)) + '☆'.repeat(5 - Math.floor(uni.rating));
    const imageUrl = uni.image || `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&sig=${uni.id}`;

    card.innerHTML = `
        <div class="university-image-container">
            <img src="${imageUrl}" alt="${uni.name}" class="university-image" onerror="this.src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'">
        </div>
        <h3 class="university-name">${uni.name}</h3>
        <p class="university-city">📍 ${uni.city}</p>
        <div class="university-fields">${fieldsHTML}</div>
        <p class="university-description">${uni.description.substring(0, 150)}...</p>
        <div class="university-rating">
            <span class="rating-stars">${stars}</span>
            <span>${uni.rating}</span>
        </div>
        <p class="university-price">💰 ${uni.price}</p>
        <div class="university-actions">
            <button class="btn btn-primary" onclick="event.stopPropagation(); viewUniversityDetail(${uni.id})">View Details</button>
            <button class="btn btn-secondary" onclick="event.stopPropagation(); addToCompare(${uni.id})">Compare</button>
        </div>
    `;

    return card;
}

// View university detail
function viewUniversityDetail(id) {
    currentUniversityId = id;
    loadUniversityDetails(id);
    showPage('university-detail');
}

// Setup filters
function setupFilters() {
    const filterInputs = ['filterCity', 'filterField', 'filterType', 'filterLanguage', 'filterBudget'];
    
    filterInputs.forEach(filterId => {
        const filter = document.getElementById(filterId);
        if (filter) {
            filter.addEventListener('change', applyFilters);
        }
    });
}

// Apply filters
function applyFilters() {
    const city = document.getElementById('filterCity')?.value || '';
    const field = document.getElementById('filterField')?.value || '';
    const type = document.getElementById('filterType')?.value || '';
    const language = document.getElementById('filterLanguage')?.value || '';
    const budget = document.getElementById('filterBudget')?.value || '';

    let filtered = universitiesData.filter(uni => {
        if (city && uni.city !== city) return false;
        if (type && uni.type !== type) return false;
        if (field && !uni.fields.includes(field)) return false;
        if (language && !uni.languages.includes(language)) return false;
        if (budget) {
            if (budget === 'free' && !uni.price.includes('Free')) return false;
            if (budget === 'low' && uni.price.includes('1,500,000')) return false;
            if (budget === 'medium' && (uni.price.includes('Free') || uni.price.includes('2,500'))) return false;
            if (budget === 'high' && !uni.price.includes('2,000')) return false;
        }
        return true;
    });

    displayUniversities(filtered);
}

// Reset filters
function resetFilters() {
    document.getElementById('filterCity').value = '';
    document.getElementById('filterField').value = '';
    document.getElementById('filterType').value = '';
    document.getElementById('filterLanguage').value = '';
    document.getElementById('filterBudget').value = '';
    displayUniversities(universitiesData);
}

// Setup search
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', performSearch);
    }
}

// Perform search
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        displayUniversities(universitiesData);
        return;
    }

    const filtered = universitiesData.filter(uni => {
        return uni.name.toLowerCase().includes(query) ||
               uni.city.toLowerCase().includes(query) ||
               uni.fields.some(f => f.toLowerCase().includes(query)) ||
               uni.description.toLowerCase().includes(query);
    });

    displayUniversities(filtered);
}

// Sort universities
function sortUniversities() {
    const sortSelect = document.getElementById('sortBy');
    if (!sortSelect) return;
    
    const sortBy = sortSelect.value;
    let sorted = [...universitiesData];

    switch(sortBy) {
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'city':
            sorted.sort((a, b) => a.city.localeCompare(b.city));
            break;
        case 'price':
            sorted.sort((a, b) => {
                const aPrice = a.price.includes('Free') ? 0 : parseInt(a.price.replace(/[^\d]/g, ''));
                const bPrice = b.price.includes('Free') ? 0 : parseInt(b.price.replace(/[^\d]/g, ''));
                return aPrice - bPrice;
            });
            break;
    }

    displayUniversities(sorted);
}

// Scroll to search
function scrollToSearch() {
    const searchSection = document.getElementById('searchSection');
    if (searchSection) {
        searchSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Load university details
function loadUniversityDetails(id) {
    const uni = universitiesData.find(u => u.id === parseInt(id));
    if (!uni) return;

    // Update header
    document.getElementById('universityName').textContent = uni.name;
    document.getElementById('universityCity').textContent = uni.city;
    document.getElementById('universityRating').textContent = '★'.repeat(Math.floor(uni.rating)) + '☆'.repeat(5 - Math.floor(uni.rating)) + ' ' + uni.rating;
    document.getElementById('universityType').textContent = uni.type;
    
    // Update logo/image
    const logoEl = document.getElementById('universityLogo');
    if (logoEl && uni.image) {
        logoEl.innerHTML = `<img src="${uni.image}" alt="${uni.name}" class="university-header-image" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'logo-placeholder\\'>${uni.name.charAt(0)}</div>'">`;
    }

    // Update statistics
    document.getElementById('statStudents').textContent = uni.students.toLocaleString() + '+';
    document.getElementById('statFaculties').textContent = uni.faculties;
    document.getElementById('statPrograms').textContent = uni.programs + '+';
    document.getElementById('statInternational').textContent = uni.international + '+';

    // Update history, mission, achievements, leadership
    if (uni.history) {
        document.getElementById('historyText').textContent = uni.history;
    }
    if (uni.mission) {
        document.getElementById('missionText').textContent = uni.mission;
    }
    if (uni.achievements) {
        const achievementsList = document.getElementById('achievementsList');
        achievementsList.innerHTML = uni.achievements.map(ach => `<li>${ach}</li>`).join('');
    }
    if (uni.leadership) {
        document.getElementById('leadershipText').innerHTML = `<strong>${uni.leadership}</strong>`;
    }

    // Update tuition
    document.getElementById('tuitionFee').textContent = uni.price;

    // Load programs
    if (programsData[id]) {
        currentPrograms = programsData[id];
        displayPrograms(programsData[id]);
    }

    // Update contact info
    document.getElementById('contactAddress').textContent = `${uni.city}, Kazakhstan`;
    document.getElementById('contactPhone').textContent = '+7 (XXX) XXX-XX-XX';
    document.getElementById('contactEmail').textContent = `info@${uni.name.toLowerCase().replace(/\s+/g, '').replace(/[()]/g, '')}.kz`;
    document.getElementById('admissionPhone').textContent = '+7 (XXX) XXX-XX-XX';
    document.getElementById('admissionEmail').textContent = `admission@${uni.name.toLowerCase().replace(/\s+/g, '').replace(/[()]/g, '')}.kz`;
    document.getElementById('internationalPhone').textContent = '+7 (XXX) XXX-XX-XX';
    document.getElementById('internationalEmail').textContent = `international@${uni.name.toLowerCase().replace(/\s+/g, '').replace(/[()]/g, '')}.kz`;
}

// Display programs
function displayPrograms(programs) {
    const programsList = document.getElementById('programsList');
    if (!programsList) return;

    programsList.innerHTML = programs.map(program => `
        <div class="program-item" data-level="${program.level}">
            <h3>${program.name}</h3>
            <p><strong>Duration:</strong> ${program.duration}</p>
            <p><strong>Language:</strong> ${program.language}</p>
            <p>${program.description}</p>
        </div>
    `).join('');
}

// Filter programs
function filterPrograms(level) {
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(chip => chip.classList.remove('active'));
    event.target.classList.add('active');
    
    const items = document.querySelectorAll('.program-item');
    items.forEach(item => {
        if (level === 'all' || item.dataset.level === level) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Switch tab
function switchTab(tabName) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none';
    });
    
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');
    document.getElementById(tabName).style.display = 'block';
}

// Add to compare
function addToCompare(id) {
    const subscription = JSON.parse(localStorage.getItem('userSubscription') || '{"plan":"free"}');
    const compareList = JSON.parse(localStorage.getItem('compareList') || '[]');
    const maxCompare = subscription.plan === 'free' ? 2 : (subscription.plan === 'pro' ? 5 : 999);
    
    if (compareList.length >= maxCompare) {
        if (subscription.plan === 'free') {
            if (confirm('Free plan allows comparing only 2 universities. Upgrade to Pro ($50/month) to compare up to 5 universities. Would you like to upgrade?')) {
                showPage('pricing');
            }
        } else {
            alert(`You can compare up to ${maxCompare} universities. Please remove some from your comparison list.`);
        }
        return;
    }
    
    if (!compareList.includes(id)) {
        compareList.push(id);
        localStorage.setItem('compareList', JSON.stringify(compareList));
        alert('University added to comparison!');
    } else {
        alert('This university is already in your comparison list.');
    }
}

// Add to compare from detail page
function addToCompareFromDetail() {
    if (currentUniversityId) {
        addToCompare(currentUniversityId);
    }
}

// Setup compare page
function setupComparePage() {
    const compareSelects = ['compare1', 'compare2', 'compare3', 'compare4', 'compare5'];
    
    compareSelects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) {
            select.innerHTML = '<option value="">Select University...</option>';
            universitiesData.forEach(uni => {
                const option = document.createElement('option');
                option.value = uni.id;
                option.textContent = uni.name;
                select.appendChild(option);
            });
        }
    });
}

// Perform comparison
function performComparison() {
    const compareSelects = ['compare1', 'compare2', 'compare3', 'compare4', 'compare5'];
    const selectedIds = compareSelects.map(id => {
        const select = document.getElementById(id);
        return select ? parseInt(select.value) : null;
    }).filter(id => id !== null && id !== 0);

    if (selectedIds.length < 2) {
        alert('Please select at least 2 universities to compare.');
        return;
    }

    displayComparison(selectedIds);
}

// Display comparison
function displayComparison(ids) {
    const table = document.getElementById('comparisonTable');
    if (!table) return;

    table.style.display = 'block';
    const universities = ids.map(id => universitiesData.find(u => u.id === id));

    // Update column headers
    for (let i = 0; i < 5; i++) {
        const colHeader = document.getElementById(`uniCol${i + 1}`);
        if (colHeader && universities[i]) {
            colHeader.textContent = universities[i].name;
        } else if (colHeader) {
            colHeader.textContent = '-';
        }
    }

    // Update comparison data
    universities.forEach((uni, index) => {
        if (!uni) return;
        const col = index + 1;
        document.getElementById(`comp-name-${col}`).textContent = uni.name;
        document.getElementById(`comp-city-${col}`).textContent = uni.city;
        document.getElementById(`comp-type-${col}`).textContent = uni.type;
        document.getElementById(`comp-rating-${col}`).textContent = '★'.repeat(Math.floor(uni.rating)) + ' ' + uni.rating;
        document.getElementById(`comp-price-${col}`).textContent = uni.price;
        document.getElementById(`comp-fields-${col}`).textContent = uni.fields.join(', ');
        document.getElementById(`comp-lang-${col}`).textContent = uni.languages.join(', ');
        document.getElementById(`comp-students-${col}`).textContent = uni.students.toLocaleString();
        document.getElementById(`comp-exchange-${col}`).textContent = uni.exchange;
        document.getElementById(`comp-dorm-${col}`).textContent = uni.dormitory;
        document.getElementById(`comp-scholarship-${col}`).textContent = uni.scholarship;
        document.getElementById(`comp-actions-${col}`).innerHTML = `<button class="btn btn-primary" onclick="viewUniversityDetail(${uni.id})">View</button>`;
    });

    // Clear empty columns
    for (let i = universities.length; i < 5; i++) {
        const col = i + 1;
        ['name', 'city', 'type', 'rating', 'price', 'fields', 'lang', 'students', 'exchange', 'dorm', 'scholarship', 'actions'].forEach(field => {
            const elem = document.getElementById(`comp-${field}-${col}`);
            if (elem) elem.textContent = '-';
        });
    }

    table.scrollIntoView({ behavior: 'smooth' });
}

// Setup registration page
function setupRegistrationPage() {
    const universitySelects = ['interestedUniversities', 'appUniversity'];
    
    universitySelects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) {
            select.innerHTML = '<option value="">Choose...</option>';
            universitiesData.forEach(uni => {
                const option = document.createElement('option');
                option.value = uni.id;
                option.textContent = uni.name;
                select.appendChild(option);
            });
        }
    });
    
    // Update program options when university changes
    const appUniversity = document.getElementById('appUniversity');
    const appProgram = document.getElementById('appProgram');
    
    if (appUniversity && appProgram) {
        appUniversity.addEventListener('change', function() {
            const uniId = parseInt(this.value);
            appProgram.innerHTML = '<option value="">Choose a program...</option>';
            
            if (programsData[uniId]) {
                programsData[uniId].forEach(program => {
                    const option = document.createElement('option');
                    option.value = program.name;
                    option.textContent = program.name;
                    appProgram.appendChild(option);
                });
            }
        });
    }
    
    // Password validation
    const confirmPassword = document.getElementById('confirmPassword');
    const password = document.getElementById('password');
    
    if (confirmPassword && password) {
        confirmPassword.addEventListener('blur', function() {
            validatePasswords();
        });
        
        password.addEventListener('input', function() {
            validatePasswords();
        });
    }
}

// Validate passwords
function validatePasswords() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorSpan = document.getElementById('passwordError');
    
    if (password && confirmPassword && password !== confirmPassword) {
        errorSpan.style.display = 'block';
        document.getElementById('confirmPassword').style.borderColor = '#ff4444';
        return false;
    } else {
        errorSpan.style.display = 'none';
        document.getElementById('confirmPassword').style.borderColor = '';
        return true;
    }
}

// Handle registration
function handleRegistration(e) {
    e.preventDefault();
    
    if (!validatePasswords()) {
        return;
    }
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        interestedFields: Array.from(document.getElementById('interestedFields').selectedOptions).map(opt => opt.value),
        interestedUniversities: Array.from(document.getElementById('interestedUniversities').selectedOptions).map(opt => parseInt(opt.value)),
        notifications: document.getElementById('notifications').checked,
        registrationDate: new Date().toISOString()
    };
    
    let users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    users.push(formData);
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    
    alert('Registration successful! You will receive a confirmation email shortly.');
    e.target.reset();
    document.getElementById('passwordError').style.display = 'none';
}

// Handle application
function handleApplication(e) {
    e.preventDefault();
    
    const formData = {
        id: Date.now(),
        name: document.getElementById('appContactEmail').value.split('@')[0] || 'Anonymous',
        email: document.getElementById('appContactEmail').value,
        phone: '',
        universityId: parseInt(document.getElementById('appUniversity').value),
        program: document.getElementById('appProgram').value || 'General Inquiry',
        message: document.getElementById('appMessage').value,
        status: 'new',
        date: new Date().toISOString()
    };
    
    let applications = JSON.parse(localStorage.getItem('applications') || '[]');
    applications.push(formData);
    localStorage.setItem('applications', JSON.stringify(applications));
    
    alert('Application submitted successfully! We will contact you soon.');
    e.target.reset();
}

// Handle contact
function handleContact(e) {
    e.preventDefault();
    
    const formData = {
        id: Date.now(),
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        phone: document.getElementById('contactPhone').value || '',
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value,
        status: 'new',
        date: new Date().toISOString()
    };
    
    let applications = JSON.parse(localStorage.getItem('applications') || '[]');
    applications.push(formData);
    localStorage.setItem('applications', JSON.stringify(applications));
    
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
}

// Setup virtual tour
function setupVirtualTour() {
    const selector = document.getElementById('universitySelector');
    if (selector) {
        selector.innerHTML = '<option value="">Choose a university...</option>';
        universitiesData.forEach(uni => {
            const option = document.createElement('option');
            option.value = uni.id;
            option.textContent = uni.name;
            selector.appendChild(option);
        });
    }
}

// Load tour university
function loadTourUniversity() {
    const selector = document.getElementById('universitySelector');
    const uniId = selector.value;
    if (uniId) {
        loadPanorama('main-building');
    }
}

// Load panorama
function loadPanorama(location) {
    const viewer = document.getElementById('panoramaViewer');
    if (!viewer) return;
    
    // Update active location
    document.querySelectorAll('.location-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.location === location) {
            item.classList.add('active');
        }
    });
    
    viewer.innerHTML = `
        <div class="panorama-content">
            <div class="panorama-image" style="background: linear-gradient(135deg, #69FFB7 0%, #C0C4FF 100%); height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; flex-direction: column;">
                360° View of ${location.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                <p style="font-size: 14px; margin-top: 20px;">Drag to explore • Click hotspots to navigate</p>
            </div>
        </div>
    `;
}

// Virtual tour controls
function zoomIn() {
    alert('Zoom in feature');
}

function zoomOut() {
    alert('Zoom out feature');
}

function resetView() {
    loadPanorama('main-building');
}

// FAQ functions
function toggleFAQ(element) {
    const item = element.parentElement;
    const answer = item.querySelector('.faq-answer');
    const toggle = element.querySelector('.faq-toggle');
    
    const isOpen = item.classList.contains('active');
    
    document.querySelectorAll('.faq-item').forEach(faq => {
        if (faq !== item) {
            faq.classList.remove('active');
            faq.querySelector('.faq-toggle').textContent = '+';
        }
    });
    
    if (isOpen) {
        item.classList.remove('active');
        toggle.textContent = '+';
    } else {
        item.classList.add('active');
        toggle.textContent = '−';
    }
}

function filterFAQ(category) {
    document.querySelectorAll('.faq-category-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    document.querySelectorAll('.faq-item').forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Subscription Functions
function selectPlan(planType) {
    const userEmail = prompt('Please enter your email to subscribe:');
    if (!userEmail) return;
    
    const subscription = {
        plan: planType,
        email: userEmail,
        startDate: new Date().toISOString(),
        status: planType === 'free' ? 'active' : 'pending'
    };
    
    localStorage.setItem('userSubscription', JSON.stringify(subscription));
    
    if (planType === 'pro') {
        alert('Thank you! Your Pro plan subscription ($50/month) will be activated. You will receive a confirmation email shortly.');
    } else if (planType === 'enterprise') {
        alert('Thank you for your interest in Enterprise plan! Our sales team will contact you within 24 hours.');
    } else {
        alert('You are now on the Free plan.');
    }
    
    checkUserSubscription();
}

function checkUserSubscription() {
    const subscription = JSON.parse(localStorage.getItem('userSubscription') || '{"plan":"free"}');
    const currentPlan = subscription.plan;
    
    // Update UI based on subscription
    if (currentPlan === 'pro' || currentPlan === 'enterprise') {
        // Show premium features
        console.log('Premium user detected');
    }
}

function hasProAccess() {
    const subscription = JSON.parse(localStorage.getItem('userSubscription') || '{"plan":"free"}');
    return subscription.plan === 'pro' || subscription.plan === 'enterprise';
}
