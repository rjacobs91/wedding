/**
 * Implements the title bar with the bride and groom names and the wedding date.
 *
 * id (string): Identifier for the element
 */

'use strict';

import React from 'react';

class TitleBar extends React.Component {

    render() {
        return (
            <header id={this.props.id} className="titlebar">
                <span className="bride-name">Katie</span>
                <span className="groom-name">&nbsp;
                    <span>&amp;</span> Russell
                </span>
                <div className="wedding-date">1<sup>st</sup> AUGUST 2021</div>
            </header>
        );
    }
}

export default TitleBar;
