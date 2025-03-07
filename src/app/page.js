import BookList from "@/components/Books/BookList";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <main className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Featured Books
          </h2>
          <BookList />
        </div>
      </main>
    </div>
  );
}
