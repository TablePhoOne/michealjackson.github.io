import React from "react";

function BentoGrid() {
  const images = [
    "https://www.crushingkrisis.com/assets/michael-jackson-thriller-cd-single-frontal-thriller-album-cover-640297043-300x300.jpg",
    "https://pagesix.com/wp-content/uploads/sites/3/2013/08/jackson-aegsuit151307-300x300.jpg?quality=75&strip=all",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdEGB8109hm1SBTefTa6g60eN3Id5RD-rt5Q&s",
    "https://cdn-p.smehost.net/sites/28d35d54a3c64e2b851790a18a1c4c18/wp-content/uploads/2017/08/170812_mj_thriller-300x300.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMZmEAQwexPC4hjpe1eIYoXEGXSEW2CnfBQ&s",
    "https://nypost.com/wp-content/uploads/sites/2/2013/08/michael_jackson-300x3009.jpg?quality=75&strip=all",
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
        The Photos
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={src}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition duration-500 flex items-end p-4">
              <p className="text-white text-sm">Image {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BentoGrid;
