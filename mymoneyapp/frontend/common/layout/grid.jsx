import React from 'react';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  toCssClasses(numbers) {
    let cls = [];
    const cols = numbers.split(' ');
    if (cols[0]) cls.push(`col-xs-${cols[0]}`);
    if (cols[1]) cls.push(`col-sm-${cols[1]}`);
    if (cols[2]) cls.push(`col-md-${cols[2]}`);
    if (cols[3]) cls.push(`col-lg-${cols[3]}`);
    return cls.join(' ');
  }

  render() {
    const cls = this.toCssClasses(this.props.cols || '12');
    return <div className={cls}>{this.props.children}</div>;
  }
}
