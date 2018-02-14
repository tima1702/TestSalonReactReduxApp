import React from 'react'
import MultipleItems from '../../../components/MultipleItems'

export default class extends React.Component {
  constructor () {
    super();
    this.state = {
      salon: {},
      loading: true,
      error: false,
      services: []
    }
  }

  componentDidMount() {
    console.log('props', this.props)
    let { params, fetchSalon, fetchServices} = this.props;
    fetchSalon(params.id)
      .then((data) => {
        let salon = data.salon && data.salon.salon || false;
        salon ? this.setState({salon, loading: false}) : this.setState({error: true});
    })
    fetchServices(params.id)
    .then((data) => {
      let services = data.services && data.services.services || false;
      services ? this.setState({services, loading: false}) : this.setState({error: true});
    })
  }

  render () {
    let {salon, loading, services} = this.state;
    console.log(salon);
    return (
      loading ? <div /> :
      <div className="text-center">
        <div>
          <h1 className="header-label pb-3">{salon.name}</h1>
        </div>
        <MultipleItems images={salon.images}/>
        <div className="content mb-5">
          <div className="col-xs-12 mb-5 d-inline-block">
            <h3>Working Hours</h3>
            {Object.keys(salon.hours).map((el, i) => {
              return (
                <div key={`daybl${i}`} className="d-inline-block p-3">
                  <div key={`day${i}`}><b>{el}</b></div>
                  <div
                    key={`daytime${i}`}>{`${salon.hours[`${el}`]['from']} - ${salon.hours[`${el}`]['to']}`}</div>
                </div>
              )
            })}
          </div>
          <div className="col-xs-12 mb-5">
            <h3>Description</h3>
            <div className="mb-5">
        <span>
          {salon.description}
        </span>
            </div>
          </div>
          <div className="col-xs-12">
            <h3>Service</h3>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Duration</th>
                  <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {
                  services.map((service, index) => (
                    <tr key={index}>
                      <td>{service.name || 'Nails1'}</td>
                      <td>{service.duration || '25' + ' minutes'}</td>
                      <td>{service.price || 25.0 + ' KD'}</td>
                    </tr>
                  ))
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
