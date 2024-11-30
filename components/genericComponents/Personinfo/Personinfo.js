import react, {Component} from "react";

export default class Personinfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Personinfo:{this.props.blok.title}
            </div>
        );
    }
}