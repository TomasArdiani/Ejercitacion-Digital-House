import React from 'react'

let categorias = ["1", "2", "3"];
let name = "numero";
function Category() {
    return (



        <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div class="card-body">
                    <div class="row">

                        {
                            categorias.map(categoria =>

                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                            {name + " "+ categoria}
                                        </div>
                                    </div>
                                </div>
                            )}
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Category