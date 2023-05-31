import DashboardHeader from "@/pages/admin/components/Header";
import VehicleTable from "@/pages/admin/components/CarsTable";

export default function Car ()  {
    return (
        <div>
            <DashboardHeader />
            <div style={{ margin: '20px 90px' }}>
                <VehicleTable />
            </div>
        </div>
    );
};