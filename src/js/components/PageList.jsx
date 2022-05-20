import React from 'react'
import Search from '../containers/search'
import List from '../containers/list'
import ListEmpty from './ListEmpty.jsx'



class PageList extends React.Component {
    constructor(props) {
        super(props);
        this.handleMore = this.handleMore.bind(this);
    }

    componentDidMount() {
        this.props.init(this.props.params.search ?  this.props.params.search : null );

    }

    handleMore() {
        this.props.loadMore(this.props.page + 1);
    }

    render() {
        let loadMore = null;
        let list = <ListEmpty />;

        if (this.props.visible < this.props.count) {
            loadMore = (
                <a className="waves-effect waves-light red darken-1 btn-large" onClick={this.handleMore}>
                    Load More
                </a>
            );
        }

        if (this.props.count > 0) {
            list = <List />;
        }

        return (



            <div className="center-align container margin-top margin-bottom">

                <Search router={this.props.router} />
                {list}
                {loadMore}


            </div>
        );
    }
}

/*
PageList.propTypes = {
    init: React.PropTypes.func.isRequired,
    loadMore: React.PropTypes.func.isRequired,
    visible: React.PropTypes.number.isRequired,
    count: React.PropTypes.number.isRequired,
};
*/

export default PageList