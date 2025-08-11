import React, { useState, useMemo } from "react";
import MarketFilter from "../../../Components/Market/MarketFilter";
import MarketPlace from "../../../Components/Market/MarketPage";
const products = [
  {
    title: "Organic Wheat",
    available: true,
    quantity: 500,
    price: 2,
    delivery: "Available",
    category: "Grains",
    location: "USA",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKJLq2jjObMy83X7SsFPEzk6j9TI2pjUVE49Dui2q88SxFtODT_Nz3OkZAb9kmlyJ-gs1LwfqMnrOBkGI5jAsTkf_sUOBFVOgfhzoDOFQ8-StZ-e1rB_HSwn8z8YZp70z07Td96n6eSK-rQFnm6XuebgIV74Hreei1YKPrTYoLSR6VOShso3BBvuAMxCmoD5gaMlsgxahYxzlvrO9Z8WVoRMLqgYAaEdGEM-Zkm5zgsjybraPOmicevbVb-u5l50W107LyArTmBv0",
  },
  {
    title: "Fresh Tomatoes",
    available: true,
    quantity: 200,
    price: 1.5,
    delivery: "Available",
    category: "Vegetables",
    location: "Mexico",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwCjGJ-1VOsroSDqYMTtoJSlIYTgTNqlEBm-2rvqd-eJ6aN_Y-4hHdQSMQQMbiWDcHHcov7yr4TjxJtg26c8IW6hver8iZudZh5Gkiit1fkX9KTcgHe8JJ_3YC7Re0fW__Oy1RfGLA1NKcKxKE8wMQJoEQDw-3hPzVqRqDCxNezEbAS8kqwwKEgLqPxuAUO8a5Lw6Aca3ODQ4n-sJedUsUJg47RgBKqngiRhaES2ya5JowgZvlcIQId4nzxRgXuxyzQgtq8kGVi3E",
  },
  {
    title: "Apples",
    available: true,
    quantity: 300,
    price: 1,
    delivery: "Available",
    category: "Fruits",
    location: "USA",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXnXZQXE8PvIs5ySp7p4WwHVvHuOhE-xCru0e7fj79ZfVA7wuDlmTcxL98LTfz5RS_4N5qXZQpsQc36IKi9JjbZBVKXU-1ejXjI1znfneXFqyFqXZ4No-tqVxWxI-4Nf4UY9joiPb8s0CYpWAwitfmm3L-JnS8b5xYj4miluDxKyDisF08PGJyxgbfX0iJNsmUhN4xkWv7kINqZtnqGX7OFvMTJ87-DGDHnJU9I3PUEam5QJuvzj1OLWgrrf1VuHO2tnr5JbXPt6w",
  },
  {
    title: "Corn",
    available: true,
    quantity: 400,
    price: 0.8,
    delivery: "Available",
    category: "Grains",
    location: "Mexico",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQNHQgoZl--PT5YWOVxoAG93vDcCyXV7bB4cXu9tD3rJTroIdisBkvf9-1muc4LdyRkBePnPq6-oaxDQjMTib53mMRd_eKQMBTZZz3WjAh_xvQ0o-oVnX85LktW9ViSRiFMd_PHqp2mWZI_asPX-Z1u-xVYd3CzfUcqRHqAF3VNcR5RHXGN1bbEU686SuEaheYHD7zddZl1AjdKe-4MZiZ466Qnv_YLaG6eXB508UpKYr24c_b1Z_H912tlOuDkwQ1NfFTjOgphvY",
  },
];

export default function MarketplaceAccess() {
  // State for all filters
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Products");
  const [location, setLocation] = useState("All Locations");
  const [delivery, setDelivery] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Filtered products using useMemo for performance
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        category === "All Products" || p.category === category;

      const matchesLocation =
        location === "All Locations" || p.location === location;

      const matchesDelivery =
        delivery === "All" || p.delivery === delivery;

      const matchesMinPrice =
        minPrice === "" || p.price >= parseFloat(minPrice);

      const matchesMaxPrice =
        maxPrice === "" || p.price <= parseFloat(maxPrice);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLocation &&
        matchesDelivery &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
  }, [searchTerm, category, location, delivery, minPrice, maxPrice]);

  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#f9fcf8] group/design-root overflow-x-hidden"
      style={{
        "--select-button-svg":
          "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(103,151,78)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
        fontFamily: "Lexend, 'Noto Sans', sans-serif",
      }}
    >
      <div className="layout-container flex h-full grow flex-row gap-6 px-6 py-5">
        <MarketFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
          setCategory={setCategory}
          location={location}
          setLocation={setLocation}
          delivery={delivery}
          setDelivery={setDelivery}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
        <MarketPlace products={filteredProducts} />
      </div>
    </div>
  );
}
