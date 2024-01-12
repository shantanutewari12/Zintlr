// import React from 'react'

// export default function Products() {
// 	return <div>
// 		This is a Consumers page
// 	</div>
// }

import React, { useState } from 'react';

const consumersData = [
  {
    id: 1,
    name: 'Raghuvendra ragha',
    assets: '₹35,353',
    revenue: '₹1,0000',
    accountType: 'Premium',
    age: 30,
    kycStatus: 'Complete',
  },

  {
    id: 2,
    name: 'Abhinav Dayal',
    assets: 'Medium',
    revenue: '₹50,000',
    accountType: 'Standard',
    age: 25,
    kycStatus: 'Pending',
  },

  {
    id: 3,
    name: 'Neha Prasad',
    assets: '₹200,000',
    revenue: '₹977878873000,000',
    accountType: 'Standard',
    age: 23,
    kycStatus: 'Complete',
  },

  {
    id: 4,
    name: 'Shantanu Tiwari',
    assets: '₹40,00000',
    revenue: '₹3500,000',
    accountType: 'Standard',
    age: 22,
    kycStatus: 'Complete',
  },

  {
    id: 5,
    name: 'Yash Gupta',
    assets: '₹600000',
    revenue: '₹3900,000',
    accountType: 'Standard',
    age: 85,
    kycStatus: 'Pending',
  },

  {
    id: 6,
    name: 'Tulsidas Khan',
    assets: '₹56353222',
    revenue: '₹7700,000',
    accountType: 'Standard',
    age: 32,
    kycStatus: 'Pending',
  },
  {
    id: 7,
    name: 'Dharmesh Dhawan',
    assets: 'Medium',
    revenue: '₹23250,000',
    accountType: 'Standard',
    age: 15,
    kycStatus: 'Pending',
  },

  {
    id: 8,
    name: 'Daya Singh',
    assets: 'Medium',
    revenue: '₹23420,000',
    accountType: 'Standard',
    age: 45,
    kycStatus: 'Complete',
  },
];

export default function Consumers() {
	const [selectedKycStatus, setSelectedKycStatus] = useState('All');
	const [revenueFilter, setRevenueFilter] = useState('All');
  
	const handleKycStatusChange = (status) => {
	  setSelectedKycStatus(status);
	};
  
	const handleRevenueFilterChange = (filter) => {
	  setRevenueFilter(filter);
	};
  
	const applyRevenueFilter = (consumer) => {
	  if (revenueFilter === 'All') return true;
  
	  const numericRevenue = parseInt(consumer.revenue.replace(/[^\d]/g, ''), 10);
  
	  if (revenueFilter === 'Highest') {
		return numericRevenue === Math.max(...consumersData.map((c) => parseInt(c.revenue.replace(/[^\d]/g, ''), 10)));
	  }
  
	  if (revenueFilter === 'Lowest') {
		return numericRevenue === Math.min(...consumersData.map((c) => parseInt(c.revenue.replace(/[^\d]/g, ''), 10)));
	  }
  
	  return true;
	};
  
	const filteredConsumers =
	  selectedKycStatus === 'All'
		? consumersData
		: consumersData.filter((consumer) => consumer.kycStatus === selectedKycStatus);
  
	const finalFilteredConsumers = filteredConsumers.filter(applyRevenueFilter);
  
	return (
	  <div className="p-8">
		<h1 className="text-3xl font-bold mb-4">Consumers Overview</h1>
		<div className="mb-4 flex items-center">
		  <label className="mr-2" htmlFor="kycStatus">
			KYC Status:
		  </label>
		  <select
			className="p-2 border rounded"
			id="kycStatus"
			value={selectedKycStatus}
			onChange={(e) => handleKycStatusChange(e.target.value)}
		  >
			<option value="All">All</option>
			<option value="Complete">Complete</option>
			<option value="Pending">Pending</option>
		  </select>
		  <label className="ml-4" htmlFor="revenueFilter">
			Revenue:
		  </label>
		  <select
			className="p-2 border rounded"
			id="revenueFilter"
			value={revenueFilter}
			onChange={(e) => handleRevenueFilterChange(e.target.value)}
		  >
			<option value="All">All</option>
			<option value="Highest">Highest</option>
			<option value="Lowest">Lowest</option>
		  </select>
		</div>
		<div className="flex flex-wrap">
		  {finalFilteredConsumers.map((consumer) => (
			<div key={consumer.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
			  <div className="border p-4 rounded">
				<h2 className="text-xl font-bold">{consumer.name}</h2>
				<p className="mb-1">Assets: {consumer.assets}</p>
				<p className="mb-1">Revenue: {consumer.revenue}</p>
				<p className="mb-1">Account Type: {consumer.accountType}</p>
				<p className="mb-1">Age: {consumer.age}</p>
				<p className="mb-1">KYC Status: {consumer.kycStatus}</p>
			  </div>
			</div>
		  ))}
		</div>
	  </div>
	);
  }