import React from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What is Rupali Beauty Point?",
      answer:
        "Rupali Beauty Point is your go-to destination for premium beauty and skincare products delivered to your doorstep.",
    },
    {
      question: "How can I place an order?",
      answer:
        "Just browse the products, add them to your cart, and proceed to checkout. Make sure you're logged in!",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "Currently, we accept payments via eSewa. More options will be added soon!",
    },
    {
      question: "Can I return a product?",
      answer:
        "Yes, you can return unopened products within 7 days of delivery. Contact our support team for assistance.",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">
        Frequently Asked Questions
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold text-pink-700">
              {faq.question}
            </h2>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
