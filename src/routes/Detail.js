import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        console.log(location);
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        const {poster} = this.props.location.state;
        if(location.state) {
            return (
                <div className="movie-detail">
                    <div className="movie-detail-background">
                        <img src={poster}/>
                    </div>
                    <div className="movie-detail-header">
                        <div className="movie-detail-header__img">
                            <img src={poster}/>
                        </div>
                        <div className="movie-detail-header__title">
                            <h2>{location.state.title}</h2>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}
export default Detail;