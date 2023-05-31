import DashboardHeader from "@/pages/admin/components/Header";
import UserTable from "@/pages/admin/components/UserTable";


export default function Car ()  {
    return (
        <div>
            <DashboardHeader />
            <div style={{ margin: '20px 90px' }}>
                <UserTable />
            </div>
        </div>
    );
};