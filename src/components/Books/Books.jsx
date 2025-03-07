import Image from "next/image";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$12.99",
    image: "https://i.ibb.co.com/bMysxQDm/download.jpg", // Replace with actual images in /public/books
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: "$15.99",
    image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$10.99",
    image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
  },
  {
    id: 4,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: "$14.99",
    image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: "$11.99",
    image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: "$13.49",
    image: "https://i.ibb.co.com/bMysxQDm/download.jpg",
  },
];

const Books = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-8">
          Featured Books
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="relative group bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative w-full h-[250px]">
                {/* You can tweak the height if needed based on your design */}
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
                <p className="text-[13px] text-gray-500">by {book.author}</p>
                <p className="text-md font-bold text-blue-600 mt-2">
                  {book.price}
                </p>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-4 transition-opacity duration-300">
                <button className="w-3/4 px-4 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition">
                  View Details
                </button>
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
