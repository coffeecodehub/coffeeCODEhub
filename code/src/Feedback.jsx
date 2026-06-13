import React, { useState, useEffect } from "react";
import { FiStar, FiSend } from "react-icons/fi";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    message: ""
  });

  const [reviews, setReviews] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  // Mock Reviews (Backend connect karne ke baad real ho jayenge)
  useEffect(() => {
  fetch("http://localhost:5000/api/reviews")
    .then((res) => res.json())
    .then((data) => setReviews(data))
    .catch((err) => console.log(err));
}, []);

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.rating === 0) {
    alert("Please select rating");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:5000/api/reviews",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        rating: 0,
        message: "",
      });

      const updatedReviews = await fetch(
        "http://localhost:5000/api/reviews"
      );

      const reviewsData = await updatedReviews.json();

      setReviews(reviewsData);

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  } catch (error) {
    console.log(error);
  }
};

  const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => (
    <FiStar
      className={`w-8 h-8 cursor-pointer transition-all ${
        filled ? "text-[#F59E0B] fill-[#F59E0B]" : "text-gray-300"
      }`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );

  return (
    <section className="min-h-screen pt-16 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#F59E0B] font-semibold tracking-widest uppercase">Client Voice</p>
          <h1 className="text-5xl font-bold text-gray-900 mt-3">
            Share Your <span className="text-[#F59E0B]">Experience</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-md mx-auto">
            Your feedback helps us improve and helps future clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          
          {/* Feedback Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-semibold mb-6">Write a Review</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#F59E0B] outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#F59E0B] outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Star Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Rate your experience</label>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star
                        key={star}
                        filled={star <= (hoverRating || formData.rating)}
                        onClick={() => setFormData({...formData, rating: star})}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-3xl border border-gray-200 focus:border-[#F59E0B] outline-none resize-none"
                    placeholder="Tell us about your experience with CoffeeCodeHub..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F59E0B] hover:bg-amber-400 text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <FiSend className="text-xl" />
                  Submit Review
                </button>
              </form>

              {submitted && (
                <p className="text-green-600 text-center mt-4 font-medium">
                  ✅ Thank you! Your review has been submitted successfully.
                </p>
              )}
            </div>
          </div>

          {/* All Reviews */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              Recent Reviews 
              <span className="text-sm bg-[#F59E0B]/10 text-[#F59E0B] px-3 py-1 rounded-full">
                {reviews.length}
              </span>
            </h3>

            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-3xl p-6 border border-gray-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? "text-[#F59E0B] fill-[#F59E0B]" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    "{review.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;