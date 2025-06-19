import {Header, StatsCard, TripCard} from "../../../components";
import { dashboardStats, user, allTrips } from "~/constants";
import { getUser } from "~/appwrite/auth";
import type { Route } from './+types/dashboard';




const { totalUsers, usersJoined, totalTrip, tripsCreated, userRole } = dashboardStats;

export const clientLoader = async () => await getUser();
const Dashboard = (
  { loaderData }:  Route.ComponentProps) => {
  const user = loaderData as User | null;

  return (
    
    <main className="dashboard wrapper">
        <Header 
        title={`Welcome ${user?.name ?? 'Guest'}👋`} 
        description="Track ctivity, trends and popular destinations in real time" 
        />
        <section className="flex flex-col gap-6"> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
           
             <StatsCard 
            headerTitle="Total User Roles"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
            />
             <StatsCard 
            headerTitle="Total Trips"
            total={totalTrip}
            currentMonthCount={tripsCreated.currentMonth}
            lastMonthCount={tripsCreated.lastMonth}
            />
             <StatsCard 
            headerTitle="Active Users"
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
            />
          

          </div>
        </section>
        <section>
          <h1 className="text-xl font-semibols text-dark-100">Created Trips</h1>
          <div className="trip-grid">
            {allTrips.slice(0,4).map(({id, name, imageUrls, itinerary, tags, estimatedPrice})=> (
              <TripCard 
              key={id}
              id={id.toString()}
              name={name}
              imageUrl={imageUrls[0]}
              location={itinerary?.[0]?.location ?? ''}
              price={estimatedPrice}
              
              tags={tags}
              />
 
            ))}
          </div>
        </section>

        
    </main>
  )
}
export default Dashboard

