'use client'
import Image from "next/image"; 
import Link from "next/link";

const books = [
  {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: "$12.99",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      description: "A classic novel of the Roaring Twenties, exploring themes of wealth and society.",
      stock: 24,
      category: "Fiction",
      rating: 4.7,
      reviews: 1562
  },
  {
      id: 2,
      title: "1984",
      author: "George Orwell",
      price: "$15.99",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      description: "A dystopian novel depicting a totalitarian regime and constant surveillance.",
      stock: 30,
      category: "Dystopian Fiction",
      rating: 4.8,
      reviews: 3240
  },
  {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: "$10.99",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      description: "A moving story about racial injustice in the American South.",
      stock: 18,
      category: "Classic Literature",
      rating: 4.9,
      reviews: 2750
  },
  {
      id: 4,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: "$14.99",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      description: "The beloved fantasy adventure that introduced Middle-earth.",
      stock: 22,
      category: "Fantasy",
      rating: 4.9,
      reviews: 4315
  },
  {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: "$11.99",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      description: "A timeless romance novel exploring love, class, and reputation.",
      stock: 15,
      category: "Romance",
      rating: 4.8,
      reviews: 2980
  },
  {
      id: 6,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: "$13.49",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      description: "A controversial and iconic coming-of-age novel.",
      stock: 17,
      category: "Fiction",
      rating: 4.5,
      reviews: 1902
  },
  {
      id: 7,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: "$14.49",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      description: "An inspirational tale about following one's dreams.",
      stock: 25,
      category: "Adventure",
      rating: 4.7,
      reviews: 5674
  },
  {
      id: 8,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      price: "$16.99",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      description: "The first installment in the magical Harry Potter series.",
      stock: 40,
      category: "Fantasy",
      rating: 4.9,
      reviews: 8750
  },
  {
      id: 9,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      price: "$18.99",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      description: "A groundbreaking exploration of human history and evolution.",
      stock: 21,
      category: "Non-Fiction",
      rating: 4.8,
      reviews: 4230
  },
  {
      id: 10,
      title: "Becoming",
      author: "Michelle Obama",
      price: "$19.99",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      description: "The inspiring memoir of the former First Lady of the United States.",
      stock: 16,
      category: "Memoir",
      rating: 4.9,
      reviews: 3195
  },
  {
      id: 11,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: "$13.99",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      description: "A psychological thriller full of twists and suspense.",
      stock: 14,
      category: "Thriller",
      rating: 4.6,
      reviews: 1975
  },
  {
      id: 12,
      title: "Atomic Habits",
      author: "James Clear",
      price: "$17.99",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      description: "A practical guide to building good habits and breaking bad ones.",
      stock: 28,
      category: "Self-Help",
      rating: 4.8,
      reviews: 6520
  }
];
  
const Books = () => { 
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-8">
          Featured Books
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {books?.map((book) => (
            <div
              key={book?.id}
              className="relative group bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative w-full h-[250px]">
                {/* You can tweak the height if needed based on your design */}
                <Image
                  src={book?.image}
                  alt={book?.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                />
              </div>

              <div className="p-4">
                <h3 className="text-[14px] font-semibold text-gray-800">
                  {book?.title}
                </h3>
                <p className="text-[13px] text-gray-500">by {book.author}</p>
                <p className="text-md font-bold text-blue-600 mt-2">
                  {book?.price}
                </p>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-4 transition-opacity duration-300">
                <Link href={`/books/${book.id}`}>
                  <button className="w-3/4 px-4 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition cursor-pointer">
                    View Details
                  </button>
                </Link>
                <button className="w-3/4 px-4 py-2 bg-white text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
