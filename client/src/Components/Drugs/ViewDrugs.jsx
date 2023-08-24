import React from 'react'

export const ViewDrugs = () => {
  return (
    <main className='main-container'>
        <div className="main-title">
            <h4>VIEW DRUGS</h4>
        </div>

        <div className="col-lg-3 mt-2 mb-2">
          <input style={{marginLeft:'715px'}} type="search" className="form-control"  placeholder="Search.."/>
        </div> <br />
        <div>
        <table class="table" celled>
                    <thead>
                    <tr>
                        <th scope="col">Drug ID</th>
                        <th scope="col">Drug Name</th>
                        <th scope="col">Drug Amount</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <td>1</td>
                            <td>Paracetamol</td>
                            <td>100</td>
                            <td>In stock</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-danger" style={{color:'white'}}><i class="fa-solid fa-trash-can"></i>&nbsp;Delete</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>2</td>
                            <td>Paracetamol</td>
                            <td>100</td>
                            <td>Out of stock</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-danger" style={{color:'white'}}><i class="fa-solid fa-trash-can"></i>&nbsp;Delete</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>3</td>
                            <td>Paracetamol</td>
                            <td>500</td>
                            <td>In stock</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-danger" style={{color:'white'}}><i class="fa-solid fa-trash-can"></i>&nbsp;Delete</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>4</td>
                            <td>Paracetamol</td>
                            <td>100</td>
                            <td>Out of stock</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-danger" style={{color:'white'}}><i class="fa-solid fa-trash-can"></i>&nbsp;Delete</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>5</td>
                            <td>Paracetamol</td>
                            <td>20</td>
                            <td>In stock</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-danger" style={{color:'white'}}><i class="fa-solid fa-trash-can"></i>&nbsp;Delete</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>6</td>
                            <td>Paracetamol</td>
                            <td>100</td>
                            <td>Out of stock</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-danger" style={{color:'white'}}><i class="fa-solid fa-trash-can"></i>&nbsp;Delete</button></a>
                            </td>
                            </tr> 

                    </tbody>
                </table>
            </div>
    </main>
  )
}
