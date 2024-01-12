export const Invevsigations = () => {
  return (
    <div className="investigations">
      <div className="d-flex align-items-center justification-center">
        <b>ECG:</b>
        <input className="form-control m-1 invesInput" width="90%" />
      </div>
      <div className="d-flex align-items-center justification-center">
        <div className="row w-100">
          <div className="col-md-4">
            <b>Troponin:</b>
            <input className="form-control m-1 invesInput"  />
          </div>
          <div className="col-md-4">
            <b>Hb:</b>
            <input className="form-control m-1 invesInput" />
          </div>
          <div className="col-md-4">
            <b>Serum Creatine:</b>
            <input className="form-control m-1 invesInput" />
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justification-center">
        <div className="row w-100">
          <div className="col-md-4">
            <b>FBS:</b>
            <input className="form-control m-1 invesInput"  />
          </div>
          <div className="col-md-4">
            <b>WBC:</b>
            <input className="form-control m-1 invesInput" />
          </div>
          <div className="col-md-4">
            <b>K:</b>
            <input className="form-control m-1 invesInput" />
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justification-center">
        <div className="row w-100">
          <div className="col-md-4">
            <b>SGOT:</b>
            <input className="form-control m-1 invesInput"  />
          </div>
          <div className="col-md-4">
            <b>Plt:</b>
            <input className="form-control m-1 invesInput" />
          </div>
          <div className="col-md-4">
            <b>Na:</b>
            <input className="form-control m-1 invesInput" />
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justification-center">
        <div className="row w-100">
        <div><b>SGPT:</b></div>
          <div className="col-md-3">
            
            <input className="form-control m-1 invesInput"  />
          </div>
          <div className="col-md-4">
           
            <input className="form-control m-1 invesInput" />
          </div>
          <div className="col-md-4">
            
            <input className="form-control m-1 invesInput" />
          </div>
        </div>
      </div>
    </div>
  );
};
