import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { id: 1, name: "Lux Trail CF 8", price: "3,449 US$", originalPrice: "4,399 US$", image: "/8.jpg?height=200&width=300" },
  { id: 2, name: "Grizl CF SL 8 1by", price: "2,799 US$", image: "/7.jpg?height=200&width=300" },
  { id: 3, name: "Lux Trail CF 6", price: "3,099 US$", image: "/9.jpg?height=200&width=300" },
  { id: 4, name: "Lux World Cup CFR Untamed", price: "6,049 US$", originalPrice: "7,449 US$", image: "/5.jpg?height=200&width=300" },
  { id: 5, name: "Product 5", price: "3,999 US$", image: "/6.jpg?height=200&width=300" },
  { id: 6, name: "Product 6", price: "4,299 US$", image: "/3.jpg?height=200&width=300" },
  { id: 7, name: "Product 7", price: "3,799 US$", image: "/8.jpg?height=200&width=300" },
  { id: 8, name: "Product 8", price: "5,099 US$", image: "/7.jpg?height=200&width=300" },
  { id: 9, name: "Product 9", price: "4,599 US$", image: "/9.jpg?height=200&width=300" },
  { id: 10, name: "Product 10", price: "3,899 US$", image: "/5.jpg?height=200&width=300" },
];

function Elements() {
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = products.length - 4; // Adjust for visible items

  const nextSlide = () => {
    if (startIndex < maxIndex) {
      setStartIndex(prevIndex => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div className="container p-10 mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">Bestsellers</h1>
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out" 
            style={{ transform: `translateX(-${startIndex * 25}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2">
                <div>
                  <div className="p-0">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  </div>
                  <div className="flex flex-col items-start p-4">
                    <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-bold text-primary">{product.price}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-muted-foreground line-through">{product.originalPrice}</p>
                      )}
                    </div>
                    <button className="mt-2" variant="outline">See more</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center mt-6 gap-2">
        <button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="rounded-full bg-white text-black p-4 shadow-md hover:bg-slate-100 transition duration-200"
          disabled={startIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1 h-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <div 
              key={index} 
              className={`h-0.5 w-6 transition-all duration-300 ${
                index === startIndex ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="rounded-full bg-white text-black p-4 shadow-md hover:bg-slate-100 transition duration-200"
          disabled={startIndex === maxIndex}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default Elements;
