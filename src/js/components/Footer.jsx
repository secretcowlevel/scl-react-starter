import React from 'react';
// import ReactDOM from 'react-dom';

export default class Footer extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        //erms of Use    Community Guidelines      Copyright      Cookie & Privacy Policy      Contact
        return (
            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        FOOTER
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}
