import Button from "../../components/ui/button";
import classes from "./events-search.module.css";
import { useRef } from "react";

function EventsSearchPage(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const year = yearInputRef.current.value;
    const month = monthInputRef.current.value;

    props.onSearch(year, month);
  }

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="year"> Year</label>
            <select id="year" ref={yearInputRef}>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="month"> Month</label>
            <select id="month" ref={monthInputRef}>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
        </div>
        <Button>Find Events</Button>
      </form>
    </div>
  );
}

export default EventsSearchPage;
