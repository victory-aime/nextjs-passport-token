import DashboardHeader from "@/pages/admin/components/Header";
import ReservationDetails from "@/pages/admin/components/DetailsReservation";

export default function Car ()  {
    return (
        <div>
            <DashboardHeader />
            <div style={{ margin: '20px 90px' }}>
                <ReservationDetails/>
            </div>
        </div>
    );
};