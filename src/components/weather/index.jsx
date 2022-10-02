import moment from 'moment/moment'
import './index.css'
let Weather = ({city,date,temp}) => {
    return<>
    <div className="widget">
            
            <div className="left-panel panel">
                <div className="date">
                    {moment(date).format("MMM Do YY")}
                </div>
                <div className="city">
                    {city}
                </div>
                <div className="temp">
                   {/* <img src="https://codefrog.tech/cp/wp/ts.png" alt="" width="60"> */}
                   {temp}&deg;C
                </div>
            </div>
            <div className="right-panel panel">
                {/* <img src="https://codefrog.tech/cp/wp/mumbai.png" alt="" width="160"> */}
            </div>

        </div>
    </>
}

export default Weather