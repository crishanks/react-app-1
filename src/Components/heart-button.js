import React from 'react';

class HeartButton extends React.Component {
    render() {
        return (
            <div>
                <Button>
                    <span>I &hearts; React</span>
                </Button>
            </div>
        ) 
    }
}

const Button = (props) => <button>{props.children}</button>

export default HeartButton
