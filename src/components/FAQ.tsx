import  { useState } from 'react';

const faqs = [
  {
    question: 'What makes FREEZƎ different from other soft drinks?',
    answer: 'Unlike regular soft drinks, FREEZƎ is 100% sugar-free, zero calories, and made with a unique blend of premium ingredients. Our drinks are crafted to be light, crisp, and refreshing — without compromising on flavor.'
  },
  {
    question: 'Is FREEZƎ really sugar-free and 0 calories?',
    answer: 'Yes! Every bottle of FREEZƎ contains zero sugar and zero calories, making it perfect for those watching their sugar intake or following a healthy lifestyle.'
  },
  {
    question: 'Is FREEZƎ suitable for people with diabetes?',
    answer: 'Absolutely. Since FREEZƎ has no sugar, it’s a diabetes-friendly beverage. However, we recommend consulting your doctor if you have specific health concerns.'
  },
  {
    question: 'Where can I buy FREEZƎ drinks?',
    answer: 'You can find FREEZƎ at selected local stores in Mohali, Chandigarh and Panchkula and through our upcoming online store. We are also expanding our distribution network to more stores and cities soon.'
  },
  {
    question: 'Can I use FREEZƎ in cocktails or mocktails?',
    answer: 'Yes! FREEZƎ Virgin Mojito makes an excellent base for mocktails, cocktails, and party mixes, adding a burst of freshness to any drink.'
  },
  {
    question: 'Is FREEZƎ an alcoholic beverage?',
    answer: 'FREEZƎ is a 100% non-alcoholic soft drink. Our Virgin Mojito is crafted to give you the refreshing taste of a mojito without any alcohol, making it perfect for all age groups and occasions.'
  },
  {
    question: 'Are there new flavors coming soon?',
    answer: 'Yes! We’re working on exciting new sugar-free flavors that will be announced on our website and social media channels soon. Stay tuned!'
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-green-950/80 via-black/80 to-emerald-950/80">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-green-200 mb-10 text-center">Frequently Asked Questions</h2>
      <div className="w-full max-w-2xl mx-auto space-y-6">
        {(showAll ? faqs : faqs.slice(0, 5)).map((faq, idx) => (
          <div key={idx} className="bg-black/40 rounded-2xl shadow-lg border border-green-400/30">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-lg sm:text-xl font-semibold text-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-2xl transition-colors"
              onClick={() => toggleFAQ(idx)}
            >
              <span>{faq.question}</span>
              <span className={`ml-4 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-6 text-green-200 text-base sm:text-lg animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
        {faqs.length > 5 && (
          <div className="flex justify-center mt-6">
            <button
              className="px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 text-white text-lg font-bold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-green-500/50 select-none"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? 'Show Less' : 'Read More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
