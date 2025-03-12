import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const UsersTable = () => {
	// State for search term
	const [searchTerm, setSearchTerm] = useState("");
	
	// State for storing user list
	const [users, setUsers] = useState([
		{ id: 1, name: "sid", email: "sid@example.com", vehicleNo: "BA 2 PA 1234", role: "Customer", status: "Active" },
		{ id: 2, name: "Digdarshan", email: "digcd@example.com", vehicleNo: "GA 1 KA 5678", role: "Admin", status: "Active" },
	]);

	// State for new user form inputs
	const [newUser, setNewUser] = useState({ name: "", email: "", vehicleNo: "", role: "Customer", status: "Active" });

	// Function to handle search input
	const handleSearch = (e) => {
		setSearchTerm(e.target.value.toLowerCase());
	};

	// Filter users based on search term
	const filteredUsers = users.filter(
		(user) =>
			user.name.toLowerCase().includes(searchTerm) ||
			user.email.toLowerCase().includes(searchTerm) ||
			user.vehicleNo.toLowerCase().includes(searchTerm)
	);

	// Function to add a new user
	const handleAddUser = (e) => {
		e.preventDefault(); // Prevent page refresh
		const newUserEntry = { ...newUser, id: users.length + 1 };
		setUsers([...users, newUserEntry]); // Update user list
		setNewUser({ name: "", email: "", vehicleNo: "", role: "Customer", status: "Active" }); // Reset form
	};

	// Function to delete a user
	const handleDeleteUser = (id) => {
		setUsers(users.filter((user) => user.id !== id));
	};

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Users</h2>

			{/* Form for adding new users */}
			<form onSubmit={handleAddUser} className='mb-4 flex gap-2'>
				<input
					type='text'
					placeholder='Name'
					value={newUser.name}
					onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
					className='p-2 rounded bg-gray-700 text-white'
					required
				/>
				<input
					type='email'
					placeholder='Email'
					value={newUser.email}
					onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
					className='p-2 rounded bg-gray-700 text-white'
					required
				/>
				<input
					type='text'
					placeholder='Vehicle No (e.g., BA 2 PA 1234)'
					value={newUser.vehicleNo}
					onChange={(e) => setNewUser({ ...newUser, vehicleNo: e.target.value })}
					className='p-2 rounded bg-gray-700 text-white'
					required
				/>
				<button type='submit' className='p-2 bg-blue-500 text-white rounded'>Add User</button>
			</form>

			{/* Search bar for filtering users */}
			<div className='relative mb-6'>
				<input
					type='text'
					placeholder='Search users...'
					className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
					value={searchTerm}
					onChange={handleSearch}
				/>
				<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
			</div>

			{/* Table displaying users */}
			<table className='min-w-full divide-y divide-gray-700'>
				<thead>
					<tr>
						<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>Name</th>
						<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>Email</th>
						<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>Vehicle No</th>
						<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>Actions</th>
					</tr>
				</thead>
				<tbody className='divide-y divide-gray-700'>
					{filteredUsers.map((user) => (
						<tr key={user.id}>
							<td className='px-6 py-4 text-gray-100'>{user.name}</td>
							<td className='px-6 py-4 text-gray-300'>{user.email}</td>
							<td className='px-6 py-4 text-gray-300'>{user.vehicleNo}</td>
							<td className='px-6 py-4'>
								{/* Button to delete user */}
								<button onClick={() => handleDeleteUser(user.id)} className='text-red-400 hover:text-red-300'>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</motion.div>
	);
};

export default UsersTable;




// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react";

// const UsersTable = () => {
// 	// State for search term
// 	const [searchTerm, setSearchTerm] = useState("");
	
// 	// State for storing user list
// 	const [users, setUsers] = useState([
// 		{ id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
// 		{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
// 	]);

// 	// State for new user form inputs
// 	const [newUser, setNewUser] = useState({ name: "", email: "", role: "Customer", status: "Active" });

// 	// Function to handle search input
// 	const handleSearch = (e) => {
// 		setSearchTerm(e.target.value.toLowerCase());
// 	};

// 	// Filter users based on search term
// 	const filteredUsers = users.filter(
// 		(user) =>
// 			user.name.toLowerCase().includes(searchTerm) ||
// 			user.email.toLowerCase().includes(searchTerm)
// 	);

// 	// Function to add a new user
// 	const handleAddUser = (e) => {
// 		e.preventDefault(); // Prevent page refresh
// 		const newUserEntry = { ...newUser, id: users.length + 1 };
// 		setUsers([...users, newUserEntry]); // Update user list
// 		setNewUser({ name: "", email: "", role: "Customer", status: "Active" }); // Reset form
// 	};

// 	// Function to delete a user
// 	const handleDeleteUser = (id) => {
// 		setUsers(users.filter((user) => user.id !== id));
// 	};

// 	return (
// 		<motion.div
// 			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
// 			initial={{ opacity: 0, y: 20 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			transition={{ delay: 0.2 }}
// 		>
// 			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Users</h2>

// 			{/* Form for adding new users */}
// 			<form onSubmit={handleAddUser} className='mb-4 flex gap-2'>
// 				<input
// 					type='text'
// 					placeholder='Name'
// 					value={newUser.name}
// 					onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
// 					className='p-2 rounded bg-gray-700 text-white'
// 					required
// 				/>
// 				<input
// 					type='email'
// 					placeholder='Email'
// 					value={newUser.email}
// 					onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
// 					className='p-2 rounded bg-gray-700 text-white'
// 					required
// 				/>
// 				<button type='submit' className='p-2 bg-blue-500 text-white rounded'>Add User</button>
// 			</form>

// 			{/* Search bar for filtering users */}
// 			<div className='relative mb-6'>
// 				<input
// 					type='text'
// 					placeholder='Search users...'
// 					className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
// 					value={searchTerm}
// 					onChange={handleSearch}
// 				/>
// 				<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
// 			</div>

// 			{/* Table displaying users */}
// 			<table className='min-w-full divide-y divide-gray-700'>
// 				<thead>
// 					<tr>
// 						<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>Name</th>
// 						<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>Email</th>
// 						<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase'>Actions</th>
// 					</tr>
// 				</thead>
// 				<tbody className='divide-y divide-gray-700'>
// 					{filteredUsers.map((user) => (
// 						<tr key={user.id}>
// 							<td className='px-6 py-4 text-gray-100'>{user.name}</td>
// 							<td className='px-6 py-4 text-gray-300'>{user.email}</td>
// 							<td className='px-6 py-4'>
// 								{/* Button to delete user */}
// 								<button onClick={() => handleDeleteUser(user.id)} className='text-red-400 hover:text-red-300'>Delete</button>
// 							</td>
// 						</tr>
// 					))}
// 				</tbody>
// 			</table>
// 		</motion.div>
// 	);
// };

// export default UsersTable;




// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react";

// const userData = [
// 	{ id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
// 	{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
// 	{ id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
// 	{ id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
// 	{ id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
// ];

// const UsersTable = () => {
// 	const [searchTerm, setSearchTerm] = useState("");
// 	const [filteredUsers, setFilteredUsers] = useState(userData);

// 	const handleSearch = (e) => {
// 		const term = e.target.value.toLowerCase();
// 		setSearchTerm(term);
// 		const filtered = userData.filter(
// 			(user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
// 		);
// 		setFilteredUsers(filtered);
// 	};

// 	return (
// 		<motion.div
// 			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
// 			initial={{ opacity: 0, y: 20 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			transition={{ delay: 0.2 }}
// 		>
// 			<div className='flex justify-between items-center mb-6'>
// 				<h2 className='text-xl font-semibold text-gray-100'>Users</h2>
// 				<div className='relative'>
// 					<input
// 						type='text'
// 						placeholder='Search users...'
// 						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
// 						value={searchTerm}
// 						onChange={handleSearch}
// 					/>
// 					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
// 				</div>
// 			</div>

// 			<div className='overflow-x-auto'>
// 				<table className='min-w-full divide-y divide-gray-700'>
// 					<thead>
// 						<tr>
// 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// 								Name
// 							</th>
// 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// 								Email
// 							</th>
// 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// 								Vehicle LicencePlate No
// 							</th>
// 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// 								Status
// 							</th>
// 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// 								Actions
// 							</th>
// 						</tr>
// 					</thead>

// 					<tbody className='divide-y divide-gray-700'>
// 						{filteredUsers.map((user) => (
// 							<motion.tr
// 								key={user.id}
// 								initial={{ opacity: 0 }}
// 								animate={{ opacity: 1 }}
// 								transition={{ duration: 0.3 }}
// 							>
// 								<td className='px-6 py-4 whitespace-nowrap'>
// 									<div className='flex items-center'>
// 										<div className='flex-shrink-0 h-10 w-10'>
// 											<div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
// 												{user.name.charAt(0)}
// 											</div>
// 										</div>
// 										<div className='ml-4'>
// 											<div className='text-sm font-medium text-gray-100'>{user.name}</div>
// 										</div>
// 									</div>
// 								</td>

// 								<td className='px-6 py-4 whitespace-nowrap'>
// 									<div className='text-sm text-gray-300'>{user.email}</div>
// 								</td>
// 								<td className='px-6 py-4 whitespace-nowrap'>
// 									<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
// 										{user.role}
// 									</span>
// 								</td>

// 								<td className='px-6 py-4 whitespace-nowrap'>
// 									<span
// 										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
// 											user.status === "Active"
// 												? "bg-green-800 text-green-100"
// 												: "bg-red-800 text-red-100"
// 										}`}
// 									>
// 										{user.status}
// 									</span>
// 								</td>

// 								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
// 									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>Edit</button>
// 									<button className='text-red-400 hover:text-red-300'>Delete</button>
// 								</td>
// 							</motion.tr>
// 						))}
// 					</tbody>
// 				</table>
// 			</div>
// 		</motion.div>
// 	);
// };
// export default UsersTable;