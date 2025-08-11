import React, { useState } from "react";

const allPosts = [
  {
    author: "Sarah Miller",
    title: "Best Practices for Sustainable Wheat Farming",
    description:
      "I'm looking for advice on sustainable wheat farming techniques. What are some effective methods for reducing environmental impact while maintaining high yields?",
    image: "https://lh3.googleusercontent.com/aida-public/...",
    crop: "wheat",
    location: "usa",
    language: "english",
    tags: ["sustainable", "organic"],
  },
  {
    author: "David Chen",
    title: "Success Story: Implementing AI in My Farm",
    description:
      "I recently integrated AI-powered tools into my farm management, and the results have been incredible.",
    image: "https://lh3.googleusercontent.com/aida-public/...",
    crop: "general",
    location: "china",
    language: "chinese",
    tags: ["ai", "success"],
  },
  // ... Add other posts and include crop, location, language, tags
];

const filterOptions = {
  Crop: ["All Crops", "Wheat", "Rice", "Corn", "General"],
  Location: ["All Locations", "USA", "India", "China"],
  Language: ["All Languages", "English", "Hindi", "Chinese"],
  Tags: ["All Tags", "Sustainable", "Organic", "AI", "Pest Control"],
};

export default function CommunityForum() {
  const [filters, setFilters] = useState({
    Crop: "allcrops",
    Location: "alllocations",
    Language: "alllanguages",
    Tags: "alltags",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const handleFilterChange = (label, value) => {
    setFilters((prev) => ({ ...prev, [label]: value }));
    setCurrentPage(1); // Reset page on filter change
  };

  const filteredPosts = allPosts.filter((post) => {
    const cropMatch =
      filters.Crop === "allcrops" ||
      post.crop.toLowerCase() === filters.Crop;
    const locationMatch =
      filters.Location === "alllocations" ||
      post.location.toLowerCase() === filters.Location;
    const languageMatch =
      filters.Language === "alllanguages" ||
      post.language.toLowerCase() === filters.Language;
    const tagsMatch =
      filters.Tags === "alltags" ||
      post.tags.map((tag) => tag.toLowerCase()).includes(filters.Tags);

    return cropMatch && locationMatch && languageMatch && tagsMatch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#f9fcf8] overflow-x-hidden"
      style={{
        fontFamily: 'Lexend, "Noto Sans", sans-serif',
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* Filter Sidebar */}
          <div className="layout-content-container flex flex-col w-80">
            <h2 className="text-[#121b0e] text-[22px] font-bold px-4 pb-3 pt-5">
              Filter
            </h2>
            {Object.entries(filterOptions).map(([label, options]) => (
              <div
                key={label}
                className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3"
              >
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#121b0e] text-base font-medium pb-2">
                    {label}
                  </p>
                  <select
                    className="form-input w-full rounded-xl border border-[#d7e7d0] bg-[#f9fcf8] h-14 p-[15px]"
                    value={filters[label]}
                    onChange={(e) =>
                      handleFilterChange(label, e.target.value.toLowerCase())
                    }
                  >
                    {options.map((opt) => (
                      <option
                        key={opt}
                        value={opt.toLowerCase().replace(/\s+/g, "")}
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            ))}
          </div>

          {/* Main Feed */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#121b0e] text-[32px] font-bold">
                Community Feed
              </p>
              <button
                onClick={() => alert("Open new post modal")}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
              >
                New Post
              </button>
            </div>

            {/* Posts */}
            {paginatedPosts.length ? (
              paginatedPosts.map(({ author, title, description, image }) => (
                <div key={title} className="p-4">
                  <div className="flex items-stretch gap-4 rounded-xl">
                    <div className="flex flex-col flex-[2_2_0px] gap-1">
                      <p className="text-[#67974e] text-sm">Posted by {author}</p>
                      <p className="text-[#121b0e] font-bold text-base">{title}</p>
                      <p className="text-[#67974e] text-sm">{description}</p>
                    </div>
                    <div
                      className="flex-1 bg-cover bg-center rounded-xl aspect-video"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="p-4 text-[#67974e]">No posts match your filters.</p>
            )}

            {/* Pagination */}
            <div className="flex justify-center items-center p-4 gap-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="text-[#121b0e] size-10 flex items-center justify-center"
              >
                ←
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`size-10 rounded-full flex items-center justify-center ${
                    currentPage === i + 1
                      ? "bg-[#ebf3e7] font-bold"
                      : "font-normal"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(totalPages, prev + 1)
                  )
                }
                disabled={currentPage === totalPages}
                className="text-[#121b0e] size-10 flex items-center justify-center"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
