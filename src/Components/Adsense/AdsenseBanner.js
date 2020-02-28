


import React from 'react';

export default class AdComponentTop extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className="adsbygoogle"
        // style={{ display: 'block' }}
        data-ad-client="ca-pub-2213646733957075"
        data-ad-slot="3188597826"
        data-ad-format="auto"
        data-adtest="on"
        data-full-width-responsive="true"></ins>
    );
  }
}