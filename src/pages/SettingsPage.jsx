import Header from "../components/common/Header";
import Profile from "../components/Settings/Profile";
import SettingSection from "../components/Settings/SettingSection";
import Notifications from "../components/Settings/Notifications";
import DangerZone from "../components/Settings/DangerZone";
import Security from "../components/Settings/Security";
const SettingsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title='Settings' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
        
				 <Profile />
				<Notifications/>
				<Security/>
				<DangerZone/>
			</main>
		</div>
	);
};
export default SettingsPage;