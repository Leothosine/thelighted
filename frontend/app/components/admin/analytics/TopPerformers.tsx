// frontend/src/components/admin/analytics/TopPerformers.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, Eye } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface TopPerformersProps {
  items: Array<{
    id: string;
    name: string;
    image: string;
    price: number;
    clickCount: number;
    category: string;
  }>;
}

export function TopPerformers({ items }: TopPerformersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col"
    >
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-orange-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          Top Performing Items
        </h3>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No performance data available
        </div>
      ) : (
        <div className="space-y-4 overflow-y-auto max-h-[600px] pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {/* Rank */}
              <div className="flex-shrink-0">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    index === 0
                      ? "bg-yellow-100 text-yellow-700"
                      : index === 1
                      ? "bg-gray-100 text-gray-700"
                      : index === 2
                      ? "bg-orange-100 text-orange-700"
                      : "bg-gray-50 text-gray-600"
                  }`}
                >
                  {index + 1}
                </div>
              </div>

              {/* Image */}
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900 truncate">
                  {item.name}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="capitalize">{item.category}</span>
                  <span>•</span>
                  <span>{formatCurrency(item.price)}</span>
                </div>
              </div>

              {/* Clicks */}
              <div className="flex-shrink-0 text-right">
                <div className="flex items-center gap-1 text-gray-600">
                  <Eye className="w-4 h-4" />
                  <span className="font-semibold">{item.clickCount}</span>
                </div>
                <div className="text-xs text-gray-500">clicks</div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}