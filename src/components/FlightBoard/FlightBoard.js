import classes from "./FlightBoard.module.css";

const FlightBoard = () => {
  return (
    <div className={classes["flight-board"]}>
      <div className={classes["table-title"]}>
        <h3>Flight Board 20-Feb-2023 19:58;47</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Rooms</th>
            <th>Amenities</th>
            <th>Seat Capacity</th>
            <th>Status</th>
            <th>Free From</th>
            <th>Free Slot</th>
            <th>Current Event</th>
            <th>Next Event</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Munich</td>
            <td>X</td>
            <td>20</td>
            <td>Y</td>
            <td>20:19</td>
            <td>Next day</td>
            <td>Greta Life test</td>
            <td>Greta Life Daily update</td>
          </tr>
          <tr>
            <td>Berlin</td>
            <td>X</td>
            <td>20</td>
            <td>Y</td>
            <td></td>
            <td>Next day</td>
            <td></td>
            <td>Building 1-1-meeting testing weekly</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlightBoard;
