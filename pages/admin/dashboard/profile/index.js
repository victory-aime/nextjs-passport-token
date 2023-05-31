import DashboardHeader from "@/pages/admin/components/Header";
import Profile from "@/pages/admin/components/Profile";

export default function Car ()  {
    return (
        <div>
            <DashboardHeader />
            <div style={{ margin: '20px 90px' }}>
                <Profile/>
            </div>
        </div>
    );
};