import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2213646733957075"
        data-ad-slot="2997026131"
        data-ad-format="auto"
        data-adtest="on"
        data-full-width-responsive="true"></ins>
    );
  }
}