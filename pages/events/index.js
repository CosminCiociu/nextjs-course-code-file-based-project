import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearchPage from "./events-search";
import { Fragment } from "react";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents(); // Assuming this function fetches events data

  function findEventsHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }
  return (
    <Fragment>
      <EventsSearchPage onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
