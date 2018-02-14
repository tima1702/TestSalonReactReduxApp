import React from 'react'
import MultipleItems from '../../../components/MultipleItems'

export default class extends React.Component {

  render() {
    return (
      <div className="text-center">
        <div>
          <h1 className="header-label pb-3">{props.salon.name}</h1>
        </div>
        <MultipleItems/>
        <div className="content mb-5">
          <div className="col-xs-12 mb-5 d-inline-block">
            <h3>Working Hours</h3>
            {Object.keys(props.salon.hours).map((el, i) => {
              return (
                <div key={`daybl${i}`} className="d-inline-block p-3">
                  <div key={`day${i}`}><b>{el}</b></div>
                  <div
                    key={`daytime${i}`}>{`${props.salon.hours[`${el}`]['from']} - ${props.salon.hours[`${el}`]['to']}`}</div>
                </div>
              )
            })}
          </div>
          <div className="col-xs-12 mb-5">
            <h3>Description</h3>
            <div className="mb-5">
        <span>
          {props.salon.description}
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
                  [1, 2, 3, 4].map((service, index) => (
                    <tr key={index}>
                      <td>{service.name || "Nails1"}</td>
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


export default Details
