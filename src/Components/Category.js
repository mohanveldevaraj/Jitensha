

const categories = [
  { name: 'Mountain Bikes', image: '/s1.jpg?height=300&width=400' },
  { name: 'Gravel Bikes', image: '/s2.jpg?height=300&width=400' },
  { name: 'Road Bikes', image: '/s3.jpg?height=300&width=400' },
  { name: 'City & Touring Bikes', image: '/s4.jpg?height=300&width=400' },
  { name: 'Gear', image: '/s5.jpg?height=300&width=400' },
  { name: 'Sale', image: '/s6.jpg?height=300&width=400' },
];

 function ShopBy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Shop by world</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="relative overflow-hidden rounded-lg ">
            <img
              src={category.image}
              alt={category.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <h3 className="text-white text-lg font-semibold">{category.name}</h3>
           </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopBy