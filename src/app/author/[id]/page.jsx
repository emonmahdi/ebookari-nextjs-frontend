 
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

export default function AuthorPage({ params }) {
  const { id } = params;
  const author = authors.find((a) => a.id === Number(id));

  if (!author) {
    return <div className="text-center py-12 text-red-500">Author not found!</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Author Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={author.photo}
          alt={author.name}
          className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full shadow-md"
        />
        <div className="flex-1 space-y-3 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900">{author.name}</h1>
          <p className="text-gray-600 leading-relaxed">{author.bio}</p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 font-medium rounded-md">
              Total Books: {author.totalBooks}
            </span>
            {author.awards?.map((award, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-green-100 text-green-600 font-medium rounded-md"
              >
                {award}
              </span>
            ))}
          </div>

          <div className="flex space-x-4 mt-4">
            {author.socialLinks?.website && (
              <a
                href={author.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Website
              </a>
            )}
            {author.socialLinks?.twitter && (
              <a
                href={author.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Author's Books */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Books by {author.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {author.books.map((book) => (
            <div
              key={book.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-medium">{book.title}</h3>
                <p className="text-green-600 font-semibold">{book.price}</p>
                <Link
                  href={`/books/${book.id}`}
                  className="block text-blue-600 hover:underline font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
