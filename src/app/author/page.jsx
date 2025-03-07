 import Link from "next/link";

const authors = [
    {
      id: 1,
      name: "James Clear",
      photo: "https://i.ibb.co.com/23HP5683/103549230-86968.jpg",
      bio: "Author of Atomic Habits and productivity expert.",
      totalBooks: 5,
    },
    {
      id: 2,
      name: "Mark Manson",
      photo: "https://i.ibb.co.com/23HP5683/103549230-86968.jpg",
      bio: "Author of 'The Subtle Art of Not Giving a F*ck'.",
      totalBooks: 3,
    },
    {
      id: 3,
      name: "Robert Kiyosaki",
      photo: "https://i.ibb.co.com/23HP5683/103549230-86968.jpg",
      bio: "Famous for 'Rich Dad Poor Dad'.",
      totalBooks: 7,
    },
  ]; 
  

export default function AuthorsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">All Authors</h1>
      <p className="text-gray-600 mb-8">Explore the brilliant minds behind the best-selling books on Ebookari.</p>

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
              <p className="text-sm text-gray-500">Books Published: {author?.totalBooks}</p>
              <Link
                href={`/authors/${author?.id}`}
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
