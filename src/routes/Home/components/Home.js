import React from 'react'
import './HomeView.scss'
import InfiniteScroll from 'react-infinite-scroll-component'
import {Link} from 'react-router'


export default class Home extends React.Component {
  constructor() {
    super()
    this.loadNextSalons = this.loadNextSalons.bind(this);
    this.state = {
      loading: true,
      error: false
    }
}

  componentWillMount() {
    this.props.fetchSalons(this.props.count)
      .then(() => {
        this.setState({loading: false})
      })
      .catch(() => {
        this.setState({error: true})
      })
  }

  loadNextSalons() {
    this.props.fetchSalons(this.props.count)
  }


  check(url) {
    if (url){
      url = /http/i.test(url) ? url : "https://" + url
      return <a href={url} target="_blank">{url}</a>
    }else{
     return '-'
    }
  }

  render() {
    let {salons, total} = this.props;
    let {loading, error} = this.state;
    return (
      <div className="text-center">
        <div>
          <h1 className="header-label pb-3 mb-lg-5">LIST OF SALONS</h1>
        </div>
        <div className="content mb-5">
          <InfiniteScroll
            next={this.loadNextSalons}
            hasMore={!loading && !!salons.length && total > salons.length}
            loader={<h4><div className="loader loader-small"></div></h4>}>
          <div className="col-xs-12 mt-3">
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Website</th>
                    <th>Image</th>
                    <th>Details</th>
                  </tr>
                  </thead>
                  <tbody>
                  {!loading ?
                    salons && salons.length !== 0 ? salons.map((saloon, index) => (
                      <tr key={`r${index}`}>
                        <td key={`c${index}`}>{saloon.name}</td>
                        <td key={`x${index}`}>
                          {this.check(saloon.website)}
                        </td>
                        <td
                          key={`z${index}`}>{!!saloon.images.length ?
                          <img height="40px" width="40px" src={saloon.images[0].image_urls.original}/> : '-'}</td>
                        <td key={`a${index}`}>
                          <Link to={`/details/${saloon.id}`}>
                            <button className="btn btn-salon">DETAILS</button>
                          </Link>
                        </td>
                      </tr>
                    )) :
                      <tr>
                        <td className="p-4" colSpan="100%">Nothing Found...</td>
                      </tr>
                    :
                    <tr>
                      <td colSpan="100%">
                        <div className="loader loader-table" colSpan="100%"></div>
                      </td>
                    </tr>
                  }
                  </tbody>
                </table>
            </div>
          </div>
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}
