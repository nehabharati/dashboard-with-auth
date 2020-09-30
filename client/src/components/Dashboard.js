import React from 'react'
import DashboardHeader from "./DashboardHeader"
import DashboardFooter from "./DashboardFooter"
import DashboardNav from "./DashboardNav"

export default function Dashboard() {
    return (
        <div>
            <DashboardHeader />
            <DashboardNav />
            <DashboardFooter />
        </div>
    )
}