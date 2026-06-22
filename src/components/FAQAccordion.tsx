"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-[880px] mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`border border-border2 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-bg shadow-[0_8px_24px_rgba(28,24,20,0.06)] scale-[1.01]' : 'bg-bg2 hover:bg-bg shadow-sm hover:shadow-[0_4px_12px_rgba(28,24,20,0.04)]'}`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <h3 className={`text-[18px] md:text-[20px] font-medium transition-colors ${isOpen ? 'text-blue-main' : 'text-text-main'}`}>
                {item.question}
              </h3>
              <div className={`ml-6 shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-bluedim text-blue-main' : 'bg-[rgba(11,25,44,0.05)] text-text2'}`}>
                {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-6 md:p-8 pt-0 text-[16px] leading-[1.65] text-text2">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
