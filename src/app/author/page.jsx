 import Link from "next/link";

const authors = [
  {
    id: 1,
    name: "James Clear",
    photo: "https://ibb.co.com/zVDbN58V",
    bio: "James Clear is a writer and speaker focused on habits, decision making, and continuous improvement. His work has appeared in the New York Times, Time, and the Wall Street Journal.",
    books: [
      {
        id: 12,
        title: "Atomic Habits",
        image:
          "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
        price: "$17.99",
      },
      {
        id: 15,
        title: "Mastering Habits",
        image:
          "https://m.media-amazon.com/images/I/71EwzV43vFL._AC_UF1000,1000_QL80_.jpg",
        price: "$14.99",
      },
    ],
    socialLinks: {
      website: "https://jamesclear.com",
      twitter: "https://twitter.com/JamesClear",
    },
    totalBooks: 2,
    awards: ["NYT Bestselling Author", "Top Speaker in Productivity"],
  },
  {
    id: 2,
    name: "Mark Manson",
    photo: "https://ibb.co.com/zVDbN58V",
    bio: "Mark Manson is the author of the #1 NYT bestselling book 'The Subtle Art of Not Giving a F*ck'. His work focuses on personal development, life advice, and philosophy.",
    books: [
      {
        id: 21,
        title: "The Subtle Art of Not Giving a F*ck",
        image:
          "https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg",
        price: "$18.99",
      },
      {
        id: 22,
        title: "Everything is F*cked: A Book About Hope",
        image:
          "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
        price: "$16.99",
      },
    ],
    socialLinks: {
      website: "https://markmanson.net",
      twitter: "https://twitter.com/IAmMarkManson",
    },
    totalBooks: 2,
    awards: ["NYT Bestselling Author", "Top Self-Help Writer 2020"],
  },
  {
    id: 3,
    name: "Robert Kiyosaki",
    photo: "https://ibb.co.com/zVDbN58V",
    bio: "Robert Kiyosaki is the author of the famous personal finance book 'Rich Dad Poor Dad'. His books focus on financial education and investing.",
    books: [
      {
        id: 31,
        title: "Rich Dad Poor Dad",
        image:
          "https://m.media-amazon.com/images/I/51AHZGhzZEL._AC_UF1000,1000_QL80_.jpg",
        price: "$19.99",
      },
      {
        id: 32,
        title: "Cashflow Quadrant",
        image:
          "https://m.media-amazon.com/images/I/71Ff1vlfOGL._AC_UF1000,1000_QL80_.jpg",
        price: "$15.99",
      },
    ],
    socialLinks: {
      website: "https://www.richdad.com",
      twitter: "https://twitter.com/theRealKiyosaki",
    },
    totalBooks: 2,
    awards: ["NYT Bestselling Author", "Financial Educator of the Year"],
  },
  {
    id: 4,
    name: "Brené Brown",
    photo: "https://ibb.co.com/zVDbN58V",
    bio: "Brené Brown is a research professor at the University of Houston known for her work on vulnerability, courage, and leadership.",
    books: [
      {
        id: 41,
        title: "Dare to Lead",
        image:
          "https://m.media-amazon.com/images/I/71RJc4lvo4L._AC_UF1000,1000_QL80_.jpg",
        price: "$22.99",
      },
      {
        id: 42,
        title: "The Gifts of Imperfection",
        image:
          "https://m.media-amazon.com/images/I/71k1kmRibFL._AC_UF1000,1000_QL80_.jpg",
        price: "$14.99",
      },
    ],
    socialLinks: {
      website: "https://brenebrown.com",
      twitter: "https://twitter.com/BreneBrown",
    },
    totalBooks: 2,
    awards: ["NYT Bestselling Author", "TED Talk Top Speaker"],
  },
  {
    id: 5,
    name: "Yuval Noah Harari",
    photo: "https://ibb.co.com/zVDbN58V",
    bio: "Yuval Noah Harari is a historian and author of bestselling books on human history and the future of technology and society.",
    books: [
      {
        id: 51,
        title: "Sapiens: A Brief History of Humankind",
        image:
          "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
        price: "$24.99",
      },
      {
        id: 52,
        title: "Homo Deus: A Brief History of Tomorrow",
        image:
          "https://m.media-amazon.com/images/I/71T0uHkK8wL._AC_UF1000,1000_QL80_.jpg",
        price: "$21.99",
      },
    ],
    socialLinks: {
      website: "https://www.ynharari.com",
      twitter: "https://twitter.com/harari_yuval",
    },
    totalBooks: 2,
    awards: ["NYT Bestselling Author", "Global Thinker Award"],
  },
];

export default function AuthorsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">All Authors</h1>
      <p className="text-gray-600 mb-8">
        Explore the brilliant minds behind the best-selling books on Ebookari.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {authors?.map((author) => (
          <div
            key={author?.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={author?.photo}
              alt={author?.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{author?.name}</h3>
              <p className="text-gray-600 line-clamp-2">{author?.bio}</p>
              <p className="text-sm text-gray-500">
                Books Published: {author?.totalBooks}
              </p>
              <Link
                href={`/author/${author?.id}`}
                className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
