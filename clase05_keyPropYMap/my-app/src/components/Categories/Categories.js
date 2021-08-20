import React from 'react';
import Category from '../Category/Category';

function Categories(){
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
            </div>
            <div className="card-body">
                <div className="row">
                    <Category title='Category 01' />
                    <Category title='Category 02' />
                    <Category title='Category 03' />
                    <Category title='Category 04' />
                    <Category title='Category 05' />
                    <Category title='Category 06' />
                </div>
            </div>
        </div>

    );
}

export default Categories