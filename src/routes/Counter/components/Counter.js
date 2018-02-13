import React from 'react'
import MultipleItems from '../../../components/MultipleItems'

export const Counter = () => (
<div className="text-center">
  <div>
    <h1 className="header-label pb-3">Salon Name</h1>
  </div>
  <MultipleItems></MultipleItems>
  <div className="content mb-5">
    <div className="col-xs-12 mb-5 d-inline-block">
      <h3>Working Hours</h3>
      {
        ['Sun','Mon','Tue','Wed','Thu','Fri','Sat' ].map((pointArr, index) => (
          <div key={index} className="d-inline-block p-3">
            <div><b>{pointArr}</b></div>
            <div key={index}>9:00-21:00</div>
          </div>
        ))
      }
    </div>
    <div className="col-xs-12 mb-5">
      <h3>Descrtiption</h3>
      <div className="mb-5">
        <span>
          текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст v текстvvтексттексттекст v текст текст v v v текст v v текст v текст тексттекст v vv v v v
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
          [1,2,3,4].map((service, index)  => (
          <tr key={index}>
            <td>{ service.name || "Nails1"}</td>
            <td>{service.duration ||'25' +' minutes'}</td>
            <td>{ service.price || 25.0 + ' KD'}</td>
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

export default Counter
