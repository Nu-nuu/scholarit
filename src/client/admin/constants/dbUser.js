import img from '../../../assets/scholaritPics/avatar/4.jpg'
// dùng dummy db cho lẹ
export const singleUser = {
    id: 1,
    title: "Hubbard Eula",
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    info: {
        username: "Hubbard23",
        fullname: "Hubbard Eula",
        email: "kewez@@gmail.com",
        phone: "123 456 789",
        status: "verified",
        createdAt: "01.02.2023",
    },
    chart: {
        dataKeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "clicks", color: "#8884d8" },
        ],
        data: [
            {
                name: "Sun",
                visits: 4,
                clicks: 24,
            },
            {
                name: "Mon",
                visits: 3,
                clicks: 13,
            },
            {
                name: "Tue",
                visits: 2,
                clicks: 38,
            },
            {
                name: "Wed",
                visits: 7,
                clicks: 39,
            },
            {
                name: "Thu",
                visits: 18,
                clicks: 48,
            },
            {
                name: "Fri",
                visits: 9,
                clicks: 38,
            },
            {
                name: "Sat",
                visits: 9,
                clicks: 43,
            },
        ],
    },
    activities: [
        {
            text: "Hubbard Eula purchased Graphic Design Mastery",
            time: "3 day ago",
        },
        {
            text: "Hubbard Eula added 3 courses into their wishlist",
            time: "1 week ago",
        },
        {
            text: "Hubbard Eula purchased Data Science Essentials",
            time: "2 weeks ago",
        },
        {
            text: "Hubbard Eula reviewed a course",
            time: "1 month ago",
        },
        {
            text: "Hubbard Eula added 1 course into their wishlist",
            time: "1 month ago",
        },
        {
            text: "Hubbard Eula reviewed a course",
            time: "2 months ago",
        },
    ],
};

export const singleAdmin = {
    id: 1,
    title: "Trung Tan",
    img: img,
    info: {
        username: "admin",
        fullname: "Le Trung Tan",
        email: "admin@gmail.com",
        phone: "123 456 789",
        status: "verified",
        createdAt: "22.02.2022",
    },
    chart: {
        dataKeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "clicks", color: "#8884d8" },
        ],
        data: [
            {
                name: "Sun",
                visits: 4000,
                clicks: 2400,
            },
            {
                name: "Mon",
                visits: 3000,
                clicks: 1398,
            },
            {
                name: "Tue",
                visits: 2000,
                clicks: 3800,
            },
            {
                name: "Wed",
                visits: 2780,
                clicks: 3908,
            },
            {
                name: "Thu",
                visits: 1890,
                clicks: 4800,
            },
            {
                name: "Fri",
                visits: 2390,
                clicks: 3800,
            },
            {
                name: "Sat",
                visits: 3490,
                clicks: 4300,
            },
        ],
    },
    activities: [
        {
            text: "Re: Scholarit | Tấn bú main (!9) ",
            time: "Sep 12, 2023 4:40pm",
        },
        {
            text: "Re: Scholarit | Khanh bú (!8)",
            time: "Sep 12, 2023 4:31pm",
        },
        {
            text: "Re: Scholarit | Tan (!7)",
            time: "Sep 12, 2023 4:18pm",
        },
        {
            text: "Re: Scholarit | admin newversion (!6)",
            time: "Sept 12, 2023 6:22pm",
        },
        {
            text: "Re: Scholarit | Tan setup admin fd (!3)",
            time: "Sep 12, 2023 5:40am",
        },
    ],
};

export const userRows = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Hubbard",
        firstName: "Eula",
        email: "kewez@@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Manning",
        firstName: "Stella",
        email: "comhuhmit@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Greer",
        firstName: "Mary",
        email: "ujudokon@hottmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Williamson",
        firstName: "Mildred",
        email: "tinhavabe@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Gross",
        firstName: "Jose",
        email: "gobtagbes@yahoo.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Sharp",
        firstName: "Jeremy",
        email: "vulca.eder@mail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Lowe",
        firstName: "Christina",
        email: "reso.bilic@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
    },
    {
        id: 8,
        img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Dean",
        firstName: "Garrett",
        email: "codaic@mail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 9,
        img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Parsons",
        firstName: "Leah",
        email: "uzozor@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
    },
    {
        id: 10,
        img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Reid",
        firstName: "Elnora",
        email: "tuhkabapu@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 11,
        img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Dunn",
        firstName: "Gertrude",
        email: "gibo@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 12,
        img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Williams",
        firstName: "Mark",
        email: "tic.harvey@hotmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
    },
    {
        id: 13,
        img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Cruz",
        firstName: "Charlotte",
        email: "ceuc@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
    },
    {
        id: 14,
        img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Harper",
        firstName: "Sara",
        email: "bafuv@hotmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
    },
    {
        id: 15,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Griffin",
        firstName: "Eric",
        email: "ubi@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
    },
];

export const chartBoxUser = {
    color: "#8884d8",
    link: 'user',
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "28",
    dataKey: "users",
    percentage: 28,
    chartData: [
        { name: "Sun", users: 4 },
        { name: "Mon", users: 2 },
        { name: "Tue", users: 5 },
        { name: "Wed", users: 7 },
        { name: "Thu", users: 2 },
        { name: "Fri", users: 5 },
        { name: "Sat", users: 1 },
    ],
};

export const topDealUsers = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        username: "Elva McDonald",
        email: "elva@gmail.com",
        amount: "3.668",
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Linnie Nelson",
        email: "linnie@gmail.com",
        amount: "3.256",
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Brent Reeves",
        email: "brent@gmail.com",
        amount: "2.998",
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Adeline Watson",
        email: "adeline@gmail.com",
        amount: "2.512",
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Juan Harrington",
        email: "juan@gmail.com",
        amount: "2.134",
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Augusta McGee",
        email: "augusta@gmail.com",
        amount: "1.932",
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Angel Thomas",
        email: "angel@gmail.com",
        amount: "1.560",
    },
];


export const userData = [
    {
        id: 16,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Smith",
        firstName: "John",
        dob: "1990-05-15",
        address: "123 Main St, City, Country",
        hobby: "Reading",
        lastLogin: "2023-09-13T08:30:00Z",
        learnHourPerDay: 2,
        email: "john.smith@example.com",
        phone: "987 654 321",
        createdAt: "2023-09-13",
        passWord: "password123",
        strength: 8,
        verified: false,
        VIP: false,
    },
    {
        id: 17,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Brown",
        firstName: "Lisa",
        dob: "1985-03-20",
        address: "456 Oak Lane, Town, Country",
        hobby: "Traveling",
        lastLogin: "2023-09-13T10:15:00Z",
        learnHourPerDay: 1,
        email: "lisa.brown@example.com",
        phone: "555 123 456",
        createdAt: "2023-09-13",
        passWord: "pass1234",
        strength: 7,
        verified: true,
        VIP: true,
    },
    {
        id: 18,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Johnson",
        firstName: "Michael",
        dob: "1978-11-05",
        address: "789 Pine Street, Ville, Country",
        hobby: "Cooking",
        lastLogin: "2023-09-13T14:45:00Z",
        learnHourPerDay: 3,
        email: "michael.johnson@example.com",
        phone: "333 987 654",
        createdAt: "2023-09-13",
        passWord: "securepass",
        strength: 9,
        verified: true,
        VIP: false,
    },
    {
        id: 19,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Davis",
        firstName: "Sarah",
        dob: "1995-09-10",
        address: "101 Willow Lane, Village, Country",
        hobby: "Photography",
        lastLogin: "2023-09-13T09:30:00Z",
        learnHourPerDay: 2.5,
        email: "sarah.davis@example.com",
        phone: "777 555 888",
        createdAt: "2023-09-13",
        passWord: "sarah2023",
        strength: 6,
        verified: false,
        VIP: false,
    },
    {
        id: 20,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Wilson",
        firstName: "Robert",
        dob: "1980-02-25",
        address: "222 Cedar Road, Hamlet, Country",
        hobby: "Gardening",
        lastLogin: "2023-09-13T16:00:00Z",
        learnHourPerDay: 1.5,
        email: "robert.wilson@example.com",
        phone: "999 111 222",
        createdAt: "2023-09-13",
        passWord: "secret123",
        strength: 7,
        verified: true,
        VIP: false,
    },
    {
        id: 21,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Jones",
        firstName: "Emily",
        dob: "1992-08-14",
        address: "543 Birch Avenue, Town, Country",
        hobby: "Swimming",
        lastLogin: "2023-09-13T12:20:00Z",
        learnHourPerDay: 1,
        email: "emily.jones@example.com",
        phone: "444 222 555",
        createdAt: "2023-09-13",
        passWord: "pass123",
        strength: 6,
        verified: false,
        VIP: false,
    },
    {
        id: 22,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Miller",
        firstName: "David",
        dob: "1987-12-03",
        address: "777 Elm Street, City, Country",
        hobby: "Music",
        lastLogin: "2023-09-13T11:45:00Z",
        learnHourPerDay: 2,
        email: "david.miller@example.com",
        phone: "111 333 777",
        createdAt: "2023-09-13",
        passWord: "david1987",
        strength: 8,
        verified: true,
        VIP: true,
    },
    {
        id: 23,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Moore",
        firstName: "Linda",
        dob: "1975-04-18",
        address: "999 Maple Road, Ville, Country",
        hobby: "Hiking",
        lastLogin: "2023-09-13T13:10:00Z",
        learnHourPerDay: 1.5,
        email: "linda.moore@example.com",
        phone: "222 888 444",
        createdAt: "2023-09-13",
        passWord: "linda75",
        strength: 7,
        verified: false,
        VIP: false,
    },
    {
        id: 24,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Taylor",
        firstName: "James",
        dob: "1983-06-28",
        address: "321 Cedar Lane, Hamlet, Country",
        hobby: "Sports",
        lastLogin: "2023-09-13T15:05:00Z",
        learnHourPerDay: 3.5,
        email: "james.taylor@example.com",
        phone: "777 999 333",
        createdAt: "2023-09-13",
        passWord: "james83",
        strength: 9,
        verified: true,
        VIP: false,
    },
    {
        id: 25,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Anderson",
        firstName: "Karen",
        dob: "1998-01-09",
        address: "456 Oak Lane, Town, Country",
        hobby: "Painting",
        lastLogin: "2023-09-13T09:45:00Z",
        learnHourPerDay: 2,
        email: "karen.anderson@example.com",
        phone: "888 333 222",
        createdAt: "2023-09-13",
        passWord: "karen98",
        strength: 6,
        verified: true,
        VIP: true,
    },
    {
        id: 26,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "White",
        firstName: "Richard",
        dob: "1982-10-22",
        address: "123 Maple Road, Village, Country",
        hobby: "Cycling",
        lastLogin: "2023-09-13T17:30:00Z",
        learnHourPerDay: 1.5,
        email: "richard.white@example.com",
        phone: "555 777 888",
        createdAt: "2023-09-13",
        passWord: "richard82",
        strength: 7,
        verified: false,
        VIP: false,
    },
    {
        id: 27,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Jackson",
        firstName: "Susan",
        dob: "1970-09-05",
        address: "222 Elm Street, City, Country",
        hobby: "Dancing",
        lastLogin: "2023-09-13T14:00:00Z",
        learnHourPerDay: 2.5,
        email: "susan.jackson@example.com",
        phone: "333 444 555",
        createdAt: "2023-09-13",
        passWord: "susan70",
        strength: 8,
        verified: true,
        VIP: false,
    },
    {
        id: 28,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Harris",
        firstName: "Daniel",
        dob: "1993-12-12",
        address: "777 Oak Lane, Town, Country",
        hobby: "Gaming",
        lastLogin: "2023-09-13T16:45:00Z",
        learnHourPerDay: 1,
        email: "daniel.harris@example.com",
        phone: "111 222 333",
        createdAt: "2023-09-13",
        passWord: "daniel93",
        strength: 7,
        verified: true,
        VIP: true,
    },
];

// Now, userRows contains 15 new users with the specified data.