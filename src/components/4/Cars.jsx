
import cars from './carsData'

export default function Cars() {

    const [tesla , honda] = cars;

    const {speedStats} = tesla;
    const {topSpeed: teslaTopSpeed,zeroToSixty: zeroToSixtyT } = speedStats;

    const {speedStats: { topSpeed: hondaTopSpeed,zeroToSixty: zeroToSixtyH }} = honda;

    const {coloursByPopularity: [hondaTopColour]} = honda;
    const {coloursByPopularity: [teslaTopColour]} = tesla;

    return(
        <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colour</th>
          <th>Zero To Sixty</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
          <td>{zeroToSixtyT}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
          <td>{zeroToSixtyH}</td>
        </tr>
      </table>
    )
}