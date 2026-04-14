import React from 'react';

export default function DataCard({ title, items, type, formatTime }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={item.uid || idx} className="flex justify-between items-center border-b last:border-b-0 py-2">
            {type === 'block' ? (
              <>
                <span>Block #{item.id}</span>
                <span>{item.value}</span>
                <span>{item.txCount} txs</span>
              </>
            ) : (
              <>
                <span>{item.address}</span>
                <span>{item.value}</span>
                <span>{formatTime ? formatTime(item.timestamp) : ''}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
