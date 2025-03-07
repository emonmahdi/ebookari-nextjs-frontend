import Image from "next/image";
import Link from "next/link";

const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: "$12.99",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      category: "Fiction",
      rating: 4.7,
      stock: 25,
      link: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567",
      description: "A classic novel set in the Roaring Twenties, capturing the era's glamour and excess through the tragic story of Jay Gatsby and his unrelenting pursuit of Daisy Buchanan."
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      price: "$15.99",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      category: "Dystopian",
      rating: 4.8,
      stock: 32,
      link: "https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934",
      description: "A chilling depiction of a totalitarian regime that uses surveillance, propaganda, and fear to control every aspect of citizens' lives."
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: "$10.99",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      category: "Classic",
      rating: 4.9,
      stock: 20,
      link: "https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0061120081",
      description: "A powerful tale of racial injustice and moral growth, as seen through the eyes of young Scout Finch in the racially charged South."
    },
    {
      id: 4,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: "$14.99",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      category: "Fantasy",
      rating: 4.8,
      stock: 18,
      link: "https://www.amazon.com/Hobbit-J-R-Tolkien/dp/054792822X",
      description: "The prequel to The Lord of the Rings, following the epic journey of Bilbo Baggins as he faces dragons, treasure, and adventure."
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: "$11.99",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      category: "Romance",
      rating: 4.7,
      stock: 28,
      link: "https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/1503290565",
      description: "A timeless romance exploring themes of class, reputation, and misunderstanding as Elizabeth Bennet navigates her relationship with Mr. Darcy."
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: "$13.49",
      image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
      category: "Fiction",
      rating: 4.5,
      stock: 15,
      link: "https://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769487",
      description: "The iconic story of teenage alienation and angst, told through the voice of the unforgettable Holden Caulfield."
    }
  ];

export default function BookList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
      {books.map((book) => (
        <div
          key={book.id}
          className="relative group bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform transform hover:-translate-y-2 hover:shadow-lg"
        >
          <div className="relative w-full h-[250px]">
            <Image
              src={book.image}
              alt={book.title}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
            />
          </div>

          <div className="p-4">
            <h3 className="text-[14px] font-semibold text-gray-800">
              {book.title}
            </h3>
            <p className="text-[13px] text-gray-500">{book.author}</p> 
            <p className="text-md font-bold text-blue-600 mt-2">
              {book.price}
            </p>
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-4 transition-opacity duration-300">
            {/* Dynamic Link to /books/{id} */}
            <Link
              href={`/books/${book.id}`}
              className="w-3/4 px-4 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition text-center"
            >
              View Details
            </Link>

            {/* Static Add to Cart button (can add logic later) */}
            <button className="w-3/4 px-4 py-2 bg-white text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
