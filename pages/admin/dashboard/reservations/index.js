import DashboardHeader from "@/pages/admin/components/Header";
import RentalTable from "@/pages/admin/components/ReservationTable";

export default function Car ()  {
    return (
        <div>
            <DashboardHeader />
            <div style={{ margin: '20px 90px' }}>
                <RentalTable/>
            </div>
        </div>
    );
};