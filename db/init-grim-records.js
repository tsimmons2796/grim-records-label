// Initialize grim-records database and collections
db = db.getSiblingDB('grim-records');

// Create and populate the Artists collection
db.artists.insertMany([
    {
        name: "Vincent van Gogh",
        country: "Netherlands",
        genre: "Post-Impressionism",
        albums: [
            { title: "Starry Night", year: 1889 },
            { title: "Sunflowers", year: 1888 }
        ]
    },
    {
        name: "Pablo Picasso",
        country: "Spain",
        genre: "Cubism",
        albums: [
            { title: "Les Demoiselles d'Avignon", year: 1907 },
            { title: "Guernica", year: 1937 }
        ]
    },
    {
        name: "Frida Kahlo",
        country: "Mexico",
        genre: "Surrealism",
        albums: [
            { title: "The Two Fridas", year: 1939 },
            { title: "Self-Portrait with Thorn Necklace", year: 1940 }
        ]
    }
]);

// Create and populate the FormSubmissions collection
db.formSubmissions.insertMany([
    {
        name: "John Doe",
        email: "john@example.com",
        message: "I would like more information about your exhibitions.",
        submittedAt: new Date()
    },
    {
        name: "Jane Smith",
        email: "jane@example.com",
        message: "Can I submit my artwork to your gallery?",
        submittedAt: new Date()
    }
]);
