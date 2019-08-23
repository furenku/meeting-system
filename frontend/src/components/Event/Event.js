import React from "react";


class Event extends React.Component {

    render() {
        return (
            <article className="Event">
                <h1>
                    { this.props.name }
                </h1>
            </article>
        )
    }

}

export default Event;