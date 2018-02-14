import React from 'react'
import './HomeView.scss'
import InfiniteScroll from 'react-infinite-scroll-component'
import {Link} from 'react-router'


export default class Home extends React.Component {
  constructor() {
    super()
    this.loadNextSalons = this.loadNextSalons.bind(this)
}

  componentWillMount() {
    this.props.fetchSalons(this.props.salons.count)
  }

  loadNextSalons() {
    this.props.fetchSalons(this.props.salons.count)
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

    return (
      <div className="text-center">
        <div>
          <h1 className="header-label pb-3 mb-lg-5">LIST OF SALONS</h1>
        </div>
        <div className="content mb-5">
          <InfiniteScroll
            next={this.loadNextSalons}
            hasMore={total > salons.length}
            loader={<h4>Loading...</h4>}>
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
                  {salons && salons.length > 0 && salons.map((saloon, index) => {
                    return (
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
                    )
                  })
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
