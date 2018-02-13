import React from 'react'

export const HomeView = () => (
  <div className="text-center">
    <div>
      <h1 className="header-label pb-3 mb-lg-5">List of Salons</h1>
    </div>
    <div className="content mb-5">
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
            {
              [1,2,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((salon, index)  => (
                <tr key={index}>
                  <td>{salon.name || "Tanya Test Links"}</td>
                  <td>{salon.website ||'-'}</td>
                  <td>{salon.profile_image_urls && salon.profile_image_urls.thumb ? salon.profile_image_urls.thumb : '-'}</td>
                  <td>
                    <a>Details</a>
                  </td>
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

export default HomeView
