import React from 'react'
 import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UsersTable from '../components/users/UsersTable';

const userStats = {
	RegistredUsers: 152845,
	newUsersToday: 243,
	activeUsers: 98520,
	ViolationPercentage: "2.4%",
};

const UsersPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Users' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
						name='Registered Users'
						icon={UsersIcon}
						value={userStats.RegistredUsers.toLocaleString()}
						color='#6366F1'
					/>
					<StatCard name='Total No Of Violators' icon={UserPlus} value={userStats.newUsersToday} color='#10B981' />
					{/* <StatCard
						name='Active Users'
						icon={UserCheck}
						value={userStats.activeUsers.toLocaleString()}
						color='#F59E0B'
					/> */}
					<StatCard name='Violation Percentage' icon={UserX} value={userStats.ViolationPercentage} 
                    color='#EF4444' />
				</motion.div>

				 <UsersTable /> 

				{/* USER CHARTS */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
					{/* <UserGrowthChart />
					<UserActivityHeatmap />
					<UserDemographicsChart /> */}
				</div>
			</main>
		</div>
	);
};


export default UsersPage;
