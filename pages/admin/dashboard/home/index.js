import React from 'react';
import DashboardHeader from "@/pages/admin/components/Header";
import DashboardCards from "@/pages/admin/components/DashboardCards";
import RevenueCards from "@/pages/admin/components/RevenueCards";


const Home = () => {
    return (
        <div>
            <DashboardHeader />
            <div style={{ margin: '20px 90px' }}>
                <DashboardCards />
            </div>
            <div style={{ margin: '20px 90px' }}>
                <RevenueCards />
            </div>
        </div>
    );
};

export default Home;
