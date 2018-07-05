import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectTab } from 'common/tab/actions';

import If from 'common/if';

class TabHeader extends React.Component {
  render() {
    const selected = this.props.tab.selected == this.props.target;
    const visible = this.props.tab.visible[this.props.target];
    return (
      <If test={visible}>
        <li className={selected ? 'active' : ''}>
          <a
            href="javascript:void(0)"
            data-toggle="tab"
            data-target={this.props.target}
            onClick={e => this.props.selectTab(this.props.target)}
          >
            <i className={`fa fa-${this.props.icon}`} />
            {this.props.label}
          </a>
        </li>
      </If>
    );
  }
}
const mapStateToProps = state => ({ tab: state.tab });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectTab }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabHeader);
