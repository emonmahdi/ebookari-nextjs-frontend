import React from 'react'

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
  

const BookDetails = ({params}) => {
  const {id} = params;
  const book = books.find((book) => book.id == id)

  if (!book) {
    return <div className="text-center py-12">Book not found!</div>;
  }
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left - Book Image */}
        <div className="md:col-span-4 flex justify-center">
          <img
            src={book.image}
            alt={book.title}
            className="w-full max-w-[300px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right - Book Details */}
        <div className="md:col-span-8 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
          <p className="text-lg text-gray-600">By <span className="font-semibold">{book.author}</span></p>
          <p className="text-md text-gray-500">Category: <span className="font-medium text-blue-600">{book.category}</span></p>

          {/* Price and Stock Info */}
          <div className="flex items-center space-x-6">
            <p className="text-2xl font-bold text-green-600">{book.price}</p>
            <p className={`text-md font-medium ${book.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {book.stock > 0 ? `In Stock (${book.stock} available)` : 'Out of Stock'}
            </p>
          </div>

          {/* Rating & Reviews */}
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-xl">⭐ {book.rating}</span>
            <span className="text-gray-500 text-sm">({book.reviews} reviews)</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-justify leading-relaxed">
            {book.description}
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BookDetails

