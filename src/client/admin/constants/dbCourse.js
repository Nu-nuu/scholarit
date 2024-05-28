// dùng dummy db cho lẹ


export const chartBoxCourse = {
    color: "#8884d8",
    link: 'course',
    icon: "/productIcon.svg",
    title: "Total Course",
    number: "10",
    dataKey: "courses",
    percentage: 21,
    chartData: [
        { name: "Sun", courses: 1 },
        { name: "Mon", courses: 2 },
        { name: "Tue", courses: 1 },
        { name: "Wed", courses: 1 },
        { name: "Thu", courses: 2 },
        { name: "Fri", courses: 3 },
        { name: "Sat", courses: 0 },
    ],
};

export const chartBoxRevenue = {
    color: "teal",
    link: 'course',
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "89.00$",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
        { name: "Sun", revenue: 20 },
        { name: "Mon", revenue: 1 },
        { name: "Tue", revenue: 20 },
        { name: "Wed", revenue: 1 },
        { name: "Thu", revenue: 19 },
        { name: "Fri", revenue: 10 },
        { name: "Sat", revenue: 20 },
    ],
};


export const chartBoxStudy = {
    color: "gold",
    link: 'course',
    icon: "/conversionIcon.svg",
    title: "Total Study",
    number: "120",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
        { name: "Sun", ratio: 12 },
        { name: "Mon", ratio: 28 },
        { name: "Tue", ratio: 20 },
        { name: "Wed", ratio: 15 },
        { name: "Thu", ratio: 15 },
        { name: "Fri", ratio: 10 },
        { name: "Sat", ratio: 20 },
    ],
};

export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        { name: "Sun", profit: 1 },
        { name: "Mon", profit: 2 },
        { name: "Tue", profit: 3 },
        { name: "Wed", profit: 5 },
        { name: "Thu", profit: 7 },
        { name: "Fri", profit: 6 },
        { name: "Sat", profit: 8 },
    ],
};


export const courseData = [
    {
        id: 1,
        name: "course-1",
        title: "Algebra Basics",
        summary: "Master the fundamentals of algebra.",
        duration: "4 weeks",
        author: "John Smith",
        createdAt: "2023-09-13",
        price: 49.99,
        discount: 10,
        category: 'Algebra',
    },
    {
        id: 2,
        name: "course-2",
        title: "Geometry Essentials",
        summary: "A comprehensive guide to geometry concepts.",
        duration: "6 weeks",
        author: "Alice Johnson",
        createdAt: "2023-09-14",
        price: 79.99,
        discount: 15,
        category: 'Geometry',
    },
    {
        id: 3,
        name: "course-3",
        title: "Calculus Fundamentals",
        summary: "Unlock the power of calculus with this course.",
        duration: "8 weeks",
        author: "Michael Brown",
        createdAt: "2023-09-15",
        price: 99.99,
        discount: 20,
        category: 'Calculus',
    },
    {
        id: 4,
        name: "course-4",
        title: "Statistics Mastery",
        summary: "Master statistical analysis and data interpretation.",
        duration: "10 weeks",
        author: "Sarah Davis",
        createdAt: "2023-09-16",
        price: 69.99,
        discount: 10,
        category: 'Statistics',
    },
    {
        id: 5,
        name: "course-5",
        title: "Number Theory Explained",
        summary: "Dive into the fascinating world of number theory.",
        duration: "12 weeks",
        author: "David Wilson",
        createdAt: "2023-09-17",
        price: 129.99,
        discount: 25,
        category: 'Number Theory',
    },
    {
        id: 6,
        name: "course-6",
        title: "Linear Algebra for Beginners",
        summary: "An introduction to linear algebra concepts.",
        duration: "6 weeks",
        author: "Emily Jones",
        createdAt: "2023-09-18",
        price: 89.99,
        discount: 15,
        category: 'Algebra',
    },
    {
        id: 7,
        name: "course-7",
        title: "Mathematical Logic",
        summary: "Explore the world of mathematical logic.",
        duration: "8 weeks",
        author: "Robert Wilson",
        createdAt: "2023-09-19",
        price: 59.99,
        discount: 10,
        category: 'Logic',
    },
    {
        id: 8,
        name: "course-8",
        title: "Advanced Calculus",
        summary: "Take your calculus skills to the next level.",
        duration: "6 weeks",
        author: "Linda Moore",
        createdAt: "2023-09-20",
        price: 79.99,
        discount: 20,
        category: 'Calculus',
    },
    {
        id: 9,
        name: "course-9",
        title: "Number Theory Explorations",
        summary: "Deepen your understanding of number theory.",
        duration: "10 weeks",
        author: "James Taylor",
        createdAt: "2023-09-21",
        price: 59.99,
        discount: 15,
        category: 'Number Theory',
    },
    {
        id: 10,
        name: "course-10",
        title: "Mathematics of Finance",
        summary: "Learn effective financial mathematics and planning.",
        duration: "8 weeks",
        author: "Karen Anderson",
        createdAt: "2023-09-22",
        price: 49.99,
        discount: 10,
        category: 'Financial Mathematics',
    },
];


export const singleCourse = {
    id: 1,
    name: "course-1",
    title: "Algebra Basics",
    summary: "Master the fundamentals of algebra.",
    duration: "4 weeks",
    description:
        "This course is designed to help you master the fundamentals of algebra. You will learn key concepts and techniques that form the basis of algebraic problem-solving.",
    author: "John Smith",
    createdAt: "2023-09-13",
    price: 49.99,
    discount: 10,
    category: 'Algebra',
    numberOfChapter: 3,
    chapter: [
        {
            name: "Learn the basics of algebra",
            order: 1,
            duration: 1,
            summary:
                "In this chapter, you will cover fundamental algebraic concepts and operations. This is the foundation for your journey in algebra.",
            content:
                "This chapter delves into the building blocks of algebra, including solving equations, manipulating expressions, and understanding algebraic notation.",
            intro:
                "Welcome to the world of algebra! This introductory chapter sets the stage for your exploration of algebraic concepts.",
            id: 1,
            resource: [
                {
                    id: 1,
                    url_video: [
                        { id: 1, url: 'https://example.com.vn/video-1' },
                        { id: 2, url: 'https://example.com.vn/video-2' },
                    ],
                    url_image: [
                        { id: 1, url: 'https://example.com.vn/image-1' },
                        { id: 2, url: 'https://example.com.vn/image-2' },
                        { id: 3, url: 'https://example.com.vn/image-3' },
                    ],
                    type_document: [
                        { id: 1, url: 'https://example.com.vn/document-1' },
                        { id: 2, url: 'https://example.com.vn/document-2' },
                        { id: 3, url: 'https://example.com.vn/document-3' },
                    ],
                },
            ],
            little_quiz: [
                {
                    id: 1,
                    number: 1,
                    question: 'What is 2 + 2?',
                    option2: '3',
                    option3: '4',
                    option4: '5',
                    option5: '6',
                    answer: '4',
                },
            ],
        },
        {
            name: "Advanced Algebra Concepts",
            order: 2,
            duration: 1,
            summary:
                "This chapter explores advanced algebraic concepts and problem-solving techniques.",
            content:
                "Dive deeper into algebra with topics like inequalities, quadratic equations, and more. Strengthen your algebraic problem-solving skills.",
            intro:
                "Get ready to elevate your algebra knowledge. This chapter covers advanced concepts and techniques.",
            id: 2,
            resource: [
                {
                    id: 1,
                    url_video: [
                        { id: 1, url: 'https://example.com.vn/video-1' },
                        { id: 2, url: 'https://example.com.vn/video-2' },
                    ],
                    url_image: [
                        { id: 1, url: 'https://example.com.vn/image-1' },
                        { id: 2, url: 'https://example.com.vn/image-2' },
                        { id: 3, url: 'https://example.com.vn/image-3' },
                    ],
                    type_document: [
                        { id: 1, url: 'https://example.com.vn/document-1' },
                        { id: 2, url: 'https://example.com.vn/document-2' },
                        { id: 3, url: 'https://example.com.vn/document-3' },
                    ],
                },
            ],
            little_quiz: [
                {
                    id: 1,
                    number: 1,
                    question: 'Solve for x: 2x - 8 = 16.',
                    option2: '2',
                    option3: '4',
                    option4: '12',
                    option5: '16',
                    answer: '16',
                },
            ],
        },
        {
            name: "Algebra Mastery",
            order: 3,
            duration: 2,
            summary:
                "This final chapter in algebra solidifies your knowledge and provides opportunities for mastery.",
            content:
                "In this chapter, you will tackle complex algebraic challenges and consolidate your algebraic problem-solving skills.",
            intro:
                "Congratulations on reaching the last chapter! Here, you will master algebraic concepts and become an algebra pro.",
            id: 3,
            resource: [
                {
                    id: 1,
                    url_video: [
                        { id: 1, url: 'https://example.com.vn/video-1' },
                        { id: 2, url: 'https://example.com.vn/video-2' },
                    ],
                    url_image: [
                        { id: 1, url: 'https://example.com.vn/image-1' },
                        { id: 2, url: 'https://example.com.vn/image-2' },
                        { id: 3, url: 'https://example.com.vn/image-3' },
                    ],
                    type_document: [
                        { id: 1, url: 'https://example.com.vn/document-1' },
                        { id: 2, url: 'https://example.com.vn/document-2' },
                        { id: 3, url: 'https://example.com.vn/document-3' },
                    ],
                },
            ],
            little_quiz: [
                {
                    id: 1,
                    number: 1,
                    question: 'What is the result of 5 multiplied by 7?',
                    option2: '10',
                    option3: '25',
                    option4: '35',
                    option5: '40',
                    answer: '35',
                },
            ],
        },
    ],
};



export const singleChapter = {

    name: "Introduction to Algebra",
    order: 1,
    duration: 1,
    summary: "This chapter provides an introduction to algebraic concepts, including variables, expressions, and basic equations. These fundamentals are crucial for algebraic problem-solving.",
    content: "You'll delve into the world of algebra and master the essentials, such as algebraic notation and solving basic equations.",
    intro: "Welcome to the first chapter of your algebra journey! This chapter sets the stage for your exploration of algebraic concepts.",
    id: 1,

}

export const quizBank = [
    { id: 1, name: "course-1_chapter-1_15min", course: 'Algebra Basics', chapter: "Learn the basics of programming", category: '15min', duration: '15', number: '10', createdAt: '26/09/2023', maxScore: '10' },
    { id: 2, name: "course-1_chapter-1_45min", course: 'Algebra Basics', chapter: "Learn the basics of programming", category: '45min', duration: '45', number: '30', createdAt: '26/09/2023', maxScore: '10' },
    { id: 3, name: "course-1_chapter-1_90min", course: 'Algebra Basics', chapter: "Learn the basics of programming", category: '90min', duration: '90', number: '60', createdAt: '26/09/2023', maxScore: '10' },
    { id: 4, name: "course-1_chapter-2_15min", course: 'Geometry Essentials', chapter: "Learn the basics of programming", category: '15min', duration: '15', number: '10', createdAt: '26/09/2023', maxScore: '10' },
    { id: 5, name: "course-1_chapter-2_45min", course: 'Geometry Essentials', chapter: "Learn the basics of programming", category: '45min', duration: '45', number: '30', createdAt: '26/09/2023', maxScore: '10' },
    { id: 6, name: "course-1_chapter-2_90min", course: 'Geometry Essentials', chapter: "Learn the basics of programming", category: '90min', duration: '90', number: '60', createdAt: '26/09/2023', maxScore: '10' },
    { id: 7, name: "course-1_chapter-2_90min", course: 'Calculus Fundamentals', chapter: "Learn the basics of programming", category: '15min', duration: '90', number: '60', createdAt: '26/09/2023', maxScore: '10' },
    { id: 8, name: "course-1_chapter-2_90min", course: 'Calculus Fundamentals', chapter: "Learn the basics of programming", category: '45min', duration: '90', number: '60', createdAt: '26/09/2023', maxScore: '10' },
    { id: 9, name: "course-1_chapter-2_90min", course: 'Calculus Fundamentals', chapter: "Learn the basics of programming", category: '90min', duration: '90', number: '60', createdAt: '26/09/2023', maxScore: '10' },
    { id: 10, name: "course-1_chapter-2_90min", course: 'Statistics Mastery', chapter: "Learn the basics of programming", category: '15min', duration: '90', number: '60', createdAt: '26/09/2023', maxScore: '10' },

];